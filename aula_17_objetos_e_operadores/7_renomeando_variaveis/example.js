// Antes as variáveis eram: nome e preco
// Podemos extrair uma propriedade e atribuí-la a uma variável com outro nome
const produto = {
    nome: "Teclado",
    preco: 150
};

// Depois: nomeProduto, valor
const {nome: nomeProduto, preco: valor} = produto;

// A propriedade continua se chamando nome; somente a variavel local foi renomeada
console.log(nomeProduto);
console.log(valor)

console.log(produto.nome);
console.log(produto.preco);