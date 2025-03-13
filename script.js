//Metodos Matematicos (Math)

let num1 = 2.5
console.log(num1)

//round - retorna o numero inteiro, sem casas decimais e
//          seguindo as regras naturais (acimaa de 5
//          arredonda pra cima)
console.log('round: ' + Math.round(num1))

//ceil - arredonda sempre pra cima
num1 = 2.1
console.log(num1)
console.log('ceil: ' + Math.ceil(num1))

//floor - arredonda sempre pra baixo
num1 = 2.9
console.log(num1)
console.log('floor: ' + Math.floor(num1))

//sqrt - raiz quadrada
num1 = 14
console.log(num1)
console.log('sqrt: ' + Math.sqrt(num1))

//pow - um numero x elevado a potencia y
num1 = 2
console.log(num1)
console.log('pow: ' + Math.pow(num1, 3))

//abs - retorna o valor absoluto
num1 = -2
console.log(num1)
console.log('abs: ' + Math.abs(num1))

//randow - retorna um numero aleatorio
num1 = Math.random() * 10 + 1
console.log('randow: ' + num1)

//Misturando metodos
console.log('round + randow: ' + Math.round(Math.random() * 100 + 1))
