type ILivro = {
    titulo: string,
    autor: string,
    anoPublicacao: number
}

function resumirLivro(livro: ILivro): string {
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`;
}