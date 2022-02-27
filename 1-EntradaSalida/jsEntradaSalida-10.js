/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
// Doy nombre a las variables.	
	var importe;
	var descuento;
//Indico que tome el valor ingresado por el usuario.

	importe= parseInt(document.getElementById("txtIdImporte").value);

//Aplicamos el descuento indicado.
	descuento = importe*75/100;

//Indico que muestre el resultado del valor ingresado con el descuento en el cuadro de texto de la web.
	document.getElementById("txtIdResultado").value=descuento;


}
