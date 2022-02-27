function mostrar()
{
	let auto;
	let marca;
	

	auto= document.getElementById("txtIdEdad").value;

	
	if (auto=="auto")
	{
		marca=prompt("Ingrese marca");
		alert ("Su auto es un " + marca);
	}

	

}//FIN DE LA FUNCIÓN