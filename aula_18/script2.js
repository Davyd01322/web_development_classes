const obj1 = {
    nome: "fulano",
    idade: 10
};

const obj2 = {...obj1}; // Operação de spread: Você cria um novo objeto com os mesmos

const obj3 = {...obj1, idade: 26};

obj1.idade = 15;

console.log(obj2);
console.log(obj3);