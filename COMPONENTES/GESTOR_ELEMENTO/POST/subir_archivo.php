<?php

/*
UPLOAD_ERR_OK
Valor: 0; No hay error, fichero subido con éxito.

UPLOAD_ERR_INI_SIZE
Valor: 1; El fichero subido excede la directiva upload_max_filesize de php.ini.

UPLOAD_ERR_FORM_SIZE
Valor: 2; El fichero subido excede la directiva MAX_FILE_SIZE especificada en el formulario HTML.

UPLOAD_ERR_PARTIAL
Valor: 3; El fichero fue sólo parcialmente subido.

UPLOAD_ERR_NO_FILE
Valor: 4; No se subió ningún fichero.

UPLOAD_ERR_NO_TMP_DIR
Valor: 6; Falta la carpeta temporal. Introducido en PHP 5.0.3.

UPLOAD_ERR_CANT_WRITE
Valor: 7; No se pudo escribir el fichero en el disco. Introducido en PHP 5.1.0.

UPLOAD_ERR_EXTENSION
Valor: 8; Una extensión de PHP detuvo la subida de ficheros. PHP no proporciona una forma de determinar la extensión que causó la parada de la subida de ficheros; el examen de la lista de extensiones cargadas con phpinfo() puede ayudar. Introducido en PHP 5.2.0.

*/

/*

if(function_exists('mime_content_type') ){ 

        $mime = mime_content_type($archivo['tmp_name']); 
      
}else{


	if(function_exists('finfo_open')){ 
        $finfo = finfo_open(FILEINFO_MIME); 
        $mime = finfo_file($finfo, $archivo['tmp_name']); 
        finfo_close($finfo); 
        
	} else{
	}

}*/

$mime =$archivo['type'];


switch ($mime) {
	case 'application/pdf':

		ini_set('memory_limit', '400M');  
		
		if($tamano_archivo > 4200000){
			$respuesta_archivo="no_tamano";
		}else{

			ini_set('memory_limit', '400M');
			
			error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);

			$uploadfile = $uploaddir.'/'.$nombre_archivo.".pdf";


		   	if (move_uploaded_file($archivo['tmp_name'], $uploadfile)){
		      	$respuesta_archivo='archivo_subido';
		   	}
		}
	
	break;

	default:
   		$respuesta_archivo= "no_extension"; 
	break;
}


?>