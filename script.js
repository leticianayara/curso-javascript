// Functions

function saudacao(nome) {
  function mensagem() {
    console.log('Olá ' + nome)
  }
  return mensagem()
}

saudacao('Leticia')

//Criar um app para gerar os 6 números da
//Mega-sena
function gerarNumeros() {
  console.log(Math.floor(Math.random() * 60)) + 1
}

function sorteio() {
  for (i = 0; i < 6; i++) {
    gerarNumeros()
  }
}

sorteio()
