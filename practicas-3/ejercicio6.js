//parte A

// console.log(2 + 3 * 4) // 14
// console.log(10 - 2 ** 3) // 2
// console.log(6 / 2 + 1 * 3) // 6
// console.log(5 + 4 % 3) // 6
// console.log((2 + 3) * 4) // 20
// console.log(10 / (2 + 3)) // 2

//parte B

console.log(true || false && false) //da true, porque el or necesita que al menos uno de true y el and al leerse antes deja un solo false
console.log(false && true || true) // da true por lo mismo de antes
console.log(!false && false) // da false, porque un false con ! es un true 
console.log(!true || !false) //da true, porque or necesita un solo true, y false en esta ocacion ocupa ese lugar por el !
console.log(true && false || true && true) // true porque luego de los and queda un false or y un true, y con ese ultimo true dara true finalmente


//parte C
// !true              // unario ← !
// 5 + 3              // binario ← +
// edad >= 18 ? "mayor" : "menor"  // ternario ← ?:
// typeof "hola"      // unario ← typeof
// 10 % 3             // binario ← %
// -5                 // unario ← - (ojo: no es resta)
// a && b             // binario ← &&