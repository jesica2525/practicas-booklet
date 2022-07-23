const equipo = [];
nombre = "";

nombre = prompt ("Ingrese el nombre del jugador. Escriba ESC para salir");
while((nombre != "ESC") && (nombre != "esc")){
    equipo.push(nombre);
    nombre = prompt ("Ingrese el nombre del jugador. Escriba ESC para salir");
} 
for (let i = 0; i < equipo.length; i++) {
    alert(`El jugador ${equipo[i]} esta en la posicion ${i+1}`)  
}