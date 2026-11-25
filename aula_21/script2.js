const pedido = new Promisse((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Deu tudo certo");
    },2000);
})

pedido
    .then(()=>{
        console.log("then => resultado");
    })
    .catch(erro=>{
        console.log(erro)
    })

console.log("fim");