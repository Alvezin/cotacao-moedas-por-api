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
        const nomeConcat = elemento.split('-').join('')
        const opt = document.createElement('option')
        opt.textContent = elemento
        fetch(`https://economia.awesomeapi.com.br/last/${elemento}`, options)
            .then( response => { return response.json()
                .then( data => {
                    if (data[nomeConcat] !== undefined){
                        opt.value = data[nomeConcat].bid;
                    }
                })
            })
        .catch(e => {window.alert('Alguns dados não foram totalmente carregados', e)})
        document.getElementById('valueCompra').appendChild(opt)
     
    }
     
    
    for (elemento in dados){
        const nomeConcat = elemento.split('-').join('')
        const opt = document.createElement('option')
        opt.textContent = elemento
        fetch(`https://economia.awesomeapi.com.br/last/${elemento}`, options)
        .then( response => { return response.json()
            .then( data => {
                if (data[nomeConcat] !== undefined){
                    opt.value = data[nomeConcat].ask;
                } 
            })
        })

        document.getElementById('valueVenda').appendChild(opt)
        
    }
}

fetchApiCompraVenda()