// Función normal
function square(num) {
	return num * num;
}
console.log(square(5)); // 25



// Arrow function
const squareArrow = (num) => {
	return num * num;
};
console.log(squareArrow(5)); // 25


// Arrow function con return implícito
const squareArrow2 = num => num * num;
console.log(squareArrow2(5)); // 25