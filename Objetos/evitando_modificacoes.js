//object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'notebook', preco: 2000, tag: 'promocao'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.any = 'tela'
produto.descricao = 'Tela led 19 polegadas'
delete produto.tag
console.log(produto)

//objeto real
const pessoa = {nome: 'juliana', idade: 19}
Object.seal(pessoa)
console.log('selando', Object.isSealed(pessoa))

pessoa.sobrenome = 'Oliveira'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//object.freeze = selado + valores constantes