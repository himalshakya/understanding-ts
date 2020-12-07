function Logger(logString: string) {
  console.log('LOGGING FUNCTION...')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FUNCTION...')
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()
        console.log('Rendering template....')
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person2 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person2()

console.log(pers)

// ----

function LogDecoratorProp(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

function LogDecoratorAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor decorator!')
  console.log('target', target)
  console.log('name', name)
  console.log('descriptor', descriptor)
}

function LogDecoratorMethod(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!')
  console.log('target', target)
  console.log('name', name)
  console.log('descriptor', descriptor)
}

function LogDecoratorParameter(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log('Parameter decorator!')
  console.log('target', target)
  console.log('name', name)
  console.log('position', position)
}

class Product {
  @LogDecoratorProp
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  @LogDecoratorAccessor
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive')
    }
  }

  @LogDecoratorMethod
  getPriceWithTax(@LogDecoratorParameter tax: number) {
    return this.price * (1 + tax)
  }
}

function AutoBind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjustedDescriptor
}

class Printer {
  message = 'This works';

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}

const p = new Printer()
const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)

// --------------------

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      'required',
    ],
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      'positive',
    ],
  }
}

function validate(obj: any) {
  console.log('validating....')

  const objValidatorConfig = registeredValidators[obj.constructor.name]
  if (!objValidatorConfig) {
    return true
  }

  let isValid = true
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0
          break
      }
    }
  }
  return isValid
}

class Course {
  @Required title: string;
  @PositiveNumber price: number;

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement

  const title = titleEl.value
  const price = +priceEl.value

  const createdCourse = new Course(title, price)

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!!!')
    return
  }
  console.log(createdCourse)
})
