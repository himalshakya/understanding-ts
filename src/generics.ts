// const names: Array<string> = ['Max', 'Manuel']

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done')
//   }, 2000)
// })

// promise.then(data => {
//   console.log( data.split(' '))
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// const mergedObj = merge<{name: string, hobbies:[]}, {age:number}>({name: 'Himal', hobbies: ['Hiking']}, {age: 39})
const mergedObj = merge({ name: 'Himal', hobbies: ['Hiking'] }, { age: 39 })
// mergedObj.name

console.log(mergedObj)

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value'
  if (element.length === 1) {
    descriptionText = 'Got 1 element'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements'
  }

  return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe([]))

function extractAndConvert<T, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key]
}

console.log(extractAndConvert({ name: 'Himal' }, 'name'))

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Himal')
textStorage.addItem('Sudhir')
textStorage.addItem('Rita')
textStorage.addItem('Rajeena')
console.log(textStorage.getItems())

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date

  return courseGoal as CourseGoal
}


const names: Readonly<string[]> = ['Himal', 'Anna']