//primeiro botão


//segundo botão
function recebeNome(){
    let nome = window.prompt('digite o seu nome')
    let mostraNome = document.createElement('p')
    mostraNome.innerText = `Olà ${nome}, Bem-vindo a nossa academia`
    document.body.appendChild(mostraNome)
}

//terceito botão
function recebeNum(){
    let num = window.prompt('digite um número')
    if(num <= 10){
        for(let i = 1;i <= 10;i++){
            let mostraTabuada = document.createElement('p')
            mostraTabuada.innerText = `${num} x ${i} = ${num * i}`
            document.body.appendChild(mostraTabuada)
        }
    }
}   