'use strict'

var numero1 = parseInt(prompt('numero1', 0));


for (let i = 1; i <= numero1; i++) {
    if (numero1 % i == 0) {
        console.log(i);
        document.write(i + '<br>');
    }
}