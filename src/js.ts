// Code goes here

const addNum = (...numbers: number[]) => {
  return numbers.reduce((result, value) => {
    return result + value
  }, 0)
}

console.log(addNum(10, 15, 20, 35))


const addCurry = (x: number) => (y: number) => x + y

console.log(addCurry(123)(345))

const partialCurry = addCurry(123)
console.log(partialCurry(345))

const hobbies = ['Swimming', 'Cycling', 'Hiking', 'Running']
const [hobby1 , hobby2, ...remainingHobbies] = hobbies
console.log(hobby1)
console.log(hobby2)
console.log(remainingHobbies)

const personHere = {
  firstName: 'Himal',
  age: 39
}

const personCopy = { ...personHere }
const { firstName: realName, age: realAge } = personCopy
console.log(realName)
console.log(realAge)


