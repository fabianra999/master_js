'use strict'

var numero1 = parseInt(prompt('numero 1', 0));
var numero2 = parseInt(prompt('numero 2', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('numero 1', 0));
    numero2 = parseInt(prompt('numero 2', 0));
}


if (numero1 > numero2) {
    alert(`numero 1 (${numero1}) es mayor a numero 2 (${numero2})`);
} else if ((numero1 < numero2)) {
    alert(`numero 1 (${numero1}) es menor a numero 2 (${numero2})`);
} else if ((numero1 = numero2)) {
    alert(`numero 1 (${numero1}) es igual a numero 2 (${numero2})`);
}