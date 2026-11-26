export function gerarRelatorio(usuarios){
    const relatorio = {
        porPerfil: {
            aluno: [],
            monitor: []
        },
        totalAtivos: 0,
        emailsDuplicados: []
    };

    var listaEmails = [];

    for(let usuario of usuarios){
        const {perfil, ativo, senha, ...aluno} = usuario;
        
        console.log(aluno);

        if(perfil == "aluno"){
            relatorio.porPerfil.aluno.push(aluno);
        } else if (perfil == "monitor"){
            relatorio.porPerfil.monitor.push(aluno);
        }

        if(ativo){
            relatorio.totalAtivos += 1;
        }

        listaEmails.push(aluno.email);
    }

    for(let email of listaEmails){
        var numIguais = 0;
        for(let outroEmail of listaEmails){
            if(email.toLowerCase() == outroEmail.toLowerCase()){
                numIguais = numIguais + 1;
            }
        }

        if(numIguais >= 2){
            relatorio.emailsDuplicados.push(email.toLowerCase());
        }
    }

    for(var i = 0; i < relatorio.emailsDuplicados.length; i++){
        for(var j = 0; j < relatorio.emailsDuplicados.length; j++){
            if(relatorio.emailsDuplicados[i] == relatorio.emailsDuplicados[j]){
                var temp = relatorio.emailsDuplicados[j];
                relatorio.emailsDuplicados[j] = relatorio.emailsDuplicados[relatorio.emailsDuplicados.length - 1];
                relatorio.emailsDuplicados[relatorio.emailsDuplicados.length - 1] = temp;
                relatorio.emailsDuplicados.pop();
            }
        }
    }

    return relatorio;    
}