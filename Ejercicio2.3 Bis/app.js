let numero = parseInt(prompt("Ingrese un numero entre 1 y 4"));


if (numero == 1){
    respuesta = ("Elegiste a Homero");
} else if (numero == 2) {
    respuesta = ("Elegiste a Marge");
} else if (numero == 3) {
    respuesta = ("Elegiste a Bart");
} else if (numero == 4) {
    respuesta = ("Elegiste a Lisa");
}else {
    respuesta = ("Tenias que elegir un numero entre 1 y 4");
}
alert(respuesta)