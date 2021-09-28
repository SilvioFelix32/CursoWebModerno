//Com "LET" a VAR "i" só vai estar disponivel dentro do bloco
//Já com VAR, ele vai ler mesmo a que está fora
for (let i = 0; i < 10; i ++) {
    console.log(i)
}
console.log('i =', i) //esse é um "i" após o laço ter terminado
