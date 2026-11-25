function exibirProduto({nome, preco, estoque = 0}){
    return nome + " - R$" + preco + " - estoque: " + estoque;
}

const item = {
    nome: "Mouse",
    preco: 80
};

console.log(exibirProduto(item));