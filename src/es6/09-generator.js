// functiones generadoras, son funciones que pueden detener su
// ejecución, deben ser declaradas con un asterisco (*) y se detienen con la palabra yield
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

// let it = iterate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let ite = iterate(['Oscar', 'Luis', 'Carlos', 'Juan', 'Pedro']);
console.log(ite.next().value);
console.log(ite);
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());

// .next() es un método que permite continuar la ejecución de la función generadora