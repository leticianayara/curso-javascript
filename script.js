//Variables - var let const
// camelCase

//Data type
//Primitive Data Types

//String
let firsName = 'Lele'
console.log(firsName, typeof firsName)

//Number
let age = 35
console.log(age, typeof age)

//Boolean
let yesNo = true
console.log(yesNo, typeof yesNo)

//Null
let address = null
console.log(address, typeof address)

//Undefined
let color
console.log(color, typeof color)

//Symbol
let id = Symbol('id')
let meuObjeto = {
  [id]: 123456,
}
console.log(meuObjeto[id], typeof meuObjeto[id])

//Data type
//Reference Data Types

//Arrays
let numbers = [10, 20, 30, 35, 50]
console.log(numbers)

//Function
function myName() {
  console.log('Leticia')
}
console.log(myName, typeof myName)

// Date
let now = new Date()
console.log(now)
