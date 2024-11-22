// En es12 se introduce la posibilidad de separar los números con guiones bajos para mejorar la legibilidad de los mismos.
// no afecta el valor del número, ni su tipo, solo la legibilidad, aquí en js puesto en html se ve igual que si no tuviera los guiones bajos

const value = 1_000_000_000; // los guiones bajos son los numeric separators
console.log(value); // 1000000000
console.log(typeof(value)); // number