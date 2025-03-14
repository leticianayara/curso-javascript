//Arrays (Metodos)

let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
let numbers = [10, 20, 33, 40, 5, 13, true]
let y

console.log(cart)

//y = cart.splice(1, 3).sort()
y = cart.splice(1, 3).reverse().toString().includes('Carne')
console.log(y)
