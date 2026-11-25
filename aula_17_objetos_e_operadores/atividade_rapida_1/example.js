// Crie uma cópia do objeto perfil e adicione uma nova propriedade.

const perfil = {
    nome: "Ana",
    curso: "Desing Digital"
};

const perfilCopia = {
    ... perfil,
    matricula: 553156
};

console.log(perfil);
console.log(perfilCopia);