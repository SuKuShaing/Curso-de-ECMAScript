import hello from "./modulo.js";

hello(); // Hello!

/*
para que no falle, en el package.json se debe agregar "type": "module" en la raíz del archivo, de la siguiente forma:

    "author": "Sebastian Sanhueza <sebastian.sanhueza.t@usach.cl>",
    "license": "MIT",
    "type": "module", // <--- aquí, después de la licencia
    "description": ""

*/
/* 
la otra opción es cambiar la extensión de los archivos de .js a .mjs, de la siguiente forma:
08-module.mjs
modulo.mjs
y así tampoco fallará, le indica a js que es un módulo
*/