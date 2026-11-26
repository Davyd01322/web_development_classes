const submit = document.getElementById("inscricao");
const entradaNome = document.getElementById("nome");
const entradaIdade = document.getElementById("idade");
const aviso = document.getElementById("mensagem");

function isValid(){
    if(entradaNome.value.trim() == ""){
        console.log("Informe o nome");
        alert("Informe o nome");
    } else {
        if(entradaIdade.value == ""){
            console.log("Idade invalida");
            alert("Idade invalida");
        } else {
            var idade = Number(entradaIdade.value);
            console.log(idade);
            if(idade >= 18){
                console.log("Inscricao confirmada para " + entradaNome.value);
                alert("Inscricao confirmada para " + entradaNome.value);
            } else {
                console.log("Inscricao permitida apenas para maiores de idade");
                alert("Inscricao permitida apenas para maiores de idade");
            }
        }
    }
}

submit.addEventListener("submit", function(event){
    event.preventDefault();
    isValid();
});