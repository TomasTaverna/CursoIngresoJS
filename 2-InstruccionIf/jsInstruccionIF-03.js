function mostrar()
{
	let edad;

	edad= document.getElementById("txtIdEdad").value;

	if (edad<= "17")
	{
		alert("Usted es menor de edad, tiene " + edad);
	}

	else
	{
		alert ("Usted es mayor de edad, tiene " + edad);
	}

}//FIN DE LA FUNCIÓN