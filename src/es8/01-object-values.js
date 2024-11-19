// Oject.values(objeto) regresa los valores de las propiedades de un objeto en un arreglo
// se agrego en ES8
const countries = {
	MX: "Mexico",
	US: "United States",
	CA: "Canada",
	CO: "Colombia",
	CL: "Chile",
	PE: "Peru",
};

console.log(Object.values(countries));
// [ 'Mexico', 'United States', 'Canada', 'Colombia', 'Chile', 'Peru' ]

console.log(Object.keys(countries)); 
// [ 'MX', 'US', 'CA', 'CO', 'CL', 'PE' ]