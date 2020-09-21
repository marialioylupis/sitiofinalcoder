var productos = [
    {
        nombre: 'cleanser',
        tipo: 'limpieza',
        precio: 15,
        cantidad: 0,
    },
    {
        nombre: 'serum',
        tipo: 'hidratacion',
        precio: 25,
        cantidad: 0,
    },
    {
        nombre: 'crema',
        tipo: 'hidratacion',
        precio: 20,
        cantidad: 0,
    }
]

function agregarAlCarrito (nombre, tipo, precio, cantidad) {
    var productoCarrito = {
        nombre: nombre,
        tipo: tipo,
        precio: precio,
        cantidad: cantidad,
    }

    productos.push(productoCarrito);
}

console.log(productos)