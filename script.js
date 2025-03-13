//String Methods

let texto = 'Estou aprendendo JavaScript'
console.log(texto)

//charAt() - passo o numero da posicao da variavel que estou usando como referencia
console.log(texto.charAt(4))
console.log(texto.charAt(0))

// includes - percorre a String atras de algo exatamente igual ao que foi passado
//              se encontra retorna 'true' senao retorna 'false'
console.log(texto.includes('JavaScript'))
console.log(texto.includes('Javascript'))

//indexOf - indica em que posicao a palavra inicia
console.log(texto.indexOf('JavaScript'))
console.log(texto.indexOf('aprendendo'))

//slice - pega a da posicao de inicio e fim indicados pelo usuario
//          sem alterar de fato a string toda
console.log(texto.slice(0, 4))
console.log(texto.slice(0, 5))
console.log(texto.slice(6, 14))
console.log(texto.slice(6, 16))

//UpperCase - transforma toda a sua string em maiuscula
console.log(texto.toUpperCase())

//LowerCase - transforma toda a sua string em minuscula
console.log(texto.toLowerCase())

//trim - remove espaco em branco tanto no inicio quanto no fim de uma string
console.log(texto.trim())

//repeat - Repete uma string n vezes
console.log(texto.repeat(5))

//replace - trocar uma parte da strng por outra
console.log(texto.replace('Estou', 'Eu estou'))
