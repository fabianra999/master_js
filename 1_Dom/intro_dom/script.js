'use strict'
/**
 * DOM - Document Object Model
 */


/**
 *  Selector con id
 *  => getElementById
 */

var contenedor = document.getElementById('caja');
console.log(contenedor);
console.log("*********************************");
console.dir(contenedor);
console.log("*********************************");
contenedor.innerHTML = 'Hola getElement';
contenedor.style.color = 'red';
contenedor.className = 'holaMundo';

/**
 *  Selector con id
 *  => querySelector
 */

var contenedor2 = document.querySelector('#caja');
contenedor2.innerHTML = 'Hola querySelector';
contenedor2.style.color = 'blue';
contenedor2.className = 'holaMundo2';

/**
 *  Selector por etiqueta
 *  => querySelector
 */

var todosDiv = document.getElementsByTagName('div')
console.log(`
getElementsByTagName
-------------------------------------------------
`);
console.log(todosDiv);
console.log("*********************************");
console.dir(todosDiv);
console.log("*********************************");
todosDiv[2].innerHTML = 'hola class key 2'

for (let i = 0; i <= todosDiv.length; i++) {
    console.log(i + ' => ' + todosDiv[i]);

};
for (let contador of todosDiv) {
    console.log(contador);
};
todosDiv.forEach((element, indice) => {
    console.log(`${indice} => ${element}`);
});


/**
 *  Selector por clase
 *  => querySelector
 */

/* var contenedor2 = document.querySelector('#caja');
contenedor2.innerHTML = 'Hola querySelector';
contenedor2.style.color = 'blue';
contenedor2.className = 'holaMundo2'; */