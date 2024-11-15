// enahced object literals
// objetos literales mejorados
// Poder abreviar la creación de objetos literales simplemente escribiendo el nombre de la propiedad puesto que se llama igual que la variable que se le asigna.

function newUser(user, age, country, uId) {
	return {
		user, // user: user,
		age, // age: age,
		country, // country: country,
		id: uId
	};
}

console.log(newUser('Seba', 31, 'CL', 1));