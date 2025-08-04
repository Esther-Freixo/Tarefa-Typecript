type Genero = 'masculino' | 'feminino';

interface IPessoa {
    nome: string;
    idade: number;
    genero: Genero;
}


function apresentarPessoa(pessoa: IPessoa): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}


let pessoa: IPessoa = {
    nome: "Esther",
    idade: 25,
    genero: 'feminino'
};

console.log(apresentarPessoa(pessoa));