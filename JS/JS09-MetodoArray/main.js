let fruta = ["limão", "laranja", "mamão", "banana", "manjericão", "tomate"]
fruta.forEach(retornaInfo)
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`indice: ${indice}`)
}

console.clear()

let tarefa = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
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
//usando arrow function
tarefa.forEach((nome) => console.log(nome.nomeTarefa))

console.clear()

var tarefas1 = [
    {
        dia: 1,
        tarefa: "bj muito a minha namorada",
        isPronta:true
    },
    {
        dia: 2,
        tarefa: "irritar muito a minha namorada",
        isPronta:false
    }
]
tarefas1.forEach((nome) => console.log(nome.tarefa))

console.clear()

let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)
//sqrt = exibe a raíz quadrada dos numeros do array
console.log(numeros)
console.log(novoArray)
//usando arrow function
let mapText = tarefa.map((retornaTeste) => {
    console.log(retornaTeste.nomeTarefa)
})

console.clear()

let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 89]
let resultado = numeros2.filter(retornaFiltro)
function retornaFiltro(numeros2){
    return numeros2 > 30
}
console.log(resultado)

let tarefaFiltro = tarefas1.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})
console.log(tarefaFiltro)

console.clear()

let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]
sapatos.find((retornaFind) => {
    console.log(retornaFind.marca == "Puma")
})