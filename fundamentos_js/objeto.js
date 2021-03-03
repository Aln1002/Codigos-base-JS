const prod1 = {}
// par de chaves representa um objeto

prod1.nome = 'celular ultra mega'
prod1.preco = 2500.00
prod1['desconto legal'] = 500 // evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
}
// consigo transformar um objeto em json, apenas adicionando aspas duplas aos elementos
console.log(prod2)
