//se a minha namorada me deve o furico = fundo vermelho/se a minha namorada me deve muito o furico = fundo laranja/se a minha namorada me deve demais o furico = fundo preto

let deve = prompt("quanto a gabi deve?")

if(deve == 1){
    alert("a gabi me deve o furico 1x")
    document.body.style.background = "red"
    
    let = meDeve1 = document.createElement('h1')
    meDeve1.innerHTML = "vai me dar quando?"
    document.body.appendChild(meDeve1)
}else if(deve == 2){
    alert("a gabi me deve o furico 2x")
    document.body.style.background = "coral"
}else{
    alert("a gabi me deve o furico 3x")
    document.body.style.background = "black"
}
// window.alert("Bem-vindo ao caos")
// window.confirm("Voçê deseja realmente sair do jogo?")
// window.prompt("Porque voçê não quiz mais a gente?") //o que o usuário escrever, pode ser armazenado em uma variável
