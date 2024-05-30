class Carro{
    constructor(nome, ano){
        this.nome = nome; 
        this.ano = ano;
    }
    //funcionaliadde
    anoCarro(anoAtual){
        return anoAtual - this.ano;
    }
}
let Carro1 = new Carro("KWID", 2012); //nova cópia da classe = instancie
let Carro2 = new Carro("Eclipse", 2016);
let Carro3 = new Carro("Civic", 2017)
console.log(Carro1)

let anoAtual = new Date();
let recebeAno = anoAtual.getFullYear();
console.log(anoAtual);
console.log(Carro1.anoCarro(recebeAno));