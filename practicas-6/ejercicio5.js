const grupo = [
  { nombre: "Messi",       goles: 8,  asistencias: 3, pais: "Argentina" },
  { nombre: "Mbappé",      goles: 5,  asistencias: 2, pais: "Francia"   },
  { nombre: "Haaland",     goles: 12, asistencias: 1, pais: "Noruega"   },
  { nombre: "Lewandowski", goles: 3,  asistencias: 4, pais: "Polonia"   },
  { nombre: "Kane",        goles: 2,  asistencias: 5, pais: "Inglaterra"},
  { nombre: "Neymar",      goles: 1,  asistencias: 2, pais: "Brasil"    },
];

const goleadores = grupo.filter(goleador => goleador.goles > 3)
    .sort((a, b) => b.goles - a.goles);

const podio = goleadores.map(goleador => `${goleador.nombre} - ${goleador.goles} goles`);


let i = 1
podio.forEach(top3 => {
    console.log(i, podio);
    i++;
});