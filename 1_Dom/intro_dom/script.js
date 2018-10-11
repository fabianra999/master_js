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


var caja = document.getElementsByClassName("caja");
console.log('caja');
console.dir(caja);
for (let itemCaja in caja) {
    if (caja[itemCaja].className == "caja") {
        caja[itemCaja].style.background = "tomato";
        caja[itemCaja].style.color = "white";
    }
}

console.log('clasequery');
var clasequery = document.querySelectorAll('.caja');
clasequery.forEach(function(userItem) {
    console.log(clasequery[userItem]);
});
for (let item in clasequery) {
    if (clasequery[item].className == "caja") {
        clasequery[item].style.color = "gold";
    }
}


console.log('forEach');
document.querySelectorAll('.caja').forEach(function(item2) {
    console.log(item2);
    item2.style.color = "black";
});


/**
 *  Selector por clase
 *  => querySelector
 */

/* var contenedor2 = document.querySelector('#caja');
contenedor2.innerHTML = 'Hola querySelector';
contenedor2.style.color = 'blue';
contenedor2.className = 'holaMundo2'; */