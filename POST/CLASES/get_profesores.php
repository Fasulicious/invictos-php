<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/CLASES/DAOClases.php");


		$DAOClases=new DAOClases();

		if($_SESSION['tipo']=='A'){					
			$r=$DAOClases->get_profesores($_SESSION['id']);
		}else{
			$r=$DAOClases->profesor_get_alumnos($_SESSION['id']);
		}

		print json_encode($r);
		

?>