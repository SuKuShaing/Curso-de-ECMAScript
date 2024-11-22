// En es11 se añade globalThis, que es una referencia global que funciona en cualquier entorno (Node o navegador)

console.log(window); 
// en el navegador muestra el objeto, 
// en Node lanza ReferenceError: window is not defined

console.log(global); 
// en el navegador muestra ReferenceError: global is not defined, 
//en Node muestra un objeto global

console.log(globalThis); // Se puede usar en ambos entornos Node y navegador
// en el navegador muestra el objeto windows, 
// en Node muestra un objeto global