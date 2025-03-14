//Arrays (Nesting)

let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
let numbers = [10, 20, 33, 40, 5, 13, true]
let y

// pega um indice da tabela e add  novo item
// (exemplo: criou um novo item na lista ja existende,
// sendo este item um array)
cart.push(numbers)
console.log(cart)

//get a Carne
y = cart[1]
console.log(y)

//get o 20
y = cart[4][1]
console.log(y)

//get cartNmbers
// cria uma nova tabela, com cada item sendo um novo item
/// (exemplo: criou 2 itens, sendo cada item um arrays)
let cartNumbers = [cart, numbers]
console.log(cartNumbers)
y = cartNumbers[0][1]
console.log(y)
y = cartNumbers[1][3]
console.log(y)
