import { construirConfiguracao } from "./function.js";

const padrao = {
    tema: "claro", 
    interface: {fonte: 16, espacamento: 8},
    atalhos: ["busca"]
};

const camada = {
    tema: "escuro",
    interface: {fonte: 18},
    atalhos: ["ajuda", "busca"]
}

const resultado = construirConfiguracao(padrao, camada);

console.log(JSON.stringify(resultado, null, 2));