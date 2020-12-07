type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Himal',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinablity = string | number
type Numerical = number | boolean

type Universal = Combinablity & Numerical

function add(a: number, b: number): number
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: string, b: string): string
function add(a: Combinablity, b: Combinablity){
  if (typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }

  return a + b
}

const result1 = add('Himal', ' Shakya')
console.log(result1.split(' '))


type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee){
  console.log('Name:',emp.name)
  if ('privileges' in emp){
    console.log('privileges:', emp.privileges)
  }
  if ('startDate' in emp){
    console.log('startDate', emp.startDate)
  }
}

printEmployeeInformation(e1)
printEmployeeInformation({ name: 'Sudhir', startDate: new Date()})


class Car {
  drive(){
    console.log('Driving...')
  }
}

class Truck {
  drive(){
    console.log('Driving truck...')
  }

  loadCargo(amount: number){
    console.log('Loading cargo ...', amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle){
  vehicle.drive()

  if (vehicle instanceof Truck){
    vehicle.loadCargo(100)
  }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed: number
  switch(animal.type){
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
  }
  console.log('Moving with speed: ', speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 1000})
moveAnimal({ type: 'horse', runningSpeed: 60})

// const userInputElement = <HTMLInputElement> document.getElementById('user-input')!
const userInputElement = document.getElementById('user-input')! as HTMLInputElement
userInputElement.value = 'Hi there'

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character'}
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a character!'
}

const fetchUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company'}
}

console.log(fetchUserData?.job?.title)

const userInput1 = null

const storedData = userInput1 ?? 'DEFAULT'

console.log(storedData)