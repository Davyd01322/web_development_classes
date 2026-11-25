import { analisarValores } from "./function.js";

const valores = [12, 7, 19, 4, 10];
let {maior, quantidadePares} = analisarValores(valores);

console.log(`{maior: ${maior}, quantidadePares: ${quantidadePares}}`);