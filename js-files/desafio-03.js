function parOuImpar (numero1, numero2) {

    let resultadoDivisao = numero1 / numero2
    console.log(`O resultado da divisão é ${resultadoDivisao}`)

    if (typeof numero1 != 'number' || typeof numero2 != 'number') {
        return `A entrada não é um número`
    } else if (resultadoDivisao % 2 === 0) {
        return `O numero é par`
    } else {
        return `O numero é impar`
    }
}

console.log(parOuImpar(10, 5))