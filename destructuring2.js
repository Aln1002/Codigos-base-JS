const [a] = [10]
console.log(a)

const [n1, , n3, , n5, , n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
// executando o codigo, é possivel ver q nao existe o n5, portanto o resultado sera undefined, o estilo que se mostra é tipo chuveirinho

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
// executando o codigo, observando o resultado, se chega a seguinte conclusao, a nota, que esta sendo solicitada, esta dentro de 2 chaves e 
// ocupando a segunda casa.