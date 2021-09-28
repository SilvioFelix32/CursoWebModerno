//Armazenando ima função em uma VAR
//função anônima ou sem nome
const imprimirSoma = function (a,b){
    console.log(a+b)
}
imprimirSoma(2, 3)

//Armazenando uma FUNÇÃO ARROW em uma VAR
//O elemento "=>" substitui ou tem o mesmo valor que FUNÇÃO (=> = FUNÇÃO)
const soma = (a,b) => {
    return a + b
}
console.log(soma(2, 3))

//Retorno implicito, FUNÇÃO ARROW
// QUANDO EU TENHO UMA FUNÇÃO SEM "{}" CHAVES, SIGNIFICA QUE ELA IRÁ EXECUTAR APENAS UMA LIINHA
const subtração = (a, b) => a - b
console.log(subtração(2, 3))

const imprimir2 = a => console.log(a)
imprimir2(a= 'legal')