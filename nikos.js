//Recibir mail del usuario en un console.log
function datosnewsletter (){
    var mailusuario = nombre.value;
    console.log ("El mail para la suscripción es " + mailusuario);
}

window.onload=function(){
    nombre=document.getElementById("newsletter");
    boton=document.getElementById("botonenviar");
    boton.addEventListener("click", datosnewsletter);
}