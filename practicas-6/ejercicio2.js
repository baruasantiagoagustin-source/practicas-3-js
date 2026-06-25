const jugadores = [
  { nombre: "Messi",    goles: 8,  pais: "Argentina" },
  { nombre: "Mbappé",   goles: 5,  pais: "Francia"   },
  { nombre: "Haaland",  goles: 12, pais: "Noruega"   },
  { nombre: "Benzema",  goles: 0,  pais: "Francia"   },
  { nombre: "Lewandowski", goles: 3, pais: "Polonia" },
  { nombre: "Kane",     goles: 2,  pais: "Inglaterra"},
  { nombre: "Neymar",   goles: 1,  pais: "Brasil"    },
  { nombre: "Müller",   goles: 0,  pais: "Alemania"  },
];


//parte A

// const goleadores = jugadores.filter(jugador => jugador.goles > 2);

// console.log(goleadores);


//parte B

// const nombres = jugadores.map(jugador => jugador.nombre);

// console.log(nombres);

//Parte C.

// const goleadores = jugadores.filter(jugador => jugador.goles > 2).map(jugador => jugador.nombre); // filtramos los jugadores que tienen más de 2 goles y luego usamos map en esta misma funcion para que se guarden solo los nombres

// console.log(goleadores);

// Parte D.

const primero = jugadores.find(j => j.pais === 'Francia');

console.log(primero)

//Para responder la pregunta, find solo devuelve el primer resultado, mientras que filter devuelve todos los que cumplen la condicion dada.
