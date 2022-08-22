const cliente = {
  nome: 'André',
  idade: 36,
  cpf: '123652242625',
  email: 'andre@email.com',
  fones: ['99854099, 98202552'],
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
    }
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  }
}

console.log(cliente.saldo) // 100

cliente.depositar(30)
console.log(cliente.saldo) //130
