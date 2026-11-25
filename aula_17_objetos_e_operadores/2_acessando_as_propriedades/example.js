// Existem duas formas principais
const aluno = {
    nome: "Ana",
    idade: 20,
    matriculada: true,
    curso: "Design Digital"
};

console.log(aluno.nome);
console.log(aluno["nome"]);

const propriedade = "idade";
console.log(aluno[propriedade]);