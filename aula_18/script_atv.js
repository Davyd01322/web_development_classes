fetch("https://brasilapi.com.br/api/cep/v1/63800000")
    .then(resposta => resposta.json())
    .then(endereco => {
        const {cep, city, street, state} = endereco;
        console.log(cep, city, street, state);
    });

