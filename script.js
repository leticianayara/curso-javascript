//Arrays (Metodos)

let cart = ['Agua', 'Arroz', 'Carne', 'Feijão']
let numbers = [10, 20, 33, 40, 5, 13, true]
let y

//includes() - verifica se existe ou nao e é casesensitive
y = cart.includes('Agua')
console.log(y)

y = cart.includes('Aguas')
console.log(y)

y = cart.includes('aguas')
console.log(y)

//indexOf() - retorna o indice onde esta o que vc procura,
// -1 qnd nao acha e é casesensitive
y = cart.indexOf('Arroz')
console.log(y)

y = cart.indexOf('Feijão')
console.log(y)

y = cart.indexOf('Feijao')
console.log(y)

//slice() - faz um corte do indice a ate o indice b,
//  se passa só um indice deduz que vai o indice a ate
// o final do array; qnd mostra os dois indice, ele conta
// o indice a mas não conta o b
// Não altera a variavel (cart por exemplo)
y = cart.slice(1)
console.log(y)

y = cart.slice(1, 3)
console.log(y)

//splice() - faz um corte do indice a ate o indice b,
//  se passa só um indice deduz que vai o indice a ate
// o final do array; qnd mostra os dois indice, ele conta
// o indice a e o indice b
// Altera a variavel (cart por exemplo)
cart = ['Agua', 'Arroz', 'Carne', 'Feijão']
y = cart.splice(1)
console.log(y)

cart = ['Agua', 'Arroz', 'Carne', 'Feijão']
y = cart.splice(1, 3)
console.log(y)
