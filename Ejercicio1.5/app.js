let nombre = prompt("Ingrese el nombre del producto");
let precio = parseInt(prompt("Ingrese el precio del producto"));
let porcentaje = parseInt(prompt("Ingrese el valor del porcentaje para hacer el descuento"));

descuento = porcentaje * precio / 100;
precioFinal = precio - descuento;

alert("El descuento de "+ porcentaje+ " % realizado sobre el producto " +nombre+ " es "+descuento+ " debera abonar " + precioFinal);
