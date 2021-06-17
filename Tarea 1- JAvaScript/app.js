   /*********************************** 
    * Declaracion de variables 
    * **********************************/

   var diametro, grosor;

//asignacion de variables

    diametro = prompt('Introduce el diametro de la rueda en MT ');
    diametro = Number(diametro);

    grosor = prompt('Introduce el grosor de la rueda en MT ');
    grosor = Number(grosor);


//condiciones if
    
if(diametro>1.4){
    alert('La rueda es para un vehículo grande');
} else if(diametro<=1.4 && diametro>0.8){
     alert('La rueda es para un vehículo mediano.');
} else {
     alert('La rueda es para un vehículo pequeño');
}

if((diametro>1.4 && grosor<0.4) || (diametro<=1.4 && diametro>0.8) && grosor<0.25){
    alert('El grosor para esta rueda es inferior al recomendado.')

 }
    
    