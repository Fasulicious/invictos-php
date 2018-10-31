<?php
session_start();
header('Access-Control-Allow-Origin: *');

require_once("../../../CONEXION/Conexion.php");
require_once("../../../UTIL/verificacion.php");


require_once("../../../UTIL/variables_globales.php");
//require_once("../../UTIL/transfer_dns_img.php");

	//datos del arhivo 
$nombre_archivo = $_FILES['userfile']['name']; 
$tipo_archivo = $_FILES['userfile']['type']; 
$tamano_archivo = $_FILES['userfile']['size']; 


	$partes=explode("/",$tipo_archivo);
	
	$extension_original=$partes[1];
	
	$extension=$partes[1];

//compruebo si las características del archivo son las que deseo 
if (!($extension== "gif" || $extension== "png" || $extension== "jpeg" || $extension== "jpg" )) { 
		
   	echo "no extension"; 
}else{ 
	
	ini_set('memory_limit', '400M');  
	
	if($tamano_archivo > 4200000){
		echo "no tamano";
	}else{
	
		ini_set('memory_limit', '400M');  
		
					
		if($_POST['nombre_completo_temp_eliminar']!='' && file_exists('../../../IMG/INSTALACIONES/TEMP/'.$_POST['nombre_completo_temp_eliminar'])){
			unlink('../../../IMG/INSTALACIONES/TEMP/'.$_POST['nombre_completo_temp_eliminar']);
		}
		

		
		error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);

		do{
			
			$nombre_img=mt_rand(10000,50000).mt_rand(10000,50000).mt_rand(10000,99999);
			
			
		}while(fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/TEMP/'.$nombre_img.".".$extension,"r") || fopen($GL_DNS_IMG.'/IMG/INSTALACIONES/'.$nombre_img.".".$extension,"r"));
			
				
				
			$uploaddir = "../../../IMG/INSTALACIONES/TEMP/";
						
			$uploadfile = $uploaddir.$nombre_img.".".$extension;
			
			
			$respuesta=$nombre_img.".".$extension;
			$respuesta_m=$nombre_img."_m.".$extension;
			
			
		   	if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)){
		      	// echo "El archivo ha sido cargado correctamente."; 
		      		      	


				$valores_tam_ancho =array(400);
				$valores_tam_alto =array(500);
								
				///////////////////////////////////////////////////////////////////		
				///////////////////////////////////////////////////////////////////		
				
				$ind=0;
				
				switch($extension){
					case "jpeg":						
					case "jpg":
																
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefromjpeg($rutaImagenOriginal);
								
								//Se define el maximo ancho o alto que tendra la imagen final
								
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
								
																
								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($ancho,$alto);	
																
								
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,0,0,$ancho, $alto,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								//Definimos la calidad de la imagen final
								$calidad=90;
								
								//Se crea la imagen final en el directorio indicado
								imagejpeg($tmp,$uploaddir.$respuesta,$calidad);
										
								

							//y aquí hacemos la copia para celulares	


							while($valores_tam_ancho[$ind]){
								
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefromjpeg($rutaImagenOriginal);
								
								//Se define el maximo ancho o alto que tendra la imagen final
								
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
								


								//Se calcula ancho y alto de la imagen final
								$tam_referencia_ancho=$ancho;
								$tam_referencia_alto=$alto;
								
								$alto_final=$valores_tam_alto[$ind];
								$ancho_final=ceil($ancho*$valores_tam_alto[$ind]/$alto);

								if($ancho_final<$valores_tam_ancho[$ind]){
									$ancho_final=$valores_tam_ancho[$ind];
									$alto_final=ceil($alto*$valores_tam_ancho[$ind]/$ancho);


									$desp_x=0;

									$alto_aux=$ancho*$valores_tam_alto[$ind]/$valores_tam_ancho[$ind];

									$desp_y=ceil(($alto-$alto_aux)/2);
								}else{
									
									$ancho_aux=$alto*$valores_tam_ancho[$ind]/$valores_tam_alto[$ind];

									$desp_x=ceil(($ancho-$ancho_aux)/2);
									$desp_y=0;	

								}
								
								//echo $ancho.' '.$alto.' '.$ancho_final.' '.$alto_final.' '.$valores_tam_ancho[$ind].' '.$valores_tam_alto[$ind].' '.$desp_x.' '.$desp_y;

								
								
								
								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($valores_tam_ancho[$ind],$valores_tam_alto[$ind]);	
																
								
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,$desp_x,$desp_y,$ancho_final, $alto_final,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								//Definimos la calidad de la imagen final
								$calidad=90;
								
								//Se crea la imagen final en el directorio indicado
								imagejpeg($tmp,$uploaddir.$respuesta_m,$calidad);
										
									
								
								//BackupServersFiles($GL_DNS_IMG,$_SESSION['user']."_temp_".$respuesta,"IMG/BOLETIN/TEMP",null,"../../");
								
								
								$ind++;	
												
							}



							
				
						break;
										
					case "png":
	
	
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefrompng($rutaImagenOriginal);
									
			
								//Se define el maximo ancho o alto que tendra la imagen final
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
									
				

								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($ancho,$alto);	
																
															
								//los siguientes cuatro pasos son importantes para salvar la transparencia									
								 imagealphablending($tmp, false);
								 imagesavealpha($tmp,true);									 
								 $transparent = imagecolorallocatealpha($tmp, 255, 255, 255, 127);
								 imagefilledrectangle($tmp, 0, 0, $ancho_final, $alto_final, $transparent);
								 

 
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,0,0,$ancho, $alto,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								
								//Definimos la calidad de la imagen final
								$calidad=9;
								
								//Se crea la imagen final en el directorio indicado
								imagepng($tmp,$uploaddir.$respuesta,$calidad,5);
									
								
		
						
							while($valores_tam_ancho[$ind]){
								
	
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefrompng($rutaImagenOriginal);
									
			
								//Se define el maximo ancho o alto que tendra la imagen final
								
								
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
									
			

								//Se calcula ancho y alto de la imagen final
								$tam_referencia_ancho=$ancho;
								$tam_referencia_alto=$alto;
								
								$alto_final=$valores_tam_alto[$ind];
								$ancho_final=ceil($ancho*$valores_tam_alto[$ind]/$alto);

								if($ancho_final<$valores_tam_ancho[$ind]){
									$ancho_final=$valores_tam_ancho[$ind];
									$alto_final=ceil($alto*$valores_tam_ancho[$ind]/$ancho);


									$desp_x=0;

									$alto_aux=$ancho*$valores_tam_alto[$ind]/$valores_tam_ancho[$ind];

									$desp_y=ceil(($alto-$alto_aux)/2);
								}else{
									
									$ancho_aux=$alto*$valores_tam_ancho[$ind]/$valores_tam_alto[$ind];

									$desp_x=ceil(($ancho-$ancho_aux)/2);
									$desp_y=0;	

								}
								
		

								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($valores_tam_ancho[$ind],$valores_tam_alto[$ind]);	
																
															
								//los siguientes cuatro pasos son importantes para salvar la transparencia									
								 imagealphablending($tmp, false);
								 imagesavealpha($tmp,true);									 
								 $transparent = imagecolorallocatealpha($tmp, 255, 255, 255, 127);
								 imagefilledrectangle($tmp, 0, 0, $ancho_final, $alto_final, $transparent);
								 

 
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,$desp_x,$desp_y,$ancho_final, $alto_final,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								
								//Definimos la calidad de la imagen final
								$calidad=9;
								

								
	
								//Se crea la imagen final en el directorio indicado
								imagepng($tmp,$uploaddir.$respuesta_m,$calidad,5);
										
										
								//BackupServersFiles($GL_DNS_IMG,$_SESSION['user']."_temp_".$respuesta,"IMG/BOLETIN/TEMP",null,"../../");
									
								
								
								
								$ind++;	
												
							}
							
						break;
										
					case "gif":
						//Si es un gif, no solo vamos a obtener la conversion a 75 75, sino tambien tenemos que transformar la propia imagen a un jpeg
						
						
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefromgif($rutaImagenOriginal);
								
								//Se define el maximo ancho o alto que tendra la imagen final	
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
																
								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($ancho,$alto);	
																
								
								//creamos la conversion JPG
								//$conversion_jpg=imagecreatetruecolor($ancho,$alto);
								
								
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,0,0,$ancho, $alto,$ancho,$alto);
								
								
								//Copiamos la conversion a JPG
								//imagecopyresampled($conversion_jpg,$img_original,0,0,0,0,$ancho, $alto,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								
								//Se crea la imagen final en JPG
								imagejpeg($tmp,$uploaddir.$nombre_img.".jpeg");
								
								
								//Se crea la imagen final en JPG
								//imagejpeg($conversion_jpg,$uploaddir.$nombre_img.".jpeg");
																	
																	
								//BackupServersFiles($GL_DNS_IMG,$_SESSION['user']."_temp_".$nombre_img.".jpeg","IMG/BOLETIN/TEMP",null,"../../");
								
								//eliminamos el original de GIF de la imagen de tamaño completo, pues la estamos convirtiendo a JPEG
								
								if(file_exists($uploaddir.$respuesta)){
									unlink($uploaddir.$respuesta);
								}
								



						
							while($valores_tam_ancho[$ind]){
								
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefromgif($rutaImagenOriginal);
								
								//Se define el maximo ancho o alto que tendra la imagen final
								
								
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
								


								//Se calcula ancho y alto de la imagen final
								$tam_referencia_ancho=$ancho;
								$tam_referencia_alto=$alto;
								
								$alto_final=$valores_tam_alto[$ind];
								$ancho_final=ceil($ancho*$valores_tam_alto[$ind]/$alto);

								if($ancho_final<$valores_tam_ancho[$ind]){
									$ancho_final=$valores_tam_ancho[$ind];
									$alto_final=ceil($alto*$valores_tam_ancho[$ind]/$ancho);


									$desp_x=0;

									$alto_aux=$ancho*$valores_tam_alto[$ind]/$valores_tam_ancho[$ind];

									$desp_y=ceil(($alto-$alto_aux)/2);
								}else{
									
									$ancho_aux=$alto*$valores_tam_ancho[$ind]/$valores_tam_alto[$ind];

									$desp_x=ceil(($ancho-$ancho_aux)/2);
									$desp_y=0;	

								}

								
								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($valores_tam_ancho[$ind],$valores_tam_alto[$ind]);	
																
								
								//creamos la conversion JPG
								//$conversion_jpg=imagecreatetruecolor($ancho,$alto);
								
								
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,$desp_x,$desp_y,$ancho_final, $alto_final,$ancho,$alto);
								
								
								//Copiamos la conversion a JPG
								//imagecopyresampled($conversion_jpg,$img_original,0,0,0,0,$ancho, $alto,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								
								//Se crea la imagen final en JPG
								imagejpeg($tmp,$uploaddir.$nombre_img."_m.jpeg");
								
								
								//Se crea la imagen final en JPG
								//imagejpeg($conversion_jpg,$uploaddir.$nombre_img.".jpeg");
																	
																	
								//BackupServersFiles($GL_DNS_IMG,$_SESSION['user']."_temp_".$nombre_img.".jpeg","IMG/BOLETIN/TEMP",null,"../../");
								
								//eliminamos el original de GIF de la imagen de tamaño completo, pues la estamos convirtiendo a JPEG
								
								if(file_exists($uploaddir.$respuesta)){
									unlink($uploaddir.$respuesta);
								}
								
								$extension="jpeg";
																											
								$ind++;	
												
							}
							
								
							
							
							
							
						break;
				}
		      	
		    
								
		      	
	
		      	
		      	
		      		//IMPORTANTE NOMBRE_IMG Y EXTENSION deben estar separados, ya que cuando la extension es un GIF se hace una conversion a JPEG

			
		      		$respuesta=array();
		      		$respuesta['id_img']=$nombre_img;
		      		$respuesta['ext_img']=$extension;
		      		print json_encode($respuesta);
		   	}else{ 
		   		
		   	//	$respuesta=$registro->eliminar_foto_cupon($_SESSION['user'],$_POST['id_cupon']);
		   		
		      print "error archivo";
		   	} 
		   	
		   
		   


}
}

		

?>