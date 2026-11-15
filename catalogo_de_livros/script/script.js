const API = "https://livros.acilab.com.br/api/livros";

const listar = document.getElementById('listar');
const editar = document.getElementById('editar');
const cadastrar = document.getElementById('cadastrar');
const excluir = document.getElementById('excluir');


function listarLivros(){
    fetch(API,{method: "GET"})
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

function adicionarLivro(titulo, autor){
    fetch(API, {
        method: "POST",
        headers: {"Content-Type": "aplication/json"},
        body: JSON.stringify({titulo,autor})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

function cadastrarLivro(){
    console.log("você clicou em cadastrar");
};

function editarLivro(){
    console.log("você clicou em editar");
}

function excluirLivro(){
    console.log("você clicou em excluir");
}

listar.addEventListener('click', listarLivros);
cadastrar.addEventListener('click', cadastrarLivro);
editar.addEventListener('click', editarLivro);
excluir.addEventListener('click', excluirLivro);