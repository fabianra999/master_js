'use strict'

var numero1 = parseInt(prompt('numero1', 0));

document.write(`<h1>Table del ${numero1}</h1> ` + '<br>');
for (let i = 0; i <= 10; i++) {
    document.write(`${i} X ${numero1} = ` + (i * numero1) + '<br>');
}

document.write("<br>")

for (let i = 0; i <= 10; i++) {
    document.write(`<h1>Table del ${i}</h1> ` + '<br>');
    for (let j = 0; j <= 10; j++) {
        document.write(`${i} X ${j}= ` + (i * j) + '<br>');

    }
}