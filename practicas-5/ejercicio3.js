//parte a

// function presentar(nombre, ciudad) {
//   return `${nombre} es de ${ciudad}`;
// }

// console.log(presentar("Ana", "Rosario")); //logre predecirlo, dio ana es de rosario
// console.log(presentar("Ana")); // no logre predecirlo, no crei que cuando un dato no es puesto daria undefined 
// console.log(presentar()); // lo mismo de antes, dio undefined en ambas

function saludar(nombre, idioma) {
    if (idioma == 'en') {
        console.log(`Hello, ${nombre}`)
    } else {
        console.log(`Hola, ${nombre}`) // lo dejo por fuera para que sea el por defecto
    }
}

saludar("Ana");          // "Hola, Ana"
saludar("Ann", "en");    // "Hello, Ann"
saludar("Ana", "es");    // "Hola, Ana"