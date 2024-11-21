// en Object.entries(countries) convierte un objeto a una matriz
// En es10 ahora 
// fromEntries() convierte una matriz en un objeto

const entries0 = new Map([["name", "oscar"], ["age", 32]]);
/*
Map es una estructura de datos que almacena pares clave-valor y mantiene el orden de inserción.
Ofrece métodos específicos como set, get, has, delete, y clear.
*/
const entries = [["name", "oscar"], ["age", 32]];
console.log(entries);
console.log(Object.fromEntries(entries));