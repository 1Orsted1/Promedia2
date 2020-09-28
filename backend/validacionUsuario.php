<?php
include('./conexion.php');
session_start();
$usuario = $_GET['nombre'];
$clave = $_GET['clave'];
$_SESSION['nombre'] = $usuario;
$query = "SELECT * from usuarios WHERE usuario='$usuario' and clave='$clave';";
$result = mysqli_query($connection,$query);
$row = mysqli_fetch_array($result);
$_SESSION['id'] = $row["id_usuario"];
$_SESSION['usr'] = $row["usuario"];
$boleano =mysqli_num_rows($result);

if($boleano>0){
header("Location: ../src/inicio.html");
}else{
echo $result; 
}

?>
