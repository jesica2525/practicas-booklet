const COTIZACION = 240;
let opcion = 0;

const cotizarDolar = (pesos) => Math.round(pesos/COTIZACION); 
const cotizarPesos = (dolar) => dolar*COTIZACION;

do{
    opcion = parseInt(prompt("Elija una opcion - Cotizar: \n\t 1.De pesos a dolares \n\t 2.De dolares a pesos \n\t 3.Salir"));
    switch (opcion) {
        case 1:
            cantidad = parseInt(prompt("Ingrese el monto (en pesos) para saber su equivalente en dólares"));
            alert(`${cantidad} pesos equivalen a ` +cotizarDolar(cantidad) +` dólares.`);
            break;
        case 2:
            cantidad = parseInt(prompt("Ingrese el monto (en dólares) para saber su equivalente en pesos"));
            alert(`${cantidad} dólares equivalen a ` +cotizarPesos(cantidad) +` pesos.`);
            break;
        case 3:
            alert("Hasta Luego");
            break;
        default:
            break;
    }
} while (opcion != 3);
