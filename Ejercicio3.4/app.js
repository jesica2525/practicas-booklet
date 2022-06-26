let nombre = prompt("Ingrese un nombre");
let espacio = " ";

while (nombre != "Voldemort") {
    espacio += nombre + "\n";
    nombre = prompt("Ingrese un nombre");
}
alert(espacio);
