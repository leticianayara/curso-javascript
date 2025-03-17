// Functions - Funções

// Functions são como grupos, o que acontece em um
// não afeta o outro

// function <nome_da_funcao>(<parametro(s)>){ <conteudo da funcao> }
function somar(num1, num2) {
  // console.log(num1 + num2)
  return num1 + num2
}

// subtrair
function subtrair(num1, num2) {
  console.log(num1 - num2)
}

// invokin a function
// <nome_da_funcao>(<argumento(s)>)
somar(3, 7)
let resultad = somar(10, 4)
console.log(resultad)
subtrair(5, 2)
