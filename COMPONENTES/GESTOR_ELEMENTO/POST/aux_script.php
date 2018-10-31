<?php
session_start();


switch($elemento){

	case 'info_perfil':
		$_SESSION['nombres']=$_POST['nombres'];
		$_SESSION['apellidos']=$_POST['apellidos'];
		$_SESSION['username']=$_POST['username'];

		if(isset($nombre_img)){
			$_SESSION['foto']= $nombre_img.".".$ext;	
		}
	break;
	
}
?>