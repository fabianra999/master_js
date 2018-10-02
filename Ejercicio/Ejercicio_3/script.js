'use strict'

var numero1 = parseInt(prompt('numero1', 0)),
    numero2 = parseInt(prompt('numero2', 0));

for (let index = numero1; index <= numero2; index++) {
    console.log(index);
    document.write(index + '<br>');
}