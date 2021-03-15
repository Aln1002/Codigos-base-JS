// console.log(global)
globalThis.MinhaApp = { //se adicionar o object.freeze só é lido o sistema legal, não le o eita
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
}