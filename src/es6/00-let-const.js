// Var
var lastName = 'David';
lastName = 'Seba';
console.log(lastName); // Seba


// Let
let fruit = 'Apple';
fruit = 'Banana';
console.log(fruit); // Banana


// Const
const animal = 'Dog';
animal = 'Cat'; // Error: Assignment to constant variable.
console.log(animal); // Dog


const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1); // Apple
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3);
}

fruits();