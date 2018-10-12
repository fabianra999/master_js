'use strict'
/**
 * Json
 */
var peliculas = {
    titulo: 'test_1',
    year: 2017,
    pais: 'USA'
}
console.log("*********************************");
console.log(`
json.
${peliculas.titulo}
`);

for (let item in peliculas) {
    console.log(item);
}