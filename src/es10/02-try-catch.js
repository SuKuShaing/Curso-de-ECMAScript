// Se añadieron mejoras en el manejo de errores en ES10
// ahora se puede omitir la variable error en el catch

try {
    hello();
} catch (error) {
    console.log(error);
}


// Es opcional el uso de la variable error
try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}