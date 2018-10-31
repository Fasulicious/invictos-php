<?php

class DAOEstadisticas extends Conexion{
	

		
	function aumentar_visita($cod_profesor){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='insert into registro_visitas (cod_profesor,fecha) values ('.$cod_profesor.',utc_date()) ON DUPLICATE KEY UPDATE visitas=visitas+1';

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
			return 'mysql_no';
		}
	}


	
	function get_estadisticas_visitas_diarias($cod_profesor,$fecha_inicio,$fecha_fin){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{

	        	
	        	$sql='select fecha, visitas from registro_visitas where cod_profesor='.$cod_profesor.' and fecha >="'.$fecha_inicio.'" and fecha<="'.$fecha_fin.'"  order by fecha ASC';
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




	function get_estadisticas_visitas_mensuales($cod_profesor,$fecha_inicio,$fecha_fin){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
	        	
	        	$sql='select YEAR(fecha) anio, MONTH(fecha) mes, SUM(visitas) visitas from registro_visitas where cod_profesor='.$cod_profesor.' and fecha >="'.$fecha_inicio.'" and fecha<="'.$fecha_fin.'" group by YEAR(fecha),MONTH(fecha) order by YEAR(fecha) ASC, MONTH(fecha) ASC';
	        	
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


	function get_estadisticas_ganancias_diarias($cod_profesor,$fecha_inicio,$fecha_fin){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{

	        	
	        	$sql='select SUM(costo_hora*tiempo) ganancia, fecha from clase where cod_profesor='.$cod_profesor.' and fecha >="'.$fecha_inicio.'" and fecha<="'.$fecha_fin.'" group by fecha order by fecha ASC';
	        	
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



	function get_estadisticas_ganancias_mensuales($cod_profesor,$fecha_inicio,$fecha_fin){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{

	        	
	        	$sql='select SUM(costo_hora*tiempo) ganancia, YEAR(fecha) anio, MONTH(fecha) mes from clase where cod_profesor='.$cod_profesor.' and fecha >="'.$fecha_inicio.'" and fecha<="'.$fecha_fin.'" group by YEAR(fecha), MONTH(fecha) order by YEAR(fecha) ASC, MONTH(fecha) ASC';
	        	
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


	function get_recomendaciones($correo){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			

	        	$sql='select r.fecha, r.cod_profe, r.cod_alumno, r.correo, ua.nombres nombres_alumno, ua.apellidos apellidos_alumno, ua.foto foto_alumno, up.nombres nombres_profe, up.apellidos apellidos_profe, up.foto foto_profe, up.calificacion, c.id id_conocimiento, c.nombre nombre_conocimiento, cp.nivel from (((recomendacion r JOIN grl_tbl_users up ON r.cod_profe=up.id ) JOIN grl_tbl_users ua ON ua.id=r.cod_alumno) LEFT JOIN conocimiento_profe cp ON cp.id_profesor=up.id ) JOIN conocimientos c ON cp.id_conocimiento=c.id where r.leido=0 and r.correo="'.$correo.'"';	
	        	//echo '---------'.$sql.'---------';
				$rs = $cn->query($sql);
				
				$respuesta=array();
				$id_aviso=0;

				$cod_profe=0;
				$cod_alumno=0;
				$correo='';
				
				while($fila=mysqli_fetch_object($rs)){

					if($fila->cod_profe==$cod_profe && $fila->cod_alumno==$cod_alumno && $fila->correo==$correo){
						$respuesta[$id_aviso]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre_conocimiento'=>$fila->nombre_conocimiento ,'nivel'=>$fila->nivel );
					}else{

						$id_aviso++;

						$respuesta[$id_aviso]=array();
 
						$respuesta[$id_aviso]['fecha']=$fila->fecha;
						$respuesta[$id_aviso]['nombres_alumno']=$fila->nombres_alumno;
						$respuesta[$id_aviso]['apellidos_alumno']=$fila->apellidos_alumno;
						$respuesta[$id_aviso]['foto_alumno']=$fila->foto_alumno;
						$respuesta[$id_aviso]['nombres_profe']=$fila->nombres_profe;
						$respuesta[$id_aviso]['apellidos_profe']=$fila->apellidos_profe;
						$respuesta[$id_aviso]['foto_profe']=$fila->foto_profe;
						$respuesta[$id_aviso]['calificacion']=$fila->calificacion;
						$respuesta[$id_aviso]['id_conocimiento']=$fila->id_conocimiento;
						$respuesta[$id_aviso]['nombre_conocimiento']=$fila->nombre_conocimiento;
						$respuesta[$id_aviso]['nivel']=$fila->nivel;

						$respuesta[$id_aviso]['conocimientos']=array();

						if($fila->id_conocimiento){
							$respuesta[$id_aviso]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre_conocimiento'=>$fila->nombre_conocimiento,'nivel'=>$fila->nivel );
						}

					}
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($id_aviso==0){
					return array('error'=>false,'vacio'=>true);	
				}else{					
					return array('error'=>false,'data'=>$respuesta);	
				}

			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array('error'=>true,'detalle'=>'mysql'); 
				
			}
		}else{
				return array('error'=>true,'detalle'=>'mysql'); 
		}
	}
		
	function check_recomendacion($cod_alumno,$cod_profe,$correo){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			

	        	$sql='select * from recomendacion where cod_alumno='.$cod_alumno.' and cod_profe='.$cod_profe.' and correo="'.$correo.'"';	
	        	//echo '---------'.$sql.'---------';
				$rs = $cn->query($sql);
				
				$respuesta=false;
				if($rs->num_rows>0){
					$respuesta=true;
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
								
				return array('error'=>false,'data'=>$respuesta);	
				
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array('error'=>true,'detalle'=>'mysql'); 
				
			}
		}else{
				return array('error'=>true,'detalle'=>'mysql'); 
		}

	}


	function set_recomendacion($cod_alumno,$cod_profe,$correo){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){

			$rs = $cn->query('BEGIN');
			
			try{

	        	$sql='insert into recomendacion (cod_alumno, cod_profe, correo, fecha) values ('.$cod_alumno.','.$cod_profe.',"'.$correo.'",utc_timestamp())';

				$cn->query($sql);

				$cn->query('COMMIT');

				mysqli_close($cn);

				return array('error'=>false,'detalle'=>'ok'); 

			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);

				return array('error'=>true,'detalle'=>'mysql'); 

			}
		}else{
			return array('error'=>true,'detalle'=>'mysql'); 
		}
	}




	function set_ranking(){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){

			$rs = $cn->query('BEGIN');
			
			try{

	        	$sql='select id from grl_tbl_users where usuario_activo=1 order by calificacion desc, fecha_registro asc';

				$rs=$cn->query($sql);

				$respuesta=array();
				$cont=1;
				while($fila=mysqli_fetch_object($rs)){
					$id=$fila->id;
					$sql='update grl_tbl_users set ranking='.$cont.' where id='.$id;
					$cn->query($sql);
					$cont++;
				}

				$cn->query('COMMIT');
				mysqli_close($cn);

				return array('error'=>false,'detalle'=>'ok'); 

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