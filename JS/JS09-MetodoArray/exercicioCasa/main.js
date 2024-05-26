console.log("Esse é o exercício 1")
var exercicio1 = [17, 43, 8, 4, 97, 56, 29]
exercicio1.forEach(verificar)
function verificar(array){
    if (array % 2 ===0){
        console.log(`o numero ${array} é par`)
    } else{
        console.log(`o numero ${array} é impar`)
    }
}

console.log("----------/----------")
console.log("Esse é o exercício 2")
var exercicio2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61]
var filtrar = exercicio2.filter((valor) => {
    return valor > 20 && valor  <80
})
console.log(filtrar)