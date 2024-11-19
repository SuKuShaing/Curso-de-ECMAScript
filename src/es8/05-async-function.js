// Funciones Asíncronas introducidas en ES8
// con Async y Await
// Async y Await son una forma de trabajar con funciones asíncronas de forma más sencilla
// también se introdujo Error Handling, para manejar los errores de forma más sencilla con new Error

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Resolve Async!!'), 2000) 
            : reject(new Error('Error'));
    });
}

const fnAsyncAwait = async () => {
    const msg = await fnAsync();
    console.log(msg);
    console.log('helloo');

    // try {
    //     const msg = await fnAsync();
    //     console.log(msg);
    // } catch (error) {
    //     console.error(error);
    // }
}

console.log('Before Async');
fnAsyncAwait(); // Se salta esta línea, se ejecutan el resto y cuando se resuelve la promesa se ejecuta
console.log('After Async');

/* se resuelve así cuando tiene el Async y Await
Before Async
After Async
Resolve Async!!
helooo
*/

/* se resuelve así cuando no tiene el Async y Await
Before Async
Promise { <pending> }
helloo
After Async
*/