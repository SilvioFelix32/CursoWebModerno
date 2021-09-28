function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula ('Bem vindo', 123)// O operador "NEW" cria um novo objeto, que vai apontar pra função AULA
const aula2 = new Aula ('Até Breve', 456)
console.log(aula1, aula2)

//simulando o NEW
function novo (f, ...params) { //o Operador "..."  Spread Cria um ARRAY, e concatena o conjunto de parametros passados.
    const obj = {}
    obj.__proto__ = f.prototype 
    f.apply(obj, params)
    return obj 
}
const aula3 = novo(Aula, ' Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)