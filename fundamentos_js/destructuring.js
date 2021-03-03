// novo recurso  do ES2015

const pessoa = {
    nome: 'Alan',
    idade: 23,
    endereco: {
        logradouro: 'quadra 4 conjunto C',
        numero: '36a'

    }
}

const { nome, idade } =  pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada) // demonstracao que quando solicitado um elemento que nao existe, ele dara undefined

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num}} = pessoa
console.log(ag, num) // nao foi declarado nenhuma ag, e nenhum num dentro do elemento pessoa.
