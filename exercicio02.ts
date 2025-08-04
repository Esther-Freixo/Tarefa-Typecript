type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(param: StatusRequisicao): string {
    switch(param) {
        case "sucesso":
            return `Dados carregados com sucesso`;
        case "erro":
            return `Erro ao carregar dados.`;
        case "carregando":
            return`Aguarde...carregando dados.`;
    }
}