let buy;
let sell;

const getValues = (idPar, idValue, idInput) =>{
    const nomePar = document.getElementById(idPar).value;
    const nomeConcat = nomePar.split('-').join('') // Nome concatenado;
    let finalCoin = nomePar.split('-')[1]
    getApiData(nomePar, nomeConcat, idValue, idInput, finalCoin)
}

const setDataHtml = ( elementId, buyOrSell, idValue ) => {
    const valorUnit = document.getElementById( elementId )
    valorUnit.textContent =  buyOrSell
    const valorQuant = document.getElementById(idValue).value;
    return Number(valorUnit.textContent * valorQuant)
}

const getApiData = async (nomePar, nomeConcat, idValue, idInput, finalCoin) =>{
    const req = await axios.get(`https://economia.awesomeapi.com.br/last/${ nomePar }`)
    buy = req.data[nomeConcat].bid
    sell = req.data[nomeConcat].ask

    if (req.data[nomeConcat] !== undefined){
        if (idValue == 'inputValueCompra'){
            document.getElementById(idInput).textContent = `${ setDataHtml("parCompra", buy, idValue).toFixed(5) } ${ finalCoin }`
        }
        document.getElementById(idInput).textContent = `${ setDataHtml("parVenda", sell, idValue).toFixed(5) } ${ finalCoin }`
    }
}