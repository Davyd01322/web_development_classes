const esperar = new Promise((resolve) => {
    setTimeout(() => resolve("Concluido"), 1000);
});

esperar.then(console.log);
console.log("Continuando");