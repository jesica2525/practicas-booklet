
class Tienda{
    constructor (nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}


for (let i = 0; i < 5; i++) {
    const tiendas = new Tienda (prompt("Ingrese el nombre de la tienda"), 
                            prompt("Ingrese su direccion"),
                            prompt("Ingrese el nombre de propietario"),
                            prompt("Ingrese a que rubro pertenece"));
    
    alert(`La tienda ${tiendas.nombre} que esta en la direccion ${tiendas.direccion} pertenece a ${tiendas.propietario} y pertenece al rubro ${tiendas.rubro}`);
}

