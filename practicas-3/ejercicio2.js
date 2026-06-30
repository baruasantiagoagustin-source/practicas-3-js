let goles = 0

if (goles >= 20) {
    console.log('Goleador')
} else if (goles <= 19 && goles >= 10) {
    console.log('Habitual')
} else if (goles <= 9 && goles >= 1) {
    console.log('Ocasional')
} else {
    console.log('No convirtio')
}