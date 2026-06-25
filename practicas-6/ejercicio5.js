const grupo = [
  { nombre: "Messi",       goles: 8,  asistencias: 3, pais: "Argentina" },
  { nombre: "Mbappé",      goles: 5,  asistencias: 2, pais: "Francia"   },
  { nombre: "Haaland",     goles: 12, asistencias: 1, pais: "Noruega"   },
  { nombre: "Lewandowski", goles: 3,  asistencias: 4, pais: "Polonia"   },
  { nombre: "Kane",        goles: 2,  asistencias: 5, pais: "Inglaterra"},
  { nombre: "Neymar",      goles: 1,  asistencias: 2, pais: "Brasil"    },
];

const goleadores = [...grupo].filter(goleador => goleador.goles > 3) //filtra a todos los jugadores con mas de 3 goles
    .sort((a, b) => b.goles - a.goles); //acomoda de mayor a menor por cantidad de goles

const podio = goleadores.map(goleador => `${goleador.nombre} - ${goleador.goles} goles`); //escribe el nombre junto a goles de los goleadores

podio.forEach((top3, i) => {
  console.log(`${i + 1}. ${top3}`); //creo i para que vaya sumando 1 por cada vez que repite esto.
});

const asistidor = [...grupo]
  .filter(asistidor => asistidor.goles <= 3)
  .sort((a, b) => b.asistencias - a.asistencias)
  .find(asistidor => asistidor.asistencias === 5);

const maxAsist = [asistidor].map(A => `Asistidor silencioso: ${A.nombre} (${A.asistencias} asistencias y ${A.goles} ${A.goles === 1 ? "gol" : "goles"})`);

console.log(maxAsist[0]);