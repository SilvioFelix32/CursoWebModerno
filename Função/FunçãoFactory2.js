
function criarProduto(nome,preço) {
    return{
        nome,
        preço,
        desconto: 0.1
    }
}


console.log(criarProduto('Notebook', 2999.0))
console.log(criarProduto('Celular', 1000.99))