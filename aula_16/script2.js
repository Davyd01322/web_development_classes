class Perfil{
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.ativo = true;
        this
    }

    apresentar(){
        return "Olá, me chamo " + this.nome + " e moro em " + this.cidade;
    }
}

let eu = new Perfil("Davyd",25,"Quixeramobim-CE");

console.log(eu.apresentar());
