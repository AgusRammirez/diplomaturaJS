//U4 Parte2
//Ejercicio 1
function colorM() {
    var color1 = document.querySelector("body")
    color1.style.backgroundColor = "magenta";
}

function colorC() {
    var color2 = document.querySelector("body")
    color2.style.backgroundColor = "blue";
}

function colorV() {
    var color3 = document.querySelector("body")
    color3.style.backgroundColor = "green";
}

//Ejercicio 2
function contador() {
    var total = 50;
    setTimeout(function () {
        var valor = document.getElementById("contador");
        var respuesta = document.getElementById("resultado");
        var cantidad = valor.value.length;
        document.getElementById("resultado").innerHTML = cantidad + " caracteres que te quedan " + (total - cantidad);
        if (cantidad > total) {
            respuesta.style.color = "red";
        } else {
            respuesta.style.color = "black";
        }
    });
}

//Ejercicio 3
var alumnos = [

    {

        nombre: 'Juan Gomez',

        nota: 7

    }, {

        nombre: 'Pedro Rodriguez',

        nota: 4

    }, {

        nombre: 'Roxana García',

        nota: 8

    }, {

        nombre: 'Luciano Lopez',

        nota: 5

    }, {

        nombre: 'Fernanda Gimenez',

        nota: 6

    }, {

        nombre: 'Florencia Martinez',

        nota: 10

    }, {

        nombre: 'Raul Sanchez',

        nota: 7

    }, {

        nombre: 'Sandra Figueroa',

        nota: 8

    }

];

var aprobados = alumnos.filter(alum => alum.nota >= 7);
console.log(aprobados); 
