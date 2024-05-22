let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    cobelo: "preto",
    nome: "Sara",
    sobrenome: "Lima",
    hobbies: ["futebol", "LOL", "Tocar gitarra"],
    endereco: {
        rua: "jao medeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "SP"
    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.hobbies)
console.log(pessoa.hobbies[0])
console.log(pessoa.endereco.estado)


console.clear()

let tarefa = [
    {
        id: 1,
        isPronta: true,
        NomeTarefa: "Pular",
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "tomar banho"
    },
    {
        id: 3,
        isPronta: true,
        nomeTarefa: "me matar"
    }
]
console.log(tarefa)
console.log(tarefa[1].nomeTarefa)


console.clear()

//transforma tudo em string
let recebeJAILSON = JSON.stringify(pessoa)
console.log(recebeJAILSON)

let JSONITO = '{ "corDosOlhos": "verde", "altura": 1.7, "cobelo": "preto", "nome": "Sara", "sobrenome": "Lima", "hobbies": ["futebol", "LOL", "Tocar gitarra"], "endereco": { "rua": "jao medeiro", "numero": 234, "cidade": "São Paulo", "estado": "SP" } }'

//volta para o objeto
console.log(JSON.parse(JSONITO))