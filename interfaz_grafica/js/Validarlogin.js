 username = new Array("sergio@gmail.com","jordan@gmail.com","andrew@gmail.com","u4@gmail.com","u5@gmail.com","u6@gmail.com","u7@gmail.com","u8@gmail.com","u9@gmail.com","u10@gmail.com","temporary@gmail.com");
        password = new Array("sb1234","jc5678","ar9012","p4","p5","p6","p7","p8","p9","p10","user");

        function Validar_Usuario(){
          var usuario=document.getElementById("email").value;
          var contraseña=document.getElementById("contraseña").value;

          if (usuario == username[0] && contraseña == password[0] || usuario == username[1] && contraseña == password[1] || usuario == username[2] && contraseña == password[2] || usuario == username[3] && contraseña == password[3] || usuario == username[4] && contraseña == password[4] || usuario == username[5] && contraseña == password[5] || usuario == username[6] && contraseña == password[6] || usuario == username[7] && contraseña == password[7] || usuario == username[8] && contraseña == password[8] || usuario == username[9] && contraseña == password[9] || usuario == username[10] && contraseña == password[10]) {
          
           alert("Login Exitoso. \n Bienvenido a nuestro simulador financiero.");
            window.location.href="Servicios.html";
}
else {
  alert("Login Fallido. \n Por favor inténtelo de nuevo.");
  location.reload();
}         
        }              