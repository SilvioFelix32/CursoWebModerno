const contadorA = require('./instanciaUnica')
const ContadorB = require('./instanciaUnica')

const ContadorC = require ('./instanciaNova')()
const ContadorD = require ('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, ContadorB.valor)

ContadorC.inc()
ContadorC.inc()
console.log(ContadorC.valor,ContadorD.valor)