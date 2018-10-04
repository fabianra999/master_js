'use strict'
/**
 * Funciones
 */
function holaMundo(texto) {
    console.log(texto);

    // llama variable fuera de la funcion
    console.log(numero);

    var varEnFuncion = "Variable en una funcion";
}

// Variables Glovales
var texto = "Variable Global";
var numero = 123;

// Llamado de funcion
holaMundo(texto);

// Llamando variable dentro de una funcion
console.log(varEnFuncion);
//*************************************************************************************** */