//FOR/IN não é uma das melhores opções para se acessar um array
//FOR/IN te dará o indice de cada elemento

const notas = [5.4, 6.1, 7.2, 8.3, 9.4]
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Silvio',
    sobrenome: 'Félix',
    idade: 23,
    peso: 65,
    cor: 'Pardo',
    tamanho: 1.74
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

