const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//pra sair de uma pasta usa o '../'

const saudacao = require('saudacao')
console.log(saudacao.ola)

cosnt http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
