const cliente = {
  nome: 'André',
  idade: 36,
  cpf: '123652242625',
  email: 'andre@email.com',
  fones: ['99854099, 98202552'],
  dependentes: [{ // [] os dependentes se toram um Array,continua sendo um indice.
    nome: 'Sara da Silva',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
  }]
}

cliente.dependentes.push({
  nome: "Samia Maria",
  parentesco: "Filha",
  dataNasc: "04/01/2014"
})

console.log(cliente)
/*{
  nome: 'André',
  idade: 36,
  cpf: '123652242625',
  email: 'andre@email.com',       
  fones: [ '99854099, 98202552' ],
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
  ]
}
*/

//puxar o nome da dependente mais nova. filtro.

const filhaMaisNova = cliente.dependentes.filter(dependete => dependete.dataNasc === "04/01/2014")
console.log(filhaMaisNova) // { nome: 'Samia Maria', parentesco: 'Filha', dataNasc: '04/01/2014' }
console.log(filhaMaisNova[0].nome) //Samia Maria

