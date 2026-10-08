function calcularTotal(preco, frete){
    let total = 0;
    for(let valor of preco){
        total += valor;
    }
    return (total != 0) ? total + frete : 0;
}

console.log(calcularTotal([35, 80, 20], 10));