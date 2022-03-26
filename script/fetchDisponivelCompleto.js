const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const fetchDisponivelCompleto = (lista, tipoElemento) => {
    fetch('https://economia.awesomeapi.com.br/json/available', options)
    .then( response => { response.json()
            .then( data => addPares(data, lista, tipoElemento))
    })
    .catch(e => alert('Não foi possível carregar os valores', e))
}

const addPares = (dados, lista, tipoElemento) => {
    for (elemento in dados){
        const opt = document.createElement(tipoElemento)
        opt.classList.add('active')
        opt.textContent = `${elemento}: ${dados[elemento]}`
        document.getElementById(lista).appendChild(opt)
        ap()
    }
}

window.addEventListener('load', fetchDisponivelCompleto('addCoins', 'p'))



let ap = () => {
    const box = document.querySelectorAll('.active')
    box.forEach(el => {
        el.addEventListener('click', )
    })    
}
var metodo = function () {
    //Seu codigo aqui
  };
  
  for(var elem in document.getElementsByClassName('active')) {
    elem.

  }