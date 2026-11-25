const objeto = {
    nome: "Caderno",
    preco: 12.5,
    quantidade: 3
}

const texto = JSON.stringify(objeto);

localStorage.setItem("objeto", texto);

const retorno = localStorage.getItem("objeto");

if(retorno != null){
    const aluno = JSON.parse(retorno);
    console.log(aluno.preco * aluno.quantidade);
}