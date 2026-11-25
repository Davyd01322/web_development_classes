// Spread realiza uma cópia rasa: objetos aninhados continuam referenciados.
const original = {
    nome: "Ana",
    endereco: {cidade: "Quixada"}
};

// Recebe uma referência para o objeto cidade
const copiaRasa = {... original};

// então, modificar esse atributo em copiaRasa também gera uma modificacao no objeto original
copiaRasa.endereco.cidade = "Fortaleza";

console.log(original.endereco.cidade); // Fortaleza

// Para copiar o nível interno que será alterado:
const copiaSegura = {
    ...original,
    endereco:{... original.endereco}
};