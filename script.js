/*función en la cual se muestra o se esconde el menú, cuando la pantalla de la pagina web se encuentra en una resolución 
de 767 maximo*/
jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon'),
        menu=$('.navigation ul'),marca=$('.marca'),marca1=$('.marcas'),
        ram=$('.ram'),tamaño=$('.tamaño'),
        procesador=$('.procesador'),almacenamiento=$('.almace'),
        rams=$('.rams'),tamaños=$('.tamaños'),
        procesadores=$('.procesadores'),almace=$('.almacenamientos');
    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
        menu.addClass('show');
        }
    });
    marca.click(function(){
        if(marca1.hasClass('show')){
            marca1.removeClass('show');
        }else{
            marca1.addClass('show');
        }
    });
    ram.click(function(){
        if(rams.hasClass('show')){
            rams.removeClass('show');
        }else{
            rams.addClass('show');
        }
    }); tamaño.click(function(){
        if(tamaños.hasClass('show')){
            tamaños.removeClass('show');
        }else{
            tamaños.addClass('show');
        }
    }); procesador.click(function(){
        if(procesadores.hasClass('show')){
            procesadores.removeClass('show');
        }else{
            procesadores.addClass('show');
        }
    }); almacenamiento.click(function(){
        if(almace.hasClass('show')){
            almace.removeClass('show');
        }else{
            almace.addClass('show');
        }
    });
});

//funcion para validar que no se ingresen valores mayores a lo permitido en cada campo
