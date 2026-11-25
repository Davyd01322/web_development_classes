const pedido = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Pedido pronto!");
    }, 2000);
})

// Neste exemplo há apenas sucesso. Para sinalizar uma falha, usamos reject.