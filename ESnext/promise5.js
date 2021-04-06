function funcionarOuNao(valor, chanceEerro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceEerro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.9)
    .then(v => `valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`erro esp.: ${err}`)
    )
    .then(() => console.log('quase fim'))
    .catch(err => console.log(`erro geral: ${err}`))
    .then(() => console.log('fim!'))