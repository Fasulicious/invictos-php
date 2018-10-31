<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/CLASES/DAOClases.php");




		$DAOClases=new DAOClases();

		if($_SESSION['tipo']=='A'){
			$r=$DAOClases->alumno_get_clases_por_calificar($_SESSION['id']);
		}elseif($_SESSION['tipo']=='P'){
			$r=$DAOClases->profesor_get_clases_por_confirmar($_SESSION['id']);
		}



		print json_encode($r);
		

	


?>