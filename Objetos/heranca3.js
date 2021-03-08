const pai = { nome: 'alzimar', corCabelo: 'castanho'}

const filho1 = Object.create(pai)
filho1.nome = 'Alan'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: { value: 'Alvaro', writable: false, enumerable: true}
})

console.log(filho2.nome)
filho2.nome = 'Alvaro2'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for(let key in filho2) {
    filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por herança ${key}`)
}
 