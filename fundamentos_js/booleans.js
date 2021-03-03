let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

//"!!" é uma negação 

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'') // se deixar em branco é a mesma coisa de ter um texto normal
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(('' || null || 0 || ' ')) // || quer dizer "ou"
console.log('pra finalizar')
console.log(!!('' || null || 0 || ' '))

let nome = 'lucas'
console.log('nome || desconhecido')








