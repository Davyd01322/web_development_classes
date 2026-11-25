const livro = {
    titulo: "Javascript Essencial",
    preco: 50,
    estoque: 8
};

const livroAtualizado = {
    ... livro,
    preco: 45,
    estoque: 12
};

console.log(livroAtualizado);
console.log(livro);