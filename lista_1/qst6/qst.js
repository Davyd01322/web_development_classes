const original = {
    nome: "Ana",
    endereco: {cidade: "Quixada"}
}

const copia = {... original};
copia.nome = "Bia";
copia.endereco.cidade = "Fortaleza";

console.log(original.nome); // "Ana"
console.log(original.endereco.cidade); // Fortaleza
console.log(copia.endereco === original.endereco); // true

// Copiar rasa: quando executamos o comando:
//  const copia = {... original} 
// Criamos um novo objeto no nivel superior (copia !== original)
// Porem, ele copia referencias para os objetos aninhados dele (no caso, endereco)
// Em resumo, se fizermos:
//  copia.nome = "Bia" -> original.nome permanece inalterado pois é uma cópia
// Já quando fazemos:
//  copia.endereco.cidade = "Fortaleza"; -> original.endereco.cidade = "Fortaleza"
// Isso pq se trata de um cópia rasa, copia contém uma referência de memória do atributo endereco,
// então quando alteramos ele em cópia, a modificação é propagada para original também