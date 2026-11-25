export function aplicarMovimentacoes(estoque, movimentacoes){
    let produtos = [];
    let rejeitadas = 0;

    for(let produto of estoque){
        var i = movimentacoes.length - 1;
        var somaDelta = produto.quantidade;

        while(i >= 0){
            console.log("=====================================================");
            console.log(produto);
            console.log(movimentacoes[i]);
            if(movimentacoes[i].id == produto.id){
                somaDelta = somaDelta + movimentacoes[i].delta;
                console.log(somaDelta);
            }

            i = i - 1;
            console.log("=======================================================");
        }

        if(somaDelta > 0){
            produtos.push({id: produto.id, nome: produto.nome, quantidade: somaDelta});
        } else {
            produtos.push({id: produto.id, nome: produto.nome, quantidade: produto.quantidade});
            rejeitadas = rejeitadas + 1;
        }
    }

    for(var i = 0; i < movimentacoes.length; i++){
        let flag = false;
        for(let produto of produtos){
            if(movimentacoes[i].id == produto.id){
                flag = true;
            }
        }

        if(!flag){
            rejeitadas = rejeitadas + 1;
        }
    }

    return {produtos, rejeitadas};
}