const numeroSecreto = 42;
const intentos = [3, 9, 1, 7, 5, 4, 10, 15, 17]; // el jugador "intenta" estos números en orden

let i = 1;
for (const intento of intentos) {
    if (intento === numeroSecreto) {
        console.log(`intento ${i} ${intento}: adivinaste en ${i} intentos!`)
        break
    } else if (i === 8) {
        console.log(`intento ${i} ${intento}: Lo siento, no adivinaste, el numero era ${numeroSecreto}`)
        break
    } else {
        console.log(`intento ${i} ${intento}`);
        i++;
    }
}