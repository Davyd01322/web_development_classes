const usuario = {
    nome: "Ana",
    cidade: "Quixadá",
    ativo: true
};

// Em vez de alterar o objeto original, criamos uma nova versão dele
const usuarioAtualizado = {
    ... usuario,
    cidade: "Fortaleza"
};
