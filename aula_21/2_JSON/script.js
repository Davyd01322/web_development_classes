const aluno = { nome: "Ana"};
const texto = JSON.stringify(aluno);

// localStorage guarda valores como
localStorage.setItem("aluno",texto);