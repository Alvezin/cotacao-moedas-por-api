const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const fetchApiCompraVenda = async (lista, tipoElemento) => {
    const req = await axios.get('https://economia.awesomeapi.com.br/json/available', options)
    addPares(req.data, lista, tipoElemento)
}

const addPares = (dados, lista, tipoElemento) => {
    for (elemento in dados){
        const opt = document.createElement(tipoElemento)
        opt.textContent = elemento
        opt.value = elemento;
        document.getElementById(lista).appendChild(opt)
    }
}

if(document.querySelector('datalist#valueCompra')){    
    window.addEventListener('load', fetchApiCompraVenda('valueCompra', 'option'))
    window.addEventListener('load', fetchApiCompraVenda('valueVenda', 'option'))
}else{
    window.addEventListener('load', fetchApiCompraVenda('parLista', 'option'))
}




