//Template Literal

//Sem Template
let firstName = 'Leticia'
let lastName = 'Costa'
let age = 38
console.log(
  'Ola, meu nome e ' +
    firstName +
    ' ' +
    lastName +
    ' e eu tenho ' +
    age +
    ' anos de idade'
)

//Com Template
console.log(
  `Ola meu nome e ${firstName} ${lastName} e eu tenho ${age} anos de idade`
)
