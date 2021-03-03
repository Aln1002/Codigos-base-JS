/* um individuo tem 2 trabalhos para fazer, se os dois trabalhos derem certo, ele ira ao shopping fim de semana
comprar uma tv de 50 polegadas e tomar sorvete, se apenas um trabalho der certo, ele ira comprar uma de 32 e tomar sorvete,
se nenhum trabalho der certo, ele não vai tomar sorvete e nem comprar a tv*/

// então o "e" é a tv de 50 o "ou exclusivo" é a tv de 32 e o "ou" sorvete e o "se" é a negação

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // operador bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // outra forma de fazer a mesma operação acima
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, false))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
