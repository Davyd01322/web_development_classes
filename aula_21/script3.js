async function teste() {
    return "meu texto";
}

const funct = teste();
console.log(funct instanceof Promise);