// En es13 se introduce el método at() para acceder a los elementos de un array de forma más sencilla.
// El método at() permite acceder a los elementos de un array de forma más sencilla, en lugar de tener que hacerlo mediante corchetes y el índice del elemento, podemos hacerlo mediante el método at() y el índice del elemento.
// El método at() también permite acceder a los elementos de un array de forma inversa, es decir, empezando por el último elemento del array.
// sirve para iterables, como los arrays, y no para objetos, ni conjuntos, por ejemplo.

const array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

console.log(array[array.length - 1]); // ten
console.log(array.at(-1)); // ten