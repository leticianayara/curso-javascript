//Desafio Operador ternário

let nota = 85
let avaliacao =
  nota >= 90
    ? 'Excelente'
    : nota >= 70
    ? 'Bom'
    : nota >= 50
    ? 'Satisfatório'
    : 'Insatisfatório'

// if (nota >= 90) {
//   avaliacao = 'Excelente'
// } else if (nota >= 70) {
//   avaliacao = 'Bom'
// } else if (nota >= 50) {
//   avaliacao = 'Satisfatório'
// } else {
//   avaliacao = 'Insatisfatório'
// }

console.log(avaliacao) //Bom
