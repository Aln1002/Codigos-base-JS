//closure é o escopo criado quando uma funcao é declarada
// esse escpopo permite a funcao acessar e manipular as variaveis externo da funcao

//contexto lexico em acao

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora() 
console.log(minhaFuncao)