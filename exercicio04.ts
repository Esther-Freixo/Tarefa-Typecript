type Usuario = {
    nome: string,
    email: string,
    exibirInfo: () => string
}

const user = {
    nome: "Esther",
    email: "esther@gmail.com",
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
}

console.log(user.exibirInfo());
