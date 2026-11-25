// Propriedades escritas por último substituem as anteriores
const padrao = {
    tema: "claro",
    idioma: "pt-BR"
};

const preferencias = {
    ... padrao,
    tema: "escuro"
};

console.log(preferencias.tema); // escuro