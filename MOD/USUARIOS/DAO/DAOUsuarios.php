<?php


class DAOUsuarios extends Conexion{
	
	
	
	function get_usuarios(){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select username,aes_decrypt(password,"123invictos123") password from users order by fecha_creacion desc ';	
	        	
				$rs = $cn->query($sql);
				
				$respuesta=array();

				while($fila=mysqli_fetch_object($rs)){
					$respuesta[]=$fila;
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
			return 'mysql_no';
		}
	}
		
	function set_usuario($username,$password){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				$sql='insert into users (username,password,fecha_creacion) values ("'.$username.'",aes_encrypt("'.$password.'","123invictos123"),now())';

				$rs = $cn->query($sql);
							
				$cn->query('COMMIT');
				mysqli_close($cn);

				return 'mysql_si';
				
	
			}catch(Exception $ex){
				
				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return 'mysql_no';
				
			}
		}else{
			return 'mysql_no';
		}
	}
	
	function modificar_usuario($username,$password){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				$sql='update users set password=aes_encrypt("'.$password.'","123invictos123") where username="'.$username.'"';

				$rs = $cn->query($sql);
							
				$cn->query('COMMIT');
				mysqli_close($cn);
				
				return 'mysql_si';
				
	
			}catch(Exception $ex){
				
				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return 'mysql_no';
				
			}
		}else{
		return 'mysql_no';
		}
	}


	function eliminar_usuario($username){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				$sql='delete from users where username="'.$username.'"';

				$rs = $cn->query($sql);
							
				$cn->query('COMMIT');
				mysqli_close($cn);
				
				return 'mysql_si';
				
	
			}catch(Exception $ex){
				
				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return 'mysql_no';
				
			}
		}else{
		return 'mysql_no';
		}
	}
		
	
}
?>