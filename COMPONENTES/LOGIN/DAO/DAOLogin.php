<?php

class DAOLogin extends Conexion{
	
	function logear_con_id_fb($id_fb){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{
		        $sql="select * from grl_tbl_users where id_fb='$id_fb'";

				$rs = $cn->query($sql);
        		if(mysqli_num_rows($rs)>0){
        			$respuesta=mysqli_fetch_object($rs);
        		}else{
        			$respuesta='no user';
        		}
		      	             
				$cn->query('COMMIT');
		       	
				mysqli_close($cn);
				return $respuesta;
			
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return 'mysql_no';				
			}			
		
		}else{
			return "mysql_no";
		}
	}	
	
	function registrar_usuario_fb($id_fb,$nombre,$correo){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{
	        	if(ctype_space($correo) || $correo=='' || empty($correo)){
	        		$correo='sin correo';
	        	}
		        $sql='insert into grl_tbl_users (id_fb,nombres,correo,usuario_activo,fecha_registro,foto, tipo) values ("'.$id_fb.'","'.$nombre.'","'.$correo.'",true,utc_timestamp(),"'.$id_fb.'.jpg", "A")';
		       	
				$cn->query($sql);
	      	             
				$cn->query('COMMIT');
		       	
				mysqli_close($cn);
				return 'mysql_si';
			
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return 'mysql_no';				
			}			
		
		}else{
			return "mysql_no";
		}
	}	

	
	function logear($correo,$password){  //AKI FALTA DEFINIR Q ES LO Q SE NECESITA DEL ALUMNO
  
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        
			
			$cn->query('BEGIN');
			
			try{
									
				$sql='select * from grl_tbl_users where correo="'.$correo.'"';
				

				$rs=$cn->query($sql);
		        		        
		        if(mysqli_num_rows($rs)>0){
		        			        		
		        	$sql='select * from grl_tbl_users where correo="'.$correo.'" and password=AES_ENCRYPT("'.$password.'","123") and id_fb is NULL';
				
					$rs=$cn->query($sql);

			        if(mysqli_num_rows($rs)>0){
			        	$fila=mysqli_fetch_object($rs);

						$respuesta=array();
						$respuesta['error']=false;
						$respuesta['id']=$fila->id;
						$respuesta['username']=$fila->username;
						$respuesta['id_fb']=$fila->id_fb;
						$respuesta['nombres']=$fila->nombres;
						$respuesta['apellidos']=$fila->apellidos;
						$respuesta['correo']=$fila->correo;
						$respuesta['latitud_ini']=$fila->latitud_ini;
						$respuesta['longitud_ini']=$fila->longitud_ini;
						$respuesta['tipo']=$fila->tipo;
						$respuesta['foto']=$fila->foto;						
						$respuesta['usuario_activo']=$fila->usuario_activo;
						$respuesta['situacion_usuario']=$fila->situacion_usuario;
						$respuesta['notification_token']=$fila->notification_token;		
						$respuesta['detalle']='ok_sesion';
				      			       		
			        }else{
			        	
						$respuesta['error']=true;
						$respuesta['detalle']='no_pass';
			        }
				      			       		
		        }else{
		        	
					$respuesta['error']=true;
					$respuesta['detalle']='no_user';
		        }
		        		        		       	
				$cn->query('COMMIT');
		        mysqli_close($cn);
				return $respuesta;
				
			}catch(Exception $ex){
				       	
				$cn->query('ROLLBACK'); 
				mysqli_close($cn);
				
				$respuesta['error']=true;
				$respuesta['detalle']='mysql';
					
				return $respuesta;
				
			}	
		
		}else{
			$respuesta['error']=true;
			$respuesta['detalle']='mysql';
			
			return $respuesta;
		}
    }


	function registrar_usuario($tipo,$nombres,$apellidos,$correo,$ciudad,$ed_level,$latitud,$longitud,$password,$cod_activacion,$activar_usuario,$skill,$skill_level){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{
	        	
	        	if($activar_usuario){  //si se debe activar al usuario, entonces el estado es falso
	        		$estado=0;
	        	}else{
	        		//si no es necesario entonces está activo el usuario
	        		$estado=1;
	        	}
	        	
	        	$nombres_busqueda=preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities($nombres, ENT_QUOTES, 'UTF-8'));
	        	$nombres=htmlentities($nombres, ENT_QUOTES, 'UTF-8');

	        	$apellidos_busqueda=preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities($apellidos, ENT_QUOTES, 'UTF-8'));
	        	$apellidos=htmlentities($apellidos, ENT_QUOTES, 'UTF-8');


		        //$sql='insert into grl_tbl_users (nombres, nombres_busqueda, apellidos, apellidos_busqueda, fecha_nacimiento, correo, tipo, ciudad, latitud_ini, longitud_ini, password, cod_activacion, usuario_activo,fecha_registro) values (?,?,?,?,?,?,?,?,?,?,AES_ENCRYPT("'.$password.'","123"),"'.$cod_activacion.'",'.$estado.',utc_timestamp())';
		       	
		       	if($tipo=='A'){
			    $stmt = $cn->prepare('insert into grl_tbl_users (nombres, nombres_busqueda, apellidos, apellidos_busqueda, correo, tipo, nivel_educativo, ciudad, latitud_ini, longitud_ini, password, cod_activacion, usuario_activo,fecha_registro) values (?,?,?,?,?,?,?,?,?,?,AES_ENCRYPT("'.$password.'","123"),"'.$cod_activacion.'",'.$estado.',utc_timestamp())');
			    $stmt->bind_param('ssssssssdd', $nombres, $nombres_busqueda, $apellidos, $apellidos_busqueda, $correo, $tipo, $ed_level, $ciudad, $latitud, $longitud);
			    $stmt->execute();
			}else {
			   $stmt = $cn->prepare('insert into grl_tbl_users (nombres, nombres_busqueda, apellidos, apellidos_busqueda, correo, tipo, ciudad, latitud_ini, longitud_ini, password, cod_activacion, usuario_activo,fecha_registro) values (?,?,?,?,?,?,?,?,?,AES_ENCRYPT("'.$password.'","123"),"'.$cod_activacion.'",'.$estado.',utc_timestamp())');
			    $stmt->bind_param('sssssssdd', $nombres, $nombres_busqueda, $apellidos, $apellidos_busqueda, $correo, $tipo, $ciudad, $latitud, $longitud);
			    $stmt->execute();	
			}


				//$cn->query($sql);
	      	    $id= $stmt->insert_id;

				$stmt = $cn->prepare('insert into avisos (coor_latitud, coor_longitud, id_usuario, direccion) values (?,?,'.$id.',"Casa")');
				$stmt->bind_param('dd', $latitud, $longitud);
			    $stmt->execute();
			    
			    if($tipo=='P') {
			    	$stmt = $cn->prepare('insert into conocimiento_profe (id_profesor, id_conocimiento, nivel) values ('.$id.',?,?)');
				$stmt->bind_param('ss', $skill, $skill_level);
			    	$stmt->execute();
			    }
	      	             

				$cn->query('COMMIT');
		       	
				mysqli_close($cn);
				return $id;
			
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return 'mysql_no';				
			}			
		
		}else{
			return "mysql_no";
		}
	}	


    function es_usuario($correo){

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        
			
			$cn->query('BEGIN');
			
			try{
									
				$sql='select correo from grl_tbl_users where correo="'.$correo.'"';
				
				$rs=$cn->query($sql);
		        		        
		        if(mysqli_num_rows($rs)>0){
		        			        	
			      	$respuesta="si";
			      			       		
		        }else{
		        	
		        	$respuesta ='no';
		        }
		        		        		       	
				$cn->query('COMMIT');
		        mysqli_close($cn);
				return $respuesta;
				
			}catch(Exception $ex){
				       	
				$cn->query('ROLLBACK'); 
				mysqli_close($cn);
				
				return 'mysql_no';
				
			}	
		
		}else{
		return "mysql_no";
		}
    }
    

    function activar_cuenta($id_usuario,$codigo_activacion){

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        
			
			$cn->query('BEGIN');
			
			try{
									
				$sql='update grl_tbl_users set usuario_activo=1 where id='.$id_usuario.' and cod_activacion="'.$codigo_activacion.'"';
				$rs=$cn->query($sql);
		        		
		        if($cn->affected_rows>0){
		        	$respuesta='activado';

		        	$sql='select * from grl_tbl_users where id='.$id_usuario;
					$rs=$cn->query($sql);

					$row=mysqli_fetch_object($rs);

		        	$fila=array();
	        	
					$fila['id']=$row->id;
					$fila['username']=$row->username;
					$fila['id_fb']=$row->id_fb;
					$fila['nombres']=$row->nombres;
					$fila['apellidos']=$row->apellidos;
					$fila['correo']=$row->correo;
					$fila['latitud_ini']=$row->latitud_ini;
					$fila['longitud_ini']=$row->longitud_ini;
					$fila['tipo']=$row->tipo;
					$fila['foto']=$row->foto;						
					$fila['usuario_activo']=$row->usuario_activo;
					$fila['situacion_usuario']=$row->situacion_usuario;
					$fila['fecha_registro']=$row->fecha_registro;

					$fila['respuesta']='activado';




		        }else{
		        	$fila=array();
					$fila['respuesta']='no activado';
		        }

				$cn->query('COMMIT');
		        mysqli_close($cn);


				return $fila;
				
			}catch(Exception $ex){
				       	
				$cn->query('ROLLBACK'); 
				mysqli_close($cn);
				
				return 'mysql_no';
				
			}	
		
		}else{
		return "mysql_no";
		}
    }


    function solicitar_codigo_activacion($correo){

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        
			
			$cn->query('BEGIN');
			
			try{
									
				$sql='select id,cod_activacion from grl_tbl_users where correo="'.$correo.'"';
				
				$rs=$cn->query($sql);
		        $fila=mysqli_fetch_object($rs);
		        		        		       	
				$cn->query('COMMIT');
		        mysqli_close($cn);
				return $fila;
				
			}catch(Exception $ex){
				       	
				$cn->query('ROLLBACK'); 
				mysqli_close($cn);
				
				return 'mysql_no';
				
			}	
		
		}else{
		return "mysql_no";
		}
    }


    function solicitar_password($correo){

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        
			
			$cn->query('BEGIN');
			
			try{
									
				$sql='select aes_decrypt(password,"123") password from grl_tbl_users where correo="'.$correo.'"';
				
				$rs=$cn->query($sql);
		        		        		

		        if(mysqli_num_rows($rs)>0){
		        			        		
		        	$fila=mysqli_fetch_object($rs);
		        	$password=$fila->password;
		        	
					return array('error'=>false,'data'=>$password);

		        }else{
		        	
					return array('error'=>true,'detalle'=>'no_user');
		        }
       	
				$cn->query('COMMIT');
		        mysqli_close($cn);

				
			}catch(Exception $ex){
				       	
				$cn->query('ROLLBACK'); 
				mysqli_close($cn);
				
				return array('error'=>true,'detalle'=>'mysql');
				
			}	
		
		}else{
			return array('error'=>true,'detalle'=>'mysql');
		}
    }
}

?>