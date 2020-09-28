<?php
include ("./conexion.php");

$nombre = $_POST['nombre'];
$mail = $_POST['correo'];
$clave = $_POST['clave'];

$query = "INSERT INTO `usuarios` (`id_usuario`, `usuario`, `clave`, `correo`) VALUES (NULL, '$nombre', '$clave', '$mail');";
$result = mysqli_query($connection, $query);
if($result == TRUE){
  header("Location: ../src/index.html");
  echo 'usuario profe agregado';
}
 echo 'no pudo crearse usuario ya registrado';
?>
