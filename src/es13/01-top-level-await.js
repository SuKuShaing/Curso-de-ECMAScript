// En ES13 se introdujo el top-level-await, que permite usar await en el nivel superior de un módulo
// Esto significa que podemos usar await en el archivo principal de nuestra aplicación sin necesidad de usar una función async
// Esto es útil para hacer fetch de datos en el archivo principal de nuestra aplicación
// Para usar top-level-await, debemos usar la opción "type": "module" en el package.json

// debemos instalar el paquete de node-fetch (npm install node-fetch) para poder fetch desde node

import fetch from 'node-fetch';

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

// console.log(products);

// export default products; // exportamos la constante products como objeto para poder importarla en otro archivo
export { products }; // exportamos la constante products como objeto para poder importarla en otro archivo