const valores = [12, 7, 19, 4, 10];
const valores2 = [-8, -3, -2];
const valores3 = [3, 5, 7];
const valores4 = [-4];

function analisarValores(vetor){
    let maior;
    let pares = 0;

    maior = vetor[0];
    for(let item of vetor){
        if(maior < item){
            maior = item;
        }
        if(item % 2 == 0){
            pares += 1;
        }
    }

    const analise = [maior, pares];
    return analise;
}

let analise = analisarValores(valores);
console.log("O maior: " + analise[0]);
console.log("O número de pares: " + analise[1]);