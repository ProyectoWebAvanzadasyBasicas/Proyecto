function valida_envia(validaEntero){ 
  numeros = document.valida.numeros.value 
  validaEntero= parseInt(numeros) 
  document.valida.numeros.value=numeros 
  if (/([?1234567890][.][1234567890][1234567890])+$/.test(numeros)){
   alert("El valor solo numero  vuelve intentar el campo texto");
   document.valida.numeros.focus() 
   return 0;    
 }else{ 
   if (numeros==1 || numeros==12 ||numeros==123){ 
    alert("digite bn los numeros es invalido") 
    document.valida.numeros.focus() 
    return 0; 
  }
} 
if (numeros==""){ 
 alert("Tiene que introducir un valor") 
 document.valida.numeros.focus() 
 return 0; 
} 
alert(" gracias esta guardado base de datos"); 
document.valida.submit(); 

}