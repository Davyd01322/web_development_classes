const dadosBasicos = {
    nome: "Bia",
    idade: 19
};

const dadosAcademicos = {
    curso: "Computacao",
    semestre: 2
};

const estudante = {
    ... dadosBasicos,
    ... dadosAcademicos,
    ativo: true
};

// Em casos de chaves repetidas, prevalece o valor 