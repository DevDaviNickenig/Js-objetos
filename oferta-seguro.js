const cliente = {
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
    }
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  }
}

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de Seguro de Vida para ${obj.nome}`)
  }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)
