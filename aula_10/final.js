const botao = document.getElementById('toggleButton');
const texto = document.getElementById('texto');
let flag = false;

const entrada = document.getElementById('entrada');
const saida = document.getElementById('saida');

const contador = document.getElementById('contadorButton');
const contagem = document.getElementById('contador');
let clicks = 0;

function mostrarSegredo(){
    if(flag){
        texto.style = "display:none";
        flag = false;
    } else {
        texto.style = "";
        flag = true;
    }
}

function tempoReal(evento){
    saida.textContent = evento.currentTarget.value;
}

function contar(){
    contagem.textContent = clicks; 
    console.log(clicks);
    clicks += 1;
}

botao.addEventListener('click', mostrarSegredo);
entrada.addEventListener('input',tempoReal);
contador.addEventListener('click', contar);