<?php
// Verificar campos vacíos
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Crea el correo electrónico y envía el mensaje
$to = "faver820525@gmail.com"; // Agregue su dirección de correo electrónico entre "" reemplazando yourname@yourdomain.com - Aquí es donde el formulario le enviará un mensaje.
$subject = "Formulario de contacto del sitio web:  $name";
$body = "Recibió un nuevo mensaje del formulario de contacto de su sitio web.\n\n"."Aquí están los detalles:\n\nName: $name\n\nEmail: $email\n\nPhone: $phone\n\nMensaje:\n$message";
$header = "De: faver820525@gmail.com\n"; // Esta es la dirección de correo electrónico del mensaje generado será. Recomendamos usar algo como noreply@yourdomain.com.
$header .= "Responder a: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
