// Closure

function saudacao(nome){
    let texto = "Olá, " + nome + "!";
    return function(){
        console.log(texto);
    } 
}

let cumprimentar = saudacao("Maria");
cumprimentar();
cumprimentar = saudacao("João");
cumprimentar();
cumprimentar();