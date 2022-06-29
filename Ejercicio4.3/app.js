function impuesto(precio, porcentaje) {
    let calculopor = (precio + (precio*porcentaje)/100);
    return calculopor;
}

for (i = 0; i < 5; i++){
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    while ((isNaN(precio)) || (precio === null)) {
        alert("Debe Ingresar un numero");
        precio = parseFloat(prompt("Ingrese el precio del producto"));
    } 
    let porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea sumar"));
    while ((isNaN(porcentaje)) || (porcentaje === null)) {
        alert("Debe Ingresar un numero");
        porcentaje = porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea sumar"));
    } 
    alert (`El precio mas el porcentaje apercibido es ` + impuesto (precio, porcentaje));
}