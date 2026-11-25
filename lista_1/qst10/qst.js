import { gerarRelatorio } from "./function.js";

const usuarios = [
    {nome: "Ana", perfil: "aluno", ativo: true, email:"ANA@UFC.BR", senha: "123"},
    {nome: "Bia", perfil: "monitor", ativo: true, email: "ana@ufc.br", senha: "456"}
];

const resultado = gerarRelatorio(usuarios);
console.log(JSON.stringify(resultado, null, 2));