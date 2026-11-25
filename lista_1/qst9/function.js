export function construirConfiguracao(padrao, ...camadas){
    const retorno = structuredClone(padrao);


    for(var i = 0; i < camadas.length; i++){
        retorno.tema = camadas[i].tema;

        if(camadas[i].interface.fonte != 0){
            retorno.interface.fonte = camadas[i].interface.fonte;
        }

        if(camadas[i].interface.espacamento != 0){
            retorno.interface.fonte = camadas[i].interface.fonte;
        }

        for(var j = 0; j < camadas[i].atalhos.length; j++){
            // A flag responde a pergunta: esse item está presente no array?
            var flag = false;
            for(var k = 0; k < retorno.atalhos.length; k++){
                if(camadas[i].atalhos[j] == retorno.atalhos[k]){
                    flag = true;
                }
            }

            if(!flag){
                retorno.atalhos.push(camadas[i].atalhos[j]);
            }
        }
    }

    return retorno;
}