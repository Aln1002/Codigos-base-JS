// funcao sem retorno 
// funcao agrupa uma sentenca de codigo
// funcao tem blocos de codigo
// funcao recebe parametros de entrada
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // se nao declarar os 2, ele vai somar um pelo vazio do outro, que dara um not a number
imprimirSoma(9, 10, 5, 6, 7, 8) //se nao tiver os elementos reconhecidos ele ignora os demais

// funcao com retorno
// declarando um numero padrao de b
function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // nao foi delcarado nenhum valor para o primeiro elemento, então da NaN
