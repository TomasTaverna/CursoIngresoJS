/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;
	var mensaje;

	dividendo= document.getElementById("txtIdNumeroDividendo").value;

	divisor= document.getElementById("txtIdNumeroDivisor").value;

	resto= (dividendo%divisor);

	mensaje= ("El resto es ");

	alert (mensaje + resto);

}
