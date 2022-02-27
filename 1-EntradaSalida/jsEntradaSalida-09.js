/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 //Doy nombre a las variables. 	
 	var sueldo;
 	var aumentoSueldo; 

//Indico que registre el valor ingresado en el cuadro de texto.

 	sueldo= parseInt(document.getElementById("txtIdSueldo").value);

 //Lo transforma a entero como indica con (parseInt).	

 	sueldo=parseInt(sueldo);

 //Aplico el aumento mediante la multiplicacion del valor ingresado y el 10%	

 	aumentoSueldo= sueldo*1.10;

//Indico que haga una devolucion del resultado dentro del cuadro de texto de la web.

 	document.getElementById("txtIdResultado").value=aumentoSueldo;


	

	
}
