// En ES12 se implementa la posibilidad de declarar métodos y propiedades privadas
// en las clases, para ello se usa el símbolo # antes del nombre de la propiedad o método
// Los métodos y propiedades privadas no pueden ser accedidos desde fuera de la clase
// ni siquiera heredados por las subclases

class User {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Métodos
    #speak() {
        return `Hola`;
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    // Getter
    get #uAge() {
        return this.age;
    }
    // Setter
    set #uAge(newAge) {
        this.age = newAge;
    }
    // Los Getters y Setters se usan como propiedades, no como métodos
    // por eso para acceder a ellos no se usan paréntesis
}

const maca = new User('Macarena', 25);
console.log(maca.greeting()); // "Hola Macarena"
console.log(maca.uAge);  // undefined (no se puede acceder directamente)
console.log(maca.uAge = 26); // Error: no se puede asignar directamente