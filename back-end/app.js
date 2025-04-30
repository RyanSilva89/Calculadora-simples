               //verificando o carregamento do arquivo JS
                console.log("app.js carregado!");
                console.log("JavaScript funcionando!");
            const botoes = document.querySelectorAll('#buttons button');
            
            //função Adicionando um valor na tela 
            function AdicionarNumero(valor){
                    console.log(valor);
                    const tela = document.getElementById('tela');
                    if(tela.innerText.includes("Erro")){
                      tela.innerText = valor;
                    }else if(tela.innerText === '0'){
                        tela.innerText = valor;

                    }else{ 
                        tela.innerText += valor;
                    }
                        
                }

                //função de operadores
function  AdicionarOperacao(operacao){ // função 
const tela = document.getElementById('tela');
const textoAtual = tela.innerText;
const ultimaPosicao = tela.innerText[tela.innerText.length - 1];
const operadores = ['+','-','*','/']; // array com operadores válidos

//Impedindo a digitação ao ocorrer um erro 
if(tela.innerText.includes("Erro")){
tela.innerText = operacao ;
return;
}
//Impedir que o usuario digite um operador antes de um número
if(textoAtual === '0'&&(operacao === '*'|| operacao === '/' || operacao === '+')){
return;
}        
//Impedindo dois operadores conecutivos
if (operadores.includes(ultimaPosicao)){
return;
}
tela.innerText=textoAtual === '0' ? operacao : textoAtual + operacao;



}
    //função limpar tela
function limparTela(){
    const tela = document.getElementById('tela');
                        tela.innerText = '0';

                            
                        }
                        //função calcular o resultado
            function calcular(){
                const tela = document.getElementById('tela');
                const operadores = ['+','-','*','/'];
                const expressao = tela.innerText;

                //regex para divisão por zero
                    const divisaoPorZero = /\/0+(?![\d.])/; //irá detectar /0 / 0.0 //000 
               if(divisaoPorZero.test(expressao)){
                tela.innerText = "Erro: divisão por zero";
               }else{
                try{
                    tela.innerText = new Function('return' + expressao) ();
                    
                }catch(error){
                    tela.innerText = 'Erro';
                }
               }
            
        }                  //Adiocionando evento ao botão usando listeners
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