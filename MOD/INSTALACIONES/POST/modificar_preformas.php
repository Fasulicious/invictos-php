<?php
session_start();

require_once("../../../UTIL/variables_globales.php");
require_once("../../../UTIL/verificacion.php");


			
			$bandera=true;
			
				error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
				
				if(!fun_esblanco($_POST['id_img'])){
											
						if(fopen($GL_DNS_IMG.'/IMG/PREFORMAS/TEMP/'.$_POST['id_img'].'.'.$_POST['ext_img'],"r")){
									
							if(copy('../../../IMG/PREFORMAS/TEMP/'.$_POST['id_img'].'.'.$_POST['ext_img'],'../../../IMG/PREFORMAS/'.$_POST['id_img'].'.'.$_POST['ext_img'])){
																
								unlink('../../../IMG/PREFORMAS/TEMP/'.$_POST['id_img'].'.'.$_POST['ext_img']);
								
							}else{
								$bandera=false;
								
							}						
															
						}else{
							if(fopen($GL_DNS_IMG.'/IMG/PREFORMAS/'.$_POST['id_img'].'.'.$_POST['ext_img'],"r")){

								$bandera=true;
							}else{

								$bandera=false;
							}
						}
							
					}	

			
			$bandera2=true;

				if(!fun_esblanco($_POST['id_img_logo'])){
											
						if(fopen($GL_DNS_IMG.'/IMG/PREFORMAS/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],"r")){
									
							if(copy('../../../IMG/PREFORMAS/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],'../../../IMG/PREFORMAS/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'])){
																
								unlink('../../../IMG/PREFORMAS/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo']);
								
							}else{
								$bandera2=false;
								
							}						
															
						}else{
							if(fopen($GL_DNS_IMG.'/IMG/PREFORMAS/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],"r")){

								$bandera2=true;
							}else{

								$bandera2=false;
							}
						}
							
					}	

		


	if($bandera && $bandera2){

					if(fopen($GL_DNS_IMG.'/IMG/PREFORMAS/TEMP/'.$_POST['id_img'].'.'.$_POST['ext_img'],"r")){
						unlink('../../../IMG/PREFORMAS/TEMP/'.$_POST['id_img'].'.'.$_POST['ext_img']);
					}
						
					if(fopen($GL_DNS_IMG.'/IMG/PREFORMAS/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo'],"r")){
						unlink('../../../IMG/PREFORMAS/TEMP/'.$_POST['id_img_logo'].'.'.$_POST['ext_img_logo']);
					}	


		require_once("../../../CONEXION/Conexion.php");
		require_once("../DAO/DAOPreforma.php");

		$DAOPreforma=new DAOPreforma();

		$r=$DAOPreforma->modificar_preforma($_POST['id'],$_POST['id_text'],$_POST['titulo'],$_POST['subtitulo'],$_POST['texto'],$_POST['id_img'],$_POST['ext_img']);
			print $r;
	}else{

				
		print "error archivo";
	}



?>