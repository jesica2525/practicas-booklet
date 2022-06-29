function validacion(cadena){
    return cadena != '';
}

 let cadena = prompt("Ingrese un texto o ESC para salir");
 while((cadena != "ESC") && (cadena != "esc")){
     if (validacion (cadena)){
         alert("La cadena NO esta vacia")
     } else {
         alert("La cadena esta vacia")
     }
     cadena = prompt("Ingrese un texto escribir `ESC` para salir");
 } 