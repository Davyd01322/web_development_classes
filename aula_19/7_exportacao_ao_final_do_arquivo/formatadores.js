// formatadores.js
function moeda(valor){
    return "R$ " + valor.toFixed(2);
}

function percentual(valor){
    return (valor * 100).toFixed(1) + "%";
}

export{
    moeda,
    percentual
};