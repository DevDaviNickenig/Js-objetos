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

// for in é feito para objetos. quando usar o for, nao se usa .nome, .cpf porque o for ja percorre todos os itens.
//typeof mostra o tipo do item.
// || = ou
let relatorio = "";

for (let info in cliente) {
  if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
    continue
  } else {
    relatorio += `
    ${info} : ${cliente[info]}
    `
  }
}
console.log(relatorio) // nomeidadecpfemailfonesdependentessaldodepositar


