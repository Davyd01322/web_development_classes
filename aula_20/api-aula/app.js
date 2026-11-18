const express = require("express");
const app = express();

const livros = {
    id: 1,
    title:"Livro 1",
    autor: "autor 1",
    anoPublicação:"2020",
    editora:"editora"
}

app.get("/inicio",(req,res)=>{
    res.send("<h1>Olá Mundo!</h1>");
})

app.listen(3000,()=>{
    console.log("servidor rodando");
})