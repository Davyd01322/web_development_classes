const usuario = {
    id:10,
    nome:"Ana",
    email:"ana@email.com",
    senha:1234
};

// Regra: o objeto rest deve ser o último item do padrão de desestruturação.
const {nome, ...dadosPublicos} = usuario;

console.log(dadosPublicos);