<?php
session_start();

require_once("../../../CONEXION/Conexion.php");
require_once("../../../ADMIN/DAO/DAOLogin.php");


$DAOLogin=new DAOLogin();

if($DAOLogin->es_usuario($_SESSION['user'])=='si'){


	require_once("../DAO/DAOUsuarios.php");
	$DAOUsuarios=new DAOUsuarios();

	$r=$DAOUsuarios->set_usuario($_POST['username'],$_POST['password']);
	print $r;

}



?>