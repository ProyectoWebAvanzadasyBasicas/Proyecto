function valida_envia(validaEntero){ 
  numeros = document.valida.numeros.value 
  validaEntero= parseInt(numeros) 
  document.valida.numeros.value=numeros 
  if (/([?1234567890][.][1234567890][1234567890])+$/.test(numeros)){
   alert("El valor solo numero  vuelve intentar el campo texto");
   document.valida.numeros.focus() 
   return 0;    
 }else{ 
   if (numeros<50000){
   alert(" no puede meter menos de 50 mil pesos")
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
 alert(" gracias esta guardado base de datos"); 
document.valida.submit(); 
}
}