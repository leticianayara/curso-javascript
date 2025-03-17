// Objects and Key Pairs (Dictionary)
// Arrray = Objects

// let ouraAndreInfo2 = [9.7, 7.53, '86%', 59, 84]

const ouraAndreInfo = {
  totalSleep: 7.53,
  timeInBed: 9.7,
  sleepEfficiency: '86%',
  restinHeartRate: { maxHeartRate: 81, minHeartRate: 59 },
  sleepScore: 84,
  notes: ['Coffee', '30 Minutes reading'],
}

console.log(ouraAndreInfo)

// Acessar o conteudo de duas formas
//    1 - com ponto (.)
//    2 - com colquetes e o nome da propriedade (['<nome da propriedade>'])
console.log(ouraAndreInfo.sleepEfficiency)
console.log(ouraAndreInfo['totalSleep'])

// Adicionar uma nova propriedade
ouraAndreInfo.remSleep = '2h15m'
console.log(ouraAndreInfo)

// Alterar\Atualizar uma propriedade
ouraAndreInfo.sleepScore = 90
console.log(ouraAndreInfo)
ouraAndreInfo['sleepScore'] = 91
console.log(ouraAndreInfo)
ouraAndreInfo.sleepScore++
console.log(ouraAndreInfo)
ouraAndreInfo['sleepScore'] += 4
console.log(ouraAndreInfo)

//Adicionando uma nova propriedade dentro de uma propriedade
console.log(ouraAndreInfo.restinHeartRate.minHeartRate)
console.log(ouraAndreInfo.restinHeartRate['maxHeartRate'])

//Lendo um Array
console.log(ouraAndreInfo.notes[0])
console.log(ouraAndreInfo.notes[1])
