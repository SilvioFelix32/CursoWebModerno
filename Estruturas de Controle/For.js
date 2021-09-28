let contador = 1
while (contador <=10) {
    console.log(`contador =  ${contador}`)
    contador++
}

for(let i = 1; i<=10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.1, 5.4, 8.5, 9.3, 7.9]
for(let i = 0; i< notas.length; i++){ //".lenght" (tamanho) ou seja, i sempre será menor que o tamanho do Array
    console.log(`i = ${notas[i]}`)
}