/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var mensaje;
	var resultado;

	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2= parseInt(document.getElementById ("txtIdNumeroDos").value);

	mensaje= ("La suma es ");

	resultado= numero1 + numero2;

	alert (mensaje + resultado);	
}

function restar()
{
	var numero1;
	var numero2;
	var mensaje;
	var resultado;

	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2= parseInt(document.getElementById ("txtIdNumeroDos").value);

	mensaje= ("La resta es ");

	resultado= numero1 - numero2;

	alert (mensaje + resultado);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var mensaje;
	var resultado;

	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2= parseInt(document.getElementById ("txtIdNumeroDos").value);

	mensaje= ("La multiplicación es ");

	resultado= numero1 * numero2;

	alert (mensaje + resultado);
}

function dividir()
{
	var numero1;
	var numero2;
	var mensaje;
	var resultado;

	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2= parseInt(document.getElementById ("txtIdNumeroDos").value);

	mensaje= ("La division es ");

	resultado= numero1 / numero2;

	alert (mensaje + resultado);
}

