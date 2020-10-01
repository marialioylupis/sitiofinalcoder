const agregarAlCarritoBotones = document.querySelectorAll('.addtocart');
agregarAlCarritoBotones.forEach((botonAgregarAlCarrito) => {
    botonAgregarAlCarrito.addEventListener('click', añadirAlCarrito);
})

const comprarBoton = document.querySelector('.botonComprar');
comprarBoton.addEventListener('click', botonComprar);

const seccionCarrito = document.querySelector('#agregarcarrito');

function añadirAlCarrito (event) {
    const boton = event.target;
    const item = boton.closest('.producto');

    const itemTitulo = item.querySelector('.titulo').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;

    agregarItemAlCarrito(itemTitulo, itemPrecio);
}

function agregarItemAlCarrito (itemTitulo, itemPrecio){
    const nombreElementos = seccionCarrito.getElementsByClassName('titulo');
    for (let i = 0; i < nombreElementos.length; i++){
        if (nombreElementos[i].innerText === itemTitulo){
            var cantidadDeElementos = nombreElementos[i].parentElement.querySelector('.cantidadItems');
            cantidadDeElementos.value++;
            precioTotal();
            return;
        }
    }

    const divCarrito = document.createElement('div');
    divCarrito.className = 'estilodivcarrito';
    const contenidoCarrito = 
      `<div class="shoppingCartItem">
      <p class="titulo">${itemTitulo}</p>
      <p class="precio texto">${itemPrecio}</p>
      <input class="cantidadItems" type="number" value="1">
      <button class="deleteItem">X</button>
      </div>`;
    divCarrito.innerHTML = contenidoCarrito;
    seccionCarrito.appendChild(divCarrito);

    divCarrito.querySelector('.deleteItem').addEventListener('click', borrarElementoCarrito);
    divCarrito.querySelector('.cantidadItems').addEventListener('change', cantidadElementos);

    precioTotal()
}

function precioTotal (){
    let total = 0;
    const precioCartTotal = document.querySelector('.preciototal');
    const itemsCarrito = document.querySelectorAll ('.shoppingCartItem');

    itemsCarrito.forEach((shoppingCartItem) =>{
        const precioElementoCarrito = shoppingCartItem.querySelector('.precio');
        const contenidoPrecioElementoCarrito = Number(precioElementoCarrito.textContent.replace('$', ''));
        const cantidadElementoCarrito = shoppingCartItem.querySelector('.cantidadItems');
        const valorCantidadElementoCarrito = Number(cantidadElementoCarrito.value);

        total = total + contenidoPrecioElementoCarrito * valorCantidadElementoCarrito;
    })

    precioCartTotal.innerHTML = `<p class= "titulo">Total: </p> <p class="texto"> ${total}$ </p>`;
}

function borrarElementoCarrito (event){
    const botonClick = event.target;
    botonClick.closest('.shoppingCartItem').remove();
    precioTotal();
}

function cantidadElementos (event){
    const input = event.target;
    if (input.value <= 0){
        input.value = 1;
    }
    precioTotal();
}

function botonComprar(){
    seccionCarrito.innerHTML = '';
    precioTotal();
}
