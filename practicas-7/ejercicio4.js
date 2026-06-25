const jugador = {
  nombre: "Mbappé",
  goles: 5,
  pais: "Francia",
};

// const extra = { club: "Real Madrid", camiseta: 9 };

JugadorActualizado = {...jugador}

JugadorActualizado.goles = 6

console.log(jugador)
console.log('\n')
console.log(JugadorActualizado)

JugadorCompleto = {...JugadorActualizado, ...extra}
console.log('\n')
console.log(JugadorCompleto)

const extra = { club: "Real Madrid", camiseta: 9, goles: 7 };
PruebaJugador = { ...jugador, goles: 100, ...extra }
console.log('\n')
console.log(PruebaJugador)
//toma el ultimo resultado del elemento, ignorando los anteriores