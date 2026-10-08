// Arrow functions
const funcao = (parametros) =>{
    // corpo da função
};

// Também podem retornar valores como nas funções convencionais
const multiplicar = (a, b) => {
    return a * b;
};

let resultado = multiplicar(3, 9);
console.log(resultado);

// Simplificação de arrow functions: funciona para funções com apenas uma expressão
const soma = (a, b) => a + b;

resultado = soma(10, 3);
console.log(resultado);