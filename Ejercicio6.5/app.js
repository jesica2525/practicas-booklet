const equipo = [];
const buscarEdad = [];

class Jugador{
    constructor (nombre, numcamiseta, edad, lesionado){
        this.nombre = nombre;
        this.numcamiseta = numcamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

equipo.push(new Jugador ("Jesica", 5, 39, false));
equipo.push(new Jugador ("Sebastian", 20, 39, false));
equipo.push(new Jugador ("Maximo", 17, 12, true));
equipo.push(new Jugador ("Avril", 21, 15, false));
equipo.push(new Jugador ("Pedro", 20, 35, true));

function pedirDatosAlUsuario(){
    return prompt("Ingrese la edad del jugador que quiere buscar"); 
}
   
function filtroJugadores(equipo, ingresarEdad){
    const filtrado = equipo.filter(elemento => elemento.edad == ingresarEdad );
    console.log(filtrado);
    if(filtrado != 0){
        const mapeados = filtrado.map (el => 
            {alert(`Los jugadores de la edad seleccionada son: ${el.nombre}`)});
    }else{
        alert(`No se encontro ningun jugador con la edad indicada`)
    }

}

for (let i = 0; i < 5; i++) {
    ingresarEdad = pedirDatosAlUsuario();
    filtroJugadores(equipo, ingresarEdad);
}
    