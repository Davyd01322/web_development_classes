export function resumirCarrinho(itens){
    let total = 0;
    let quantidadeItens = 0;
    
    for(let item of itens){
        quantidadeItens = quantidadeItens + item.quantidade;
        total = total + (item.preco* item.quantidade);
    }

    return {total, quantidadeItens};
}