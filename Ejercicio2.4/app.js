let numero = parseInt(prompt("Ingrese un numero"));

const mil = 1000;
const tresMil = 3000;

if ((numero >= 0) && (numero <= mil)){
    alert("Presupuesto bajo");
} else if ((numero > mil) && (numero <= tresMil)){
    alert("Presupuesto medio");
} else if (numero > tresMil){
    alert ("Presupuesto alto");
} else {
    alert("El numero ingresado es negativo")
}
