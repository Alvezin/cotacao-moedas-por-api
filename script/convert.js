const mult = (idPar, idValue, idInput) =>{
    const nomePar = document.getElementById(idPar).value;
    const nomeConcat = nomePar.split('-').join('')
    let a = nomePar.split('-')
    let quantiaFinal = a.splice(1, 1)
    if (idPar === 'inputParCompra'){
        fetchCompra(nomePar, nomeConcat, idValue, idInput, quantiaFinal)
    } else if (idPar === 'inputParVenda'){
        fetchVenda(nomePar, nomeConcat, idValue, idInput, quantiaFinal)
    }
    
}

const fetchCompra = (nomePar, nomeConcat, idValue, idInput, quantiaFinal) =>{
    fetch(`https://economia.awesomeapi.com.br/last/${nomePar}`, options)
    .then( response => { return response.json()
        .then( data => {
            if (data[nomeConcat] !== undefined){
                const valorUnitCompra = document.getElementById('parCompra')
                valorUnitCompra.textContent =  data[nomeConcat].bid;

                const valorQuant = document.getElementById(idValue).value;
                const mult = Number(valorUnitCompra.textContent * valorQuant)
                document.getElementById(idInput).textContent = `${mult.toFixed(5)} ${quantiaFinal}`
            }
        })
    })
    .catch(e => {window.alert('Alguns dados não foram totalmente carregados', e)})
}

const fetchVenda = (nomePar, nomeConcat, idValue, idInput, quantiaFinal) => {
    fetch(`https://economia.awesomeapi.com.br/last/${nomePar}`, options)
    .then( response => { return response.json()
        .then( data => {
            if (data[nomeConcat] !== undefined){
                const valorUnitVenda = document.getElementById('parVenda')
                valorUnitVenda.textContent = data[nomeConcat].ask;

                const valorQuant = document.getElementById(idValue).value;
                const mult = Number(valorUnitVenda.textContent * valorQuant)
                document.getElementById(idInput).textContent = `${mult.toFixed(5)} ${quantiaFinal}`

            }
        })
    })
    .catch(e => {window.alert('Alguns dados não foram totalmente carregados', e)})
}