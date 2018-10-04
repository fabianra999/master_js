'use strict'
/**
 * Transformacion de textos
 */

var numero = 654,
    texto1 = "Hola mundo ",
    texto2 = "Hola mundo 2 ";

// De number a extring
console.log(
    `Metodo = toString() \n
    descripcion => De number a extring, \n
    Variable => ${numero.toString()}, \n 
    Tipo => ${typeof numero.toString()},`
);
//*************************************************************************************** */

// Texto a mayuscula
console.log(
    `Metodo = toUpperCase() \n
    descripcion => Texto a mayuscula, \n
    Variable => ${texto1.toUpperCase()}, \n 
    Tipo => ${typeof texto1.toUpperCase()},`
);
//*************************************************************************************** */

// Texto a minusculas
console.log(
    `Metodo = toLowerCase() \n
    descripcion => Texto a minuscula, \n
    Variable => ${texto1.toLowerCase()}, \n 
    Tipo => ${typeof texto1.toLowerCase()},`
);
//*************************************************************************************** */

// Longitud de texto
console.log(
    `Metodo = length \n
    descripcion => Longitud de texto, arreglos, ETC. \n
    Variable => ${texto1}, \n 
    Longitud => ${texto1.length},`
);
//*************************************************************************************** */

// concatenar texto
console.log(
    `Metodo = +  || concat()\n
    descripcion => concatenar texto. \n
    Variable => ${texto1} y ${texto2}, \n 
    Longitud => ${texto1 + texto2.concat(numero)},`
);
//*************************************************************************************** */

// Buscar una palabra dentro de un extring
console.log(
    `Metodo = indexOf(), lastIndexOf(), search()\n
    descripcion => Buscar una palabra dentro de un extring. \n
    Variable => ${texto1}. \n 
    posiciones => ${texto1.indexOf("mundo")},`
);
//*************************************************************************************** */

// Buscar concidencias dentro de un extring
console.log(
    `Metodo =  match()\n
    descripcion => Buscar concidencias dentro de un extring. \n
    Variable => ${texto1}. \n 
    posiciones => ${texto1.match(/mundo/g)},`
);
//*************************************************************************************** */

// Buscar concidencias dentro de un extring true or false
console.log(
    `Metodo =  includes()\n
    descripcion => Buscar concidencias dentro de un extring true or false. \n
    Variable => ${texto1}. \n 
    posiciones => ${texto1.includes("mundo")},`
);
//*************************************************************************************** */