import Usuario from "./usuario.js";

const ana = new Usuario(
    "Ana",
    "ana@email.com"
);

// Mesmo sendo permitido renomear, use nomes consistentes para facilitar a busca no projeto
console.log(ana.apresentar());