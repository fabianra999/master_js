'use strict'
/**
 * Funciones
 */
function calculadora0() {
    return `Hola soy la calculadora`;
}
//calculadora0();
//*************************************************************************************** */

/**
 * Funcion
 *  con parametros
 */
function calculadora1(numero1, numero2) {
    console.log(`Suma = ${numero1 + numero2}`);
    console.log(`Resta = ${numero1 - numero2}`);
    console.log(`Multiplica = ${numero1 * numero2}`);
    console.log(`Divide = ${numero1 / numero2}`);
}
//calculadora1(45, 45);
//*************************************************************************************** */

/**
 * Funcion
 *  con parametros opcionales
 */
function calculadora2(numero1, numero2, ver = false) {
    if (ver == false) {
        console.log(`Suma = ${numero1 + numero2}`);
        console.log(`Resta = ${numero1 - numero2}`);
        console.log(`Multiplica = ${numero1 * numero2}`);
        console.log(`Divide = ${numero1 / numero2}`);
    } else {
        document.write(`Suma = ${numero1 + numero2} <br>`);
        document.write(`Resta = ${numero1 - numero2} <br>`);
        document.write(`Multiplica = ${numero1 * numero2} <br>`);
        document.write(`Divide = ${numero1 / numero2} <br>`);
    }

}
//calculadora2(2, 55, true);
//calculadora2(2, 55);
//*************************************************************************************** */

/**
 * Funcion
 *  Funcion dentro de funcion
 */

function terminal(numero1, numero2) {
    console.log(`Suma = ${numero1 + numero2}`);
    console.log(`Resta = ${numero1 - numero2}`);
    console.log(`Multiplica = ${numero1 * numero2}`);
    console.log(`Divide = ${numero1 / numero2}`);
}

function pantalla(numero1, numero2) {
    document.write(`Suma = ${numero1 + numero2} <br>`);
    document.write(`Resta = ${numero1 - numero2} <br>`);
    document.write(`Multiplica = ${numero1 * numero2} <br>`);
    document.write(`Divide = ${numero1 / numero2} <br>`);
}

function calculadora3(numero1, numero2, ver = false) {
    if (ver == false) {
        terminal(numero1, numero2)
    } else {
        pantalla(numero1, numero2)
    }

}

//calculadora3(5, 55, true);
//calculadora3(5, 55);
//*************************************************************************************** */


/**
 * Funcion
 *  parametros Rest Spread
 * Rest function(...resto){}
 *  => Crea un arreglo de parametros para la funcion
 * Spread function(...Arreglo)
 *  => inserta un arreglo dentro de los parametros en el llamado de la funcion
 */
function listadoFrutas(fruta1, fruta2, ...resto) {
    console.log(`Fruta 1 ${fruta1}`);
    console.log(`Fruta 2 ${fruta2}`);
    console.log(resto);
}
// Function Rest
//listadoFrutas('Naranja', 'Manzana', 'Sandia', 'Pera', 'Melon', 'coco');

var frutas = ['NaranjaSpread', 'ManzanaSpread'];
// Function  Spread
//listadoFrutas(...frutas, 'Naranja', 'Manzana', 'Sandia', 'Pera', 'Melon', 'coco');
//*************************************************************************************** */

/**
 * Funciones 
 * Anonimas => Funcion que no tine nombre 
 */

var pelicula = function(pelicula) {
    return `el nombnre de la pelicula es ${pelicula}`
}

//console.log(pelicula("Yea"));
//*************************************************************************************** */


/**
 * Funciones 
 * Callbacks => Funcion anonima q se pasa como parametro a otra funcion
 */

var sumando = function(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

/* console.log(
    sumando(
        5, 5,
        function(dato) {
            console.log("La suma es: ", dato)
        },
        function(dato) {
            console.log("La suma por dos es: ", dato)
        }
    )
); */
//*************************************************************************************** */


/**
 * Funciones 
 * De flecha
 */

var sumando = (numero1, numero2, sumaYmuestra, sumaPorDos) => {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

console.log(
    sumando(
        5, 5,
        (dato) => {
            console.log("La suma es: ", dato)
        },
        (dato) => {
            console.log("La suma por dos es: ", dato)
        }
    )
);
//*************************************************************************************** */