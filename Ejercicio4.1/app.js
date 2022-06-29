function entrada() {
    let nombre = prompt("Ingrese su nombre");
    return nombre;
}

function procesamiento(nombre) {
    let presentacion = "Soy nuevo y mi nombre es " + nombre ;
    return presentacion
}

function salida(nombre) {
    alert(nombre)
}

nombre = procesamiento(entrada());
salida(nombre);