console.log(typeof Object) //Objeto é uma FUNÇÃO
console.log(typeof new Object)//Instanciando uma Função use a palavra "NEW"

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)