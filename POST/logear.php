<?php

// server should keep session data for AT LEAST 1 hour
ini_set('session.gc_maxlifetime', 360000);

// each client should remember their session id for EXACTLY 1 hour
session_set_cookie_params(360000);

session_start();
require_once("../CONEXION/Conexion.php");
require_once("../DAO/DAOLogin.php");
require_once("../UTIL/verificacion.php");
require_once("../UTIL/variables_globales.php");

$logeo=new DAOLogin();



if(empty($_POST['user'])){
	echo "sin user";
}else{
	if(empty($_POST['password'])){
		echo "sin password";	
	}else{
		
		if((valida_string_correo($_POST['user'])==1 || valida_string_alias($_POST['user'])==1) && valida_string_tipo_password($_POST['password'])==1){
									
			$respuesta=$logeo->logear($_POST['user'],$_POST['password']);
			
			if( $respuesta=="ok"){
										
				$_SESSION['user']=$_POST['user'];
				
			}
				echo $respuesta;
		}else{
			echo "no permitido";
		}
	}
}

?>