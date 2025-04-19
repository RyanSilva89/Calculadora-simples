console.log("app.js carregado!");
console.log("JavaScript funcionando!");

function adicionarNumero(valor){
    console.log(valor);
    const tela = document.getElementById('tela');
    if(tela.innerText === '0'){
        tela.innerText = valor;

    }else{ 
        tela.innerText += valor;
    }
        
}