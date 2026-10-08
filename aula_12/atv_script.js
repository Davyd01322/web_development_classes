function calcularTotal(valorCompra, clientesVip){
    return (clientesVip) ? valorCompra * 0.85 : valorCompra * 0.95;
}

console.log(calcularTotal(200, true));