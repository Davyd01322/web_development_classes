const dadosBasicos = {
    nome: "Bia",
    idade: 19
};

const dadosAcademicos = {
    curso: "Computação",
    semestre: 2
};

const estudante = {
    ...dadosBasicos,
    ...dadosAcademicos,
    status: "ativo"
};

console.log(estudante);