/*
Tomas Taverna
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 /*
function CalcularPrecio () 

{
 	let lamparas;
    let total;
    let descuento;
    


    lamparas= parseInt(document.getElementById("txtIdCantidad").value);

    total= (35*lamparas);

    descuento= (total*0.5);


    if (lamparas > "5")
    {

        document.getElementById("txtIdprecioDescuento").value= descuento;

    }

    
}


function CalcularPrecio()

{
    let lamparas;
    let total;
    let descuento1;
    let descuento2;
    let valor1;
    let valor2;
    let marca;
    

    lamparas= parseInt(document.getElementById("txtIdCantidad").value);

    total= (35*lamparas);

    descuento1= (total*0.4);

    descuento2= (total*0.3);

    valor1= (total - descuento1);

    valor2= (total - descuento2);

    marca= document.getElementById("Marca").value;


     if (lamparas> 4 && marca == "ArgentinaLuz")

     {

        document.getElementById("txtIdprecioDescuento").value= valor1;

     }

     else
     {

        if (lamparas > "4" && marca!= "ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value= valor2;
        }
     }
}


function CalcularPrecio ()

{


}
*/
//hecho por el profe
function CalcularPrecio ()

{
    let cantidadDeLamparas;
    let marca;
    let descuentoCalculado;
    let PrecioLampara;
    let preciocondescuento;
    let PrecioBruto;
    let porcentaje;
    let impuesto;
    
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    PrecioLampara = 35;
    porcentaje = 0;
    PrecioBruto = cantidadDeLamparas * PrecioLampara;
   
 
    
    if(cantidadDeLamparas > 5)
    {
        porcentaje = 50;
    }
    else
    {
        if(cantidadDeLamparas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                porcentaje= 40;
            }
            else
            {

            }
        }
        else
        {
            porcentaje=30;
        }
    }
    
    

}