//let e const ---> palavras reservadas para definir uma variavel 
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
//console.log(b) == ao tentar executar o comando assim o let nao consegue ser lido, pois ele não consegue acesso fora do bloco delimitado pelo "{}"

//template String

const produto = 'ipad'
console.log(`${produto} é caro!`)


//destruturing 
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = { nome: 'Ana', idade: 9}
console.log(idade, nome)
