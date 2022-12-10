const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

// ForEach. Solo en arreglos (no necesitamos una condición)

// ForEach
carrito.forEach((producto) => {
    console.log(producto.nombre)
});

// map
const arreglo2 = carrito.map(producto =>
    `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);

// iterar arreglo y mostrar elementos usamos forEach.
// si quiero crear nuevo arreglo, uso map. (filtrar nombre o precio x ejemplo)