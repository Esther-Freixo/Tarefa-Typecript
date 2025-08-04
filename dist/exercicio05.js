"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apresentarPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}
let pessoa = {
    nome: "Esther",
    idade: 25,
    genero: 'feminino'
};
console.log(apresentarPessoa(pessoa));
//# sourceMappingURL=exercicio05.js.map