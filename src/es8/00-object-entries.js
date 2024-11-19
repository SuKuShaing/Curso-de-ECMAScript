// Esta función devuelve una matriz de pares clave-valor de una propiedad enumerable de un objeto dado, en el mismo orden que se proporcionaría si un bucle for...in se utilizara en el objeto.
// Esto se agrego en ES8
// Object.entries(objeto)

const countries = {
	MX: "Mexico",
	US: "United States",
	CA: "Canada",
	CO: "Colombia",
	CL: "Chile",
	PE: "Peru",
};
console.log(Object.entries(countries));
/*
[
    [ 'MX', 'Mexico' ],
    [ 'US', 'United States' ],
    [ 'CA', 'Canada' ],
    [ 'CO', 'Colombia' ],
    [ 'CL', 'Chile' ],
    [ 'PE', 'Peru' ]
]
*/
