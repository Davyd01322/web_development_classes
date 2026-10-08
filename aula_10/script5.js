const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    resultado.textContent = 'Olá, ' + nome.value + '!';
});