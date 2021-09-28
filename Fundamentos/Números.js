const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso2 + peso1)

console.log(media.toFixed(2)) //to.Fixed é para diminuir o número de npumeros após o ponto, antes 7.8193 agora é 7.81
console.log(media.toString(2)) // comentário em binário
console.log(typeof Number) //Number com "N" é uma função com o "n" é um dado numérico
