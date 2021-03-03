function tratarErrElancar(erro) {
    //throw new Error('suporte ja foi acionado')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
        //posso tambem colocar um id, muito comum em falha de sistemas conhecidos, que os erros ja são identificados.
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErrElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Alan' }
imprimirNomeGritado(obj)