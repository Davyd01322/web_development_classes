// Também podemos extrair valores de objetos internos
const usuario = {
    nome: "Carlos",
    endereco: {
        cidade: "Quixada",
        estado: "CE"
    }
};

const {
    nome,
    endereco: {cidade, estado}
} = usuario;

// Neste exemplo, criamos as variaveis nome, cidade e estado, mas não uma variavel chamada endereco

console.log(nome);
console.log(endereco);