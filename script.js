// IF e ELSE e ELSE IF (se , senao)

// if(condicao){
// // Vai executar se a condicao for verdadeira
//  }

// Shorthand if
// if (hour <= 12) console.log('Bom dia')
// else if (hour <= 18) console.log('Boa tarde')
// else console.log('Boa noite')

let hour = 13

if (hour < 12) {
  console.log('Bom dia')
} else if (hour >= 12 && hour < 18) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}
