
// a) números de 1 a 100 

for (let inicio = 1; inicio <= 100; inicio ++) {
    console.log(inicio)
}

// b) quando chegar no número 50 interrompa a instrução e pare o loop 

for (let inicio = 1; inicio <= 100; inicio ++) {

    if (inicio === 51) { //para interromper, necessário colocar que o próximo número não vira
        break
    }
    console.log(inicio)
}

// c) quando chegar no número 50 pule a instrução 

for (let inicio = 1; inicio <= 100; inicio ++) {

    if (inicio === 50) {
        continue
    }
    console.log(inicio)
}

