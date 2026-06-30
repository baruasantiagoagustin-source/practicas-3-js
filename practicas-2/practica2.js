for (var i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); // dara 3, dio 3

for (let i = 0; i < 3; i++) {
    console.log("Botón " + i + " creado");
    console.log("i después del bucle:", i); // pense que daria 3, dio 2
}

const saludo = "Hola";
const nombre = "Valentina";
let intentos = 0;

intentos = intentos + 1;
intentos = intentos + 1;

console.log(saludo + ", " + nombre + ". Intentos: " + intentos);