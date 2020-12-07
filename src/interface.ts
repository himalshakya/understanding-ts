// type AddFn = (a: number, b: number) => number
interface AddFn {
  (a: number, b: number): number
}

let add1: AddFn

add1 = (n1: number, n2: number) => n1 + n2
console.log(add1(100, 20))

interface Named {
  readonly name: string
  readonly outputName? : string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person implements Greetable {
  name: string
  outputName: string

  constructor(n: string){
    this.name = n
    this.outputName = this.name.toUpperCase()
  }

  greet(phrase: string){
    console.log(`${phrase}, ${this.name}`)
  }

  greet2(phrase? : string){
    if (phrase === undefined){
      console.log(`Hi, ${this.name}`)
    } else {
      console.log(`${phrase}, ${this.name}`)
    }
  }
}

let user1 = new Person('Himal')

console.log(user1)
user1.greet('Hello')
user1.greet2('Hello')
user1.greet2()