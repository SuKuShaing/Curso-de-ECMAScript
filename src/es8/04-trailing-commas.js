// Trailing commas son comas adicionales al final de un array o un objeto, y son útiles cuando se añaden nuevos elementos o propiedades.
// ocupan un espacio
const ages = [24, 35, 16, 44, 97, , ,,,,, , ]

console.log(ages) // [24, 35, 16, 44, 97, empty x 7]
console.log(ages.length) // 12