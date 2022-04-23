const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const fetchDisponivelCompleto = (lista, tipoElemento, idDiv) => { //Pega os pares disponíveis
    fetch('https://economia.awesomeapi.com.br/json/available', options)
    .then( response => { response.json()
            .then( data => addPares(data, lista, tipoElemento, idDiv))
    })
    .catch(e => alert('Não foi possível carregar os valores', e))
}




const addPares = (dados, lista, tipoElemento, idDiv) => { //adiciona os pares na lista de pares
    for (elemento in dados){
        const opt = document.createElement(tipoElemento)
        opt.style.cursor = 'pointer'
        opt.textContent = `${elemento}: ${dados[elemento]}`
        document.getElementById(lista).appendChild(opt)
        opt.addEventListener('click', () => { //evento de aparecer na div as infos do 'opt'
            mostrarNaTela(opt, idDiv)
        })
    }
}




const mostrarNaTela = (opt, idDiv) => { //ao clicar no elemento da lista, esse processo de inicia, para buscar os valores
    const textOpt = opt.textContent
    const textOptSplit = textOpt.split(':')

    const namePar = textOptSplit[0]
    const nameConcat = namePar.split('-').join('')

    fetch(`https://economia.awesomeapi.com.br/last/${namePar}`, options)
        .then( response => { return response.json()
            .then( data => {
                setValor(data[nameConcat], idDiv)
            })
        })
        .catch(e => {window.alert('Não foi possível carregar os dados', e)})

        /*-------------------------- */
    const setValor = function(data,idDiv){
        for (elemento in data){

            if(document.querySelector(`#${idDiv} .${elemento}`)){
                document.querySelector(`#${idDiv} .${elemento}`).textContent = data[elemento]
            }
        }
        document.getElementById('nome').textContent = namePar
    }
}



window.addEventListener('load', fetchDisponivelCompleto('addCoins', 'p', 'div'))

