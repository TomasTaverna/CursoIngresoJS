/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
	var num2;
	var num3;
	var suma;
	var mensaje;

	num1= parseInt(document.getElementById("txtIdPrecioUno").value);

	num2= parseInt(document.getElementById("txtIdPrecioDos").value);

	num3= parseInt(document.getElementById("txtIdPrecioTres").value);

	suma= num1+num2+num3;

	mensaje= ("La suma de los tres precios es ");

	alert (mensaje + suma);
}
function Promedio () 
{
	var num1;
	var num2;
	var num3;
	var promedio;
	var mensaje;

	num1= parseInt(document.getElementById("txtIdPrecioUno").value);

	num2= parseInt(document.getElementById("txtIdPrecioDos").value);

	num3= parseInt(document.getElementById("txtIdPrecioTres").value);

	promedio= (num1+num2+num3)/3 ;

	mensaje= ("El promedio de los tres productos es ");

	alert(mensaje + promedio);
}
function PrecioFinal () 
{
	var num1;
	var num2;
	var num3;
	var final;
	var iva;
	var mensaje;

	num1= parseInt(document.getElementById("txtIdPrecioUno").value);

	num2= parseInt(document.getElementById("txtIdPrecioDos").value);

	num3= parseInt(document.getElementById("txtIdPrecioTres").value);

	final= num1+num2+num3;

	iva=final*1.21;

	mensaje= ("El precio final más Iva es ");

	alert (mensaje + iva);
}