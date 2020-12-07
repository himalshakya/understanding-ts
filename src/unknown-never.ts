let userInput: unknown
let username: string

userInput = 5
userInput = 'Max'

if (typeof userInput === 'string'){
  username = userInput
}

function generateError(message: string, code: number): never{
  throw { message: message, errorCode: code}
}

generateError('This is an error', 500)