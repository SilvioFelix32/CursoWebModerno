//JSON é uma linguagem que converte o código para texto, assim ele simplifica e deixa fácil a comunicação entre sistemas e linguagens diferentes
//o JSON tranfoma a função em texto, assim a função deixa de existir.

const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

//Ao converter um objeto para JSON, devemos usar "aspas duplas" é um regra absoluta
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a':1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))