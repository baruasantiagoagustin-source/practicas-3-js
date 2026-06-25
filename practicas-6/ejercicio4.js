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

const ranking = jugadores.filter(jugador => jugador.goles >= 1)
    .sort((a, b) => b.goles - a.goles)
    .map(jugador => `${jugador.nombre} - ${jugador.goles} ${jugador.goles === 1 ? "gol" : "goles"}`);

// En ranking, hacemos un filter donde todos los jugadores con menos de 1 gol son "eliminados", luego con un sort comparamos los goles y ordenamos de mayor a menor, y al final con el map queda como pide la consigna.

console.log(ranking);