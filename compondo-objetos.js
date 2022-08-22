//adicionar lista de dependentes

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "123652242625",
  email: "andre@email.com",
  fones: ["99854099, 98202552"]
}

cliente.dependente = {
  nome: "Sara",
  parentesco: "filha",
  dataNasc: "20/03/2011"
}

console.log(cliente) // nome: 'André', idade: 36, cpf: '123652242625', email: 'andre@email.com', fones: [ '99854099, 98202552' ], dependente: { nome: 'Sara', parentesco: 'filha', dataNasc: '20/03/2011' }

//alterar a string dentro da string.

cliente.dependente.nome = "Sara da Silva"

console.log(cliente)