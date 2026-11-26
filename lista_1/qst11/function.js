export function maiorSequencia(sequencia){
    const infoSeq = {
        inicio: -1,
        tamanho: 0,
        valores: []
    };

    var seqTemp = [];

    if(sequencia.length != 0){
        for(let i = 0; i < sequencia.length; i++){
            if(i == 0){
                infoSeq.inicio = i;
                seqTemp.push(sequencia[i]);
            } else {
                if(sequencia[i] > seqTemp[seqTemp.length - 1]){
                    seqTemp.push(sequencia[i]);
                } else {
                    while(seqTemp.length > 0){
                        seqTemp.pop();
                    }
                    seqTemp.push(sequencia[i]);
                }
            }

            if(seqTemp.length > infoSeq.valores.length){
                while(infoSeq.valores.length > 0){
                    infoSeq.valores.pop();
                }
                for(let elemento of seqTemp){
                    infoSeq.valores.push(elemento);
                }
                infoSeq.inicio = sequencia.indexOf(infoSeq.valores[0]);
            }
        }
    }

    infoSeq.tamanho = infoSeq.valores.length;

    return infoSeq;
}