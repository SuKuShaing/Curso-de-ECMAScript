// en ES9 se agrega la funcionalidad de spread operator en objetos
// se añade resto (values es el resto)
const user = { username: 'Seba', age: 31, country: 'Chile' };
const { username, ...values } = user; // extrae el valor de username y el resto de los valores los guarda en values


console.log(username ); // Seba
console.log(values); // { age: 31, country: 'Chile' }
console.log(user); // { username: 'Seba', age: 31, country: 'Chile' }