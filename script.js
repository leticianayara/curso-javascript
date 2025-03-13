//Objeto Data e Hora (Date) Idioma

//Brasil - DD/MM/AAAA
//EUA - MM/DD/AAAA
//Inglaterra - DD/MM/AAAA

let dataIdioma
dataIdioma = Intl.DateTimeFormat('pt-BR').format(dataIdioma)
console.log(dataIdioma)

// dataIdioma = Intl.DateTimeFormat('en-US').format(dataIdioma)
// console.log(dataIdioma)

// dataIdioma = Intl.DateTimeFormat('en-GB').format(dataIdioma)
// console.log(dataIdioma)
