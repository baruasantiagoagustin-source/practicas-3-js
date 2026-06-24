const numeroSecreto = 7;
const intentos = [3, 9, 1, 7, 5]; // el jugador "intenta" estos números en orden

let i = 1;
for (const intento of intentos) {
    if (intento === numeroSecreto) {
        console.log(`intento ${i} ${intento}: adivinaste en ${i} intentos!`)
        break
    }
    console.log(`intento ${i} ${intento}`);
    i++;
}