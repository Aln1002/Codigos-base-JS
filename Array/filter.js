const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false },
]
console.log(produtos.filter(function(p){
    return p.preco > 2400
})) // usando o return false, retorna um array vazio, retornando um valor maior ou maior, ele seleciona os produtos acima ou abaixo do valor.

const caro = produto => produto.preco>= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
