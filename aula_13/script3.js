function contador(){
    let contagem = 0;
    return function() {
        contagem += 1;
        console.log(contagem);
    }
}

let meuContador = contador();
meuContador();
meuContador();