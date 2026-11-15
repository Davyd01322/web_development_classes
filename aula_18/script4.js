const usuario = {
    id: 10,
    nome: "Ana",
    email: "ana@email.com",
    senha: "12356"
};

// Desestruturação
const {senha, ...dadosPublicos} = usuario;

console.log(dadosPublicos);