<?php

class DAOInstalaciones extends Conexion{
			
	function get($indice){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
		 	
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select b.id id_biblio, b.id_titulo, b.nombre nombre_biblio, b.num_archivos, b.id_img, b.ext_img ,b.descripcion,a.id id_archivo,a.* from biblioteca b LEFT JOIN archivo a ON a.id_biblioteca=b.id order by b.id,a.id ';      

				$rs = $cn->query($sql);
				
				$respuesta=array();

				$id_biblio=0;
				$array_fotos=array();
				$contador=-1;
				while($fila=mysqli_fetch_object($rs)){

					if($id_biblio==$fila->id_biblio){
						$respuesta[$contador]['archivos'][]=array('id_archivo'=> $fila->id_archivo,'nombre'=>$fila->nombre ,'url_descarga'=>$fila->url_descarga ,'num_descargas'=>$fila->num_descargas);
					}else{
						$array_fotos=array();
						$id_biblio=$fila->id_biblio;

						$contador++;

						$respuesta[$contador]['id_biblioteca']=$id_biblio;
						$respuesta[$contador]['id_titulo']=$fila->id_titulo;
						$respuesta[$contador]['nombre_biblio']=$fila->nombre_biblio;
						$respuesta[$contador]['num_archivos']=$fila->num_archivos;
						$respuesta[$contador]['id_img']=$fila->id_img;
						$respuesta[$contador]['ext_img']=$fila->ext_img;
						$respuesta[$contador]['descripcion']=$fila->descripcion;
						$respuesta[$contador]['archivos']=array();

						
						if($fila->id_archivo){

							$respuesta[$contador]['archivos'][]=array('id_archivo'=> $fila->id_archivo,'nombre'=>$fila->nombre ,'num_descargas'=>$fila->num_descargas);
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


	function fun_get_archivo($id_archivo){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
		 	
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select nombre, nombre_ruta,ext_archivo  from archivo where id='.$id_archivo;      

				$rs = $cn->query($sql);
				

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




	function get_noticia_por_id($id_noticia){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
		 	
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select n.id id_not, n.id_img id_img_prev, n.ext_img ext_img_prev,n.*,f.id id_foto,f.* from noticias n LEFT JOIN noticias_fotos f ON f.id_noticia=n.id and n.id='.$id_noticia.' order by n.id,f.id ';      

				$rs = $cn->query($sql);
				
				$respuesta=array();

				$id_noticia=0;
				$array_fotos=array();
				$contador=-1;
				while($fila=mysqli_fetch_object($rs)){

					if($id_noticia==$fila->id_not){
						$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img'=>$fila->id_img ,'ext_img'=>$fila->ext_img);
					}else{
						$array_fotos=array();
						$id_noticia=$fila->id_not;

						$contador++;

						$respuesta[$contador]['id_noticia']=$id_noticia;
						$respuesta[$contador]['titulo']=$fila->titulo;
						$respuesta[$contador]['id_titulo']=$fila->id_titulo;
						$respuesta[$contador]['id_img']=$fila->id_img_prev;
						$respuesta[$contador]['ext_img']=$fila->ext_img_prev;
						$respuesta[$contador]['descripcion']=$fila->descripcion;
						$respuesta[$contador]['fotos']=array();

						
						if($fila->id_foto){

							$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img'=>$fila->id_img ,'ext_img'=>$fila->ext_img);
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




	function get_noticias_relacionadas($id_noticia){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
		 	
			$rs = $cn->query('BEGIN');
			

			try{
			
	        	$sql='select n.id id_not, n.id_img id_img_prev, n.ext_img ext_img_prev,n.*,f.id id_foto,f.* from (noticias n JOIN (select (noti.id) id from noticias noti where  noti.id>'.$id_noticia.'  order by noti.id limit 0,3) tabla ON n.id=tabla.id ) LEFT JOIN noticias_fotos f ON f.id_noticia=n.id   order by n.id,f.id  '; 


				$rs = $cn->query($sql);
				
				$respuesta=array();

				$id_noticia=0;
				$array_fotos=array();
				$contador=-1;

				while($fila=mysqli_fetch_object($rs)){

					if($id_noticia==$fila->id_not){
						$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img'=>$fila->id_img ,'ext_img'=>$fila->ext_img);
					}else{
						$array_fotos=array();
						$id_noticia=$fila->id_not;

						$contador++;

						$respuesta[$contador]['id_noticia']=$id_noticia;
						$respuesta[$contador]['titulo']=$fila->titulo;
						$respuesta[$contador]['id_titulo']=$fila->id_titulo;
						$respuesta[$contador]['id_img']=$fila->id_img_prev;
						$respuesta[$contador]['ext_img']=$fila->ext_img_prev;
						$respuesta[$contador]['descripcion']=$fila->descripcion;
						$respuesta[$contador]['fotos']=array();

						
						if($fila->id_foto){

							$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img'=>$fila->id_img ,'ext_img'=>$fila->ext_img);
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

/*
	function get_instalacion($id,$id_ttl){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
		 	
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select * from mod_preformas where id='.$id.' and id_text="'.$id_ttl.'"';	      	
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
		
	function get_imagenes(){

		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
			
	        	$sql='select id_img,ext_img from mod_preformas where id_img is not NULL';	
	        	
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

		
	}*/


	function eliminar_instalacion($id){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{
				$sql='delete from noticias where id='.$id;

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