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

                //operaçoes dos números
    function  AdicionarOperacao(operacao){
        const tela = document.getElementById('tela');
        tela.innerText += `${operacao}`;
        const ultimaPosicao = tela.innerText[tela.innerText.length - 1];


        // array com operadores válidos
        const operadores = ['+','-','*','/'];
    if (operadores.includes(ultimaPosicao)){
        //Nao adiciona um operador se o ultimo for um operador : 5++
        return;
    }
    if ( tela.innerText === '0'){
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