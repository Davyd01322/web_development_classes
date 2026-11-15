function registrarPedido(cliente, ...produtos){
    console.log("Cliente: " + cliente);
    console.log("Quantidade: " + produtos.length);
    console.log(produtos);
}

registrarPedido(
    "Ana",
    "Mouse",
    "Teclado",
    "Monitor"
);

