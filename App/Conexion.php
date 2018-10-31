<?php


class Conexion 
{
	//SERVIDOR LOCAL
	//-------------------------------
 	var $bd = "manuelf2_invictos";
	var $servidor="localhost";
	var $user="manuelf2_user";
	var $pass="invictos123456";
/*

 	var $bd = "invictos";	
	var $servidor="127.0.0.1";
	var $user="root";
	var $pass="1234";
*/

	
	function Conexion(){
		//$cn = mysql_connect($this->servidor_localhost,$this->user_localhost,$this->pass_localhost);
		$cn = new mysqli($this->servidor, $this->user, $this->pass,$this->bd);

		//$cn->autocommit(false);
		//$result = $cn;
		if (mysqli_connect_errno()) {
			return "no_conexion";
		}else{
			$cn->set_charset("utf8");		
			return $cn;			
		}		
	}


	function close($cn){
		mysqli_close($cn);		
	}

}

?>