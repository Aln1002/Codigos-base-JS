// função em JS é First-Class Object (Cintezens)
// Higher-Order Function

// criar de forma literal
// voce pode declarar dentro dos paranteses os parametros ou no bloco, nas chaves
function fun1() {} 

//armazenar em uma variavel
const fun2 = function () {} // se vc declarar a funcao e nao colocar o nome, a funcao fica anonima

//armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]

console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

//passar funcao como parametros
function run(fun) {
    fun()
}
run(function () {console.log('executando...') })

//uma funcao pode retornar/conter uma funcao

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
// acima um exemplo para chamar uma funcao no resultado da funcao.
