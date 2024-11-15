let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world + "!";
console.log(epicPhrase); // Hello World!


// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2); // Hello World!


// Multiline en la versión ES5
let lorem = "Lorem ipsum dolor sit amet,\n" + "consectetur adipiscing elit. ";
console.log(lorem);

// Multiline en la versión ES6 se puede hacer con las comillas francesas
let lorem2 = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.`;

console.log(lorem2);