function registrarPedido(cliente, ...produtos){
    console.log("Cliente: " + cliente);
    console.log("Quantidade: " + produtos.length);
    console.log(produtos);
}

// cliente recebe o primeiro argumento; produtos reune todos os demais
registrarPedido("Ana","Mouse","Teclado","Monitor");