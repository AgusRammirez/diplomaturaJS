//U3 Parte1
// Ejercicio 1
// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie

// 1000 a 10000 metros = bicicleta

// 10000 a 30000 metros = colectivo

// 30000 a 100000 metros = auto

// +100000 = avion

function distancia(x) {
    if (x >= 0 && x <= 1000) {
        return "pie"
    } else if (x >= 1000 && x <= 10000) {
        return "bicicleta"
    } else if (x >= 10000 && x <= 30000) {
        return "colectivo"
    } else if (x >= 30000 && x <= 100000) {
        return "auto"
    } else {
        return "avion"
    }
}
console.log(distancia(40000))

// Ejercicio 2
// Crear el código que reciba como parámetro un array de números y devuelva el mayor.

function maximo(numeros) {
    return Math.max.apply(null, numeros)
}

console.log(maximo([1,23,56,887,5]))
