function add(n1: number, n2: number){
  return n1 + n2
}

function printResult(num: number){
  console.log('Result ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void){
  const n = n1 + n2
  cb(n)
}

printResult(add(10,20))

let combineValues: (a: number, b: number) => number
combineValues = add
printResult(combineValues(10,20))

addAndHandle(100, 200, printResult)
addAndHandle(100, 200, (x) => { console.log('X: ' + x) })