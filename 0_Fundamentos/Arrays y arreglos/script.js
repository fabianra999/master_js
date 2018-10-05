'use strict'
/**
 * Arrays , Arreglos, Matrices
 * Indice => 0 = Tomas
 */

var personas = ["Tomas", "Tito", "Pedro", 321, false];


// Array
console.log(personas);
// Indice
console.log(personas[2]);
// Longitud
console.log(personas.length);

// Test
//var elemento = parseInt(prompt("q indice del array quieres ?", 0));
/* while (elemento > personas.length) {
    elemento = parseInt(prompt("q indice del array quieres de nuevo?", 0));
}

if (elemento < personas.length) {
    alert(personas[elemento]);
} */

// or

/* if (elemento > personas.length) {
    alert(`Introduce el numero correcto menor q ${personas.length}`)
} else {
    alert(`El usuario Seleccionado es : ${personas[elemento]}`);
} */

console.log(`
Enlistar elementos del array
*********************************`);

/**
 * For of
 */
console.log(`
For of
*********************************`);
for (let value of personas) {
    console.log(`${value}`);
}
console.log("*********************************");

/**
 * For in
 */
console.log(`
For in
*********************************`);
for (let value in personas) {
    console.log(`${value} => ${personas[value]}`);
}
console.log("*********************************");

/**
 * For
 */
console.log(`
For
*********************************`);
for (let i = 0; i < personas.length; i++) {
    console.log(`${i} => ${personas[i]}`);
}
console.log("*********************************");

/**
 * forEach
 */
console.log(`
ForEach
*********************************`);
personas.forEach((element, indice) => {
    console.log(`${indice} => ${element}`);
});
console.log("*********************************");
//*************************************************************************************** */

/**
 * Array Multidimencional
 */
console.log(`
Array Multidimencional
Array in Array
*********************************`);
var categorias = ['Accio', 'Terror', 'Comedia'],
    peliculas = ['Peli 1', 'Peli 2', 'Peli 3'],
    cine = [categorias, peliculas];
console.log(`multidemencional cine[0][1] => ${cine[0][1]}`);
//*************************************************************************************** */

/**
 * Array Multidimencional
 */
console.log(`
Array add item
*********************************`);
peliculas.push("peli_add");
console.log(` ${peliculas}`);