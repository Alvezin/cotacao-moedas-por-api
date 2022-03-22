
const getValor = function(idDiv){
    const getDiv = document.getElementById(idDiv);
    const nomeMoeda = getDiv.firstElementChild.textContent.split('-').join(''); // variável usada para acessar o objeto dentro do data
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://economia.awesomeapi.com.br/last/${getDiv.firstElementChild.textContent}`, options)
        .then( response => { return response.json()
            .then( data => {
                setValor(data[nomeMoeda], idDiv)
            })
        })
        .catch(e => {window.alert('Não foi possível carregar os dados', e)})
}


const setValor = function(data,idDiv){
    for (elemento in data){
        if(document.querySelector(`#${idDiv} .${elemento}`)){
            document.querySelector(`#${idDiv} .${elemento}`).textContent = data[elemento]
            console.log(document.querySelector(`#${idDiv} .${elemento}`))
        }
    }
}


getValor('div1')
getValor('div2')
getValor('div3')
getValor('div4')
getValor('div5')
getValor('div6')
