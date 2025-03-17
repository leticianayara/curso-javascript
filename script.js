/**
 * Criar uma solução com o switch que retorne:
 * hora < 12 : Bom dia
 * hora < 18 : Boa tarde
 * hora >= 18 : Boa noite
 * A hora deve ser coletada do sistema local
 */

let agora = new Date()
//let agora = new Date(2030, 1, 8, 19, 0, 0)

let horas = agora.getHours()

// if (horas < 12) {
//   console.log('Bom dia')
// } else if (horas < 18) {
//   console.log('Boa tarde')
// } else {
//   console.log('Boa noite')
// }

switch (true) {
  case horas < 12:
    console.log('Bom dia')
    break
  case horas < 18:
    console.log('Boa tarde')
    break
  default:
    console.log('Boa noite')
    break
}
