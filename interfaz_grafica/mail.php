<php

$destino=$_POST['chemistrylife@hotmail.com'];
$asunto= $_POST['name'];
$mensaje = $_POST['mensaje'];
$headers = 'From:'.$_POST['email']."\r\n".
'Reply-To:'.$_POST['chemistrylife@hotmail.com']."\r\n".
'X-Mailer:PHP/'.phpversion();


mail($destino,$asunto,$comentario,$headers);
?>