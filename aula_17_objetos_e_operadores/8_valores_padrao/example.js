// Um valor padrão é usado somente quando a propriedade é undefined
const configuracao = {
    tema: "escuro"
};

const {
    tema,
    idioma = "pt-Br",
    notificacoes = true
} = configuracao;

console.log(idioma);