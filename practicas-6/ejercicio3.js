const jugadores = [
  { nombre: "Messi",       goles: 8,  pais: "Argentina"  },
  { nombre: "Mbappé",      goles: 5,  pais: "Francia"    },
  { nombre: "Haaland",     goles: 12, pais: "Noruega"    },
  { nombre: "Benzema",     goles: 0,  pais: "Francia"    },
  { nombre: "Lewandowski", goles: 3,  pais: "Polonia"    },
  { nombre: "Kane",        goles: 2,  pais: "Inglaterra" },
  { nombre: "Neymar",      goles: 1,  pais: "Brasil"     },
  { nombre: "Müller",      goles: 0,  pais: "Alemania"   },
];

//parte A
// const goleadores = jugadores.filter(jugador => jugador.goles > 2); //devuelve 4 jugadores.
// console.log(goleadores)

//parte B

// const nombres = jugadores.map(jugador => jugador.nombre);
// console.log(nombres);

//parte C

// const goleadores = jugadores.filter(jugador => jugador.goles > 2); // filtramos los jugadores que tienen más de 2 goles

// const nombresJugadores = goleadores.map(jugador => jugador.nombre); //y con map, nos quedamos solo los nombres.

// console.log(nombresJugadores);

//en mi opinion, aunque haga lo mismo que en el ejercicio2, por fuera de que tiene mas lineas, a veces mas no significa peor, porque siento que este codigo queda mas legible de esta manera que de la anterior.

//parte D

const primero = jugadores.find(j => j.pais === 'Francia');

console.log(primero)

//como puse en el anterior ejercicio, find solo devuelve el primer resultado, mientras que filter devuelve todos los que cumplen la condicion dada.