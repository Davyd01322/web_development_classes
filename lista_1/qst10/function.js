export function gerarRelatorio(usuarios){
    let nomes = [];
    let perfis = [];
    let ativos = [];
    let emails = [];
    let senhas = [];

    let relatorio = {porPerfil, totalAtivos, emailsDuplicados};

    for(let usuario of usuarios){
        nomes.push(usuario.nome);
        perfis.push(usuario.perfil);
        ativos.push(usuario.ativo);
        emails.push(usuario.email);
        senhas.push(usuario.senha);
    }

    for(let perfil of perfis){
        relatorio.porPerfil
    }
}