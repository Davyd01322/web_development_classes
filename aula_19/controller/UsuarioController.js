import { UsuarioModel } from "../model/UsuarioModel.js";

export class UsuarioController{
    constructor(){
        this.userModel = new UsuarioModel;
    }

    render(){
        console.log("Deu certo" + this.userModel.nome);
    }
}