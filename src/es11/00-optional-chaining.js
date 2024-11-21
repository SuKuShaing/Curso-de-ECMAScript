// En es11 se introduce el operador opcional chaining ?. para acceder a propiedades anidadas de un objeto sin tener que validar si la propiedad anterior existe.

const users = {
    gndx: {
        country: 'MX'
    },
    seba: {
        country: 'CL'
    }
}

console.log(users.seba.country) // CL
console.log(users.seba.age) // undefined
console.log(users?.bbloper?.country) // undefined
// console.log(users.bbloper.country) // Uncaught TypeError: Cannot read property 'country' of undefined 
console.log(users.bbloper?.country) // undefined 
console.log(users?.usuarioInventado?.country || 'No existe esa información en la base de datos') // No existe esa información en la base de datos

// funciona con métodos
users.nonExistentMethod?.(); // No hace nada, no lanza error

// funciona con objetos en arrays
const users2 = [{ name: 'Oscar' }, { name: 'Luis' }];
console.log(users2[0]?.name); // "Oscar"
console.log(users2[2]?.name); // undefined

// funciona con funciones
const user = {
    name: 'Oscar',
    getName() {
        return this.name;
    }
};

console.log(user.getName?.()); // "Oscar"
console.log(user.nonExistentMethod?.()); // undefined