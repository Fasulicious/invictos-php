<?php

class DAOAvisos extends Conexion{
	
	function busqueda_avisos($id_usuario,$curso,$latitud,$longitud,$distancia){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			
			//le doy 2000 metros mas de distancia para que encuentre usuarios que estan fuera del rango
			$distancia=($distancia+2000)* 0.00000925;

			if(!isset($id_usuario)){
				$id_usuario=0;
			}

			$sql='select a.id id_aviso,a.coor_latitud, a.coor_longitud, u.id id_usuario, u.foto usuario_foto ,u.username ,u.nombres, u.apellidos, u.presentacion, u.profesion, u.fecha_nacimiento, u.pensamiento, u.moneda, u.costo ,u.calificacion ,u.direccion ,con_pe.id_conocimiento, con.nombre nombre_conocimiento, con_pe.nivel, POW(POW('.$longitud.' - a.coor_longitud,2) + POW('.$latitud.' - a.coor_latitud,2),0.5) distancia, if(v.activo IS NULL or v.activo=0,0,1) voto
			 from  ((((avisos a JOIN  grl_tbl_users u  ON a.id_usuario=u.id) 
			 JOIN conocimiento_profe cp ON cp.id_profesor=u.id) JOIN  conocimiento_profe con_pe ON con_pe.id_profesor=u.id) JOIN conocimientos con ON con.id=con_pe.id_conocimiento) LEFT JOIN votos_profesor v ON v.id_profesor=a.id_usuario and v.id_usuario='.$id_usuario.' where POW(POW('.$longitud.' - a.coor_longitud,2) + POW('.$latitud.' - a.coor_latitud,2),0.5) < '.$distancia.' and cp.id_conocimiento = '.$curso.' order by distancia ASC' ;
//


			 
			

				$rs = $cn->query($sql);
				
				$respuesta=array();
				$id_aviso=0;
				$cont_aviso=0;

				$id_avisos_condicion='';
				
				while($fila=mysqli_fetch_object($rs)){

					if($id_aviso==$fila->id_aviso){
						$respuesta[$cont_aviso]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre'=>$fila->nombre_conocimiento ,'nivel'=>$fila->nivel );
					}else{
						$id_aviso=$fila->id_aviso;
						
						$cont_aviso++;

						$respuesta[$cont_aviso]=array();
 
						$respuesta[$cont_aviso]['id']=$id_aviso;
						$respuesta[$cont_aviso]['referencia']=$fila->referencia;
						$respuesta[$cont_aviso]['direccion']=$fila->direccion;
						$respuesta[$cont_aviso]['moneda']=$fila->moneda;
						$respuesta[$cont_aviso]['costo']=$fila->costo;
						$respuesta[$cont_aviso]['coor_latitud']=$fila->coor_latitud;
						$respuesta[$cont_aviso]['coor_longitud']=$fila->coor_longitud;
						$respuesta[$cont_aviso]['fecha_dia']=$fila->fecha_dia;
						$respuesta[$cont_aviso]['id_usuario']=$fila->id_usuario;
						$respuesta[$cont_aviso]['foto']=$fila->usuario_foto;
						$respuesta[$cont_aviso]['username']=$fila->username;
						$respuesta[$cont_aviso]['nombres']=$fila->nombres;
						$respuesta[$cont_aviso]['apellidos']=$fila->apellidos;
						$respuesta[$cont_aviso]['calificacion']=$fila->calificacion;
						$respuesta[$cont_aviso]['presentacion']=$fila->presentacion;
						$respuesta[$cont_aviso]['distancia']=$fila->distancia;
						$respuesta[$cont_aviso]['fecha_nacimiento']=$fila->fecha_nacimiento;
						$respuesta[$cont_aviso]['profesion']=$fila->profesion;
						$respuesta[$cont_aviso]['pensamiento']=$fila->pensamiento;
						$respuesta[$cont_aviso]['voto']=$fila->voto;

						$respuesta[$cont_aviso]['conocimientos']=array();
						
						if($fila->id_conocimiento){
							$respuesta[$cont_aviso]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre'=>$fila->nombre_conocimiento,'nivel'=>$fila->nivel );
						}
						
/*
						if($id_avisos_condicion==''){
							$id_avisos_condicion.='a.id='.$fila->id_aviso;
						}else{
							if($id_avisos_condicion==''){
								$id_avisos_condicion.=' || a.id='.$fila->id_aviso;			
							}							
						}*/

					}
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

	function busqueda_avisos_ranking($id_usuario,$curso,$latitud,$longitud,$distancia){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			
			$distancia=($distancia+30000)* 0.00000925;

			if(!isset($id_usuario)){
				$id_usuario=0;
			}

			$sql='select a.id id_aviso,a.coor_latitud, a.coor_longitud, u.id id_usuario, u.foto usuario_foto ,u.username , u.nombres, u.apellidos, u.presentacion, u.profesion, u.fecha_nacimiento, u.pensamiento, u.moneda, u.costo ,u.calificacion ,u.direccion ,con_pe.id_conocimiento, con.nombre nombre_conocimiento, con_pe.nivel, u.ranking, if(v.activo IS NULL or v.activo=0,0,1) voto
			 from  ((((avisos a JOIN  grl_tbl_users u  ON a.id_usuario=u.id) 
			 JOIN conocimiento_profe cp ON cp.id_profesor=u.id) JOIN  conocimiento_profe con_pe ON con_pe.id_profesor=u.id) JOIN conocimientos con ON con.id=con_pe.id_conocimiento ) LEFT JOIN votos_profesor v ON v.id_profesor=a.id_usuario and v.id_usuario='.$id_usuario.' where POW(POW('.$longitud.' - a.coor_longitud,2) + POW('.$latitud.' - a.coor_latitud,2),0.5) < '.$distancia.' and cp.id_conocimiento = '.$curso.' order by u.ranking ASC, POW(POW('.$longitud.' - a.coor_longitud,2) + POW('.$latitud.' - a.coor_latitud,2),0.5) ASC';

			 //echo '--------------**  '.$sql.'  **---------------';
//
//    cono=57  id=16   //   //    cono=1  id=17   //   //    cono=53  id=17   //   //    cono=57  id=17   //   //    cono=1  id=15   //   //    cono=53  id=15   //   //    cono=57  id=15   //   //    cono=1  id=16   //   //    cono=53  id=16   //  
			 
				$rs = $cn->query($sql);
				$respuesta=array();
				$id_aviso=0;
				$cont_aviso=0;

				$id_avisos_condicion='';
				
				while($fila=mysqli_fetch_object($rs)){
					//echo 'ID AVISO==> '.$id_aviso.'    FILA ID_AVISO==> '.$fila->id_aviso.'     CONTADOR==> '.$cont_aviso ;
					if($id_aviso==$fila->id_aviso){
						$respuesta[$cont_aviso]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre'=>$fila->nombre_conocimiento ,'nivel'=>$fila->nivel );
					}else{
						$id_aviso=$fila->id_aviso;

						$cont_aviso++;

						$respuesta[$cont_aviso]=array();
 
						$respuesta[$cont_aviso]['id']=$fila->id_aviso;
						$respuesta[$cont_aviso]['referencia']=$fila->referencia;
						$respuesta[$cont_aviso]['direccion']=$fila->direccion;
						$respuesta[$cont_aviso]['moneda']=$fila->moneda;
						$respuesta[$cont_aviso]['costo']=$fila->costo;
						$respuesta[$cont_aviso]['coor_latitud']=$fila->coor_latitud;
						$respuesta[$cont_aviso]['coor_longitud']=$fila->coor_longitud;
						$respuesta[$cont_aviso]['fecha_dia']=$fila->fecha_dia;
						$respuesta[$cont_aviso]['id_usuario']=$fila->id_usuario;
						$respuesta[$cont_aviso]['foto']=$fila->usuario_foto;
						$respuesta[$cont_aviso]['username']=$fila->username;
						$respuesta[$cont_aviso]['nombres']=$fila->nombres;
						$respuesta[$cont_aviso]['apellidos']=$fila->apellidos;
						$respuesta[$cont_aviso]['calificacion']=$fila->calificacion;
						$respuesta[$cont_aviso]['presentacion']=$fila->presentacion;
						$respuesta[$cont_aviso]['fecha_nacimiento']=$fila->fecha_nacimiento;
						$respuesta[$cont_aviso]['profesion']=$fila->profesion;
						$respuesta[$cont_aviso]['pensamiento']=$fila->pensamiento;
						$respuesta[$cont_aviso]['voto']=$fila->voto;

						$respuesta[$cont_aviso]['conocimientos']=array();
						
						if($fila->id_conocimiento){
							$respuesta[$cont_aviso]['conocimientos'][]=array('id_conocimiento'=> $fila->id_conocimiento,'nombre'=>$fila->nombre_conocimiento,'nivel'=>$fila->nivel );
						}

/*
						if($id_avisos_condicion==''){
							$id_avisos_condicion.='a.id='.$fila->id_aviso;
						}else{
							if($id_avisos_condicion==''){
								$id_avisos_condicion.=' || a.id='.$fila->id_aviso;			
							}							
						}*/

					}
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





	function get_aviso_por_id($id_usuario,$id){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			//
			try{
			

	        	$sql='select a.*,a.id id_aviso ,DATE(a.fecha) fecha_dia,u.id id_usuario,u.id_img usuario_img,u.nombre,u.ext_img usuario_img_ext,u.presentacion, u.profesion, u.fecha_nacimiento,u.pensamiento, u.moneda, u.costo, u.video, f.id id_foto, f.id_img id_img_foto, f.ext_img ext_img_foto, if(v.activo IS NULL or v.activo=0,0,1) voto from (avisos a JOIN  grl_tbl_users u  ON a.id_usuario=u.id) LEFT JOIN votos_profesor v ON v.id_profesor=a.id_usuario and v.id_usuario='.$id_usuario.'  where a.id='.$id.'  ';	


				$rs = $cn->query($sql);
				
				$respuesta=array();
				$id_aviso=0;
				$array_fotos=array();

				$id_avisos_condicion='';
				
				while($fila=mysqli_fetch_object($rs)){

					if($id_aviso==$fila->id_aviso){

						
						if($fila->id_foto){
							$respuesta[$id_aviso]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img_foto'=>$fila->id_img_foto ,'ext_img_foto'=>$fila->ext_img_foto);
						}
					}else{
						$array_fotos=array();
						$id_aviso=$fila->id_aviso;

 
 
						$respuesta[$id_aviso]['id']=$id_aviso;
						//$respuesta[$id_aviso]['id_text']=$fila->id_text;
						//$respuesta[$id_aviso]['titulo']=$fila->titulo;
						$respuesta[$id_aviso]['referencia']=$fila->referencia;
						$respuesta[$id_aviso]['direccion']=$fila->direccion;
						$respuesta[$id_aviso]['img_previa']=$fila->img_previa;
						$respuesta[$id_aviso]['img_previa_ext']=$fila->img_previa_ext;
						$respuesta[$id_aviso]['moneda']=$fila->moneda;
						$respuesta[$id_aviso]['costo']=$fila->costo;
						$respuesta[$id_aviso]['coor_latitud']=$fila->coor_latitud;
						$respuesta[$id_aviso]['coor_longitud']=$fila->coor_longitud;
						$respuesta[$id_aviso]['fecha_dia']=$fila->fecha_dia;
						$respuesta[$id_aviso]['id_usuario']=$fila->id_usuario;
						$respuesta[$id_aviso]['contador_vistas']=$fila->contador_vistas;
						$respuesta[$id_aviso]['usuario_img']=$fila->usuario_img;
						$respuesta[$id_aviso]['nombre']=$fila->nombre;
						$respuesta[$id_aviso]['usuario_img_ext']=$fila->usuario_img_ext;
						$respuesta[$id_aviso]['presentacion']=$fila->presentacion;
						$respuesta[$id_aviso]['fecha_nacimiento']=$fila->fecha_nacimiento;
						$respuesta[$id_aviso]['profesion']=$fila->profesion;
						$respuesta[$id_aviso]['pensamiento']=$fila->pensamiento;
						$respuesta[$id_aviso]['voto']=$fila->voto;

						$respuesta[$id_aviso]['video']=$fila->video;

						$respuesta[$id_aviso]['fotos']=array();
						

						
						if($fila->id_foto){
							$respuesta[$id_aviso]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img_foto'=>$fila->id_img_foto ,'ext_img_foto'=>$fila->ext_img_foto);
						}

						if($id_avisos_condicion==''){
							$id_avisos_condicion.='a.id='.$fila->id_aviso;
						}else{
							if($id_avisos_condicion==''){
								$id_avisos_condicion.=' || a.id='.$fila->id_aviso;			
							}							
						}
						

					}
				}


				if($id_avisos_condicion!=''){

					$sql='select a.id id_aviso, cp.id_conocimiento,c.nombre, cp.id_profesor  from ( avisos a JOIN conocimiento_profe cp ON a.id_usuario=cp.id_profesor) JOIN conocimientos c ON c.id= cp.id_conocimiento  where '.$id_avisos_condicion;

					//echo $sql;

					$rs = $cn->query($sql);


					$id_aviso=0;

					while($fila=mysqli_fetch_object($rs)){

						if($id_aviso==$fila->id_aviso){
							$respuesta[$id_aviso]['conocimientos'][]=array('id'=> $fila->id_conocimiento,'nombre'=> $fila->nombre);
						}else{
							$id_aviso=$fila->id_aviso;


							$respuesta[$id_aviso]['conocimientos']=array();
							
							if($fila->id_conocimiento){
								$respuesta[$id_aviso]['conocimientos'][]=array('id'=> $fila->id_conocimiento,'nombre'=> $fila->nombre);
							}
						}
					}

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


	


	function get_correo_anunciante($id_aviso){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	//$sql='select * from avisos a, distritos d, rangos_costos c where a.transaccion='.$transaccion.' and a.tipo_inmueble='.$tipo.' and d.id='.$distrito.' and pow(pow(d.coor_latitud-a.coor_latitud,2)+pow(d.coor_longitud-a.coor_longitud,2),0.5) <=0.0072 and c.id='.$costo.' and c.min<=a.costo and c.max>=a.costo';	
	        	
	        	$sql=' select u.correo from grl_tbl_users u,avisos a where u.id=a.id_usuario and a.id='.$id_aviso;	
	        	
				$rs = $cn->query($sql);
				
				$respuesta=array();

				$fila=mysqli_fetch_object($rs);
							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				return $fila;
				
				
			}catch(Exception $ex){

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return 'mysql_no';
				 
			}
		}else{
			return 'mysql_no';
		}
	}
	

	function set_aviso_contacto($id_aviso,$id_contacto,$nombre,$mensaje,$correo,$telefono){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				$sql='insert into aviso_contactos (id_aviso,id_contacto,nombre,mensaje,correo,telefono) values ('.$id_aviso.','.$id_contacto.',"'.$nombre.'","'.$mensaje.'","'.$correo.'","'.$telefono.'")';

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
	


	
	function get_mis_avisos($id_usuario){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	//$sql='select * from avisos a, distritos d, rangos_costos c where a.transaccion='.$transaccion.' and a.tipo_inmueble='.$tipo.' and d.id='.$distrito.' and pow(pow(d.coor_latitud-a.coor_latitud,2)+pow(d.coor_longitud-a.coor_longitud,2),0.5) <=0.0072 and c.id='.$costo.' and c.min<=a.costo and c.max>=a.costo';	
	        	


	        	$sql='select id id_aviso ,DATE(fecha) fecha_dia, id_usuario, referencia from avisos    where a.id_usuario="'.$id_usuario.'"';

				$rs = $cn->query($sql);
				
				$respuesta=array();

				$id_aviso=0;
				$array_fotos=array();
				$contador=-1;
				
				while($fila=mysqli_fetch_object($rs)){

					if($id_aviso==$fila->id_aviso){

						
						if($fila->id_foto){
							$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img_foto'=>$fila->id_img_foto ,'ext_img_foto'=>$fila->ext_img_foto);
						}
					}else{
						$array_fotos=array();
						$id_aviso=$fila->id_aviso;

						$contador++;
 
 

						$respuesta[$contador]['id']=$id_aviso;
						//$respuesta[$contador]['id_text']=$fila->id_text;
						$respuesta[$contador]['referencia']=$fila->referencia;
						$respuesta[$contador]['direccion']=$fila->direccion;
						$respuesta[$contador]['img_previa']=$fila->img_previa;
						$respuesta[$contador]['img_previa_ext']=$fila->img_previa_ext;
						$respuesta[$contador]['coor_latitud']=$fila->coor_latitud;
						$respuesta[$contador]['coor_longitud']=$fila->coor_longitud;
						$respuesta[$contador]['fecha_dia']=$fila->fecha_dia;
						$respuesta[$contador]['id_usuario']=$fila->id_usuario;
						$respuesta[$contador]['contador_vistas']=$fila->contador_vistas;


						$respuesta[$contador]['fotos']=array();

						
						
						if($fila->id_foto){
							$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img_foto'=>$fila->id_img_foto ,'ext_img_foto'=>$fila->ext_img_foto);
						}

					}
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



	
	function get_mis_mensajes_avisos($id_usuario){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	//$sql='select * from avisos a, distritos d, rangos_costos c where a.transaccion='.$transaccion.' and a.tipo_inmueble='.$tipo.' and d.id='.$distrito.' and pow(pow(d.coor_latitud-a.coor_latitud,2)+pow(d.coor_longitud-a.coor_longitud,2),0.5) <=0.0072 and c.id='.$costo.' and c.min<=a.costo and c.max>=a.costo';	
	        	
	        	$sql='select c.* from avisos a,aviso_contactos c where a.id_usuario='.$id_usuario.' and c.id_aviso=a.id';	
	        	
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



	function set_mensaje_leido($id_usuario,$id_mensaje){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			

	        	$sql='update avisos a, aviso_contactos c set c.leido=1 where a.id=c.id_aviso and a.id_usuario='.$id_usuario.' and c.id='.$id_mensaje;	
	        	
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


	function responder_mensaje($id_usuario,$id_mensaje,$mensaje){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			

	        	$sql='update avisos a, aviso_contactos c set c.respondido=1,c.respuesta="'.$mensaje.'" where a.id=c.id_aviso and a.id_usuario='.$id_usuario.' and c.id='.$id_mensaje;	
	        	
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










	function busqueda_profesor_nombre($id_usuario,$nombre){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');

			try{
			

			if(!isset($id_usuario)){
				$id_usuario=0;
			}


			$sql='select u.id,  u.username, concat(u.nombres," ",u.apellidos) nombre, u.calificacion, if(v.activo is NULL or v.activo=0 ,0, v.activo) voto, u.foto from grl_tbl_users u LEFT JOIN votos_profesor v ON v.id_profesor=u.id and v.id_usuario='.$id_usuario.' where u.tipo="P" and concat(u.nombres,u.apellidos) like "%'.$nombre.'%" order by  CASE WHEN concat(u.nombres,u.apellidos) like "'.$nombre.'%" THEN 0 WHEN concat(u.nombres,u.apellidos) like "% %'.$nombre.'% %" THEN 1 WHEN concat(u.nombres,u.apellidos) like "%'.$nombre.'" THEN 2 ELSE 3 END';
//	

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