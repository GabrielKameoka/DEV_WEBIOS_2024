var numeros = [-2, 40, 16, 111, 33, 64]

console.log(numeros)
console.log(numeros[3])

console.clear()

var pica = ["Gabriella", "Mamis", "Papis", "Bruna", "TEYRAS", "Fernanda", "Davi", "Franciele"]
console.log(`${pica[3]} \n ${pica[7]}`)

var bidi = [
    ['lalaland', 'kingsman', 'trem bala'],
    [1, 13, true, 45],
    [null, '1911' -350]
]
//quero a palavra kingsman
console.log(bidi[0][10])

var itens = [
    ["Pipoca", "arroz", "fejão", "batata"],
    ["molho de tomate", "alface", "leite em pó", "detergente"],
    ["leite de coco", "candida", "maçã", "vinagre"],
    ["bolacha", "azeite", "limâo", "shampoo"]
]

console.log(`${itens[0][2]} \n ${itens[1][3]} \n ${itens[2][2]} \n ${itens[3][3]}`)

let moeda = ["Real", "Euro", "Coroa", "Dolar"]
moeda[3] = "Yen"
console.log(moeda)

let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
//numeral para string
var mudanca = numArray.toString()
console.log(mudanca)

console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]
console.log(teste1)

var mudanca1 = teste1.join("/")
console.log(mudanca1)

var array = [1, 2, 3, 4]
console.log(array.length)

console.clear()

var utilizaPop = ["Pollyana", "André", "Felippe", "Lucas Nathan", "Esther", "Lude Mila"]
console.log(utilizaPop)

var mudanca2 = utilizaPop.pop()
console.log(mudanca2)
console.log(utilizaPop)

var mudanca3 = utilizaPop.push("Saraiva")
console.log(mudanca3)
console.log(utilizaPop)

console.clear()

var nomesCarros = ["Audi", "Celta", "Uno com escada", "HB20"]
console.log(nomesCarros)
var mudanca4 = nomesCarros.shift()
console.log(mudanca4)
console.log(nomesCarros)

var insereNoInicio = [true, 4, "mano", "Socorro", "JS"]
console.log(insereNoInicio)
var mudanca5 = insereNoInicio.unshift("ola")
console.log (insereNoInicio)

delete insereNoInicio[1]
console.log(insereNoInicio)