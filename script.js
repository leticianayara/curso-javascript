// O Swith e Case (se parece, IF ELSE)
// Nivel do usuario no nosso sistema

let userLevel = 'visitant' //admin, editor, guest

switch (userLevel) {
  case 'admin':
    console.log('Full Access')
    break
  case 'editor':
    console.log('Editor Access')
    break
  case 'guest':
    console.log('Limited Access')
    break
  default:
    console.log('Unknown User')
    break
}
