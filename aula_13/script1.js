let global = "Eu sou global";

function exemplo(){
    let local = "eu sou local";
    console.log(local);
    console.log(global);
}

exemplo();
console.log(local); // erro: local não está definido