'use strict'

var numero1 = parseInt(prompt('numero1', 0)),
    numero2 = parseInt(prompt('numero2', 0));


/**
 *  For
 */
/* for (let index = numero1; index <= numero2; index++) {
    if (index % 2 !== 0) {
        console.log(index);
        document.write(index + '<br>');
    }
} */

/**
 *  While
 */
while (numero1 < numero2) {
    numero1++;
    if (numero1 % 2 != 0) {
        console.log(numero1);
        document.write(numero1 + '<br>');
    }
}