//parte A y B

// console.log(1 == "1") //al transformarlo dara true
// console.log(1 === "1") // al no transformar el ===, dara false

// console.log(true == 1) //dara true porque el 1 en binario es true, entonces compara lo que son cada uno sin comparar el tipo de dato en si.
// console.log(true === 1) // al no transformar, dara false porque compara boolean con number

// console.log(null == undefined) // ambos son false, dara true, ya que al ser valores indefinidos o nulos no dan un valor que pueda ser positivo
// console.log(null === undefined) //ambos son tipos distintos de datos, dara false

// console.log("" == 0) //string vacio es false, dara true, porque 0 es false
// console.log("" === 0) // al no transformar dara false

// console.log(" " == 0) //dara true porque un string sin nada, devuelve 0

//Parte C

const ingresado = "100";   // viene de un campo de texto

if (ingresado === '100') { //el cambio seria transformar toda la comparacion en string, ya que el dato ingresado siempre sera un string al venir de un usuario
  console.log("Correcto");
} else {
  console.log("Incorrecto");   // ← hoy entra acá, ¿por qué?, porque al usar ===, detecta que hay un string y un number y no puede compararlos realmente.
}
