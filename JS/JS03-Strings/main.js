var string1 = "Os alunos estão "
var string2 = " reprovados "
var string3 = "ou aprovados?"
console.log (string1 + string2 + string3)

//usando tamplate string serve para concatenar string e fazer contas matemática
console.log(`${string1 + string2 + string3}`)

var num1 = 10
var num2 = 70
console.log(`${(num1 + num2)}`)

var parte1 = "amo a "
var parte2 = "minha "
var parte3 = "NAMORADAA!!!"
console.log(`${parte1 + parte2 + parte3}`)

var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos (alunos)"
console.log(texto1.charAt(2))
console.log(texto1[27])

//I O S - T O T V S
//0 1 2 4 6 7 8 9 10
//espaços também contam como caracteres

console.clear()

//tamanho
var valor1 = "namorada"
console.log(`amo demais a minha ${valor1} ${valor1.length}`)

console.clear()

var texto4 = "aqui está em minusculo"
var texto5 = "AQUI ESTÁ EM MAIÚSCULO"


console.log(`minusculo: ${texto5.toLowerCase()}`)
console.log(`maiúsculo: ${texto4.toUpperCase()}`)

//substring

var namorada = "a mais bela de todas"
console.log(namorada.substring(7, 11))
console.log(namorada.substring(15))

//substituir uma string por outra

var texto6 = "Gabi melhor namorada do mundo"
console.log(texto6.replace('melhor', 'the best'))

//tirar espaços em branco no inicio e no fim da string
var texto7 = "          te amo gabi             "
console.log(texto7.trim())