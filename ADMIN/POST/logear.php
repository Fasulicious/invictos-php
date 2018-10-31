<?php

// server should keep session data for AT LEAST 1 hour
ini_set('session.gc_maxlifetime', 360000);

// each client should remember their session id for EXACTLY 1 hour
session_set_cookie_params(360000);

session_start();
require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOLogin.php");
require_once("../../UTIL/verificacion.php");
require_once("../../UTIL/variables_globales.php");

$logeo=new DAOLogin();



if(empty($_POST['usuario'])){
	echo "sin username";
}else{
	if(empty($_POST['password'])){
		echo "sin password";	
	}else{
		
		if(valida_string_solo_letras_numeros($_POST['usuario'])==1 && valida_string_tipo_password($_POST['password'])==1){
									
			$respuesta=$logeo->logear($_POST['usuario'],$_POST['password']);
			
			if( $respuesta=="ok"){
										
				$_SESSION['super_user']=$_POST['usuario'];
				
			}
				echo $respuesta;
		}else{
			echo "no permitido";
		}
	}
}

?>