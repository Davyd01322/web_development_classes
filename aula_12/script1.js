const campo = document.getElementById('campo');
const previa = document.getElementById('previa');

campo.addEventListener('input', function(evento){
    previa.textContent = evento.currentTarget.value;
});