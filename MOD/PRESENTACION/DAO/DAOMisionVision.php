<?php


class DAOMisionVision extends Conexion{
	
	
	
	function get_mision_vision(){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select * from mod_mision_vision ';	
	        	
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
		
	function modificar_presentacion($qns_sms,$mision_vision){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
						
				$sql='update mod_mision_vision set qns_sms="'.$qns_sms.'", mision_vision="'.$mision_vision.'"';
//,mision_id_img="'.$mision_id_img.'",mision_ext_img="'.$mision_ext_img.'"    ,vision_id_img="'.$vision_id_img.'",vision_ext_img="'.$vision_ext_img.'"
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