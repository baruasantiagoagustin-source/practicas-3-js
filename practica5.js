const nombre = 'Alexis Mac Allister'; 
let edad = 27 ;
const camiseta = 10; 
let GyA = 106 ;
let goles = 65;
let asistencias = 41;
const equipo = 'liverpool';
const texto = `teniendo 65 goles y 41 asistencias 
tiene 106 contribuciones de gol`;
const esCap = false;
const goleador = 5;

let faltante = goleador - goles; 

console.log(`El jugador ${nombre} con una edad de ${edad} tiene en su cuenta ya ${GyA} G/A. Juega en ${equipo} como el numero ${camiseta}`);

console.log(texto);

console.log(`¿Es capitán? ${esCap ? "Sí" : "No"}`);

if (faltante > 0) {
    console.log(`Aun le faltan ${faltante} goles para ser el goleador del torneo`)
} else {
    faltante = faltante * -1; 
    console.log(`Ya es el goleador, superando al anterior por ${faltante} goles`)
}
