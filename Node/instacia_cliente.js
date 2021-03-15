const contadorA = require('./instacia_unica')
const contadorB = require('./instacia_unica')

const contadorC = require('./instacia_nova')()
const contadorD = require('./instacia_nova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorA.inc()
contadorA.inc()
console.log(contadorC.valor, contadorD.valor)