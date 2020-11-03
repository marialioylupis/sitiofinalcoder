//Función para que cuando apreto el boton la página vuelva a scrollear pa arriba
$(function(){
        $('#botonfinal').click(function(){
            $('html,body').animate({scrollTop:0}, 2000);
        });
})

//Funcion para mostrar y esconder el texto + imagen
$(document).ready(function(){
    $('.tipografiauno').hide(500);
    $('.imgcolumns').hide(500);
    $('.brandinfo').hide(500);
    $('.arrowtoleft').hide(500);
    $('.arrowtoright').on('click', function(){
        $('.tipografiauno').slideDown(1000);
        $('.imgcolumns').fadeIn(1500);
        $('.brandinfo').slideDown(1000);
        $('.arrowtoleft').slideDown(1500);
    })
})

$('.arrowtoleft').on('click', function(){
    $('.tipografiauno').hide(500);
    $('.imgcolumns').hide(500);
    $('.brandinfo').hide(500);
    $('.arrowtoleft').hide(500);
})

let section = document.querySelector('section');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        section.style.clipPath = `circle(${value +'px'} at center)`;
    });






// Altura del scroll
// $(window).scroll(function(event) {
//     var scrollTop = $(window).scrollTop();
//     console.log("Vertical "+scrollTop);
//   });

// $(window).scroll(function (){
    // $('.tipografiauno').hide(500);
//     if($(this).scrollTop(700)){
//         $('.tipografiauno').slideDown(1000).finish();
//     }
// })
