const lista1 = [3,2,1];
const lista2 = lista1;  // lista2 vai apontar para a mesma posição de memória que lista1 está apontando

lista1[0] = 120;

console.log(lista2);