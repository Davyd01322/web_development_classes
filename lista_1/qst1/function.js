export function analisarValores(valores){
    var maior = valores[0];
    var quantidadePares = 0;

    for(let valor of valores){
        if(valor % 2 == 0){
            quantidadePares = quantidadePares + 1;
        }
        if(valor > maior){
             maior = valor
        }
    }

    return {maior, quantidadePares};
}