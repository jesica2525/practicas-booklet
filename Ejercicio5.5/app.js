class Cliente{
    constructor(nombre,presupuesto,tarjeta,telefono){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0) && (valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor
        }else{
            return 0;
        }
    }
}
const cliente1 = new Cliente("Maria", 500, true, "1132544854");
const cliente2 = new Cliente("Juan", 5000, false, "1154895210");
const cliente3 = new Cliente("Pablo", 2000, true, "1145722653");

for (let i = 0; i < 5; i++) {
    let dineroGastado = parseFloat(prompt("Ingrese el monto que desea gastar"));
    if (cliente1.transferirDinero(dineroGastado)){
        alert(`El Cliente ${cliente1.nombre} puede gastar ${dineroGastado}`);
    } else if (cliente2.transferirDinero(dineroGastado)){
        alert(`El Cliente ${cliente2.nombre} puede gastar ${dineroGastado}`);
    } else if (cliente3.transferirDinero(dineroGastado)){
        alert(`El Cliente ${cliente3.nombre} puede gastar ${dineroGastado}`);
    } else{
        alert
    }
}