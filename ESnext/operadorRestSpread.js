//rest é pra juntar
//spread é pra espalhar

//usar spread com objeto
const funcionario = {nome: 'maria', salario: 1499.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)