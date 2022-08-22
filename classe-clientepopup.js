class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo)
  }
}


class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupança) {
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupança;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const andre = new ClientePoupanca("andre", "andre@email.com", "12312312312", 100, 200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(200)

console.log(andre)