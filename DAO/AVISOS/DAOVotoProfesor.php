<?php

class DAOVotoProfesor extends Conexion{
	
	function pulsa_votar_profesor($id_usuario,$id_profesor){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
				
				$sql='select * from votos_profesor where id_usuario='.$id_usuario.' and '.' id_profesor='.$id_profesor;

				$rs=$cn->query($sql);
				$ha_votado=false;
				if($rs->num_rows>0){
					$fila=mysqli_fetch_object($rs);
					echo ' / '.$fila->activo.' / ';
					if(!$fila->activo){
						$ha_votado=true;
					}

					$sql='update votos_profesor set activo=IF(activo=1,0,1) where id_usuario='.$id_usuario.' and '.' id_profesor='.$id_profesor;
					echo $sql;

				}else{
					$sql='insert into votos_profesor (id_usuario,id_profesor) values ('.$id_usuario.','.$id_profesor.')';
						$ha_votado=true;
				}

				$cn->query($sql);
				echo $ha_votado;
				if($ha_votado){
					$sql='update grl_tbl_users set calificacion=calificacion+1 where id='.$id_profesor;
				}else{
					$sql='update grl_tbl_users set calificacion=calificacion-1 where id='.$id_profesor;
				}

				$cn->query($sql);
				

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				return array('error'=>false,'detalle'=>'ok'); //,'conexion'=>$cn
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array('error'=>true,'detalle'=>'mysql'); //,'conexion'=>$cn
				 
			}
		}else{
			return array('error'=>true,'detalle'=>'mysql'); //,'conexion'=>$cn
		}
	}


}
?>