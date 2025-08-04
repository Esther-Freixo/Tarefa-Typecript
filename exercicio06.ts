function retornarElemento<T>(array: T[], index: number): T | undefined {
    return array[index];
}


//teste
console.log(retornarElemento([10, 20, 30], 1));
console.log(retornarElemento(["a", "b", "c"], 0)); 