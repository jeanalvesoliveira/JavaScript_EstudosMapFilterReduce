const valores = [9, 10, 3, 4, 7]
const numero = 2

// utilizando o map para percorrer o array
// multiplicando os valores pelo numero
console.log(
    valores.map((valor) => valor * numero)
)

// a gora teremos o mesmo resultado com o forEach
// com a diferença que o retorno deve ser armazenado numa variável
console.log(
    valores.forEach((valor) => valor * numero) // retorna undefined porque não foi atribuído a uma variável
    
)

const novosValores = []
valores.forEach((valor) => novosValores.push(valor * numero)) // atribuindo o resultado à uma nova variável
console.log(novosValores)
