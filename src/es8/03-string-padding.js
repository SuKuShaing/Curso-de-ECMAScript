const string = 'hello';

console.log(string.padStart(12, '1234')); // 1234123hello
console.log(string.padStart(12, '_')); // _______hello
// añade 1234 al inicio de la cadena hasta que la longitud de la cadena sea de 12 caracteres

console.log(string.padEnd(12, '1234')); // hello12341234
console.log(string.padEnd(12, '_')); // hello_______
// añade 1234 al final de la cadena hasta que la longitud de la cadena sea de 12 caracteres