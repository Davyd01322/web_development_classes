const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const botaoZerar = document.getElementById("zerar");
const msg = document.getElementById("quantidade");

let counter = 0;

function aumentar(){
    counter = counter + 1;
    msg.textContent = counter;
}

function diminuir(){
    counter = counter - 1;
    msg.textContent = counter;
}

function zerar(){
    counter = 0;
    msg.textContent = counter;
}

botaoAumentar.addEventListener('click', aumentar);
botaoDiminuir.addEventListener('click', diminuir);
botaoZerar.addEventListener('click', zerar);