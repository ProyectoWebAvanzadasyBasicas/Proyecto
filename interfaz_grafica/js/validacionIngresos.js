function valida_envia(validaEntero){ 
  numeros = document.valida.numeros.value 
  validaEntero= parseInt(numeros) 
  document.valida.numeros.value=numeros 
  if (/([?1234567890][.][1234567890][1234567890])+$/.test(numeros)){
   alert("El valor recibe solo valor numerico, vuelva insertar el valor requerido");
   document.valida.numeros.focus() 
   return 0;    
 }else{ 
   if (numeros<50000){
   alert("No puede ingresar menos de 50 mil pesos")
    document.valida.numeros.focus() 
    return 0; 
  }
  
} 
if (numeros==""){ 
 alert("Tiene que introducir un valor") 
 document.valida.numeros.focus() 
 return 0; 
} 
if (numeros>50000){
 alert("Gracias se ha guardado en la  base de datos"); 
document.valida.submit(); 
}
}