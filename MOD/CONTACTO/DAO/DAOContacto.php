<?php

class DAOContacto extends Conexion{
			
	function get(){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
		 	
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select * from contacto';      

				$rs = $cn->query($sql);
				
				$respuesta=mysqli_fetch_object($rs);
							
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


	function modificar($direccion,$telefono,$email){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				$sql='update contacto set direccion="'.$direccion.'", telefono="'.$telefono.'",  email="'.$email.'" where id=1';

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