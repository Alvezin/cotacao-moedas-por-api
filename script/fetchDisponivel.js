const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const fetchApiCompraVenda = (lista) => {
    fetch('https://economia.awesomeapi.com.br/json/available', options)
    .then( response => { response.json()
            .then( data => addPares(data, lista))
    })
    .catch(e => alert('Não foi possível carregar os valores', e))
}

const addPares = (dados, lista) => {
    for (elemento in dados){
        const opt = document.createElement('option')
        opt.textContent = elemento
        opt.value = elemento;
        document.getElementById(lista).appendChild(opt)
    }
}


window.addEventListener('load', fetchApiCompraVenda('parLista'))

window.addEventListener('load', fetchApiCompraVenda('valueCompra'))
window.addEventListener('load', fetchApiCompraVenda('valueVenda'))


