// En ES11 se añadió el operador de fusión nula (Nullish Coalecing) ??

let anotherNumber;
console.log(anotherNumber); // undefined
const validate = anotherNumber ?? 0; // pregunta si la variable es null o undefined, si así es, asigna el valor 0
console.log(validate); // 1

const otherNumber = null;
console.log(otherNumber); // null
const validate2 = otherNumber ?? 0; // pregunta si la variable es null o undefined, si así es, asigna el valor 0
console.log(validate2); // 0

/*
Diferencias entre Or operator y Nullish Coalecing ( || Vs ?? )
Or operator: Retorna el valor a la derecha si la expresión de la izquierda es FALSY (0, "", false, NAN, undefined, null)
Nullish coalecing: retorna el valor a la dera si la expresión es null o undefined 
*/