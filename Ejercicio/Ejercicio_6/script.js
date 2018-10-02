'use strict'

var numero1 = parseInt(prompt('numero1', 0));

while (isNaN(numero1)) {
    var numero1 = parseInt(prompt('numero1', 0));
}
if (numero1 % 2 == 0) {
    console.log(`Numero par = ${numero1}`);
    document.write(`Numero par = ${numero1}` + '<br>');
} else if (numero1 % 2 !== 0) {
    console.log(`Numero in par = ${numero1}`);
    document.write(`Numero in par = ${numero1}` + '<br>');
}