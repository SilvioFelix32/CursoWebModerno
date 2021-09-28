//Um operador Ternário é formado por 3 partes
//uma expressão de V ou F
//A primeira parte se for V
// a segunda parte se for F
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

//Também é possivel usar dentro de uma função  ARROW

const Resultado = nota => { 
    nota >= 7 ? 'Aprovado' : 'Reprovado'
    console.log(Resultado(7.1))
    console.log(Resultado(6.7))
}
