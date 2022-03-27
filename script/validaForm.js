const validaNome = (idNome) => {
    const nome = document.getElementById(idNome).value;

    try{
        if(nome === '') throw "Digite algo"
        if (Number(nome) === Number(nome)) throw "Números são invalidos"
    } catch(e){
        window.alert(e)
    }
}

const btn = document.getElementById('submit')