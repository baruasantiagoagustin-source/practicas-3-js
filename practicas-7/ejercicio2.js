const original = { nombre: "Mbappé", goles: 5 };

//parte A
// const copia = original;
// copia.goles = 99;

// console.log(copia.goles)
// console.log(original.goles)

// //ambos cambiaron al no se una copia real, si no una instancia del mismo objeto

//parte B
// console.log(original === copia); 
//da true por lo mismo de antes, copia es una instancia de original/

//parte C
const copia = { ...original };

copia.goles = 99;

console.log(copia.goles)
console.log(original.goles)

console.log(original === copia); 
//cambio, da false, porque al usar { ...original } estamos creando una nueva caja con propiedades iguales, pero es una nueva caja.