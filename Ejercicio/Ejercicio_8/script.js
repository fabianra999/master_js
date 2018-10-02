'use strict'

var numero1 = parseInt(prompt('numero1', 0)),
    numero2 = parseInt(prompt('numero2', 0));

while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
    numero1 = parseInt(prompt('numero1', 0));
    numero2 = parseInt(prompt('numero2', 0));
}


console.log(`Suma = ${numero1 + numero2}`);
console.log(`Resta = ${numero1 - numero2}`);
console.log(`Multiplica = ${numero1 * numero2}`);
console.log(`Divide = ${numero1 / numero2}`);

document.write(`Suma = ${numero1} + ${numero2} => ${numero1 + numero2}` + '<br>');
document.write(`Resta = ${numero1} - ${numero2} => ${numero1 - numero2}` + '<br>');
document.write(`Multiplica = ${numero1} X ${numero2} => ${numero1 * numero2}` + '<br>');
document.write(`Divide = ${numero1} / ${numero2} => ${numero1 / numero2}` + '<br>');