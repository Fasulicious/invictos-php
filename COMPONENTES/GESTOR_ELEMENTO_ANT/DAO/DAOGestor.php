<?php

class DAOGestor extends Conexion{
	
	function fun_insert_elemento($nombre_tabla,$campos,$valores){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{
		        $sql='insert into '.$nombre_tabla.' ('.$campos.') values ('.$valores.')';
		        
		       // echo $sql;

				$cn->query($sql);
				
	      	    $id_insert= $cn->insert_id;

				$cn->query('COMMIT');
		       	
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




	function fun_update_elemento($nombre_tabla,$cambios,$condicion){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{
		        $sql='update '.$nombre_tabla.' set '.$cambios.' where '.$condicion;
				
				echo $sql;
				$cn->query($sql);
        	         
	      	    $numero_registros= $cn->affected_rows;

				$cn->query('COMMIT');
		       	

				mysqli_close($cn);


				return array("error"=>false, "numero_registros"=>$numero_registros);
			
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');					
			}			
		
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}	


	function fun_delete_elemento($nombre_tabla,$condicion){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{
		        $sql='delete from '.$nombre_tabla.' where '.$condicion;
		     	
		     	$cn->query($sql);
        	         
	      	    $numero_registros= $cn->affected_rows;

				$cn->query('COMMIT');
		       	
				mysqli_close($cn);
				return array("error"=>false, "numero_registros"=>$numero_registros);
			
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');				
			}			
		
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}	


	function fun_select_elemento($nombre_tabla,$campos_get,$condicion,$inicio,$numero){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{

				$limitacion='';
				if($numero>0){
					$limitacion=' limit '.$inicio.','.$numero;
				}

		        $sql='select '.$campos_get.' from '.$nombre_tabla.' where '.$condicion.$limitacion;		     	

		     	$rs=$cn->query($sql);

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
			return "mysql_no";
		}
	}	


	
}

?>