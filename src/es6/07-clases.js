// Definir una clase
class User {}

// Instanciar la clase
// const newUser = new User();

// -------------------------------------------- 
class user {
    // métodos 
    greeting() {
        return 'Hello';
    }
}

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// --------------------------------------------

class User {
    // Constructor
    constructor() {
        console.log('Nuevo usuario');
    }
    // Métodos
    greeting() {
        return `Hello ${this.name}`;
    }
}

const david = new User();

// --------------------------------------------

class User {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    // Métodos
    speak() {
        return `Hola`;
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const seba = new User('Sebastián');
console.log(seba.greeting());

// --------------------------------------------

// Setters y Getters
class User {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Métodos
    speak() {
        return `Hola`;
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    // Getter
    get uAge() {
        return this.age;
    }
    // Setter
    set uAge(newAge) {
        this.age = newAge;
    }
    // Los Getters y Setters se usan como propiedades, no como métodos
    // por eso para acceder a ellos no se usan paréntesis
}

const maca = new User('Macarena', 25);
console.log(maca.greeting());
console.log(maca.uAge);
console.log(maca.uAge = 26);