<?php


$nombre_archivo = $archivo['name']; 
$tipo_archivo = $archivo['type']; 
$tamano_archivo = $archivo['size']; 


$partes=explode("/",$tipo_archivo);

$extension_original=$partes[1];

$extension=$partes[1];

//compruebo si las características del archivo son las que deseo 
if (!($extension== "gif" || $extension== "png" || $extension== "jpeg" || $extension== "jpg" )) { 
		
   	$respuesta_img= "no_extension"; 
}else{ 
	
	ini_set('memory_limit', '400M');  
	
	if($tamano_archivo > 4200000){
		$respuesta_img="no_tamano";
	}else{
	
		ini_set('memory_limit', '400M');  
		
							
		error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);


			$uploadfile = $uploaddir.$nombre_img.".".$extension;
			
			

			
		   	if (move_uploaded_file($archivo['tmp_name'], $uploadfile)){
		      	// echo "El archivo ha sido cargado correctamente."; 
		      		      	

		   		if($extension=='gif'){
		   			$ext='jpeg';
		   		}else{		   			
		   			$ext=$extension;
		   		}
				

				///////////////////////////////////////////////////////////////////		
				///////////////////////////////////////////////////////////////////		
				
				$ind=0;	
				switch($extension){
					case "jpeg":						
					case "jpg":
						
								
							foreach($valores_tam as $valor_tam){


								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefromjpeg($rutaImagenOriginal);
								
								//Se define el maximo ancho o alto que tendra la imagen final
								
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
								
								if($valor_tam['tam_alto']=='original'){
									$valor_tam['tam_alto']=$alto;
								}
								if($valor_tam['tam_ancho']=='original'){
									$valor_tam['tam_ancho']=$ancho;
								}


								//Se calcula ancho y alto de la imagen final
								$tam_referencia_ancho=$ancho;
								$tam_referencia_alto=$alto;
								
								$alto_final=$valor_tam['tam_alto'];
								$ancho_final=ceil($ancho*$valor_tam['tam_alto']/$alto);

								if($ancho_final<$valor_tam['tam_ancho']){
									$ancho_final=$valor_tam['tam_ancho'];
									$alto_final=ceil($alto*$valor_tam['tam_ancho']/$ancho);


									$desp_x=0;

									$alto_aux=$ancho*$valor_tam['tam_alto']/$valor_tam['tam_ancho'];

									$desp_y=ceil(($alto-$alto_aux)/2);
								}else{
									
									$ancho_aux=$alto*$valor_tam['tam_ancho']/$valor_tam['tam_alto'];

									$desp_x=ceil(($ancho-$ancho_aux)/2);
									$desp_y=0;	

								}
								
								//echo $ancho.' '.$alto.' '.$ancho_final.' '.$alto_final.' '.$valores_tam['tam_ancho'].' '.$valores_tam['tam_alto'].' '.$desp_x.' '.$desp_y;

								
								//echo $valor_tam['directorio'].' '.$valor_tam['tam_ancho'].' '.$valor_tam['tam_alto'].' ';
								
								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($valor_tam['tam_ancho'],$valor_tam['tam_alto']);	
																
								
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,$desp_x,$desp_y,$ancho_final, $alto_final,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								//Definimos la calidad de la imagen final
								$calidad=90;
								
								//Se crea la imagen final en el directorio indicado
								imagejpeg($tmp,$valor_tam['directorio'].$valor_tam['nombre_final'],$calidad);
										
									
								
								//BackupServersFiles($GL_DNS_IMG,$_SESSION['user']."_temp_".$respuesta,"IMG/BOLETIN/TEMP",null,"../../");
								
												
							}



							
				
						break;
										
					case "png":

		
						
							foreach($valores_tam as $valor_tam){
								
	
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefrompng($rutaImagenOriginal);
									
			
								//Se define el maximo ancho o alto que tendra la imagen final
								
								
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
									
								if($valor_tam['tam_alto']=='original'){
									$valor_tam['tam_alto']=$alto;
								}
								if($valor_tam['tam_ancho']=='original'){
									$valor_tam['tam_ancho']=$ancho;
								}


			

								//Se calcula ancho y alto de la imagen final
								$tam_referencia_ancho=$ancho;
								$tam_referencia_alto=$alto;
								
								$alto_final=$valor_tam['tam_alto'];
								$ancho_final=ceil($ancho*$valor_tam['tam_alto']/$alto);

								if($ancho_final<$valor_tam['tam_ancho']){
									$ancho_final=$valor_tam['tam_ancho'];
									$alto_final=ceil($alto*$valor_tam['tam_ancho']/$ancho);


									$desp_x=0;

									$alto_aux=$ancho*$valor_tam['tam_alto']/$valor_tam['tam_ancho'];

									$desp_y=ceil(($alto-$alto_aux)/2);
								}else{
									
									$ancho_aux=$alto*$valor_tam['tam_ancho']/$valor_tam['tam_alto'];

									$desp_x=ceil(($ancho-$ancho_aux)/2);
									$desp_y=0;	

								}
								
		

								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($valor_tam['tam_ancho'],$valor_tam['tam_alto']);	
																
															
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
								imagepng($tmp,$valor_tam['directorio'].$valor_tam['nombre_final'],$calidad,5);
										
										
								//BackupServersFiles($GL_DNS_IMG,$_SESSION['user']."_temp_".$respuesta,"IMG/BOLETIN/TEMP",null,"../../");
									
								
								
												
							}
							
						break;
										
					case "gif":
						//Si es un gif, no solo vamos a obtener la conversion a 75 75, sino tambien tenemos que transformar la propia imagen a un jpeg
						
						
							foreach($valores_tam as $valor_tam){
								
								//Ruta de la imagen original
								$rutaImagenOriginal=$uploadfile;
								
								//Creamos una variable imagen a partir de la imagen original
								$img_original = imagecreatefromgif($rutaImagenOriginal);
								
								//Se define el maximo ancho o alto que tendra la imagen final
								
								//Ancho y alto de la imagen original
								list($ancho,$alto)=getimagesize($rutaImagenOriginal);
								
								
								if($valor_tam['tam_alto']=='original'){
									$valor_tam['tam_alto']=$alto;
								}
								if($valor_tam['tam_ancho']=='original'){
									$valor_tam['tam_ancho']=$ancho;
								}


								//Se calcula ancho y alto de la imagen final
								$tam_referencia_ancho=$ancho;
								$tam_referencia_alto=$alto;
								
								$alto_final=$valor_tam['tam_alto'];
								$ancho_final=ceil($ancho*$valor_tam['tam_alto']/$alto);

								if($ancho_final<$valor_tam['tam_ancho']){
									$ancho_final=$valor_tam['tam_ancho'];
									$alto_final=ceil($alto*$valor_tam['tam_ancho']/$ancho);


									$desp_x=0;

									$alto_aux=$ancho*$valor_tam['tam_alto']/$valor_tam['tam_ancho'];

									$desp_y=ceil(($alto-$alto_aux)/2);
								}else{
									
									$ancho_aux=$alto*$valor_tam['tam_ancho']/$valor_tam['tam_alto'];

									$desp_x=ceil(($ancho-$ancho_aux)/2);
									$desp_y=0;	

								}
								
								//Creamos una imagen en blanco de tamaño $ancho_final  por $alto_final .
								$tmp=imagecreatetruecolor($valor_tam['tam_ancho'],$valor_tam['tam_alto']);						
								
								//creamos la conversion JPG
								//$conversion_jpg=imagecreatetruecolor($ancho,$alto);
								
								
								//Copiamos $img_original sobre la imagen que acabamos de crear en blanco ($tmp)
								imagecopyresampled($tmp,$img_original,0,0,$desp_x,$desp_y,$ancho_final, $alto_final,$ancho,$alto);
								
								
								//Copiamos la conversion a JPG
								//imagecopyresampled($conversion_jpg,$img_original,0,0,0,0,$ancho, $alto,$ancho,$alto);
								
								//Se destruye variable $img_original para liberar memoria
								imagedestroy($img_original);
								
								
								//Se crea la imagen final en JPG
								imagejpeg($tmp,$valor_tam['directorio'].$valor_tam['nombre_final']);
								
								
								//Se crea la imagen final en JPG
								//imagejpeg($conversion_jpg,$uploaddir.$nombre_img.".jpeg");
																	
																	
								//BackupServersFiles($GL_DNS_IMG,$_SESSION['user']."_temp_".$nombre_img.".jpeg","IMG/BOLETIN/TEMP",null,"../../");
								
								//eliminamos el original de GIF de la imagen de tamaño completo, pues la estamos convirtiendo a JPEG
								
								if(file_exists($valor_tam['directorio'].$valor_tam['nombre_inicial'])){
									unlink($valor_tam['directorio'].$valor_tam['nombre_inicial']);
								}
																				
							}
															
								$extension="jpeg";
							
						break;
				}
		      			      	
		      		//IMPORTANTE NOMBRE_IMG Y EXTENSION deben estar separados, ya que cuando la extension es un GIF se hace una conversion a JPEG
			/*
		      		$respuesta=array();
		      		$respuesta['id_img']=$nombre_img;
		      		$respuesta['ext_img']=$extension;*/
		      		
		      		$respuesta_img='imagen_guardada';
		   	}else{ 
		   		
		   	//	$respuesta=$registro->eliminar_foto_cupon($_SESSION['user'],$_POST['id_cupon']);
		   		
		   		$respuesta_img='error_archivo';
		   	} 
		   	
}
}

		

?>