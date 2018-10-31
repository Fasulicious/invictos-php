<?php
session_start();

require_once("../../../UTIL/variables_globales.php");
require_once("../../../UTIL/verificacion.php");


			
			$bandera=true;
			
				error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
				
				if(!fun_esblanco($_POST['id_img'])){
								
					if(fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/'.$_POST['id_img'].'.'.$_POST['ext_img'],"r") && fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/'.$_POST['id_img'].'_m.'.$_POST['ext_img'],"r")){			
						unlink('../../../IMG/INSTALACIONES/'.$_POST['id_img'].'.'.$_POST['ext_img']);	
						unlink('../../../IMG/INSTALACIONES/'.$_POST['id_img'].'_m.'.$_POST['ext_img']);						
					}
						
				}
/*
				if(!fun_esblanco($_POST['id_img_logo'])){
								
					if(fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],"r")){
											
						unlink('../../../IMG/INSTALACIONES/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo']);
													
					}
						
				}*/


	if($bandera){

		require_once("../../../CONEXION/Conexion.php");
		require_once("../DAO/DAOInstalaciones.php");

		$DAOInstalaciones=new DAOInstalaciones();

		$r=$DAOInstalaciones->eliminar_instalacion($_POST['id']);
		print $r;
	}else{

				
		print "error archivo";
	}



?>