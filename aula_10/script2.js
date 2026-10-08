const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

// modificação
let cliques = 0;


function mostrarMensagem(){
    mensagem.textContent = 'Olá, mundo! Número de cliques: ' + cliques;
    cliques += 1;
}

botao.addEventListener("click", mostrarMensagem);