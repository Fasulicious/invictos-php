<?php

class DAOClases extends Conexion{
	
	function get_profesores($cod_alumno){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			

	        	$sql='select c.cod_profesor, u.username, u.nombres, u.apellidos, u.foto, MAX(c.fecha) fecha_clase, c.costo_hora, c.comentario, u.calificacion, cp.id_conocimiento, cp.nivel ,con.nombre nombre_conocimiento from ((clase c JOIN grl_tbl_users u ON u.id=c.cod_profesor) LEFT JOIN conocimiento_profe cp ON cp.id_profesor=c.cod_profesor) JOIN conocimientos con ON con.id=cp.id_conocimiento where cod_alumno = '.$cod_alumno.' group by c.cod_profesor, cp.id_conocimiento  order by fecha_clase DESC;';	

				$rs = $cn->query($sql);
				
				$respuesta=array();

				$cod_profesor=0;
				
				while($fila=mysqli_fetch_object($rs)){

					if($fila->cod_profesor==$cod_profesor){
						$respuesta[$cod_profesor]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre_conocimiento'=>$fila->nombre_conocimiento ,'nivel'=>$fila->nivel );
					}else{

						$cod_profesor=$fila->cod_profesor;

						$respuesta[$cod_profesor]=array();
 
						$respuesta[$cod_profesor]['id_usuario']=$fila->cod_profesor;
						$respuesta[$cod_profesor]['username']=$fila->username;
						$respuesta[$cod_profesor]['nombres']=$fila->nombres;
						$respuesta[$cod_profesor]['apellidos']=$fila->apellidos;
						$respuesta[$cod_profesor]['foto']=$fila->foto;
						$respuesta[$cod_profesor]['fecha_clase']=$fila->fecha_clase;
						$respuesta[$cod_profesor]['costo_hora']=$fila->costo_hora;
						$respuesta[$cod_profesor]['comentario']=$fila->comentario;
						$respuesta[$cod_profesor]['calificacion']=$fila->calificacion;

						$respuesta[$cod_profesor]['conocimientos']=array();

						if($fila->id_conocimiento){
							$respuesta[$cod_profesor]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre_conocimiento'=>$fila->nombre_conocimiento,'nivel'=>$fila->nivel );
						}

					}
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($cod_profesor==0){
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
		


	function get_clases($cod_alumno){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			

	        	$sql='select c.cod_profesor, u.username, u.nombres, u.apellidos, u.foto, c.fecha, c.hora, c.tiempo, c.costo_hora, c.comentario, c.materia_tema, u.calificacion, cp.id_conocimiento, cp.nivel ,con.nombre nombre_conocimiento, c.calificacion calificacion_clase from ((clase c JOIN grl_tbl_users u ON u.id=c.cod_profesor) LEFT JOIN conocimiento_profe cp ON cp.id_profesor=c.cod_profesor) JOIN conocimientos con ON con.id=cp.id_conocimiento where c.cod_alumno = '.$cod_alumno.'  order by fecha DESC;';	
				$rs = $cn->query($sql);
				

				$respuesta=array();

				$indice=0;
				$cod_profesor=0;
				$fecha=0;
				
				while($fila=mysqli_fetch_object($rs)){

					if($fila->cod_profesor==$cod_profesor && $fila->fecha==$fecha){
						$respuesta[$indice]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre_conocimiento'=>$fila->nombre_conocimiento ,'nivel'=>$fila->nivel );
					}else{

						$indice++;

						$cod_profesor=$fila->cod_profesor;
						$fecha=$fila->fecha;
						
						$respuesta[$indice]=array();
 
						$respuesta[$indice]['id_usuario']=$fila->cod_profesor;
						$respuesta[$indice]['username']=$fila->username;
						$respuesta[$indice]['nombres']=$fila->nombres;
						$respuesta[$indice]['apellidos']=$fila->apellidos;
						$respuesta[$indice]['foto']=$fila->foto;
						$respuesta[$indice]['fecha']=$fila->fecha;
						$respuesta[$indice]['hora']=$fila->hora;
						$respuesta[$indice]['costo_hora']=$fila->costo_hora;
						$respuesta[$indice]['comentario']=$fila->comentario;
						$respuesta[$indice]['materia_tema']=$fila->materia_tema;
						$respuesta[$indice]['calificacion']=$fila->calificacion;
						$respuesta[$indice]['tiempo']=$fila->tiempo;
						$respuesta[$indice]['calificacion_clase']=$fila->calificacion_clase;

						$respuesta[$indice]['conocimientos']=array();

						if($fila->id_conocimiento){
							$respuesta[$indice]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre_conocimiento'=>$fila->nombre_conocimiento,'nivel'=>$fila->nivel );
						}
					}
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($indice==0){
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




	function profesor_get_clases($cod_profesor){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			



	        	$sql='select c.cod_alumno id_usuario, u.username, u.nombres, u.apellidos, u.foto, u.fecha_nacimiento, u.educacion , c.fecha, c.hora, c.tiempo, c.costo_hora, c.comentario, c.materia_tema, u.calificacion, c.calificacion calificacion_clase from clase c JOIN grl_tbl_users u ON u.id=c.cod_alumno where c.cod_profesor = '.$cod_profesor.'  order by fecha DESC;';	
				$rs = $cn->query($sql);

				$respuesta=array();

				$indice=0;
				$cod_profesor=0;
				$fecha=0;
				while($fila=mysqli_fetch_object($rs)){

					$respuesta[]=$fila;
					
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($respuesta){
					return array('error'=>false,'data'=>$respuesta);
				}else{						
					return array('error'=>false,'vacio'=>true);	
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





	function profesor_get_alumnos($cod_profesor){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			



	        	$sql='select c.cod_alumno id_usuario, u.username, u.nombres, u.apellidos, u.foto, u.fecha_nacimiento, u.educacion , c.fecha, c.hora, c.tiempo, c.costo_hora, c.comentario, c.materia_tema, u.calificacion, c.calificacion calificacion_clase from clase c JOIN grl_tbl_users u ON u.id=c.cod_alumno where c.cod_profesor = '.$cod_profesor.' group by c.cod_alumno order by fecha DESC;';	
				$rs = $cn->query($sql);

				$respuesta=array();

				$indice=0;
				$cod_profesor=0;
				$fecha=0;
				while($fila=mysqli_fetch_object($rs)){

					$respuesta[]=$fila;
					
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($respuesta){
					return array('error'=>false,'data'=>$respuesta);
				}else{						
					return array('error'=>false,'vacio'=>true);	
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






	function profesor_get_clases_por_confirmar($cod_profesor){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			

	        	$sql='select fecha, costo_hora, hora, tiempo, profesor,alumno, nombres, apellidos, foto from (propuesta_economica pe JOIN grl_tbl_users u ON u.id=pe.alumno) where pe.profesor='.$cod_profesor.' and (pe.fecha<DATE(utc_timestamp()) or (pe.fecha=DATE(utc_timestamp()) and pe.hora<TIME(utc_timestamp()))) and pe.estado=3';
				$rs = $cn->query($sql);

				$respuesta=array();

				while($fila=mysqli_fetch_object($rs)){
					$respuesta[]=$fila;
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($respuesta){
					return array('error'=>false,'data'=>$respuesta);
				}else{						
					return array('error'=>false,'vacio'=>true);	
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




	function profesor_confirmar_rechazar_clase($reporte){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
				foreach($reporte as $ind=>$clase){

					if($clase['confirmacion']==1){

			        	$sql='select * from propuesta_economica where estado=3 and profesor='.$clase['cod_profesor'].' and alumno='.$clase['cod_alumno'];

			        	$rs=$cn->query($sql);

			        	$fila=mysqli_fetch_object($rs);

			        	if($fila){
							$sql='insert into clase (cod_alumno, cod_profesor, fecha, hora, costo_hora, tiempo) values ('.$clase['cod_alumno'].','.$clase['cod_profesor'].',"'.$fila->fecha.'","'.$fila->hora.'",'.$fila->costo_hora.','.$fila->tiempo.')';
							$cn->query($sql);

							$costo_total=$fila->costo_hora*$fila->tiempo;

				        	$reporte[$ind]['fecha']=$fila->fecha;			        	
				        	$reporte[$ind]['hora']=$fila->hora;
				        	$reporte[$ind]['tiempo']=$fila->tiempo;
				        	$reporte[$ind]['costo_hora']=$fila->costo_hora;


							//llenamos el historial de cuentas
	        				$sql='insert into cuentas (cod_profesor, fecha_ini, fecha_fin, monto_acumulado, comision) values ('.$clase['cod_profesor'].',CONCAT(YEAR(utc_timestamp()),"-",MONTH(utc_timestamp()),"-01"), CONCAT(YEAR(utc_timestamp() + INTERVAL 1 MONTH),"-",MONTH(utc_timestamp() + INTERVAL 1 MONTH),"-05"), '.$costo_total.','.($costo_total/10).') ON DUPLICATE KEY UPDATE monto_acumulado=monto_acumulado+'.$costo_total.', comision=monto_acumulado/10';
	        				$cn->query($sql);

	        				$sql='update grl_tbl_users set horas_trabajo= horas_trabajo + '.$fila->tiempo.' where id='.$clase['cod_profesor'];
	        				$cn->query($sql);		        					        		

	        				//llenamos la cuenta_actual_por pagar
	        				$sql='insert into cuenta_por_pagar (cod_profesor, fecha_fin, monto_acumulado, comision) values ('.$clase['cod_profesor'].', CONCAT(YEAR(utc_timestamp() + INTERVAL 1 MONTH),"-",MONTH(utc_timestamp() + INTERVAL 1 MONTH),"-05"), '.$costo_total.','.($costo_total/10).') ON DUPLICATE KEY UPDATE monto_acumulado=monto_acumulado+'.$costo_total.', comision=monto_acumulado/10';	  
	        				$cn->query($sql);

			        	}

					}

					$sql='update propuesta_economica set estado=0 where profesor='.$clase['cod_profesor'].' and alumno='.$clase['cod_alumno'];
					$cn->query($sql);

				}

				$cn->query('COMMIT');
				mysqli_close($cn);
				
				return array('error'=>false,'detalle'=>'ok','reporte'=>$reporte); //,'conexion'=>$cn
				
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array('error'=>true,'detalle'=>'mysql'); //,'conexion'=>$cn
				 
			}
		}else{
			return array('error'=>true,'detalle'=>'mysql'); //,'conexion'=>$cn
		}
	}



	function set_estado_problema($cod_alumno,$cod_profesor,$fecha,$hora,$estado_problema){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{


				$sql='update clase set estado_problema="'.$estado_problema.'" where cod_profesor='.$cod_profesor.' and cod_alumno='.$cod_alumno.' and fecha="'.$fecha.'" and hora="'.$hora.'"';
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





	function alumno_get_clases_por_calificar($cod_alumno){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			

	        	$sql='select fecha, costo_hora, hora, tiempo, cod_alumno, cod_profesor, nombres, apellidos, foto, estado_problema from (clase cl JOIN grl_tbl_users u ON u.id=cl.cod_profesor) where cl.cod_alumno='.$cod_alumno.' and (cl.calificacion=0 and (cl.problema=0 or (cl.problema>0 and cl.estado_problema="resuelto"))) ';

				$rs = $cn->query($sql);

				$respuesta=array();

				while($fila=mysqli_fetch_object($rs)){
					$respuesta[]=$fila;
				}

				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if($respuesta){
					return array('error'=>false,'data'=>$respuesta);
				}else{						
					return array('error'=>false,'vacio'=>true);	
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



	function alumno_califica_clase($reporte){

		$cn = $this->conexion();

		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{

				foreach($reporte as $clase){
					//calculo del puntaje de un profesor
					
					if($clase['problema']>0){
						switch($clase['problema']){
							case 1: 
							$comentario='El docente no lleg&oacute; a la clase. ';
							break;
							case 2:		
							$comentario='El docente tuvo un comportamiento acosador. ';
							break;
							case 3:		
							$comentario='El docente hizo otra cosa. ';
							break;
							case 4:		
							$comentario='Olvid&eacute; mi pertenencia. ';
							break;
						}

						$sql='update clase set comentario="'.$comentario.'", problema='.$clase['problema'].', problema_mensaje="'.$clase['mensaje'].'" , estado_problema="activo" where cod_profesor='.$clase['cod_profesor'].' and cod_alumno='.$clase['cod_alumno'].' and fecha="'.$clase['fecha'].'" and hora="'.$clase['hora'].'"';
						$cn->query($sql);

					}else{

						$sql_criterios='';
						$comentario='';
						$contador=1;
						$num_criterios=count($clase['criterios']);

						if($clase['calificacion']==1){
							$puntos=50;

							foreach($clase['criterios'] as $criterio){
								$sql_criterios.='criterio_'.$contador.'='.$criterio.',';
								$contador++;
								switch($criterio){
									case 1: 
									/*
									a) Pasión por enseñar:
									El docente muestra entusiasmo y gusto por enseñar y compartir conocimiento.
									Texto a mostrar: Entusiasmo al enseñar.
									Puntos: 26 (2 criterios) – 35 (1 criterio).
									*/
									$comentario.='El docente muestra entusiasmo y gusto por enseñar y compartir conocimiento. ';
										if($num_criterios>1){
											$puntos+=26;
										}else{
											$puntos+=35;
										}
									break;
									case 2:
									/*
									b) Dominio del tema:
									Se evalúa el grado de conocimiento del docente, así como su preparación de la clase impartida.
									Texto a mostrar: Dominio del tema
									Puntos: 24 (2 criterios) – 30 (1 criterio).
									*/						
										if($num_criterios>1){
											$puntos+=24;
										}else{
											$puntos+=30;
										}
									$comentario.='El docente ha demostrado conocimiento y dominio del tema. ';
									break;
									case 3:
									/*
									c) Motiva a aprender:
									El profesor motiva al estudiante a aprender su curso.
									Texto a mostrar: Motiva a aprender
									Puntos: 22 (2 criterios) – 25 (1 criterio).
									*/					
										if($num_criterios>1){
											$puntos+=22;
										}else{
											$puntos+=25;
										}
									$comentario.='El docente motiva a aprender su curso. ';
									break;
									case 4:
									/*
									d) Trato:
									Se califica el ambiente que genera el profesor en la clase, el cual es el resultado del trato que ofrece al estudiante.
									Texto a mostrar: Amabilidad
									Puntos: 20 (2 criterios) – 20 (1 criterio).
									*/				
										if($num_criterios>1){
											$puntos+=20;
										}else{
											$puntos+=20;
										}
									$comentario.='El docente ha tenido un buen trato en la clase. ';
									break;
									case 5:
									/*
									e) Puntualidad:
									Texto a mostrar: Puntualidad
									Puntos: 18 (2 criterios) – 15 (1 criterio).
									*/		
										if($num_criterios>1){
											$puntos+=18;
										}else{
											$puntos+=15;
										}
									$comentario.='El docente ha sido puntual. ';
									break;
								}
							}

						}elseif($clase['calificacion']==-1){
							$puntos=60;

							foreach($clase['criterios'] as $criterio){
								$sql_criterios.='criterio_'.$contador.'='.$criterio.',';
								$contador++;
								switch($criterio){
									case 1: 
									/*
									a) Pasión por enseñar:
									El docente muestra entusiasmo y gusto por enseñar y compartir conocimiento.
									Texto a mostrar: Entusiasmo al enseñar.
									Puntos: 26 (2 criterios) – 35 (1 criterio).
									*/
									$comentario.='El docente no muestra entusiasmo y gusto por enseñar y compartir conocimiento. ';
										if($num_criterios>1){
											$puntos-=26;
										}else{
											$puntos-=35;
										}
									break;
									case 2:
									/*
									b) Dominio del tema:
									Se evalúa el grado de conocimiento del docente, así como su preparación de la clase impartida.
									Texto a mostrar: Dominio del tema
									Puntos: 24 (2 criterios) – 30 (1 criterio).
									*/						
										if($num_criterios>1){
											$puntos-=24;
										}else{
											$puntos-=30;
										}
									$comentario.='El docente no ha demostrado conocimiento y dominio del tema. ';
									break;
									case 3:
									/*
									c) Motiva a aprender:
									El profesor motiva al estudiante a aprender su curso.
									Texto a mostrar: Motiva a aprender
									Puntos: 22 (2 criterios) – 25 (1 criterio).
									*/					
										if($num_criterios>1){
											$puntos-=22;
										}else{
											$puntos-=25;
										}
									$comentario.='El docente no motiva a aprender su curso. ';
									break;
									case 4:
									/*
									d) Trato:
									Se califica el ambiente que genera el profesor en la clase, el cual es el resultado del trato que ofrece al estudiante.
									Texto a mostrar: Amabilidad
									Puntos: 20 (2 criterios) – 20 (1 criterio).
									*/				
										if($num_criterios>1){
											$puntos-=20;
										}else{
											$puntos-=20;
										}
									$comentario.='El docente no ha tenido un buen trato en la clase. ';
									break;
									case 5:
									/*
									e) Puntualidad:
									Texto a mostrar: Puntualidad
									Puntos: 18 (2 criterios) – 15 (1 criterio).
									*/		
										if($num_criterios>1){
											$puntos-=18;
										}else{
											$puntos-=15;
										}
									$comentario.='El docente no ha sido puntual. ';
									break;
								}
							}



						}
						$sql='update clase set '.$sql_criterios.' comentario="'.$comentario.'", calificacion='.$clase['calificacion'].', puntos='.$puntos.' where cod_profesor='.$clase['cod_profesor'].' and cod_alumno='.$clase['cod_alumno'].' and fecha="'.$clase['fecha'].'" and hora="'.$clase['hora'].'"';
						$cn->query($sql);
						//calculo de puntaje de un profesor

						$sql='select SUM(puntos)/COUNT(puntos) promedio from clase where cod_profesor='.$clase['cod_profesor'].' and calificacion<>0 group by cod_profesor';	

						$rs = $cn->query($sql);
						$fila=mysqli_fetch_object($rs);
							
						$sql='update grl_tbl_users set calificacion='.$fila->promedio.' where id='.$clase['cod_profesor'];

						$cn->query($sql);
					}
				}
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



	function obtener_datos_alumno($id){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			
			$sql='select nombres, apellidos, correo from grl_tbl_users where id='.$id;
				$rs = $cn->query($sql);
				
				$fila=mysqli_fetch_object($rs);
							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				return array("error"=>false, "data"=>$fila);
				
								
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else{
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}



	function get_recordatorios(){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{			

	        	$sql='select * from propuesta_economica where date_sub(fecha, INTERVAL 1 DAY)=date(utc_date()) and estado=3;';	
				$rs = $cn->query($sql);

				$respuesta=array();

				while($fila=mysqli_fetch_object($rs)){

					$respuesta[]=$fila;
					
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




}
?>