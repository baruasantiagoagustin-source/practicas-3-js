const precioUnitario = 1500;   // precio de una entrada, en pesos
const cantidad = 3;            // cuántas entradas compra
const esSocio = true;          // ¿es socio del club?

let precio = precioUnitario * cantidad
if (cantidad >= 4) {
    if (esSocio === true) {
        let total = (precio - (precio * 0.1))
        console.log(`total a pagar ${(total - (total * 0.15))}`) 
    } else {
        console.log(`total a pagar ${(precio - (precio * 0.1))}`) 
    }
} else {
    if (esSocio === true) {
        console.log(`total a pagar ${(precio - (precio * 0.15))}`) 
    } else {
        console.log(`total a pagar ${precio}`)
    }
}

