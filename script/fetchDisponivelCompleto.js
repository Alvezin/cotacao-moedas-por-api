
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const getPairs = async (lista, tipoElemento, idDiv) => {
    const req = await axios.get('https://economia.awesomeapi.com.br/json/available', options)
    addPairs(req.data, lista, tipoElemento, idDiv)
}

const addPairs = (dados, lista, tipoElemento, idDiv) => { //adiciona os pares na lista de pares
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

const setValor = (data,idDiv, namePar) => {
    for (elemento in data){
        if(document.querySelector(`#${idDiv} .${elemento}`)){
            document.querySelector(`#${idDiv} .${elemento}`).textContent = data[elemento]
        }
    }
    document.getElementById('nome').textContent = namePar
}

const mostrarNaTela = async (opt, idDiv) => { //ao clicar no elemento da lista, esse processo de inicia, para buscar os valores
    const textOpt = opt.textContent
    const textOptSplit = textOpt.split(':')

    const namePar = textOptSplit[0]
    const nameConcat = namePar.split('-').join('')

    const req = await axios.get(`https://economia.awesomeapi.com.br/last/${namePar}`, options)
    setValor(req.data[nameConcat], idDiv, namePar)
}



window.addEventListener('load', getPairs('addCoins', 'p', 'div'))

