const btnCompra = document.getElementById('submitCompra')
const btnVenda = document.getElementById('submitVenda')


const mult = (idPar, idValue, idInput) =>{
    const valorPar = document.getElementById(idPar).value;
    const valorQuant = document.getElementById(idValue).value;
    const mult = Number(valorPar*valorQuant)
    document.getElementById(idInput).textContent = mult.toFixed(2).replace('.',',')
}

