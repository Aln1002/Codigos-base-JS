
const escola = "cod3r"

console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))

console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('escola '.concat(escola).concat("!"))
console.log('escola ' + escola  + ("!"))
/* podemos substituir o concat pelo sinal de + bom que reduz o codigo e deixa mais profissional
porem ele usado de forma matematica, ele ao inves de somar, ele junta os numeros, ex: console.log('3' + 2) ficaria 32 ao inves de 5 */
console.log('3' + 2)
/*como fiz no exemplo acima */ 

console.log(escola.replace(0, 'o'))

console.log('ana,maria,pedro'.split(',')) 
console.log('ana,maria,pedro'.split(/,/)) 
// usando o ',' ou /,/ o resultado é o mesmo
