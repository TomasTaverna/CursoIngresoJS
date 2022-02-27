function mostrar()
{
	let edad;
	let mensaje;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17)
	{
		mensaje=("Es mayor de edad");
		}

	if (edad < 18 && edad > 12){

		mensaje= ("Es adolescente");
	}
	if (edad >0 && edad<13)
	{

		mensaje=("Es niño");
	}
	
	
	alert (mensaje);



}//FIN DE LA FUNCIÓN