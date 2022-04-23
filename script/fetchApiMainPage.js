
const acionarFuncao = () =>{
    const getDiv = document.querySelectorAll('.caixa');
    getDiv.forEach((elemento)=>{
        const id = elemento.id;
        const nome = elemento.firstElementChild.textContent;
        const nomeConcat = elemento.firstElementChild.textContent.split('-').join('') // variável usada para acessar o objeto dentro do data
        getValor(id, nomeConcat, nome)
    })
}

const getValor = function(idDiv, nomeConcat, nome){
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    axios.get(`https://economia.awesomeapi.com.br/last/${nome}`, options)
        .then(res => {
            setValor(res.data, idDiv, nomeConcat)

        }).catch(e => window.alert(`Erro ao carregar alguns dados ${e}`))
}


const setValor = function(data,idDiv,nomeConcat){
    for (elemento in data[nomeConcat]){
        if(document.querySelector(`#${idDiv} .${elemento}`)){
            document.querySelector(`#${idDiv} .${elemento}`).textContent = data[nomeConcat][elemento]
                                                 //os dados vem em um objeto com objeto, 
                                                // contendo o nome como a primeira moeda do par
        }
    }
}
acionarFuncao()
setInterval(acionarFuncao, 5000)