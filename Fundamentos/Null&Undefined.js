//Atribuição por valor, e atribuição por referência
const a = {name: 'Teste'}
a
{name: 'Teste'}

const b = a //Atibuição por referencia é, quando você coloca um atributo no qual...
//se eu mudar ele em A, B vai ilgualar o valor, e vice e versa.
b.name = 'Opa'
"Opa"
a
{name: "Opa"}

let c = 3 //Nesse caso número 3 é apenas um valor primitivo na linguagem, por isso ele não iguala
//quando você trabalha com tipos primitios, você trablha com uma cópia do valor
let d = c

d++ // A Função "++" vai incrementar um valor na variável
console.log(d)
console.log(c)
