
class Tienda{
    constructor (nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto = function(hora){
            if ((hora > 8 & hora < 12) || (hora > 15) & ( hora < 19)){
                return true;
            }
            return false;
    }
}


const tiendas = new Tienda ((prompt("Ingrese el nombre de la tienda"), 
                            prompt("Ingrese su direccion"),
                            prompt("Ingrese el nombre de propietario"),
                            prompt("Ingrese a que rubro pertenece")));

for (let i = 0; i < 3; i++) {
    let hora = prompt("Ingrese el horario en que quiere visitar la tienda");
    if (tiendas.estaAbierto(hora)){
        alert(`La tienda esta abierta en el horario de las ${hora} horas`)
    }else{
        alert(`La tienda esta cerrado en el horario de las ${hora} horas`)
    };
}