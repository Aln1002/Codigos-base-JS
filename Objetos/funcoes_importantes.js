const pessoa = {
    nome: 'rebeca',
    idade: 19,
    peso: 55
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)

})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '11/03/1997'
})

pessoa.dataDeNascimento = '11/03/1997'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

//object.assing (ECMASscript 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)