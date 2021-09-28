let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//funções simples e de uma linha são bem usadas e bem úteis
dobro =  a => 2 * a //return está implicito 
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //FUNÇÃO USADA POR PADRÃO
ola = _ => 'Olá'
console.log(ola())

