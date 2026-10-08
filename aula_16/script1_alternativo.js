function analisarValores(valores){
    let maior = valores.reduce((memoria, valorAtual)=>{
        return valorAtual>memoria? valorAtual : memoria;
    }, valores[0])

    let qtdPares = valores.reduce((memoria, valorAtual)=>{
        return valorAtual%2 == 0 ? memoria + 1 : memoria
    }, 0)

    return {maior: maior, qauntidadePares: qtdPares}
}

console.log(analisarValores([1,2,3,4,2]));