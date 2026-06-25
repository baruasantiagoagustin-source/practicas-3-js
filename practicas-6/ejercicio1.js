// const edades = [9, 15, 11, 8, 21, 17, 100];
// console.log(edades.sort());

//parte A
//1- Por la lectura ya sabia que no daria el orden "normal", y que daria 100, 11, 15, 17, 21, 8, 9.
//2- Si, coincide.
//3- Da esto porque toma la primera cifra del numero, y lo va acomodando del 1 al 9.

//Parte B

// const edades = [9, 15, 11, 8, 21, 17, 100];
// console.log(edades.sort((a, b) => a - b)); // usamos un arrow function que compara los numeros entre ellos para ver con el resultado cual es mayor o menor que el otro.

// parte C

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort((a, b) => b - a)); //al invertir el arrow function, y como se comparan los numeros, se invierte tambien el orden en el que se va a imprimir.