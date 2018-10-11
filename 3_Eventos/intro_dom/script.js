'use strict'
/**
 * DOM - Document Object Model
 */


/**
 *  Selector con id
 *  => getElementById
 */




console.log("*********************************");
console.log(`
Evento onclick en markup.
`);

function queEs() {
    console.log(this);
    btn2.style.color = "tomato";
}


console.log("*********************************");
console.log(`
Evento click en js.
`);

var btn2 = document.querySelector('#btn_2');
btn2.addEventListener('click', () => {
    console.log(this);
    btn2.style.color = "gold";
});


console.log("*********************************");
console.log(`
Evento Hover en js.
`);

var btn3 = document.querySelector('#btn_3');
btn3.addEventListener('mouseover', () => {
    console.log(this);
    btn3.style.color = "red";
});

console.log("*********************************");
console.log(`
Evento Mouse out en js.
`);

var btn3 = document.querySelector('#btn_3');
btn3.addEventListener('mouseout', () => {
    console.log(this);
    btn3.style.color = "green";
});

console.log("*********************************");
console.log(`
Evento focus, blur, keydown, keypress, keyup en js.
`);

var compoNombre = document.querySelector('#compoNombre');
// Focus
compoNombre.addEventListener('focus', () => {
    console.log(`focus [focus();]`);
    compoNombre.style.color = "green";
});
// Blur
compoNombre.addEventListener('blur', () => {
    console.log(`Blur [blur()]`);
});
// keydown
compoNombre.addEventListener('keydown', (event) => {
    console.log(`pulso una tecla [keydown]`, String.fromCharCode(event.keyCode));
});
// keypress
compoNombre.addEventListener('keypress', (event) => {
    console.log(`presionada una tecla [keypress]`, String.fromCharCode(event.keyCode));
});
//keyup
compoNombre.addEventListener('keyup', (event) => {
    console.log(`tecla soltada [keyup]`, String.fromCharCode(event.keyCode));
});


console.log("*********************************");
console.log(`
Evento load se ejecuta aL CARGAR TODO EL BODY.
`);
window.addEventListener('load', () => {
    console.log('ya esta el dom');
});

console.log("*********************************");
console.log(`
Timers setTimeout, setInterval.
`);
console.log("*********************************");
console.log(`
setInterval.
`);
var tiempoInterval = setInterval(function() {
    console.log(`Set interval ejecutado`);
}, 3000);
console.log("*********************************");
console.log(`
setTimeout.
`);
var TiempotimeOut = setTimeout(() => {
    console.log(`Set time out  ejecutado`);
}, 1000);

var btnTimer = document.querySelector('#timerBtn');
btnTimer.addEventListener('click', () => {
    clearInterval(tiempoInterval);
    console.log(`Set interval se paro`);
});

var btnStart = document.querySelector('#timerBtnInicio');
btnStart.addEventListener('click', () => {
    // Llama de nuevo intervalo
    tiempoInterval;
});