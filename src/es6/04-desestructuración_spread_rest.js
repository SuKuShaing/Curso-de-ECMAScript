// arrays desructuring
// poder extraer valores de un array y asignarlos a variables rápidamente
let fruts = ["Apple", "Banana", "Orange"];
let [a, b] = fruts;
console.log({ a, b });



// objects desructuring
// poder extraer valores de un objeto y asignarlos a variables rápidamente
let user = { username: "john", age: 25 };
let { username, age } = user; // aquí se extrajo el valor de la propiedad username y se asignó a la variable username
console.log({ username }); // john
console.log({ age });



// spread operator, operador de propagación
// copia superficial de un objeto o array y se puede agregar más propiedades y/o sumar elementos
let person = { name: "john", age: 25 };
let country = "MX";

let data = { id: 1, ...person, country }; // aquí se copió el objeto person y se le agregó la propiedad country e id
console.log(data);



// rest, se llama así por que toma el resto de los valores
// se usa para tomar todos los demás valores enviados y los asigna a un array
function sum(num, ...values) {
	console.log(values); // [2, 3, 4, 5]
	console.log(num + values[0]); // 3
	return num + values[0];
}

sum(1, 2, 3, 4, 5);



// reto de clase
function solution(
	json1 = {
		name: "Mr. Michi",
		food: "Pescado",
	},
	json2 = {
		age: 12,
		color: "Blanco",
	}
) {
	return { ...json1, ...json2 };
}

console.log(solution({
    name: "Bigotes",
    food: "Pollito"
}));