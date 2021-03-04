const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// percebe-se a diferenca entre o break e o continue, break para o codigo no limite delimitado
//continue pula o elemento marcado e continua a ler o codigo.

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`par = ${a}, ${b}`)
    }
}