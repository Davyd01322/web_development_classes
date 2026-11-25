const usuario = {
    nome: "Carlos",
    endereço: {
        cidade: "Quixada"
    }
};

const {nome, endereço} = usuario;
const {cidade} = endereço;

console.log(nome, cidade);

usuario.estado = "Ceará";
console.log(usuario.estado);