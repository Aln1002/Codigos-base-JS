/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capInicial, taxaJuros, tempoDeAplicacao) {
   return capInicial * taxaJuros * tempoDeAplicacao
    
}


function jurosComposto (capInicial, taxaJuros, tempoDeAplicacao) {
    return capInicial * (1 + taxaJuros) ** tempoDeAplicacao
}

console.log(`O montante da aplicacao financeira sob o regime simples de juros é ${jurosSimples(1000, 0.15, 12)}`)
console.log(`O montante da aplicacao financeira sob o regime simples de composto é ${jurosComposto(1000, 0.15, 12).toFixed(2)}`)