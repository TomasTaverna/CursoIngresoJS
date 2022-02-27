/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	let nota;
	let maximo;
	let minimo;
	
	maximo= 10;

	minimo=1;

	nota= Math.round(Math.random()* (maximo - minimo)+ minimo);

		if (nota > 8)
		{
			alert ("EXCELENTE");

		}

		else if (nota < 9 && nota > 3)
		{
			alert ("APROBÓ");

		}

		else 
		{
			alert ("Vamos, la proxima se puede");

		}


	
	

}//FIN DE LA FUNCIÓN