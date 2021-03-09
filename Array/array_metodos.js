const pilotos = ['vetel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // massa quebrou o carro! esse metodo pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)