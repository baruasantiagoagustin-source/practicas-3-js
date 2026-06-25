const jugador = {
  nombre: "Haaland",
  pais: "Noruega",
  goles: 12,
  camiseta: 9,
};

const podio = ["Argentina", "Francia", "Croacia"];

const { nombre, goles, camiseta = 9 } = jugador;
const { nombre: NombreJugador } = jugador;


console.log(NombreJugador, goles);
console.log('camiseta:', camiseta);
console.log(`\n`)
const [oro, plata, bronce] = podio;
console.log('oro:',oro);  
console.log('bronce:',bronce);