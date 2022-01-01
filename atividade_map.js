// utilizando os objetos abaixo como parâmetro this do map
const obj1 = {
    valor: 5
}
const obj2 = {
    valor: 7
}

// map com this
function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.valor
    }, thisArg)
}

console.log(mapComThis([2, 4, 6, 8, 10], obj1))
console.log(mapComThis([2, 4, 6, 8, 10], obj2))


// map sem this
function mapSemThis(array) {
    return array.map((item) => item * 2)
}

console.log(mapSemThis([2, 4, 6, 8, 10]))