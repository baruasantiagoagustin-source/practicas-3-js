for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

// creo que imprimira (1, 2, 3), imprimio (3, 3, 3)

//parte b:

//El setTimeout programa 3 callbacks para ejecutarse después de 100ms. Cuando esos callbacks se ejecutan, ¿el loop ya terminó o todavía está corriendo?

// - ya finalizo al seguir un hilo unico.

//En ese momento, ¿qué valor tiene i?

// - en el momento que se ejecuta todo, i es igual a 3

//¿Por qué los 3 callbacks leen el mismo i en lugar de cada uno tener "su propio" i?

// - existe solo un i, por lo que se va a leer siempre el mismo.