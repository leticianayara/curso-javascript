// IF e ELSE com Operadores Lógicos

// E (&&)
// Criar um site de eventos online.
//Idade minima 18 e estas escrito online no evento
let idadeParticipante = 18
let registroOnline = true

if (idadeParticipante >= 18 && registroOnline) {
  console.log('Bem vindo ao evento!')
} else {
  console.log('Você precisa ter no mínimo 18 e estar inscrito no evento')
}

// OU (||)
// App onde o candidato vai receber um desconto se for
// estudande ou tiver um cupom de desconto
let estudante = true
let cupomDesconto = true

if (estudante || cupomDesconto) {
  console.log('Você tem acesso a promoção especial')
} else {
  console.log(
    'Você precisar ter aceeso a um cupom ou ser estudante para ter acesso a promoção especial'
  )
}

//Multiplos Operadores
//App para um restaurante que oferece desconto para familias
// maiores que 4 e venham para almocar ter/qua

let numFamilia = 4
let semana = 'ter'

if (numFamilia >= 4 && (semana === 'ter' || semana === 'qua')) {
  console.log('Parabéns! A sua familia ganhou um desconto especial')
} else {
  console.log('Desculpe, a oferta não se aplica a sua familia')
}

// Nesting o IF e ELSE
/*
    App analise de jogo 
    nivel true or false
nivel - true
    >= 90 - Ouro
    >= 75 - Prata
    < 75 - Bronze
nivel - false
    Vc tem que treminar o nivel primeiro
*/
let nivelCompleto = true
let pontuacaoJogador = 90

if (nivelCompleto) {
  if (pontuacaoJogador >= 90) {
    console.log('Medalha de Ouro')
  } else if (pontuacaoJogador >= 75) {
    console.log('Medalha de Prata')
  } else {
    console.log('Medalha de Bronze')
  }
} else {
  console.log('Você tem que terminar o nivel primeiro')
}
