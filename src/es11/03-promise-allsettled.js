// En ES11 se agrega el método Promise.allSettled() que devuelve una promesa que se resuelve después de que todas las promesas en el argumento iterable se hayan resuelto o rechazado, con un array de objetos que describen el resultado de cada promesa.

const promise1 = new Promise((resolve, reject) => reject('Rejected!'));
const promise2 = new Promise((resolve, reject) => resolve('resolve!'));
const promise3 = new Promise((resolve, reject) => resolve('resolve2!'));

Promise.allSettled([promise1, promise2, promise3]) // Ejecuta todas las promesas sin importar si son rechazadas o no.
    .then((response) => console.log(response));

/*
[
    { status: 'rejected', reason: 'Rejected!' },
    { status: 'fulfilled', value: 'resolve!' },
    { status: 'fulfilled', value: 'resolve2!' }
]
*/

Promise.all([promise1, promise2, promise3]) // Ejecuta todas las promesas, pero si alguna es rechazada, se rechaza toda la promesa esta
    .then((response) => console.log(response))
    .catch((error) => console.log(error)); // Si alguna promesa es rechazada, se ejecuta el catch.
