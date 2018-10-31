<?php

class DAOConversacion extends Conexion{
	
	function consulta_conversacion($usuario1,$usuario2,$inicio){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			
				$sql='select emisor,receptor,mensaje,DATE(fecha) solo_fecha, TIME(fecha) solo_hora from conversacion where (emisor='.$usuario1.' and receptor='.$usuario2.') or (emisor='.$usuario2.' and receptor='.$usuario1.') order by fecha DESC limit '.$inicio.',20' ;
				$rs = $cn->query($sql);
				
				$respuesta=array();
				
				while($fila=mysqli_fetch_object($rs)){
					$respuesta[]=$fila;
				}
	
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if( $respuesta){
					
					return array("error"=>false, "data"=>$respuesta);
				}else{
					return array("error"=>false, "vacio"=>true);
				}
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else{
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}


	function insertar_mensaje($usuario1,$usuario2,$tipo1,$tipo2,$mensaje){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{

				$msj_resumen=$mensaje;
				if(strlen($msj_resumen)>27){
					$msj_resumen=substr($msj_resumen,0,27).'...';
				}

	        	$sql='INSERT INTO notificacion_msj (emisor,receptor,fecha,msj_resumen,estado,tipo_emisor,tipo_receptor,bandera) values ('.$usuario1.','.$usuario2.',utc_timestamp(),"'. $msj_resumen.'",0,"'.$tipo1.'","'.$tipo2.'",1) ON DUPLICATE KEY UPDATE msj_resumen="'.$msj_resumen.'", bandera=IF(estado=0,1,0), estado=0';
	        		//tipo1 y tipo2 junto con bandera servirán para filtrar posibles intentos de spam
	        		//si bandera es 1, significa que el primer mensaje que se ha enviado, por lo tanto se crea una notificacion, pero se ha de corroborar que esto debe coincidir con que el emisor sea de tipo Alumno y el receptor de tipo Profesor, si hay otra combinación significa que es un intento de spam
	        		//cuando bandera se vuelve 0, solo se deberá corroborar que tipo1 es Alumno y tipo2 Profesor, o visceversa
				$cn->query($sql);


	        	$sql='INSERT INTO notificacion_msj (emisor,receptor,fecha,msj_resumen,estado,tipo_emisor,tipo_receptor,bandera) values ('.$usuario2.','.$usuario1.',utc_timestamp(),"'. $msj_resumen.'",0,"'.$tipo2.'","'.$tipo1.'",0) ON DUPLICATE KEY UPDATE msj_resumen="'.$msj_resumen.'", estado=0, bandera=0';
				$cn->query($sql);


	        	$sql='insert into conversacion (emisor,receptor,fecha,mensaje) values ('.$usuario1.','.$usuario2.',utc_timestamp(),"'.$mensaje.'")';
	        	
				$cn->query($sql);
				
				$cn->query('COMMIT');
				$id_insert=$cn->insert_id;
				mysqli_close($cn);
				
				return array("error"=>false, "id_insert"=>$id_insert);
				
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');	
				 
			}
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}



	function consulta_notificaciones($usuario,$inicio,$tipo_emisor,$tipo_receptor){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			
			$sql='select n.emisor, n.receptor,DATE(n.fecha) fecha, TIME(n.fecha) hora, n.msj_resumen, n.estado, u.id, u.foto,u.nombres,u.apellidos from notificacion_msj n JOIN grl_tbl_users u ON n.emisor=u.id where  n.receptor='.$usuario.' and (n.bandera=0 or (n.bandera=1 and n.tipo_emisor="'.$tipo_emisor.'" and n.tipo_receptor="'.$tipo_receptor.'")) order by n.fecha DESC limit '.$inicio.', 10';

				$rs = $cn->query($sql);
				
				$respuesta=array();
				
				while($fila=mysqli_fetch_object($rs)){

					$respuesta[]=$fila;
				}

							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if( $respuesta){
					return $respuesta;
				}else{

					return array("error"=>false, "vacio"=>true);
				}
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else{
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}

		
	function leer_notificacion($usuario1,$usuario2){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				
	        	$sql='UPDATE notificacion_msj set estado=1 where emisor='.$usuario1.' and receptor='.$usuario2;


				$rs = $cn->query($sql);
				
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				return array("error"=>false);
				
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');	
				 
			}
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}



	function obtener_tipo_usuario($usuario){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			

			$sql='SELECT tipo FROM grl_tbl_users where id='.$usuario;

				$rs = $cn->query($sql);
				
			
				$respuesta=mysqli_fetch_object($rs);

							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($respuesta){
					return $respuesta;
				}else{
					return array("error"=>false, "vacio"=>true);
				}
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else{
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}

	function obtener_correo_usuario($usuario){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			

			$sql='SELECT correo FROM grl_tbl_users where id='.$usuario;

				$rs = $cn->query($sql);
				
			
				$respuesta=mysqli_fetch_object($rs);

							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($respuesta){
					$respuesta=$respuesta->correo;
					return array("error"=>false, "data"=>$respuesta);
				}else{
					return array("error"=>false, "data"=>false);
				}
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else{
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}

		
	function consulta_propuesta_economica($profesor,$alumno){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			

			$sql='SELECT * FROM propuesta_economica where alumno='.$alumno.' and profesor='.$profesor;

				$rs = $cn->query($sql);
				
			
				$respuesta=mysqli_fetch_object($rs);

							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($respuesta){
					return $respuesta;
				}else{
					return array("error"=>false, "vacio"=>true);
				}
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else{
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}

	function proponer_a_alumno($profesor,$alumno,$fecha,$hora){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{

				$msj_resumen=$mensaje;
				if(strlen($msj_resumen)>27){
					$msj_resumen=substr($msj_resumen,0,27).'...';
				}

	        	$sql='INSERT INTO propuesta_economica (profesor, alumno, fecha, hora, estado) values ('.$profesor.','.$alumno.',"'.$fecha.'","'.$hora.'",1) ON DUPLICATE KEY UPDATE fecha=IF(estado<>3,"'.$fecha.'",fecha) ,hora=IF(estado<>3,"'.$hora.'",hora) ,estado=IF(estado<>3,1,estado)';
	        		
				$cn->query($sql);

				
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				return array("error"=>false);
				
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');	
				 
			}
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}


	function cambiar_estado_propuesta_economica($profesor,$alumno,$respuesta){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{

				$msj_resumen=$mensaje;
				if(strlen($msj_resumen)>27){
					$msj_resumen=substr($msj_resumen,0,27).'...';
				}

	        	$sql='UPDATE propuesta_economica set estado='.$respuesta.' where profesor='.$profesor.' and alumno='.$alumno.' and estado<>0';
	        		
				$cn->query($sql);
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				return array("error"=>false);
				
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');	
				 
			}
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}




	function info_usuario($id){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			
			$sql='select username, nombres, apellidos, foto from grl_tbl_users where id='.$id;

				$rs = $cn->query($sql);
						
				$fila=mysqli_fetch_object($rs);
							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				return array("error"=>false, "data"=>$fila);
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else{
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}

}
?>