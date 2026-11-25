const aluno = {
    nome: "Ana",
    idade: 20,
    matriculado: true,
    curso: "Design Digital"
};

console.log(aluno)

aluno.idade = 21;           // altera 
aluno.semestre = 3;         // adiciona
delete aluno.matriculado;    // remove

console.log(aluno);