<?php
session_start();

require_once("../../UTIL/variables_globales.php");
require_once("../../UTIL/verificacion.php");

			
			$bandera=true;
			
				error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
				
				if(!fun_esblanco($_POST['img_previa'])){
				
					if(fopen($GL_DNS_IMG.'/IMG/AVISOS/TEMP/'.$_POST['img_previa'].'.'.$_POST['img_previa_ext'],"r") && fopen($GL_DNS_IMG.'/IMG/AVISOS/TEMP/'.$_POST['img_previa'].'_m.'.$_POST['img_previa_ext'],"r")){
						
						if(copy('../../IMG/AVISOS/TEMP/'.$_POST['img_previa'].'.'.$_POST['img_previa_ext'],'../../IMG/AVISOS/'.$_POST['img_previa'].'.'.$_POST['img_previa_ext']) && copy('../../IMG/AVISOS/TEMP/'.$_POST['img_previa'].'_m.'.$_POST['img_previa_ext'],'../../IMG/AVISOS/'.$_POST['img_previa'].'_m.'.$_POST['img_previa_ext'])){

								unlink('../../IMG/AVISOS/TEMP/'.$_POST['img_previa'].'.'.$_POST['img_previa_ext']);
								unlink('../../IMG/AVISOS/TEMP/'.$_POST['img_previa'].'_m.'.$_POST['img_previa_ext']);

							}else{
								$bandera=false;
							}
							
						}else{
							$bandera=false;
						}
						
					}else{
						$bandera=false;
					}
						

	if($bandera){

		require_once("../../CONEXION/Conexion.php");
		require_once("../../DAO/AVISOS/DAOAvisos.php");

		$DAOAvisos=new DAOAvisos();

		$r=$DAOAvisos->crear_aviso($_POST['id_text'],$_POST['titulo'],$_POST['descripcion'],$_POST['direccion'],$_POST['img_previa'],$_POST['img_previa_ext'],$_POST['id_distrito'],$_POST['costo'],$_POST['coor_latitud'],$_POST['coor_longitud'],$_POST['area'],$_POST['habitaciones'],$_POST['banios'],$_POST['transaccion'],$_POST['tipo_inmueble'],$_POST['id_usuario']);
		
		print $r;
	}else{		
		print "error archivo";
	}



?>