// Esta es una forma de asignar valores por defecto a los parámetros de una función 
// en caso de que no se les pase un valor al momento de llamarla.
function newUser(name, age, country) {
    var name = name || 'Seba';
    var age = age || 31;
    var country = country || 'Chile';
    console.log(name, age, country);
};

newUser(); // Seba 31 Chile
newUser('David', 25, 'Colombia'); // David 25 Colombia


// ES6
function newAdmin(name = 'Seba', age = 31, country = 'Chile') {
    console.log(name, age, country);
};

newAdmin(); // Seba 31 Chile
newAdmin('Julito', 49, 'Argentina'); // David 25 Colombia