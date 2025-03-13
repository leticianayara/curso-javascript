//Coerção de tipo

let total
total = 3 + 5
console.log(total, typeof total)

total = 3 + '5' //Converte para String
console.log(total, typeof total)

total = 3 + Number('5')
console.log(total, typeof total)

//Converte para Number
total = 5 - 3
console.log(total, typeof total)

total = 5 - '3'
console.log(total, typeof total)

total = '5' - '3'
console.log(total, typeof total)

//Converte para Number
total = 5 * 3
console.log(total, typeof total)

total = 5 * '3'
console.log(total, typeof total)

total = '5' * '3'
console.log(total, typeof total)

//Converte para Number
total = 5 / 3
console.log(total, typeof total)

total = 5 / '3'
console.log(total, typeof total)

total = '5' / '3'
console.log(total, typeof total)
