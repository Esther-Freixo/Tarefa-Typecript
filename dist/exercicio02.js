"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarMensagemStatus(param) {
    switch (param) {
        case "sucesso":
            return `Dados carregados com sucesso`;
        case "erro":
            return `Erro ao carregar dados.`;
        case "carregando":
            return `Aguarde...carregando dados.`;
    }
}
//# sourceMappingURL=exercicio02.js.map