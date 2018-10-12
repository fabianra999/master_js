'use strict'
/**
 * Storage
 */

console.log(`
Comprobar disponibilidad del localStorage`);
if (typeof(Storage) !== "undefined") {
    console.log(`Yea`);
} else {
    console.log(`mmmm`);
}
console.log(`-------------------------------------`);

console.log(`
Guardar Datos`);
localStorage.setItem('titulo', 'hola localStorage');
console.log(localStorage.getItem('titulo'));
console.log(`-------------------------------------`);

console.log(`
Guardar objetos`);
var usuario = {
        nombre: "Fabian",
        email: "fabiangmail.com",
        web: "favian.com.co"
    }
    /**
     * Para guardar un objeto en el storage hay q combertirlo a un string :
     *  => JSON.stringify(usuario)
     */
localStorage.setItem('usuario', JSON.stringify(usuario));
console.log(localStorage.getItem('titulo'));
console.log(`-------------------------------------`);


console.log(`
usar objeto del storage`);

/**
 * Para usar un objeto del storage hay q combertirlo a un string a objeto :
 *  => JSON.parse(usuario)
 */
var info = JSON.parse(localStorage.getItem('usuario'));
console.dir(info);
console.log(`-------------------------------------`);

// limpiar el storage
//localStorage.clear();
//localStorage.removeItem('usuario');