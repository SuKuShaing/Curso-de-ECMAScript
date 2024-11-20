// Se añaden expresiones regulares mejoradas en ES9

const regex = /(\d{4})-(\d{2})-(\d{2})/; // Se define una expresión regular para buscar fechas en formato yyyy-mm-dd (busca número con formato fecha)
const match = regex.exec("2022-01-01"); // El método exec devuelve un array con los resultados de la coincidencia, incluyendo los grupos capturados.
const match2 = regex.exec("9992-88-55");

// También valida si la cadena cumple con la expresión regular, a pesar de que la fecha no exista, puesto que solo valida el formato. No valida nada, solo extrae el formato

console.table(match);
console.log(match);
/* 
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-01-01' │
│    1    │    '2022'    │
│    2    │     '01'     │
│    3    │     '01'     │
│  index  │      0       │
│  input  │ '2022-01-01' │
│ groups  │  undefined   │
└─────────┴──────────────┘
[
    '2022-01-01',
    '2022',
    '01',
    '01',
    index: 0,
    input: '2022-01-01',
    groups: undefined
]
*/

console.table(match2);
console.log(match2);
/*
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '9992-88-55' │
│    1    │    '9992'    │
│    2    │     '88'     │
│    3    │     '55'     │
│  index  │      0       │
│  input  │ '9992-88-55' │
│ groups  │  undefined   │
└─────────┴──────────────┘
[
    '9992-88-55',
    '9992',
    '88',
    '55',
    index: 0,
    input: '9992-88-55',
    groups: undefined
]
*/
