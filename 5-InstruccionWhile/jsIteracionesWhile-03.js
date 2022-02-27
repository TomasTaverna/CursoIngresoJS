/*
Tomas Taverna
Ejercicio 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750")
	{
		mensaje= "Clave incorrecta, intente nuevamente"
		alert (mensaje);
		claveIngresada= prompt ("Intente de nuevo");

	}
	
	mensaje = ("Clave correcta")
		alert (mensaje)
}//FIN DE LA FUNCIÓN
