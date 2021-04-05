// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

//Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring. (Sacar de una estructura)
const {precio, nombreProducto} = producto;
//const {nombreProducto} = prodcuto;
console.log(precio);
console.log(nombreProducto);