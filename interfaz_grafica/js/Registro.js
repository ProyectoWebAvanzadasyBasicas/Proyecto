 function Registrar (){
    	var n = document.getElementById("nombre").value;
    	var a = document.getElementById("apellido").value;
    	var c = document.getElementById("correo").value;
    	var p1 = document.getElementById("contra1").value;
    	var p2 = document.getElementById("contra2").value;
      if(n == "" || a == "" || c == "" || p1 == "" || p2 == ""){
    	      alert("Error, Tiene que llenar el formulario completo.");
    }
    else{
      if(p1==p2){
        var pvalido=p1;
      alert(n + a + c + pvalido);
      alert("Registro Exitoso");
      location.href = 'Inicio.html';
      }
      else{
        alert("Error, las contraseñas no coinciden");
        alert("Registro Fallido");
        location.reload();
      }
    }

    }