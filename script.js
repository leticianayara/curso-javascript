//Function Declaration (associa o nome)

function somar(num1, num2) {
  return num1 + num2
}
console.log(somar(10, 20))

// Functions Expression (associa a uma variavel)
const subtrair = function (num1, num2) {
  return num1 - num2
}
console.log(subtrair(20, 10))

// Arrow function com implicity return
const subtrair2 = (num1, num2) => num1 - num2
console.log(subtrair2(30, 15))

//Arrow function sem implicity return
const subtrair3 = (num1, num2) => {
  console.log('Hello')
  return num1 - num2
}
console.log(subtrair3(40, 15))
