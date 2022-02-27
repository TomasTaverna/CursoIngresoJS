//Tomas Taverna 
/*Enunciado ejercicio 7:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	let edad;
	let estadoC;

	edad= parseInt(document.getElementById ("txtIdEdad").value);
	estadoC= document.getElementById ("estadoCivil").value;

	if (edad < "18" && estadoC != "soltero"){

		alert ("Es muy pequeño para NO ser soltero. ");
	}
	


}//FIN DE LA FUNCIÓN