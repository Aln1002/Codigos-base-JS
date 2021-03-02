// armazenando uma funcao em uma variavel
const imprimirsoma = function (a, b) {
    console.log(a + b)
}

imprimirsoma(2, 3)

// armazenamento uma funcao arrow em uma variavel
// simbolo de "=>" subistitui o nome function
const soma = (a, b) => {
 return a + b
}

console.log(soma(2, 3))

// retorno implicito
// quando a funcao nao possui chaves quer dizer q a funcao é de uma linha so
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

//funcao com um elemento so
const imprimir2 = a => console.log(a)
imprimir2('aprendi porra')