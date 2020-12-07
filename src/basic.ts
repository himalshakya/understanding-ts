function addNumbers(n1: number, n2: number, showResult: boolean, phrase: string){
  if (showResult){
    const result = n1 + n2
    return phrase + result
  } else {
    return n1 + n2
  }
}

const number1 = 5
const number2 = 2.5
const printResult2 = true
const resultPhrase = 'Result is '

const result = addNumbers(number1, number2, printResult2, resultPhrase)
console.log(result)