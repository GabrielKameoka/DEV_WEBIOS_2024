class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }
    contaPoupança() {
        this.salario -= this.salario * 0.015;
        return this.salario
    }
    contaCorrente() {
        this.salario -= this.salario * 0.036;
        return this.salario
    }
    contaEstudante() {
        this.salario -= this.salario * 0.012;
        return this.salario
    }
    imprimirDados() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Salário: ${this.salario}, Sexo: ${this.sexo}, Agência: ${this.agencia}, Conta: ${this.conta}, Número da Conta: ${this.numeroConta}`)
    }
}
var conta1 = new ContaBancaria('Heloiza', 24, 2000, 'Feminino', '241', 'Poupança', '761293')
conta1.contaPoupança();
conta1.imprimirDados();

var conta2 = new ContaBancaria('Ayrton', 17, 500, 'Masculino', '324', 'Corrente', '125409')
conta2.contaCorrente();
conta2.imprimirDados();

var conta3 = new ContaBancaria('Luís', 20, 1500, 'Masculino', '273', 'Estudante', '345678')
conta3.contaEstudante();
conta3.imprimirDados();