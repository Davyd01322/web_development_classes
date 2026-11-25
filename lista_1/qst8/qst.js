import { aplicarMovimentacoes } from "./function.js";

const estoque = [
    {id: 1, nome: "Caderno", quantidade:5},
    {id: 2, nome: "Caneta", quantidade: 2}
]

const movimentacoes = [
    {id: 1, delta: -3},
    {id: 2, delta: -4},
    {id: 1, delta: 2},
    {id: 9, delta: 1}
]

const resultado = aplicarMovimentacoes(estoque, movimentacoes);
console.log(JSON.stringify(resultado, null, 2));