                //verificando o carregamento do arquivo JS
                console.log("app.js carregado!");
                console.log("JavaScript funcionando!");
            const botoes = document.querySelectorAll('#buttons button');
            //Adicionando um valor na tela 
            function adicionarNumero(valor){
                    console.log(valor);
                    const tela = document.getElementById('tela');
                    if(tela.innerText === '0'){
                        tela.innerText = valor;

                    }else{ 
                        tela.innerText += valor;
                    }
                        
                }
                    function  AdicionarOperacao(operacao){
                    tela.innerText += `${operacao}`;
                    }
                    //limpar tela
                    function limparTela(limparTela){
                        tela.innerText = '0';

                            
                        }
            function calcular(){
                const tela = document.getElementById('tela');
                
                try { 
                    const expressao = tela.innerText;
                if(expressao.includes ( '0')){
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
            adicionarNumero(botao.innerText);
                                }else if(botao.classList.contains('operacao')){
                                    adicionarNumero(botao.innerText);
                                }else if (botao.id === 'limparTela'){
                                    limparTela();

                                }else if(botao.id === 'calcular'){
                                    calcular();
                                }
                            })
                        });