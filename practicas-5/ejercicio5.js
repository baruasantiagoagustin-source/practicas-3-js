// //parte A

// function calcular() {
//   const resultado = 10 * 2;
//   return resultado;
// }

// console.log(calcular());     // dio el resultado al ser la funcion que devuelve 'resultado'
// console.log(resultado);      // pero en cambio, esto dio referenceError, ya que resultado no existe por fuera de la funcion calcular()


// //Parte B

// function puntajeFinal() {
//     let puntos = 0;
//     function sumar(valor) {
//         puntos = puntos + valor;

//     }
//     sumar(2)
//     sumar(5)
//     sumar(3)
//     return puntos
// }


// console.log(puntajeFinal());   // 10

//Parte C

function exterior() { //Exterior no puede ver B, pero creeria que puede ver el resultado que interior() le devuelve.
    const a = 1;
    function interior() {
        const b = 2;
        return a + b; //interior deberia de poder ver a A, porque aunque este est afuera, es declarado antes.
    }
    return interior();
}

console.log(exterior());   // Creo que va a devolver 3, ya que pienso que el return de interior devolvera un 3, y luego eso leera el return que esta por debajo y devolvera el resultado que la funcion le dio.