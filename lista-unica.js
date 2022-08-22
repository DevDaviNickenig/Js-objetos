const clientes = [
  {
    nome: 'André',
    idade: 36,
    cpf: '123652242625',
    email: 'andre@email.com',
    fones: ['554399854099, 554398202552'],
    dependentes: [
      {
        nome: 'Sara da Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
      },
      {
        nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasc: '04/01/2014'
      }],
  },
  {
    nome: "Juliana",
    cpf: "56767867867",
    dependentes: [{
      nome: "Sophia",
      parentesco: "filha",
      dataNasc: "30/08/2020"
    }],
  }
]
//... espalha dentro do array o conteudo de clientes
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes)

console.table(listaDependentes)



// console.log(clientes.length)