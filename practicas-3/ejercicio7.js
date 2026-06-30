//parte a

// if ("0") {console.log('entre 1')}        // ¿entra? entra
// if (0) {console.log('entre 2')}          // ¿entra? 
// if ("") {console.log('entre 3')}         // ¿entra?
// if (" ") {console.log('entre 4')}        // ¿entra? entra
// if (null) {console.log('entre 5')}       // ¿entra?
// if ([]) {console.log('entre 6')}         // ¿entra? entra
// if (NaN) {console.log('entre 7')}        // ¿entra?

// en mi opinion los que mas confunden son el "0" y el " ", ya que parecen similares a los que ya sabemos que son false, pero por un ligero cambio terminan dando true.

//parte b

// console.log("Hola" && 42) // 42, ya que devuelve el primer numero antes que un string
// console.log(0 && 42) // 0 porque toma el primer valor que aparece en el and
// console.log("" || "default") // default, porque el operador or busca un true al menos, y el "" es false, por lo que pasa el true
// console.log("Ana" || "default") // cuando son mismo valor, toma el primero, ana

//parte c

const stock = 0;

console.log(stock || 10);   // porque toma el valor true que en este caso, al no buscar un boolean, escribe el 10
console.log(stock ?? 10);   // porque toma el primer valor al ser un false