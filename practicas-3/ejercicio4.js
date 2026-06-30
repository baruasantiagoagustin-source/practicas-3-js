//Parte A y B

// let dia = 6

// switch (dia) {	
//   case 1:	
//     console.log('Lunes');	
//     break;	
//   case 2:	
//     console.log('Martes');	
//     break;	
//   case 3:	
//     console.log('Miércoles');	
//     break;	
//   case 4:	
//     console.log('Jueves');	
//     break;	
//   case 5:	
//     console.log('Viernes');	
//     break;	
//   case 6:	
//     console.log('Sábado');	
//     break;	
//   case 7:	
//     console.log('Domingo');	
//     break;	
//   default:	
//     console.log('dia no reconocido.');	
// }	

// switch (dia) {	
//   case 1:	
//   case 2:	
//   case 3:	
//   case 4:	
//   case 5:	
//     console.log('Hay entrenamiento');	
//     break;	
//   case 6:	
//   case 7:	
//     console.log('descanso');	
//     break;	
//   default:	
//     console.log('Se entrena igual.');	
// }	

//Parte C

const dia = 2;

switch (dia) {
  case 2:
    console.log("Martes");
    break
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

//el fallthrough pasa cuando uno no pone el break al finalizar un caso, hace que al la consola leer de arriba a abajo, si no encuentra un freno sigue leyendo todo lo que este para abajo