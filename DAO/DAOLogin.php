<?php

class DAOLogin extends Conexion{

		
	function update_tipo($id_fb,$tipo){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				
	        	$sql='UPDATE grl_tbl_users set tipo="'.$tipo.'" where id_fb="'.$id_fb.'"';


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



}
?>