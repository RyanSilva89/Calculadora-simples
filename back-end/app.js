               //verificando o carregamento do arquivo JS
                console.log("app.js carregado!");
                console.log("JavaScript funcionando!");
            const botoes = document.querySelectorAll('#buttons button');
            
            //Adicionando um valor na tela 
            function AdicionarNumero(valor){
                    console.log(valor);
                    const tela = document.getElementById('tela');
                    if(tela.innerText === '0'){
                        tela.innerText = valor;

                    }else{ 
                        tela.innerText += valor;
                    }
                        
                }

                //operadores
function  AdicionarOperacao(operacao){ // função 
const tela = document.getElementById('tela');
const textoAtual = tela.innerText;
const ultimaPosicao = tela.innerText[tela.innerText.length - 1];
const operadores = ['+','-','*','/']; // array com operadores válidos

//Impedir que o usuario digite um operador antes de um número
if(textoAtual === '0'&&(operacao === '*'|| operacao === '/' || operacao === '+')){
return;
}        

if (operadores.includes(ultimaPosicao)){
//Nao adiciona um operador se o ultimo for um operador : 5++
return;
}
if ( textoAtual === '0'){
tela.innerText = operacao;

}else{
tela.innerText += operacao;
}



}
    //limpar tela
function limparTela(){
    const tela = document.getElementById('tela');
                        tela.innerText = '0';

                            
                        }
                        //mostrado o resultado da operação,possui restrição por divisão de zero
            function calcular(){
                const tela = document.getElementById('tela');
                const operadores = ['+','-','*','/'];
                try { 
                    const expressao = tela.innerText;
                if(expressao.includes ( '/0')){
                    tela.innerText = "Erro divisão por zero";

                }else{
                    tela.innerText = eval(expressao);

                }
                
                } catch (error) {
                    tela.innerText = 'Erro';
                }
            
        }
                        botoes.forEach(botao => {
                            botao.addEventListener('click',function(){
                                if(botao.classList.contains('numero')){
            AdicionarNumero(botao.innerText);
                                }else if(botao.classList.contains('operacao')){
                                    AdicionarOperacao(botao.innerText);
                                }else if (botao.id === 'limparTela'){
                                    limparTela();

                                }else if(botao.id === 'calcular'){
                                    calcular();
                                }
                            })
                        });