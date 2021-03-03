let num1 = 1
let num2 = 2

num1++ 
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // evite usar tantos operadores em uma linha

//pq da verdadeiro? pq o ++ foi executado primeiro antes de comparar.

console.log(num1 === num2)
