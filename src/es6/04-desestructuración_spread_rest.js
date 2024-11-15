// arrays desructuring

let fruts = ["Apple", "Banana", "Orange"];
let [a, b] = fruts;
console.log({ a, b });



// objects desructuring

let user = { username: "john", age: 25 };
let { username, age } = user;
console.log({ username });
console.log({ age });



// spread operator

let person = { name: "john", age: 25 };
let country = "MX";

let data = { id: 1, ...person, country };
console.log(data);



// rest, se llama así por que toma el resto de los valores

function sum(num, ...values) {
	console.log(values);
	console.log(num + values[0]);
	return num + values[0];
}

sum(1, 2, 3, 4, 5);

let kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);



// reto
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