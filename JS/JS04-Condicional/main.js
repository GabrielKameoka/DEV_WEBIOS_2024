// se eu estiver namorando, entãaaao, e n falo com mulheres interessadas em mim
var EuNamoro = false
if(EuNamoro == true){
    console.log("sai daqui mocreia")
}else{
    console.log("quero a minha Gabizinha")
}

console.clear()

var num1 = 2
var num2 = 6

if(num1 <= num2){
    console.log("o numero 1 é menor ou igual que o numero 2")
}else{
    console.log("o numero 1 é maior ou igual que o numero 2")
}

var num1 = 4
var num2 = 10

num1 > num2 ? console.log("numero 1 é maior") : console.log("numero 1 é menor")
//é a mesma coisa

// let QuemAmaMais = "eu amo mais"

// if(QuemAmaMais == "eu amo mais"){
//     console.log("eu amo mais")
// }else if(QuemAmaMais == "ela me ama mais"){
//     console.log("ela me ama mais")
// }else{QuemAmaMais == "nós amamos"
//     console.log("nós amamos iguais")
// }

console.clear()

let QuemAmaMais1 = "eu amo mais"
switch(QuemAmaMais1){
    case "eu amo mais":
        console.log("eu amo muito mais")
        break;

    case "ela ama mais":
        console.log("ela me ama mais")
        break;
    
    default:
        console.log("nós amamos iguais")
        break;
}