/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resultado por medio de "ALERT"*/
function sumar()
{
	var n1;
	var n2;
	var mensaje;


	n1= parseInt(document.getElementById("txtIdNumeroUno").value);

	n2= parseInt(document.getElementById("txtIdNumeroDos").value);

	mensaje= ("La suma es ");

	alert(mensaje + n1+n2);
}

