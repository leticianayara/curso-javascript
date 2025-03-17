// Functions - Parametros

//Padrão - default
function calcularTotal(preco, desconto = 0.1) {
  let valorDesconto = preco * desconto
  let totalCompra = preco - valorDesconto
  return totalCompra
}

console.log(calcularTotal(100, 0.15))
console.log(calcularTotal(100))

// REST (...<parametros>)
function listaCompras(...itens) {
  console.log(itens)
  console.log('Itens da minha lista: ' + itens)
}

listaCompras('Pao', 'Carne', 'Milho')
