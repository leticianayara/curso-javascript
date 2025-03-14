//IF ELSE com o NOT Operator

let num1 = -10
// if (num1 < 0){
//   console.log('Favor digitar um numero positivo')
// }
if (!(num1 > 0)) {
  console.log('Favor digitar um numero positivo')
}

/**
 * if(usuarioLogado){
 *     console.log('Você esta logado')
 * } else {
 *  console.log('Você precisa estar logado')
 * }
 */
let usuarioLogado = false
if (!usuarioLogado) {
  console.log('Você precisa estar logado')
}

let listaProdutos = ['Andre']

// if (listaProdutos.length) {
//   console.log('A lista tem produtos')
// } else {
//   console.log('A lista esta vazia')
// }
if (!listaProdutos.length) {
  console.log('A lista esta vazia')
}
