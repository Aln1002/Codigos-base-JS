// par nome/valor
const saudacao = 'opa' // contexto lexico 1 


function exec() {
    const saudacao = 'falaaaa'
    return saudacao 
}

//objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Alan',
    idade: 23,
    peso: 60,
    endereco: {
        logradouro: 'quadra 4 conjuno C',
        casa: '36a'
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)