<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");




		$DAOConversacion=new DAOConversacion();

					
		$r=$DAOConversacion->consulta_conversacion($_SESSION['id'],$_POST['id_usuario'],$_POST['inicio']);


		if(!$r['error']){

			$usuario=$DAOConversacion->info_usuario($_POST['id_usuario']);

			$respuesta=array('error'=>$r['error'],'vacio'=>$r['vacio'],'conversacion'=>$r['data'],'info_usuario'=>$usuario['data']);
			print json_encode($respuesta);		
		}else{

			print json_encode($r);		
		}
		

	
	

	


?>