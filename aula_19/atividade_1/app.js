import{
    celsiusParaFarenheit,
    kmParaMilhas
} from "./conversor.js";

let temperatura = document.getElementById("celcius");
let btnCelcius = document.getElementById("btnCelcius");
let saidaCelcius = document.getElementById("saidaCelcius");

let distancia = document.getElementById("km");
let btnKm = document.getElementById("btnCelcius");
let saidaKm = document.getElementById("saidaKm");

btnCelcius.addEventListener("click", ()=>{
    saidaCelcius.innerHTML = celsiusParaFarenheit(temperatura.value);
})

btnKm.addEventListener("click", ()=>{
    saidaKm.innerHTML = kmParaMilhas(distancia.value);
})