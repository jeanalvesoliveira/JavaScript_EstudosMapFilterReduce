const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// utilizando o filter para retornar somente valores pares
function filtraPares(valores) {
    return valores.filter((valor) => !(valor % 2))
}

console.log(filtraPares(valores))
