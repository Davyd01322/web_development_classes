fetch("https://brasilapi.com.br/api/cep/v1/01001000")
    .then(resposta => resposta.json())
    .then(endereco => {
        const {cep, ...dados} = endereco;
        console.log(cep);
        console.log(dados);
    })