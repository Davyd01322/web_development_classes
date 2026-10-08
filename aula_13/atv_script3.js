let compras = ["Arroz", "Feijão"];

function adicionarItem(nome){
    compras.push(nome);
}

function desfazerUltimoItem(){
    return compras.pop();
}

