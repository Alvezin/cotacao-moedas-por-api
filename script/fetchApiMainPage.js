
const acionarFuncao = () =>{
    const getDiv = document.querySelectorAll('.caixa');
    getDiv.forEach((elemento)=>{
        const id = elemento.id;
        const nome = elemento.firstElementChild.textContent;
        const nomeConcat = elemento.firstElementChild.textContent.split('-').join('') // variável usada para acessar o objeto dentro do data
        getValor(id, nomeConcat, nome)
    })
}

const getValor = async function(idDiv, nomeConcat, nome){
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    const req = await axios.get(`https://economia.awesomeapi.com.br/last/${nome}`, options)
    console.log(req.data)
    setValor(req.data, idDiv, nomeConcat)
}

const setValor = function(data,idDiv,nomeConcat){
    for (elemento in data[nomeConcat]){
        if(document.querySelector(`#${idDiv} .${elemento}`)){
            document.querySelector(`#${idDiv} .${elemento}`).textContent = data[nomeConcat][elemento]
        }
    }
}

window.addEventListener("load", acionarFuncao())
setInterval(acionarFuncao, 5000)