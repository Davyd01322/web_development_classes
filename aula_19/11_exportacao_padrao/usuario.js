export default class Usuario{
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }

    apresentar(){
        return this.nome + " - " + this.email;
    }
}