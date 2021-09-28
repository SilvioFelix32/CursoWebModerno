
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //entre os espaços da virgurla ficou um objeto não definido
console.log(n1, n3, n5, n6) 

//Não faz sentido usar esses códigos, porque fica de dificil leitura
const [ , [, nota] ] = [ [, 8, 8], [8, 6, 8]] //A virgula no primeiro elementro quer dizer que eu ignorei ele e fui para o segundo
console.log(nota)

//PARA DESUSTRUTURAR UM OBJETO, USE "{}" CHAVES
//PARA DESUSTRUTURAR UM ARRAY USE "[]" COLCHETES
//BASTA ENTENDER SE O OPERADOR ESTÁ DO LADO DIREITO OU ESQUERDO