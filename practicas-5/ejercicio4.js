//Parte a
const cuadrado = n => n*n;

console.log(cuadrado(3))

const sumar = (a, b) => {
    return a + b
}

console.log(3+3)

const inicial = nombre => nombre[0];

console.log(inicial('santiago'))

//parte B
const mitad = (n) => n / 2;
console.log(mitad(8));
const triple = (n) => n * 3; //cuando se pone {} en un arrow function, el return ya no es implicito
console.log(triple(3));

//Parte C

const precioConIva = (n) => (n + (n*0.21))

console.log(precioConIva(100))