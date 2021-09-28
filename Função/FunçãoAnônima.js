const soma = function(x, y) {
    return x + y    
}

const Imprimirresultado = function (a, b, operação = soma){
    console.log(operação(a,b))
}

Imprimirresultado(3, 4)
Imprimirresultado(3, 4, soma)
Imprimirresultado(3, 4, function(x,y){
    return x - y
})
Imprimirresultado(3, 4, (x, y) => x * y )

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()