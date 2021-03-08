/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function quest4(divi1, divi2) {
    console.log('resultado:' + Math.floor(divi1/divi2))
    console.log(`Resto: ${divi1 % divi2}`)
}

quest4(10, 5)