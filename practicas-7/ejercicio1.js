const jugador = {nombre: 'McAllister', pais: 'Argentina', goles: 54}

console.log(jugador.nombre)
console.log(`goles: ${jugador['goles']}`)

jugador.goles = 55

console.log(`nueva cantidad de goles: ${jugador['goles']}`)

jugador.club = 'Argentinos Juniors, dentro de poco...'

console.log("el mejor mediocampista del mundo, aca esta! \n", jugador)