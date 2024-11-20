// En es10 se añadieron dos métodos para trabajar con strings, trimStart y trimEnd
// los cuales remueven los espacios al inicio y al final respectivamente
const hello = '   Hello World   ';
console.log(hello.trim()); // 'Hello World' saca los espacios antes y después del string
console.log(hello.trimStart()); // 'Hello World   ' saca los espacios al inicio del string
console.log(hello.trimEnd()); // '   Hello World' saca los espacios al final del string