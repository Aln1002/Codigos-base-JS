let valor // não inicializa
console.log(valor) // não foi alocado um valor
// console.log(valor2) --> nao foi declarado

valor = null // nulo quer dizer auzencia de valor
console.log(valor)


const produto = {}
console.log(produto.preco)

produto.preco = 759
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco

