// En es 10 se añadieron dos métodos para trabajar con arrays, flat y flatMap
// flat
const array = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]];
console.log(array.flat(0)); // lo deja igual que el original [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10, [ 11, 12, 13, 14, 15 ] ] ]
console.log(array.flat(1)); // Aplana un nivel [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [ 11, 12, 13, 14, 15 ] ] 
console.log(array.flat(2)); // Aplana dos niveles [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
console.log(array.flat(3)); // Aplana tres niveles, lo deja igual, puesto que no hay más niveles [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
console.log(array.flat(Infinity)); // Aplana todos los niveles

// flatMap
const array2 = [1, 2, 3];
// console.log(array2.flatMap(value => [value, value * 2])); // [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]
// retorna el valor original y al lado el valor pasado por la lógica que le demos
console.log(array2.flatMap(value => [value, value * 2, value ** 2])); // [ 1, 2, 1, 2, 4, 4, 3, 6, 9, 4, 8, 16, 5, 10, 25 ]