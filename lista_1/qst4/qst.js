// As duas funções: dobrar e arrow function do map não tinham retorno implicito já que foram definidas usando
// chaves;

const dobrar = valores => {
    return valores.map(valor => {
        return valor*2;
    });
};

console.log(dobrar([2,4,6]));

// Arrow functions
// const quadrado = x => x * x;
// const somar = (a,b) => a + b;
// const triplicarComLog = n => {
//      const resultado = n * 3;
//      return resultado;}