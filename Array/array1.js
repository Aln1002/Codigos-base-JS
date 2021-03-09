console.log(typeof Array, typeof new Array, typeof[])

let aprovado = new Array('bia', 'carlos', 'ana')
console.log(aprovado)

aprovado = ['bia', 'carlos', 'ana']
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])

aprovado[3] = 'paulo'
aprovado.push('abia')
console.log(aprovado.length)

aprovado[9] = 'rafael'
console.log(aprovado.length)
console.log(aprovado[8] === undefined) 

console.log(aprovado)
aprovado.sort() 
console.log(aprovado)

delete aprovado[1]
console.log(aprovado[1])
console.log(aprovado[2])

aprovado = ['bia', 'carlos', 'ana']
aprovado.splice(1, 0, 'elemento1', 'elemento2') // splice pode ser usado para excluir e incluir elementos de dentro do array
console.log(aprovado)
