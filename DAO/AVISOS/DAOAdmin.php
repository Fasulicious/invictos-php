<?php


class DAOAdmin extends Conexion{
	

	
	function get_num_usuarios($id_usuario){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	//$sql='select * from avisos a, distritos d, rangos_costos c where a.transaccion='.$transaccion.' and a.tipo_inmueble='.$tipo.' and d.id='.$distrito.' and pow(pow(d.coor_latitud-a.coor_latitud,2)+pow(d.coor_longitud-a.coor_longitud,2),0.5) <=0.0072 and c.id='.$costo.' and c.min<=a.costo and c.max>=a.costo';	
	        	
	        	$sql='select count(*) numero from grl_tbl_users where usuario_activo=1;';	
	        	
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




 

}
?>