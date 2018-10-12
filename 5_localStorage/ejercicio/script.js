'use strict'
/**
 * Storage
 */

// Var´s
var btn = document.querySelector('button'),
    inputInfo = document.querySelector('#addPelicula'),
    lista = document.querySelector('#peliculas'),
    formulario = document.querySelector('#formulario');


// Event submit
formulario.addEventListener('submit', () => {
    let info = inputInfo.value;
    if (info.length >= 0) {
        localStorage.setItem(info, info);
    }
});


for (let item in localStorage) {
    console.log(localStorage[item]);
    if (typeof localStorage[item] == 'string') {
        let li = document.createElement('li');
        li.append(localStorage[item]);
        lista.append(li);
    }
}