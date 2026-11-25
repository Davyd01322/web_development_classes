const espera = new Promisse((resolve)=>{
    setTimeout(()=>{
        console.log("Concluido");
    }, 3000);
})

espera
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro.mensagem));

console.log("Inicio");