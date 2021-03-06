const carrinho = [
    ' { "nome": "Borracha", "preço": 3.45}',
    ' { "nome": "Caderno", "preço": 13.90}',
    ' { "nome": "Kit de Lapis", "preço": 41.22 }',
    ' { "nome": "Caneta", "preço": 7.50}'
]
//Retornar um array com os preços apenas

const paraObjeto = json => JSON.parse(json)
const apenasPreço = produto => produto.preço

const resultado = carrinho.map(paraObjeto).map(apenasPreço)
console.log(resultado)