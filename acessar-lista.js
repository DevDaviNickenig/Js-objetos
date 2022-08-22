const cliente = {
  nome: "André",
  idade: 36,
  cpf: "123652242625",
  email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]]) //andre
// console.log(cliente[chaves[1]]) // 36
// console.log(cliente[chaves[2]]) // 123652242625
// console.log(cliente[chaves[3]]) // andre@email.com


// foreach é um metodo do array, que precisa de uma funcão callback pra funcionar, cada vez que ele passa pela info ele printa um dos valores.
chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"]) // andré, se o valor dentro do [] estiver errado irá printar undefined.

