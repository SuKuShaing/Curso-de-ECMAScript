// En ECMAScript 7 se agrega el método includes para los arreglos, el cual permite saber si un elemento se encuentra en el arreglo o no.

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(9)); // true

const list = ['oscar', 'daniel', 'jose', 'luis'];

console.log(list.includes('oscar')); // true
console.log(list.includes('Oscar')); // false
// sí diferencia por mayúsculas y minúsculas