export function calcularMedia(valores){
    const soma = valores.reduce(
        (total, valor) => total + valor, 0
    );

    return soma / valores.length;
}