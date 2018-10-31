<?php
session_start();

// server should keep session data for AT LEAST 1 hour
ini_set('session.gc_maxlifetime', 360000);

// each client should remember their session id for EXACTLY 1 hour
session_set_cookie_params(360000);

require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOLogin.php");
require_once("../../UTIL_PHP/verificacion.php");
require_once("../../UTIL_PHP/variables_globales.php");

$logeo=new DAOLogin();


if(empty($_POST['correo'])){
	$resultado=array("error"=>true,'detalle'=>'sin_user');
}else{
	if(empty($_POST['password'])){
		$resultado=array("error"=>true,'detalle'=>'sin_password');
	}else{
		
									
			$resultado=$logeo->logear($_POST['correo'],$_POST['password']);
			if( $resultado['detalle']=="ok_sesion"){
				$_SESSION['id']=$resultado['id'];
				$_SESSION['username']=$resultado['username'];
				$_SESSION['id_fb']=$resultado['id_fb'];
				$_SESSION['correo']=$resultado['correo'];
				$_SESSION['latitud_ini']=$resultado['latitud_ini'];
				$_SESSION['longitud_ini']=$resultado['longitud_ini'];
				$_SESSION['nombres']=$resultado['nombres'];
				$_SESSION['apellidos']=$resultado['apellidos'];
				$_SESSION['foto']=$resultado['foto'];
				$_SESSION['tipo']=$resultado['tipo'];
				$_SESSION['usuario_activo']=$resultado['usuario_activo'];
				$_SESSION['situacion_usuario']=$resultado['situacion_usuario'];
				
			}
	}
}


	echo json_encode($_SESSION['id']);
	echo ", ";
	echo json_encode($_SESSION['nombres']);
	echo ", ";
	echo json_encode($_SESSION['apellidos']);

?>