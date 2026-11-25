const original = {
    nome: "Ana",
    endereco: {cidade: "Quixada"}
}

// Cópia profunda   
const copia = structuredClone(original);
copia.nome = "Bia";
copia.endereco.cidade = "Fortaleza";

console.log(original.nome); // "Ana"
console.log(original.endereco.cidade); // Quixada
console.log(copia.endereco === original.endereco); // true