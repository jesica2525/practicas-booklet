const equipo = [];

class Jugador{
    constructor (nombre, numcamiseta, edad, lesionado){
        this.nombre = nombre;
        this.numcamiseta = numcamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

equipo.push(new Jugador ("Jesica", 5, 39, false));
equipo.push(new Jugador ("Sebastian", 20, 10, false));
equipo.push(new Jugador ("Maximo", 17, 12, true));
equipo.push(new Jugador ("Avril", 21, 15, false));
equipo.push(new Jugador ("Pedro", 20, 35, true));

console.log(equipo);

function buscarJugador(equipo, jugador){
    return equipo.find(elemento => elemento.nombre == jugador);

}

for (let index = 0; index < 3; index++) {
    let buscar = buscarJugador(equipo, prompt('Ingrese el nombre del jugador que desea buscar'));
    if (buscar != undefined){
        alert('Se encontro el jugador buscado, se llama '+buscar.nombre+' tiene la camiseta '+buscar.numcamiseta+' y tiene '+buscar.edad+` años`);
    }else{
        alert('El jugador buscado no se encuentra en el equipo');
    }
}
