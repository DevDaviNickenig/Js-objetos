const cliente = {
  nome: "André",
  idade: 36,
  cpf: "123652242625",
  email: "andre@email.com"
}
console.log(cliente) // nao aparece o fone
cliente.fone = '99854099'

console.log(cliente) // 998540099

cliente.fone = "98743589347"
console.log(cliente) // 98743589347
