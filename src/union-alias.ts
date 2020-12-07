type Combinable = number | string;
function combine(n1: Combinable, n2: Combinable, resultConversion: 'as-number' | 'as-text'){
  let result: Combinable
  if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number'){
    result = +n1 + +n2
  } else {
    result = n1.toString() + n2.toString()
  }
  return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedAgesStr = combine('30', '26', 'as-number')
console.log(combinedAgesStr)

const combinedName = combine('Max', 'Allegri', 'as-text')
console.log(combinedName)