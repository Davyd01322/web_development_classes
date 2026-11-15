fetch("https://brasilapi.com.br/api/cep/v1/01001000")
    .then(resposta => resposta.json())
    .then(endereco => {
        const enderecoCompleto = {...endereco, numero: 66, complemento: "Próx. a praça"}
        console.log(enderecoCompleto);
    })