//parte A

// console.log(7 % 2) // va a dar 1, ya que % da el resto de una division
// console.log(10 % 5) //va a dar 0, por lo mismo de antes
// console.log(2 ** 4) // el signo ** es de potenciacion
// console.log("5" + 1) // 51, ya que el + funciona para unir en este caso ya que el '5' es un string
// console.log("5" - 1) // 4, cuando se usa -, el signo ignora el string y hace la cuenta matematica
// console.log(5 + "1") // lo mismo que antes, el + sirve para unir el string
// console.log("5" * "2") // 10, porque es una multiplicacion y como el - de antes, ignora el string

//parte B

// console.log(5 === 5) //dara true porque === comparaba sin modificar naa
// console.log(5 === "5") // dara false porque compara el un numero con un string
// console.log(5 == "5") // dara true ya que el == modifica el tipo de dato y compara
// console.log(0 == false) // esto es por el codigo binario, donde 0 siempre es false, y al compararlo con un false, son lo mismo dando true
// console.log(0 === false) // pero al compararlos sin modificar, compara un boolean con un numero, siendo diferentes 
// console.log("" == false) // el string vacio es considerado false, por lo que al compararse al false dara true
// console.log(3 !== "3") //compara sin modificar, pero al ser lo contrario por el "!" entonces devuelve true porque era false en un primer momento

//Parte C

let numero = 6

if (numero % 2 == 0) {
    console.log(` el numero ${numero} es par`)
} else {
    console.log(` el numero ${numero} es impar`)
}