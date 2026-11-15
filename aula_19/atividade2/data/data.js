export class Tarefa{
    constructor(id, titulo, concluido){
        this.id = id;
        this.titulo = titulo;
        this.concluido = concluido;
    }

    concluir(){
        this.concluido = true;
    }
}