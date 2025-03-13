//Objeto Data e Hora (Date)
//Criar um  contador de dias para uma data espeficica. Inicio, Fim. a diferenca
//de dias entre essas datas

let inicio = new Date('2023/10/15')
let fim = new Date('2024/11/15')

let totalDias = (fim - inicio) / (1000 * 3600 * 24)

console.log(totalDias)
