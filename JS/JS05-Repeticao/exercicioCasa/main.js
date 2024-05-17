// só vale se o valor for 2 ou 3
var tabuada = 2

// pra ver se é 2 ou 3
if (tabuada === 2 || tabuada === 3) {
  console.log(`Tabuada do número ${tabuada}:`)

  for (var numero = 1; numero <= 10; numero++) {
    console.log(`${tabuada} x ${numero} = ${tabuada * numero}`)
  }
}
//izi