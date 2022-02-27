/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	//Se determina prompt para poder ingresar un nombre desde un mensaje emergente. 
	nombre= prompt("ingrese un nombre");
	
	//Utilizando la base de datos (HTML) extraemos el ID del cuadro de texto para la devolucion del valor de la var nombre.
	document . getElementById("txtIdNombre").value = nombre;
}

