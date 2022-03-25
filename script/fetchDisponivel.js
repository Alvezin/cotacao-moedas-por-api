const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const fetchApiCompraVenda = () => {
    fetch('https://economia.awesomeapi.com.br/json/available', options)
    .then( response => { response.json()
            .then( data => addPares(data))
    })
    .catch(e => alert('Não foi possível carregar os valores', e))
}

const addPares = (dados) => {
    for (elemento in dados){
        const opt = document.createElement('option')
        opt.textContent = elemento
        opt.value = elemento;
        document.getElementById('parLista').appendChild(opt)
    }
}


window.addEventListener('load', fetchApiCompraVenda)


