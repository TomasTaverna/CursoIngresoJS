/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let mensaje;

	numeroIngresado = prompt(mensaje);
	parseInt(numeroIngresado);
	mensaje= "ingrese un número entre 0 y 10.";

	while (!(numeroIngresado  >0 && numeroIngresado <10));
		{
			numeroIngresado= prompt (mensaje);

			//numeroIngresado= 
		}

	document.getElementById(txtIdNumero).value= numeroIngresado;


	
}//FIN DE LA FUNCIÓN