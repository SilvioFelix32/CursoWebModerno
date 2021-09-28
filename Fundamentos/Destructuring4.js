//Diferença entre desustruturar um Array e Um objeto
//ARRAY
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //Aqui eu desistruturei para inverter os valores de min e max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand( [50, 40]))
console.log(rand([955]) )
console.log(rand([, 10]))
console.log(rand([]))