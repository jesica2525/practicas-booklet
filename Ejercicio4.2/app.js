function redondear(numero) {
    redondeo = Math.round(numero);
    return redondeo;
}


for (i = 0; i < 5; i++){
    let numero = parseFloat(prompt("Ingrese un numero decimal"));
    alert (`El numero redondeado de ${numero} es ` + redondear(numero));
}


