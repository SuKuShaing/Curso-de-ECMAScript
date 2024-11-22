// En es11 se agrega el método matchAll() que devuelve un iterador de todas las coincidencias de una cadena con una expresión regular.

const regex = /\b(Apple)+\b/g;

const fruits = "Apple, Banada, kiwi, Apple, Orange, pinaple and another apple.";

console.log(fruits.match(regex)); // [ 'Apple', 'Apple' ] entrega la cantidad de coincidencias que encontró y sí distingue entre mayúsculas y minúsculas
console.log(fruits.matchAll(regex)); // Object [RegExp String Iterator] {} ; hay que verlo con un for of

for (const match of fruits.matchAll(regex)) { // sí distingue entre mayúsculas y minúsculas
	console.log(match);
}

/*
[
    'Apple',
    'Apple',
    index: 0, <-- posición de la primera coincidencia
    input: 'Apple, Banada, kiwi, Apple, Orange and pinaple.',
    groups: undefined
]
[
    'Apple',
    'Apple',
    index: 21, <-- posición de la segunda coincidencia
    input: 'Apple, Banada, kiwi, Apple, Orange and pinaple.',
    groups: undefined
]
*/
