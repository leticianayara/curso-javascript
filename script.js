//Arrays (Metodos)

let cart = ['Agua', 'Arroz', 'Carne', 'Feijão']
let numbers = [10, 20, 33, 40, 5, 13, true]

//Add um item na lista
//cart[4] = 'Suco'
cart.push('Suco') //add um item na lista
//console.log(cart.length)
console.log(cart)

//Remover um item da lista
cart.pop()
console.log(cart)

//Remove o primeiro item da lista
cart.shift()
console.log(cart)

//Add o item ao inicio da lista
cart.unshift('Suco')
console.log(cart)

//Coloca a lista em ordem alfabetica (ou numerica)
cart.sort()
console.log(cart)
