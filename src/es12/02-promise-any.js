// En ES12 se añade el método Promise.any() que recibe un array de promesas y devuelve una promesa que se resuelve cuando alguna de las promesas del array se resuelve. Si todas las promesas son rechazadas, se rechaza la promesa devuelta.

const promise1 = new Promise((resolve, reject) => reject("Rejected!"));
const promise2 = new Promise((resolve, reject) => resolve("resolve!"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2!"));

Promise.any([promise1, promise2, promise3]) // captura la primera promesa que se resuelva
	.then((value) => console.log(value)); // resolve!