const precos = [120, 499, 300]
const saldo = 5000

// utilizando a função reduce para diminuir do saldo
// os valores de precos
function reduzValores(saldo, precos) {
    return precos.reduce((saldo, preco) => {saldo - preco}, saldo)
}

console.log(reduzValores(saldo, precos))