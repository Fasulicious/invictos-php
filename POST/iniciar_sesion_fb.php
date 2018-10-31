<?php

	session_start();

echo ' 1 ';
	if(!isset($_SESSION['user'])){

echo ' 2 ';
		require('../CONEXION/Conexion.php');
		require('../DAO/DAOLogin.php');

		$DAOLogin=new DAOLogin();

		$consulta=$DAOLogin->logear_con_id_fb($_POST['user']);

echo ' '.$consulta.' ';
		if($consulta=='no user'){
			$consulta=$DAOLogin->registrar_usuario($_POST['user'],$_POST['nombre'],$_POST['correo']);

		}

		$_SESSION['user']=$_POST['user'];
		$_SESSION['nombre']=$_POST['nombre'];

	}
?>

