//par nome/valor

const saudação = 'Opa' //Contexto Léxico, local fisico aonde a VAR foi definida

function exec() {
    const saudação = 'Fala' //contexto léxico 2
    return saudação
}

//Objetos são grupos alinhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudação)
console.log(exec())
console.log(cliente) 