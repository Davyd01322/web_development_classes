const pedido = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Pedido pronto!");
    }, 2000);
})

pedido
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro.mensagem));

// then: recebe o resultado
// catch: trata uma falha