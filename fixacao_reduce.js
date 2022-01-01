const valores = [10, 14, 56, 33, 24, 45]

// função reduce retorna um acumulador
// resultado de determinada operação realizada
// em cada elemento do array
console.log(
    valores.reduce((totalSoma, valor) => totalSoma + valor) //retorna a soma de todos os valores do array
)