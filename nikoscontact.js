//Recbir los datos del usuario + comentarios en un console.log
var nombre;
var email;
var comentario;
var boton;

var arrayInput=new Array();

function datoscontacto (){
    var datouno = nombre.value;
    var datodos = email.value;
    var datotres = comentario.value;
    console.log ("El nombre es " + datouno + ". Su email es " + datodos + " y su comentario es " + datotres);
    submittedForm ();
}

window.onload=function(){
    nombre =document.getElementById("name");
    email=document.getElementById("email");
    comentario=document.getElementById("comments");
    boton=document.getElementById("botonenviar");
    boton.addEventListener("click", datoscontacto);
}

//Enviarle un mensaje al usuario diciendo que pronto le van a contestar
function submittedForm () {
    const nuevoDiv = document.createElement("div"); 
    const nuevoTexto = document.createTextNode("The form was submitted, we will answer shortly!"); 
    nuevoDiv.appendChild(nuevoTexto);  
    const currentDiv = document.getElementById("submittedtext"); 
    document.body.insertBefore(nuevoDiv, currentDiv); 
  }
