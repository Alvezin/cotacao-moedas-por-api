const acionarFuncao = () =>{
    const getDiv = document.querySelectorAll('.caixa');
    getDiv.forEach((elemento)=>{
        const id = elemento.id;
        const nome = elemento.firstElementChild.textContent;
        const nomeConcat = elemento.firstElementChild.textContent.split('-').join('') // variável usada para acessar o objeto dentro do data
        getValor(id, nomeConcat, nome)
    })
}

const getValor = function(idDiv, nomeConcat, nome){
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://economia.awesomeapi.com.br/last/${nome}`, options)
        .then( response => { return response.json()
            .then( data => {
                setValor(data[nomeConcat], idDiv)
            })
        })
        .catch(e => {window.alert('Não foi possível carregar os dados', e)})
}


const setValor = function(data,idDiv){
    for (elemento in data){
        if(document.querySelector(`#${idDiv} .${elemento}`)){
            document.querySelector(`#${idDiv} .${elemento}`).textContent = data[elemento]
        }
    }
}

setInterval(acionarFuncao, 10000)