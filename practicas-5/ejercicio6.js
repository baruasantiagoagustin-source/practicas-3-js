function precioEntradas(precioUnitario, cantidad, esSocio) {
    let precio = precioUnitario * cantidad
    if (cantidad >= 4) {
        if (esSocio === true) {
            let total = (precio - (precio * 0.1))
            return precio = (total - (total * 0.15))
        } else {
            return (precio - (precio * 0.1))
        }
    } else {
        if (esSocio === true) {
            return (precio - (precio * 0.15))
        } else {
            return precio
        }
    }
}

console.log(precioEntradas(1500, 3, false));   // 4500
console.log(precioEntradas(1500, 3, true));    // 3825
console.log(precioEntradas(1500, 4, false));   // 5400
console.log(precioEntradas(1500, 5, true));    // 5737.5