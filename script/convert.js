const mult = (idPar, idValue, idInput) =>{
    const nomePar = document.getElementById(idPar).value;
    const nomeConcat = nomePar.split('-').join('')
    let a = nomePar.split('-')
    let quantiaFinal = a.splice(1, 1)
    fetchCompra(nomePar, nomeConcat, idValue, idInput, quantiaFinal)
}

const fetchCompra = async (nomePar, nomeConcat, idValue, idInput, quantiaFinal) =>{
    const req = await axios.get(`https://economia.awesomeapi.com.br/last/${nomePar}`)
    if (req.data[nomeConcat] !== undefined){
        if (idValue == 'inputValueCompra'){
            
            const valorUnitCompra = document.getElementById('parCompra')
            valorUnitCompra.textContent =  req.data[nomeConcat].bid;

            const valorQuant = document.getElementById(idValue).value;
            const mult = Number(valorUnitCompra.textContent * valorQuant)
            document.getElementById(idInput).textContent = `${mult.toFixed(5)} ${quantiaFinal}`
        }else{

            const valorUnitVenda = document.getElementById('parVenda')
            valorUnitVenda.textContent = req.data[nomeConcat].ask;

            const valorQuant = document.getElementById(idValue).value;
            const mult = Number(valorUnitVenda.textContent * valorQuant)
            document.getElementById(idInput).textContent = `${mult.toFixed(5)} ${quantiaFinal}`
        }
    }
}