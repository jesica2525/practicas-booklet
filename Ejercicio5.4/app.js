
class Tienda{
    constructor (nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    esPropietario(nombre){
        return this.propietario == nombre;
    }
}

const tienda1 = new Tienda ("La tienda del cafe", "av. de los incas 5147", "Juan Perez", "Alimenticio");
const tienda2 = new Tienda ("Tu perrito", "Dorrego 1545", "Victoria Sanchez", "Mascotas");
const tienda3 = new Tienda ("Mc Nonal", "Caldas 548", "Maria Lopez", "Alimenticio");


for (let i = 0; i < 3; i++) {
    let nombreProp = prompt("Ingrese el nombre del propietario que quiere buscar");
    if (tienda1.esPropietario(nombreProp)){
        alert(`${nombreProp} es propietario de la tienda ${tienda1.nombre}`)
    }else if (tienda2.esPropietario(nombreProp)){
        alert(`${nombreProp} es propietario de la tienda ${tienda2.nombre}`)
    }else if(tienda3.esPropietario(nombreProp)){
        alert(`${nombreProp} es propietario de la tienda ${tienda3.nombre}`)
    }else{
        alert(`${nombreProp} no es propietario de ninguna de las tiendas registradas`)
    }
}