// Promesas
// en ES9 se agrega el método .finally() a las promesas, que se ejecuta al final de la promesa, sin importar si fue exitosa o no
const anotherFunction = () => {
    // La promesa solo puede retornar éxito o error, no ambas
	return new Promise((resolve, reject) => {
		if (false) {
			resolve("Hey!"); // es un return positivo
		} else {
			reject("Ups!"); // es un return negativo
		}
	});
};


// Siempre se usa .then() cuando una función retorna una promesa
anotherFunction()
    .then((response) => {
        console.log(response) // Hey!
        return "otro éxito";
    })
    // Se puede encadenar .then() para manejar múltiples promesas, el then siguiente recibe el valor retornado del anterior
    .then((response) => console.log(response)) // otro éxito 
    // .catch() se usa para manejar errores
    .catch((error) => console.log(error))
    // .finally() se ejecuta al final de la promesa, sin importar si fue exitosa o no
    .finally(() => console.log("Finalizó"));