const usuario = {
    nome: "Carlos",
    endereco: {
        cidade: "Quixada"
    }
};

const {
    nome,
    endereco: {cidade, estado = "CE"}
} = usuario;

console.log(nome, cidade, estado);