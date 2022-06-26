let eleccion =  prompt("Selecciona un producto de 1 a 4");
const frase = "esc";

while (frase !== eleccion.toLowerCase()) {
    switch (eleccion) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Error");
            break;
    }
    eleccion = prompt("Selecciona un producto de 1 a 4");
}
