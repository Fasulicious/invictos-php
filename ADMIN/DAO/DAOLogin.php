<?php

class DAOLogin extends Conexion{
		
	function logear($username,$password){  //AKI FALTA DEFINIR Q ES LO Q SE NECESITA DEL ALUMNO
  
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        
			
			$cn->query('BEGIN');
			
			try{
									
				$sql='select * from users where username="'.$username.'" and password=AES_ENCRYPT("'.$password.'","123invictos123")';
				
				$rs=$cn->query($sql);
		        		        
		        if(mysqli_num_rows($rs)>0){
		        			        	
			      	$respuesta="ok";
	 
		        }else{
		        	
		        	$respuesta ='no_user';
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
    function es_usuario($username){

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        
			
			$cn->query('BEGIN');
			
			try{
									
				$sql='select username from users where username="'.$username.'"';
				
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
    
}

?>