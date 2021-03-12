const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//pra sair de uma pasta usa o '../'

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

/* cosnt http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) */
