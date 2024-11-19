// functiones generadoras, son funciones que pueden detener su
// ejecución, deben ser declaradas con un asterisco (*) y se detienen con la palabra yield
function* iterate(array) {
	for (let value of array) {
		yield value;
	}
}

// let it = iterate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let ite = iterate(["Oscar", "Luis", "Carlos", "Juan", "Pedro"]);
console.log(ite.next().value); // Oscar
console.log(ite); // Object [Generator] {}
console.log(ite.next()); // { value: 'Luis', done: false }
console.log(ite.next()); // { value: 'Carlos', done: false }
console.log(ite.next()); // { value: 'Juan', done: false }
console.log(ite.next()); // { value: 'Pedro', done: false }
console.log(ite.next()); // { value: undefined, done: true }

// .next() es un método que permite continuar la ejecución de la función generadora



// reto

function* getId() {
	while (true) {
        yield Math.random().toString(36).substr(2);
    }
    /*
    .toString(36):
    Convierte el número aleatorio a una cadena en base 36. La base 36 utiliza los dígitos del 0 al 9 y las letras de la a a la z, lo que resulta en una representación más compacta del número.
    */
    /*
    .substr(2):
    Devuelve una subcadena de la cadena original, comenzando en la posición 2. De esta forma, se eliminan los dos primeros caracteres del número aleatorio (0.)
   */
}
const id = getId()
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)