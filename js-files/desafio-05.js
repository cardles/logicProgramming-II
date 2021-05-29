function calculadoraIniciante (entrada1, entrada2, tipoDeOperacao) {

    switch (tipoDeOperacao) {
        case 'soma':
            return entrada1 + entrada2

        case 'multiplicacao':
            return entrada1 * entrada2

        case 'divisao':
            return entrada1 / entrada2

        case 'subtracao':
            return entrada1 - entrada2

        default:
            return 'Insira uma entrada válida.'
    }
}


console.log(calculadoraIniciante(3, 5, 'subtracao'))
console.log(calculadoraIniciante(7, 19, 'multiplicacao'))
console.log(calculadoraIniciante(75, 13, 'soma'))
console.log(calculadoraIniciante(18, 5, 'divisao'))
