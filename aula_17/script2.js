const produto = {
    nome: "Teclado",
    preco: 150
};

// Desestruturar
const {nome: novoNome, preco: novoPreco} = produto

console.log(novoNome, novoPreco);