// En ES12 se añade el método replaceAll() para reemplazar todas las ocurrencias de una cadena en otra cadena.

const string = "JavaScript es un maravilloso lenguaje de programación. JavaScript es el mejor.";


const replaceString = string.replaceAll("JavaScript", "JS"); // reemplaza todos los que encuentre, el primero es el valor a buscar y el segundo el valor a reemplazar
const anotherString = string.replace("JavaScript", "JS"); // reemplaza solo el primero que encuentre

console.log(replaceString); // JS es un maravilloso lenguaje de programación. JS es el mejor.
console.log(anotherString); // JS es un maravilloso lenguaje de programación. JavaScript es el mejor.