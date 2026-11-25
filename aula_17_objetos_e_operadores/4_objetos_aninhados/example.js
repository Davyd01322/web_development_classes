// Um objeto  pode conter outro objeto
const Usuario = {
    nome: "Carlos",
    contato: {
        email: "carlos@email.com",
        telefone: "99999-0000"
    }
};

console.log(Usuario.contato.email);