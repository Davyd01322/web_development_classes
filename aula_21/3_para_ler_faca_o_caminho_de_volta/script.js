const aluno = { nome: "Ana"};
const texto = JSON.stringify(aluno);

localStorage.setItem("aluno",texto);

const texto_retorno = localStorage.getItem("aluno");

if (texto_retorno != null){
    const aluno = JSON.parse(texto_retorno);
    console.log(aluno.nome);
}