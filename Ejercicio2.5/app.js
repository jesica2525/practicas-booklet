let producto1 = prompt("Ingrese un producto de almacen");
let producto2 = prompt("Ingrese un producto de almacen");
let producto3 = prompt("Ingrese un producto de almacen");
let producto4 = prompt("Ingrese un producto de almacen");

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
    alert("Los productos ingresados fueron: \n1)" + producto1 + "\n2)"+ producto2 + "\n3)" + producto3 + "\n4)" + producto4);
} else {
    alert("Error: Es necesario cargar todos los productos")
}