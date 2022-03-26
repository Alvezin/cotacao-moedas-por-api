const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const fetchApiCompraVenda = (lista, tipoElemento) => {
    fetch('https://economia.awesomeapi.com.br/json/available', options)
    .then( response => { response.json()
            .then( data => addPares(data, lista, tipoElemento))
    })
    .catch(e => alert('Não foi possível carregar os valores', e))
}

const addPares = (dados, lista, tipoElemento) => {
    for (elemento in dados){
        const opt = document.createElement(tipoElemento)
        opt.textContent = elemento
        opt.value = elemento;
        document.getElementById(lista).appendChild(opt)
    }
}


window.addEventListener('load', fetchApiCompraVenda('parLista', 'option'))

window.addEventListener('load', fetchApiCompraVenda('valueCompra', 'option'))
window.addEventListener('load', fetchApiCompraVenda('valueVenda', 'option'))



