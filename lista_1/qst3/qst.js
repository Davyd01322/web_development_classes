const produtos = [
    {nome: "Caderno", preco: 20, estoque: 3},
    {nome: "Caneta", preco: 5, estoque: 0},
    {nome: "Mochila", preco: 80, estoque: 2},
    {nome: "Regua", preco: 8, estoque: 4}
];

const nomes = produtos 
    .filter(p => p.estoque > 0 && p.preco <= 20)
    .map(p => p.nome);

console.log(nomes);