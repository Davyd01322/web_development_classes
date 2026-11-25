console.log("Inicio!");

const espera = new Promise((resolve) => {
    setTimeout(() => resolve("Pronto"), 1000);
});

espera.then(console.log);
console.log("Fim");