const objeto = {
    nome: "Caderno",
    preco: 12.5,
    quantidade: 3
};

const texto = JSON.stringify(objeto);

localStorage.setItem("caderno", texto);

const texto_retorno = localStorage.getItem("caderno");

if (texto_retorno != null){
    const objeto_retorno = JSON.parse(texto_retorno);
    console.log("nome: " + objeto_retorno.nome + " preco: " + objeto_retorno.preco + " quantidade: " + objeto_retorno.quantidade);
}