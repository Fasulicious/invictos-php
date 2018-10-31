<?php
session_start();

require_once("../../../UTIL/variables_globales.php");
require_once("../../../UTIL/verificacion.php");


			
			$bandera=true;
			
				error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
				
				if(!fun_esblanco($_POST['id_img'])){

				
					if(fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/TEMP/WEB/'.$_POST['id_img'].'.'.$_POST['ext_img'],"r") && fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/TEMP/MOVIL/'.$_POST['id_img'].'.'.$_POST['ext_img'],"r") && fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/TEMP/MINI/'.$_POST['id_img'].'.'.$_POST['ext_img'],"r")){
								
						if(copy('../../../IMG/INSTALACIONES/TEMP/WEB/'.$_POST['id_img'].'.'.$_POST['ext_img'],'../../../IMG/INSTALACIONES/WEB/'.$_POST['id_img'].'.'.$_POST['ext_img']) && copy('../../../IMG/INSTALACIONES/TEMP/MOVIL/'.$_POST['id_img'].'.'.$_POST['ext_img'],'../../../IMG/INSTALACIONES/MOVIL/'.$_POST['id_img'].'.'.$_POST['ext_img']) && copy('../../../IMG/INSTALACIONES/TEMP/MINI/'.$_POST['id_img'].'.'.$_POST['ext_img'],'../../../IMG/INSTALACIONES/MINI/'.$_POST['id_img'].'.'.$_POST['ext_img'])){



							unlink('../../../IMG/INSTALACIONES/TEMP/WEB/'.$_POST['id_img'].'.'.$_POST['ext_img']);
							unlink('../../../IMG/INSTALACIONES/TEMP/MOVIL/'.$_POST['id_img'].'.'.$_POST['ext_img']);
							unlink('../../../IMG/INSTALACIONES/TEMP/MINI/'.$_POST['id_img'].'.'.$_POST['ext_img']);

						/*
							if(!fun_esblanco($_POST['id_img_logo'])){
														
								if(fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],"r")){
											
									if(copy('../../../IMG/INSTALACIONES/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],'../../../IMG/INSTALACIONES/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'])){
																		
										unlink('../../../IMG/INSTALACIONES/TEMP/'.$_POST['id_img'].'.'.$_POST['ext_img']);
										unlink('../../../IMG/INSTALACIONES/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo']);
										
									}else{
										$bandera=false;
										
									}						
																	
								}else{
									$bandera=false;
								}
									*/
							}else{			

								$bandera=false;

							}
							
						}else{
					
							$bandera=false;
							
						}						
											
					}else{
						$bandera=false;
					}
						
				/*}else{
					if(!fun_esblanco($_POST['id_img_logo'])){
											
						if(fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],"r")){
									
							if(copy('../../../IMG/INSTALACIONES/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],'../../../IMG/INSTALACIONES/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'])){
																
								unlink('../../../IMG/INSTALACIONES/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo']);
								
							}else{
								$bandera=false;
								
							}						
															
						}else{
							$bandera=false;
						}
							
					}													
				}*/





	if($bandera){

		require_once("../../../CONEXION/Conexion.php");
		require_once("../DAO/DAOInstalaciones.php");

		$DAOInstalaciones=new DAOInstalaciones();

		$r=$DAOInstalaciones->set_instalacion($_POST['texto'],$_POST['id_img'],$_POST['ext_img']);
		print $r;
	}else{

				
		print "error archivo";
	}



?>