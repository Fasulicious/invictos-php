<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/RECOMENDACION/DAORecomendacion.php");

		$DAORecomendacion=new DAORecomendacion();
					
		$r=$DAORecomendacion->get_recomendaciones($_SESSION['correo']);

		
		print json_encode($r);

?>