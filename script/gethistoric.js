class EachDay {
    constructor (bid, ask, pctChange, low, high){
        this.compra = bid,
        this.venda = ask,
        this.variacao = pctChange,
        this.minimo = low,
        this.maximo = high
    }
    putHtml(){
        const caixa = document.getElementById('div');
        
        const clone = caixa.cloneNode(true);
        const filhos = clone.childNodes;
        const childTxt = []
        for (let i = 0; i < filhos.length; i++){
            if (filhos[i].nodeType == 1){
                childTxt.push(filhos[i])
            }
        }
        childTxt[0].textContent = document.getElementById('par').value;
        childTxt[1].textContent += this.compra
        childTxt[2].textContent += this.venda
        childTxt[3].textContent += this.variacao
        childTxt[4].textContent += this.minimo
        childTxt[5].textContent += this.maximo


        document.getElementById('content').appendChild(clone)
    }
}

const cleanBox = () => { //Limpa container para nova pesquisa
    let box = document.querySelectorAll('#content #div')
    console.log(box)
    box.forEach(el => {
        el.remove()
    })
}

const getHistoric = () => {
    cleanBox()
    const parInput = document.getElementById('par').value;
    const diasInput = document.getElementById('dias').value;

    if (diasInput > 30){
        window.alert('Limite máximo de 30 dias')
    } else{
        fetch(`https://economia.awesomeapi.com.br/json/daily/${parInput}/${diasInput}`)
        .then(response => response.json()
            .then(data =>{
                const el = document.getElementById('content')
               for (elemento in data){
                    let ele = data[elemento]
                    const dia = new EachDay(ele.bid, ele.ask, ele.pctChange, ele.low, ele.high)
                    dia.putHtml()
                    
                    
                    
                   
               }
            }))
    }
    
}


const getBtn = document.getElementById('submit');
getBtn.addEventListener('click',getHistoric)


