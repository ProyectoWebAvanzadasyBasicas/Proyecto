 ahorros = [50000,100000,150000,500000,1000000,3500000,5000000,7200000,8000000,10000000];
 cuotamanejo=8000;
 function Listar_Ahorros(){
    imprimir="";
    imprimir+="GANANCIA"+"\t  ----->  "+"AHORRO"+"\n";
    for (var i =0; i<ahorros.length; i++) {
    	if(ahorros[i]>=8000000){
    		cupormil=ahorros[i]*0.004;
    		valahorros=(ahorros[i]-cupormil)-cuotamanejo;
    		imprimir+="\n$"+ahorros[i]+"\t   ----->   $"+valahorros+"\n";
    	} else{
      valahorros= ahorros[i] - cuotamanejo;
      imprimir+="\n$"+ahorros[i]+"\t   ----->   $"+valahorros+"\n";      
  }
   document.getElementById("txtarea").innerHTML = imprimir; 
  }

    }