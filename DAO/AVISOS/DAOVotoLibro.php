<?php

class DAOVotoLibro extends Conexion{
	
	function pulsa_votar_libro($id_usuario,$id_recurso){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
				
				$sql='select * from votos_recurso where id_usuario='.$id_usuario.' and '.' id_recurso='.$id_recurso;
				$rs=$cn->query($sql);

				$ha_votado=false;
				if($rs->num_rows>0){
					$fila=mysqli_fetch_object($rs);
					if($fila->activo){
						$ha_votado=true;
					}

					$sql='update votos_recurso set activo=IF(activo=1,0,1) where id_usuario='.$id_usuario.' and '.' id_recurso='.$id_recurso;

				}else{
					$sql='insert into votos_recurso (id_usuario,id_recurso) values ('.$id_usuario.','.$id_recurso.')';
						$ha_votado=true;
				}


				$cn->query($sql);

				if($ha_votado){
					$sql='update recurso_profesor set valoraciones=valoraciones+1 where id='.$id_recurso;
				}else{
					$sql='update recurso_profesor set valoraciones=valoraciones-1 where id='.$id_recurso;
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




	function descarga_libro($id_recurso){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{


				$sql='update recurso_profesor set descargas=descargas+1 where id='.$id_recurso;
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