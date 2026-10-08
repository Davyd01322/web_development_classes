// Criar arrays
let numeros = [1, 2, 3];

console.log(numeros);

// Acessando elementos
console.log(numeros[0]);

// Adicionando elementos
// push(): Adiciona um ou mais elementos ao final do array
numeros.push(4);

console.log(numeros);

// unshift(): Adiciona um ou mais elementos ao inicio do array
numeros.unshift(0);

console.log(numeros);

// Remover elementos
// pop(): Remove o último elemento do array

numeros.pop();
console.log(numeros);

// shift(): Remove o primeiro elemento do array
numeros.shift();

console.log(numeros);

// Iterando sobre o array
let frutas = ["Banana", "Maçã", "Laranja"];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// Iterando com for...of
for(let fruta of frutas){
    console.log(fruta);
}

