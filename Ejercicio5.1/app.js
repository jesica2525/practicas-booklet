class Tienda{
    constructor (nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda ("La tienda del cafe", "av. de los incas 5147", "Juan Perez", "Alimenticio");
const tienda2 = new Tienda ("Tu perrito", "Dorrego 1545", "Victoria Sanchez", "Mascotas");
const tienda3 = new Tienda ("Mc Nonal", "Caldas 548", "Maria Lopez", "Alimenticio");

console.log(tienda1);
console.log(tienda2);
console.log(tienda3);