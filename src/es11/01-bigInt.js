// En ES11 se añade el tipo de dato BigInt, que permite trabajar con números enteros de cualquier tamaño.

const aBigNumber = 1234567890123456789012345678901234567890n; // n al final para indicar que es un BigInt
const secondBigNumber = BigInt(12345678901234567890123456789012345678901234123432);
const thirdBigNumber = BigInt("34668612783641234567890123456789012345678901234123432"); // al colocarlo como strign no se pierde la precisión y en consola muestra el mismo valor

console.log(aBigNumber); // 1234567890123456789012345678901234567890n
console.log(secondBigNumber); // 12345678901234566660398341115085767575755770822656n (se pierde precisión)
console.log(secondBigNumber == 12345678901234567890123456789012345678901234123432); // true
console.log(secondBigNumber == BigInt(12345678901234567890123456789012345678901234123432)); // true
console.log(thirdBigNumber); // 34668612783641234567890123456789012345678901234123432n
console.log(typeof(thirdBigNumber)); // bigint
console.log(typeof(1)); // number
console.log(typeof(thirdBigNumber) == typeof(1)); // false
// console.log(secondBigNumber = secondBigNumber + 1); // no se puede sumar un BigInt con un number
// console.log(thirdBigNumber++); // TypeError: Assignment to constant variable.

// Convertir un Number a BigInt y sumarlo
const numberToAdd = 1;
const bigIntToAdd = BigInt(numberToAdd);
const sum = thirdBigNumber + bigIntToAdd; // thirdBigNumber debe haber sido guardado como string
console.log(sum); // 34668612783641234567890123456789012345678901234123433n