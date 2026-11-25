const aluno = {
    nome: "Ana",
    idade: 20,
    matriculado: true,
    curso: "Design Digital"
};

// Desestruturacao
const {nome, idade, curso} = aluno;

console.log(nome);
console.log(idade);
console.log(curso);