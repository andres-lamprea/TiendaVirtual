/*función en la cual se muestra o se esconde el menú, cuando la pantalla de la pagina web se encuentra en una resolución 
de 767 maximo*/
jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon'),
        menu=$('.navigation ul');
    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
        menu.addClass('show');
        }
    });
});
//funcion para validar que no se ingresen valores mayores a lo permitido en cada campo
function validar(campo,valor){
var elemento = document.getElementById(campo).value;
if(elemento>valor){
    alert("numero mayor a " + valor);
    document.getElementById(campo).value=valor;
}
}
//funcion que grafica el triangulo
function triangulo(lienzo, X1,X2,X3,Y1,Y2,Y3,R1,R2,R3,G1,G2,G3,B1,B2,B3){
    lienzo.fillStyle='rgb('+R1+','+G1+','+B1+')';
    lienzo.strokeStyle='rgb('+R2+','+G2+','+B2+')';
    lienzo.lineWidth=0.8;
    lienzo.beginPath();
    
    lienzo.moveTo(X1*10,350-(Y1*10));
    lienzo.lineTo(X2*10,350-(Y2*10));
    lienzo.lineTo(X3*10,350-(Y3*10));
    
    
    lienzo.closePath();
    lienzo.fill();
    lienzo.stroke();
    lienzo.fillStyle='rgb('+R3+','+G3+','+B3+')';
    //lienzo.lineWidth=1.5;
    //lienzo.beginPath();
    lienzo.fillRect(X1*10,350-(Y1*10),5,5);
    lienzo.fillRect(X2*10,350-(Y2*10),5,5);
    lienzo.fillRect(X3*10,350-(Y3*10),5,5);
    
}
//funcion que grafica la cuadricula de fondo
function drawLine(lienzo, startX, startY, endX, endY){
    lienzo.lineWidth=0.3;
    lienzo.strokeStyle='black';
    lienzo.beginPath();
 
    lienzo.moveTo(startX,startY);
 
    lienzo.lineTo(endX,endY);
 
    lienzo.stroke();
 
}
//funcion que obtiene los valores de cada campo, y llaman las funciones de graficacion de cuadricula al iniciar la ventana
function comenzar(){
    
    var x1=0,x2=0,x3=0,y1=0,y2=0,y3=0;
    x1 = document.miformulario.X1.value;
    x2 = document.miformulario.X2.value;
    x3 = document.miformulario.X3.value;
    y1 = document.miformulario.Y1.value;
    y2 = document.miformulario.Y2.value;
    y3 = document.miformulario.Y3.value;
    var elemento=document.getElementById("lienzo");
            lienzo=elemento.getContext("2d");
            for(var i=0;i<35;i++){
 drawLine(lienzo,10*i, 0, 10*i, 350);
 }
 for(var i=0;i<35;i++){
    drawLine(lienzo,0, 10*i, 350, 10*i);
    }
        }
//funcion que calcula area, perimetro y altura del triangulo        
function calcular(x1,x2,x3,y1,y2,y3){
    
    var distancia1 = Math.pow((x2-x1),2)+Math.pow((y2-y1),2);
        var dist1=Math.pow(distancia1,1/2);
        var distancia2 = Math.pow((x3-x2),2)+Math.pow((y3-y2),2);
        var dist2=Math.pow(distancia2,1/2);
        var distancia3 = Math.pow((x3-x1),2) + Math.pow((y3-y1),2);
        var dist3 = Math.pow(distancia3,1/2);
        var perimetro = dist1 + dist2+ dist3;
        var area = (((x1*y2)+(x2*y3)+(x3*y1))-((x1*y3)+(x3*y2)+(x2*y1)))/2;
        var altura;
        document.getElementById("Peri").value=perimetro;
        if(area<0){
            area = -area;
        }
        document.getElementById("Area").value = area;
        if(dist1>=dist2&&dist1>=dist3){
            altura = (area*2)/dist1;
        }
        if(dist2>=dist1&&dist2>=dist3){
            altura = (area*2)/dist2;
        }
        if(dist3>=dist1 &&dist3>=dist2){
            altura = (area*2)/dist3;
        }
        document.getElementById("alt").value = altura;
        
}
///funcion que grafica de nuevo el contenido al ser actualizado
function dibuja(){
            
            var x1=0,x2=0,x3=0,y1=0,y2=0,y3=0;
            x1 = document.miformulario.X1.value;
            x2 = document.miformulario.X2.value;
            x3 = document.miformulario.X3.value;
            y1 = document.miformulario.Y1.value;
            y2 = document.miformulario.Y2.value;
            y3 = document.miformulario.Y3.value;
            r1=document.miformulario.R1.value;
            r2=document.miformulario.R2.value;
            r3=document.miformulario.R3.value;
            g1=document.miformulario.G1.value;
            g2=document.miformulario.G2.value;
            g3=document.miformulario.G3.value;
            b1=document.miformulario.B1.value;
            b2=document.miformulario.B2.value;
            b3=document.miformulario.B3.value;
            calcular(x1,x2,x3,y1,y2,y3);
            /*if(x1.tooLong ==true||x2.tooLong ==true||x3.tooLong ==true||x1.tooLong ==true||x1.tooLong ==true||x1.tooLong ==true){
                alert("El numero nu puede ser superior a 35");

            }*/
            
            var elemento=document.getElementById("lienzo");
                    lienzo=elemento.getContext("2d");
                    lienzo.clearRect(0,0,350,350);
                    for(var i=0;i<35;i++){
         drawLine(lienzo,10*i, 0, 10*i, 350);
         }
         for(var i=0;i<35;i++){
            drawLine(lienzo,0, 10*i, 350, 10*i);
            }
         triangulo(lienzo,x1,x2,x3,y1,y2,y3,r1,r2,r3,g1,g2,g3,b1,b2,b3);  
                
        lienzo.repaint();
        
        }
        window.addEventListener("load",comenzar,false);

