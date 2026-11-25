import { resumirTurma } from "./function.js";

const alunos = [
    {nome: "Ana", notas:[8,7,9]},
    {nome: "Bruno", notas: [5, 6, 7]},
    {nome: "Carla", notas: [9, 8, 7]}
];

const resultado = resumirTurma(alunos);
console.log(resultado);