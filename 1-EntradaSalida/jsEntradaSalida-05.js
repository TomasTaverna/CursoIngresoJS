/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	// Definimos una variable "mensaje" para mayor comodidad al escribir el codigo y por si es necesario modificarlo.
	var mensaje;
// Asignamos valor a la ID del HTML para que nos devuelva el valor de ambas variables. 
	nombre= document. getElementById ("txtIdNombre"). value;
	edad= document. getElementById ("txtIdEdad"). value;

// Para concatenar frases utilizamos "+" y dejamos los respectivos espacios entre palabras para asi darle sentido al mensaje.
	mensaje= ("Usted se llama " + nombre + " y tiene " + edad + " años. ");

	alert (mensaje);
	
}

