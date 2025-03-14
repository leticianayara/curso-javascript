/* Vamos criar um sistema de autenticação que verifica vários
condições antes de permitir acesso

let usuarioValido
let senhaCorreta
let temPermissao

Mensagens:
Acesso permitido!
Acesso negado. Usuário sem permissão.
Senha incorreta. Tente novamente.
Usuário não encontrado.

*/

let usuarioValido = true
let senhaCorreta = true
let temPermissao = false

if (usuarioValido) {
  if (temPermissao && senhaCorreta) {
    console.log('Acesso permitido!')
  } else {
    if (!temPermissao) {
      console.log('Acesso negado. Usuário sem permissão.')
    } else if (!senhaCorreta) {
      console.log('Senha incorreta. Tente novamente.')
    }
  }
} else {
  console.log('Usuário não encontrado.')
}
