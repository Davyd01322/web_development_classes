// Quando uma propriedade armazena uma função, chamamos ela de método
const produto = {
    nome: "Fone",
    preco: 120,
    
    exibirResumo(){
        return this.nome + ": R$ " + this.preco;
    }
};

console.log(produto.exibirResumo());