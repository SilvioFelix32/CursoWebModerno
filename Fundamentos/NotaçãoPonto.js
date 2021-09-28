//Notação ponto, é um acessor de propriedade, ele te permite acessar certos atributos dentro de uma função
console.log(Math.ceil(6.1)) //Ceil é teto, arredondar para cima
const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //"This" significa o nome associado a função, isso quer dizer que o nome ficará visivel para quem quer instanciar um objeto
//ou seja "this" vai tornar o objeto publico ou visivel
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)