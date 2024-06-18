let cep = document.querySelector('#cep'); 
let message = document.querySelector('#erroMessage')
let rua = document.querySelector('#rua')
let complemento = document.querySelector('#complemento')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#uf')

cep, addEventListener('focusout', async()=>{ //focusout = evento para clicar fora da caixa  //async = serve par processar o CEP e executar funções múltiplas
    //sabemos que a api pode retornar sucesso ou erro
    try{ //para tratar informações quando retornadas com sucesso
        const onlyNumbers = /^[0-9]+$/;
        const cepValid = /^[0-9]{8}$/;

        if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)){//test= faz a validação do valor de um campo com o regex
            console.log('CEP inválido')
            throw{cep_error: 'CEP inválido'} //throw = para lançar mensagens de errp se necessário //aguarda a aconsulta ser feita na API para continuar com o fluxo do código 
        }

        let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)//consome o API

        console.log(retornoAPI)

        if(!retornoAPI.ok){
            throw await retornoAPI.json()
        }

        let response = await retornoAPI.json()
        console.log(response)
        cep.value = response.cep
        rua.value = response.logradouro;
        complemento.value = response.complemento;
        bairro.value = response.bairro;
        cidade.value = response.localidade;
        estado.value = response.uf;

    }catch(error){ //para tratar informações quando retornadas com errpo
        if(error?.cep_error){
            message.textContent = error.cep_error;
            setTimeout(() =>{
                message.textContent = '';
            }, 5000);
        }
        console.log(error)
    }
})