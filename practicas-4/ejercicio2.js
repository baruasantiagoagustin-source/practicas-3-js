const selecciones = ["Argentina", "Francia", "Brasil", "Alemania", "España"];

//parte A

// for (let i = 1; i <= selecciones.length; i++) {
//     const indice = i - 1; //agregado para que cuando i = 1, tome igual el componente 0 del array.
//     console.log(i, selecciones[indice]); //con esto se imprimira lo que se pidio
// }

//parte B

let i = 1;
for (const seleccion of selecciones) {
    console.log(i, seleccion);
    i = i+1;
}

//parte C
// ¿Cuándo conviene usar for con índice?
// Cuando se necesita control total y granular sobre la iteración.
// ¿Cuándo conviene usar for...of?
// Cuando se usan arrays, porque al final el codigo queda mas legible y rapido de acceder.