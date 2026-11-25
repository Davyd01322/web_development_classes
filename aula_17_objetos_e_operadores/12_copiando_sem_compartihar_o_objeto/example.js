const original = {
    nome:"Ana",
    idade: 20
};

const copia = {...original};
copia.idade = 21;

console.log(original.idade); // 20
console.log(copia.idade); // 21

// original e copia são objetos externos diferentes