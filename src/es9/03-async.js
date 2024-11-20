// En es9 se introdujo la posibilidad de utilizar async y await en funciones generadoras
async function* anotherGenerator() {
	yield await Promise.resolve(1);
	yield await Promise.resolve(2);
	yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then((response) => console.log(response));
other.next().then((response) => console.log(response));
other.next().then((response) => console.log(response));
console.log("Fin");

// -----------------------------------------------------------------------------------

// Es una característica introducida en ES9 (ES2018) llamada for await...of. Esta característica permite iterar sobre objetos asincrónicos que implementan el protocolo de iteración asincrónica.
async function arrayOfNames(array) {
	for await (let value of array) {
		console.log(value);
	}
    // for await...of espera a que cada promesa se resuelva antes de continuar con la siguiente iteración.
}

const names = arrayOfNames(["Javier", "Luis", "Carlos"]);
console.log('After');