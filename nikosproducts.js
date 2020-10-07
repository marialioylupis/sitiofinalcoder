//Agregar un evento a los botones para añadir al carrito
const agregarAlCarritoBotones = document.querySelectorAll('.addtocart');
agregarAlCarritoBotones.forEach((botonAgregarAlCarrito) => {
    botonAgregarAlCarrito.addEventListener('click', añadirAlCarrito);
})


//Añadir un evento al boton de comprar
const comprarBoton = document.querySelector('.botonComprar');
comprarBoton.addEventListener('click', botonComprar);

const seccionCarrito = document.querySelector('#agregarcarrito');

//Funcion que toma el titulo y el precio del producto que estoy seleccionando
function añadirAlCarrito (event) {
    const boton = event.target;
    const item = boton.closest('.producto');

    const itemTitulo = item.querySelector('.titulo').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;

    agregarItemAlCarrito(itemTitulo, itemPrecio);
}

//Funcion para agregar el producto al carrito
function agregarItemAlCarrito (itemTitulo, itemPrecio){

//Uso del for para que si llego a agregar dos veces el mismo elemento, que aumente su cantidad y no lo repita
    const nombreElementos = seccionCarrito.getElementsByClassName('titulo');
    for (let i = 0; i < nombreElementos.length; i++){
        if (nombreElementos[i].innerText === itemTitulo){
            var cantidadDeElementos = nombreElementos[i].parentElement.querySelector('.cantidadItems');
            cantidadDeElementos.value++;
            precioTotal();
            return;
        }
        // abrirSidebar;
    }

//Creacion del div que contiene al producto con su titulo, precio, cantidad y boton para eliminar
    const divCarrito = document.createElement('div');
    divCarrito.className = 'estilodivcarrito';
    const contenidoCarrito = 
      `<div class="ItemEnCarrito">
      <p class="titulo" style="color: #396a6b;">${itemTitulo}</p>
      <p class="precio titulo" style="color: #848484;">${itemPrecio}</p>
      <input class="cantidadItems" type="number" value="1">
      <button class="deleteItem" style="background-color: whitesmoke;">X</button>
      </div>`;
    divCarrito.innerHTML = contenidoCarrito;
    seccionCarrito.appendChild(divCarrito);

    //CORREGIR LOCALSTORAGE
    // localStorage.setItem('carrito', contenidoCarrito);//guarda en localstorage el contenido del carro

//Eventos para el boton de borrar el producto y el input donde defino la cantidad
    divCarrito.querySelector('.deleteItem').addEventListener('click', borrarElementoCarrito);
    divCarrito.querySelector('.cantidadItems').addEventListener('change', cantidadElementos);

    precioTotal()
}

//Funcion que define el precio total dependiendo de la cantidad y el precio
function precioTotal (){
    let total = 0;
    const precioCartTotal = document.querySelector('.preciototal');
    const itemsCarrito = document.querySelectorAll ('.ItemEnCarrito');

//Un forEach que recorre los productos del carritp, tomando su precio y cantidad
    itemsCarrito.forEach((shoppingCartItem) =>{
        const precioElementoCarrito = shoppingCartItem.querySelector('.precio');
        const contenidoPrecioElementoCarrito = Number(precioElementoCarrito.textContent.replace('$', ''));
        const cantidadElementoCarrito = shoppingCartItem.querySelector('.cantidadItems');
        const valorCantidadElementoCarrito = Number(cantidadElementoCarrito.value);

        total = total + contenidoPrecioElementoCarrito * valorCantidadElementoCarrito;
    })

    precioCartTotal.innerHTML = `<p class= "titulo">Total: </p> <p class="titulo"> ${total}$ </p>`;
}

//Funcion para eliminar elementos del carrito + que se edite el precio total
function borrarElementoCarrito (event){
    const botonClick = event.target;
    botonClick.closest('.ItemEnCarrito').remove();
    precioTotal();
}

//Funcion para que el input de cantidad no pueda ser menor a 0 + que se edite el precio total
function cantidadElementos (event){
    const input = event.target;
    if (input.value <= 0){
        input.value = 1;
    }
    precioTotal();
}

//Funcion para que cada vez que apreto el boton comprar se borre el carrito
function botonComprar(){
    seccionCarrito.innerHTML = '';
    precioTotal();
}

var botonCerrarCarrito = $('.botonCierreCarito')
var shoppingcartbutton = $('.fa-shopping-cart');

shoppingcartbutton.click(function(){
    $('#sidebar').toggleClass('active');
  })

  botonCerrarCarrito.click(function(){
    $('#sidebar').toggleClass('active');
  })