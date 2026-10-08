const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

function mostrarMensagem(evento){
    console.log(evento.type);
    console.log(evento.target);
    console.log(evento.currentTarget);
}

botao.addEventListener("click", mostrarMensagem);