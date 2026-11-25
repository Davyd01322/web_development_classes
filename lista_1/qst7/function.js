export function resumirTurma(alunos){
    let aprovados = [];
    let mediaTurma = 0;
    let melhorAluno = "";
    let melhorMedia = 0;
    let numAlunos = 0;

    for(let aluno of alunos){
        var mediaAluno = media(aluno);

        if(mediaAluno >= 7){
            aprovados.push(aluno.nome);
        }

        if(mediaAluno > melhorMedia){
            melhorMedia = mediaAluno;
            melhorAluno = aluno.nome;
        }

        mediaTurma = mediaTurma + mediaAluno;
        
        numAlunos = numAlunos + 1;
    }

    mediaTurma = mediaTurma / numAlunos;

    return {aprovados, mediaTurma, melhorAluno}
}

function media(aluno){
    return (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;
}