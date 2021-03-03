const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
//arrays começa com 0 e assim por diante

// virgula é utilizada para separar elementos

console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

//para incluir mais um elemento no array, pode se fazer o q foi feito acima, sem ter que ir la e adicionar
//IMPORTANTE SEMPRE LEMBRAR DE COLOCAR QUAL A POSIÇAO DO ELEMENTO

valores[3] = 15
console.log(valores)

//como fiz acima, eu subistitui o valor do elemento 3, que era 6.3, passou a ser 15

valores.push({id: 2}, false, null, 'texto')
console.log(valores)
//é utilizado para adicionar valores ao array

console.log(valores.pop())
//ele tira o ultimo elemento do array

delete valores[0]
console.log(valores)
//deleta o elemento 0 do array

console.log(typeof valores)
//array é do tipo objeto
