<?php

class DAOConsultor extends Conexion{
	
	function fun_select_auxiliar($query){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{
				
		     	$rs=$cn->query($query);
		     //	echo $query;
				while($fila=mysqli_fetch_object($rs)){
					$respuesta[]=$fila;
				}
				        	         
				$cn->query('COMMIT');
		       	
				mysqli_close($cn);
				
				if( $respuesta){
					return $respuesta;

				}else{

					return array("error"=>false, "vacio"=>true);
				}
			
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');			
			}			
		
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}	



	function fun_select_elemento($nombre_tabla,$campos_get,$condicion,$orderby,$inicio,$numero){ //INGRESA UN NUEVO PADRE 
		
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	        	        
			$cn->query('BEGIN');
			try{

				$limitacion='';
				if($numero>0){
					$limitacion=' limit '.$inicio.','.$numero;
				}
				if($condicion==''){
					$condicion='1';
				}
				if(isset($orderby) && $orderby !=''){
					$orderby=' order by '.$orderby;
				}
		        $sql='select '.$campos_get.' from '.$nombre_tabla.' where '.$condicion.' '.$orderby.' '.$limitacion;
		     	$rs=$cn->query($sql);

				while($fila=mysqli_fetch_object($rs)){
					$respuesta[]=$fila;
				}
				        	         
				$cn->query('COMMIT');
		       	
				mysqli_close($cn);
				
				if( $respuesta){
					return $respuesta;

				}else{

					return array("error"=>false, "vacio"=>true);
				}
			
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');			
			}			
		
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}	



	function fun_select_elemento_compuesto($nombre_tabla,$campos_get,$condicion,$nivel_condicion,$orderby,$inicio,$numero,$estructura,$nivel_limitacion){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
			$rs = $cn->query('BEGIN');
			
			try{

				$limitacion='';
				if($numero>0){
					$limitacion=' limit '.$inicio.','.$numero;
				}

				$limitacion_2=$limitacion;

				switch($nivel_limitacion){
					case 1:
						$limitacion_2='';
					break;
					case 2:
						$limitacion='';						
					break;
				}


				$condicion_2=$condicion;
						
				switch($nivel_condicion){
					case 1:

					if($condicion==''){
						$condicion='1';
					}
						$condicion_2='1';

					break;
					case 2:
						if($condicion_2==''){
							$condicion_2='1';
						}
						$condicion='1';
						
					break;
				}
				
				if(isset($orderby) && $orderby !=''){
					$orderby=' order by '.$orderby;
				}

			$respuesta=array();

			$id_elemento=-1;
			$array_fotos=array();

			$campos_array=array();


			$tabla_compuesta_parte2='';


			foreach ( $estructura as $campo=>$valores){

				if($valores['tipo']=='id' && ($valores['indice']!==false) ){
					$id=$campo;
				}
			}


			if($limitacion!='' || $condicion!=1){

				$tabla_compuesta=$nombre_tabla.' JOIN (select '.$nombre_tabla.'.'.$id.' from '.$nombre_tabla.' where '.$condicion.' order by '.$nombre_tabla.'.'.$id.' '.$limitacion.') tabla ON '.$nombre_tabla.'.'.$id.'=tabla.'.$id;
			}else{
				$tabla_compuesta=$nombre_tabla;
			}



			foreach ( $estructura as $campo=>$valores){


				 if($valores['tipo']=='array' && !isset($valores['tabla_rel'])){

					$campos_array[]=$campo;


					foreach ( $valores['estructura'] as $subcampo=>$atributos_array){			

						if($atributos_array['tipo']=='id_rel'){
							$campo_id_array=$subcampo;
							$campo_rel_padre=$atributos_array['campo_padre'];
						}

					}

					//se verifica primero si hay una tabla rel aparte que se va a relacionar con esta tabla

					$sub_union_tablas_rel=$valores['tabla'];
					foreach ($estructura as $campo_2 => $valores_2) {

						 if($valores_2['tipo']=='array' && isset($valores_2['tabla_rel'])){
						 	if($valores_2['tabla_rel']==$valores['tabla']){

								if($valores_2['tipo_union']=='fuerte'){
									$subjoin='JOIN';
								}else{
									$subjoin='LEFT JOIN';
								}

								foreach ( $valores_2['estructura'] as $subcampo=>$atributos_array){			

									if($atributos_array['tipo']=='id_rel'){
										$subcampo_id_array=$subcampo;
										$subcampo_rel_padre=$atributos_array['campo_padre'];
									}

								}

						 		$sub_union_tablas_rel='('.$valores['tabla'].' '.$subjoin.' '.$valores_2['tabla'].' ON '.$valores['tabla'].'.'.$subcampo_rel_padre.'='.$valores_2['tabla'].'.'.$subcampo_id_array.')';
						 	}
						 	//esto significa que se ha encontrado en la estructura una tabla tipo rel que se va a relacionar con la tabla actual
						 }
					}

					$condicion_join='';

					if($valores['condicion']){

						$condicion_join=$valores['condicion'];
						if($valores['variables_post']){						
							foreach($valores['variables_post'] as $variable){
								if(isset($_POST['var_'.$variable]) && !empty($_POST['var_'.$variable])){
									$condicion_join=str_replace('{'.$variable.'}',$_POST['var_'.$variable],$condicion_join);	
								}else{
									$condicion_join=str_replace('{'.$variable.'}',$valores['valores_default'][$variable],$condicion_join);
								}
							}	
						}

						if($valores['variables_sesion']){		
							foreach($valores['variables_sesion'] as $variable){
								if(isset($_SESSION[$variable]) && !empty($_SESSION[$variable])){
									$condicion_join=str_replace('{'.$variable.'}',$_SESSION[$variable],$condicion_join);
								}else{
									$condicion_join=str_replace('{'.$variable.'}',$valores['valores_default'][$variable],$condicion_join);
								}
							}
						}


					}

					$tabla_compuesta_parte2=$sub_union_tablas_rel.' ON '.$nombre_tabla.'.'.$campo_rel_padre.'='.$valores['tabla'].'.'.$campo_id_array.' '.$condicion_join;



					if($valores['tipo_union']=='fuerte'){
						$join='JOIN';
					}else{
						$join='LEFT JOIN';
					}


					$tabla_compuesta='('.$tabla_compuesta.') '.$join.' '.$tabla_compuesta_parte2;



				}
				
			}



/*
select recurso_profesor.id,recurso_profesor.id_profesor,recurso_profesor.titulo,recurso_profesor.descripcion,recurso_profesor.link_externo,recurso_profesor.descargas,recurso_profesor.valoraciones,grl_tbl_users.nombres,grl_tbl_users.id as id_profe from (recurso_profesor) JOIN grl_tbl_users ON recurso_profesor.id_profesor=grl_tbl_users.id  where recurso_profesor.titulo like "%%" or concat(grl_tbl_users.nombres, grl_tbl_users.apellidos) like "%%"  order by case when recurso_profesor.titulo like "%" then 4*valoraciones when recurso_profesor.titulo like "%%" then 3*valoraciones when recurso_profesor.titulo like "%" then 2*valoraciones else 0*valoraciones end DESC  limit 0,10

*/



		        $sql='select '.$campos_get.' from '.$tabla_compuesta.' where '.$condicion_2.' '.$orderby.' '.$limitacion_2;
				$rs = $cn->query($sql);	


				$contador=0;
				while($fila=$rs->fetch_array(MYSQLI_ASSOC)){
					if($fila[$id]){
						$indice=$fila[$id];
					}else{
						$indice=$contador;
						$contador++;
					}


					foreach($estructura as $campo=>$valores){
						if($valores['tipo']!='array'){

						$respuesta[$indice][$campo]=$fila[$campo];

						}						
					}



					foreach($campos_array as $nombre){

						if($estructura[$nombre]['union_plana']){
							//Al hacer una especificación de que la suma de las tablas ha generado una union plana, significa que se van a colocar en el mismo nivel todos los campos recogidos en la consulta, de este modo no se crean estructuras jerárquicas y es posible acceder a esos valores desde JAVASCRIPT de una forma directa
							foreach($estructura[$nombre]['estructura'] as $campo=>$valores){
	  							
	  							if($valores['alias']){
	  								//pero para evitar conflictos, al definir el campo en la respuesta, se debe tomar el valor alias que se ha definido para el cmapo de la tabla complementaria
									$respuesta[$indice][$valores['alias']]=$fila[$valores['alias']];
	  							}else{

									$respuesta[$indice][$campo]=$fila[$campo];
	  							}
								
							}

						}else{
							//muy a diferencia de la anterior ejecución, en este caso, se cera una nueva estructura array, para poder ingresar ahí valores que se han obtenido en la consulta, estos valores se obtienen usando el alias en la FILA que se está consultando en esta iteración, sin embargo, los valores se guardarán en campos dentro del nuevo array, cuyos nombres son los mismos que los definidos en la estructura de este array, o mejor dicho, los nombres originales de los campos de la tabla complementaria
							if(!$respuesta[$indice][$nombre]){
								$respuesta[$indice][$nombre]=array();		

							}

							//$contador=count($respuesta[$indice][$nombre]);
							
							$alias_id; //esto reemplaza al parche
							foreach($estructura[$nombre]['estructura'] as $campo=>$valores){
	  							
	  							if($valores['tipo']=='id'){
	  								if($valores['alias']){
	  									$alias_id=$valores['alias'];
	  								}else{
	  									$alias_id=$campo;
	  								}
	  								break;
	  							}
								
							}

							if($fila[$alias_id]){

								$respuesta[$indice][$nombre][$fila[$alias_id]]=array();
							
								
								foreach($estructura[$nombre]['estructura'] as $campo=>$valores){
		  							
		  							if($valores['alias']){

										$respuesta[$indice][$nombre][$fila[$alias_id]][$valores['alias']]=$fila[$valores['alias']];
		  							}else{

										$respuesta[$indice][$nombre][$fila[$alias_id]][$campo]=$fila[$campo];
		  							}
									
								}


								//ahora vamos a agregar los valores de los campos relacionados con los campos que pertenecen al array de subvalores, en este caso etiquetas
								foreach ($estructura as $campo_2 => $valores_2) {

									 if($valores_2['tipo']=='array' && isset($valores_2['tabla_rel'])){
									 	if($valores_2['tabla_rel']==$estructura[$nombre]['tabla']){


											foreach($valores_2['estructura'] as $campo=>$valores){
					  							
					  							if($valores['alias']){

													$respuesta[$indice][$nombre][$fila[$alias_id]][$valores['alias']]=$fila[$valores['alias']];
					  							}else{

													$respuesta[$indice][$nombre][$fila[$alias_id]][$campo]=$fila[$campo];
					  							}
												
											}
									 	}
									 	//esto significa que se ha encontrado en la estructura una tabla tipo rel que se va a relacionar con la tabla actual
									 }
								}

								
							}	
						}
						

					}

				}


/*
	
					if($id_elemento==$fila->id){
						
						if($fila->id_foto){
							$respuesta[$id_elemento]['fotos'][]=array('id'=> $fila->id,'imagen'=>$fila->imagen );
						}

					}else{
						$array_fotos=array();
						$id_aviso=$fila->id_aviso;

						$contador++;
 
						$respuesta[$contador]['id']=$id_aviso;
						$respuesta[$contador]['id_text']=$fila->id_text;
						$respuesta[$contador]['titulo']=$fila->titulo;
						$respuesta[$contador]['descripcion']=$fila->descripcion;
						$respuesta[$contador]['direccion']=$fila->direccion;
						$respuesta[$contador]['img_previa']=$fila->img_previa;
						
						$respuesta[$contador]['fotos']=array();

						
						
						if($fila->id_foto){
							$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img_foto'=>$fila->id_img_foto ,'ext_img_foto'=>$fila->ext_img_foto);
						}

					}
*/
							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if( $respuesta){
					return $respuesta;

				}else{

					return array("error"=>false, "vacio"=>true);
				}
				
				
			}catch(Exception $ex){
		      	             
				$cn->query('ROLLBACK');	
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');			
			}			
		
		}else{
			return array("error"=>true,'detalle'=>'mysql');	
		}
	}



	function fun_select_tabla_compuesta($nombre_tabla,$campos_get,$condicion,$nivel_condicion,$orderby,$inicio,$numero,$estructura,$nivel_limitacion){
		
		$cn = $this->conexion();
		
		 if($cn!='no_conexion'){
		 	
			$rs = $cn->query('BEGIN');
			
			try{

				$limitacion='';
				if($numero>0){
					$limitacion=' limit '.$inicio.','.$numero;
				}

				$limitacion_2=$limitacion;

				switch($nivel_limitacion){
					case 1:
						$limitacion_2='';
					break;
					case 2:
						$limitacion='';						
					break;
				}


				$condicion_2=$condicion;
						
				switch($nivel_condicion){
					case 1:

					if($condicion==''){
						$condicion='1';
					}
						$condicion_2='1';

					break;
					case 2:
						if($condicion_2==''){
							$condicion_2='1';
						}
						$condicion='1';
						
					break;
				}
				
				if(isset($orderby) && $orderby !=''){
					$orderby=' order by '.$orderby;
				}

			$respuesta=array();

			$id_elemento=-1;
			$array_fotos=array();

			$campos_array=array();


			$tabla_compuesta_parte2='';


			foreach ( $estructura as $campo=>$valores){

				if($valores['tipo']=='id'){
					$id=$campo;
				}
			}

			$tabla_compuesta=$nombre_tabla.' JOIN (select '.$nombre_tabla.'.'.$id.' from '.$nombre_tabla.' where '.$condicion.' order by '.$nombre_tabla.'.'.$id.' '.$limitacion.') tabla ON '.$nombre_tabla.'.'.$id.'=tabla.'.$id;



			foreach ( $estructura as $campo=>$valores){


				 if($valores['tipo']=='array' && !isset($valores['tabla_rel'])){

					$campos_array[]=$campo;


					foreach ( $valores['estructura'] as $subcampo=>$atributos_array){			

						if($atributos_array['tipo']=='id_rel'){
							$campo_id_array=$subcampo;
							$campo_rel_padre=$atributos_array['campo_padre'];
						}

					}

					//se verifica primero si hay una tabla rel aparte que se va a relacionar con esta tabla

					$sub_union_tablas_rel=$valores['tabla'];
					foreach ($estructura as $campo_2 => $valores_2) {

						 if($valores_2['tipo']=='array' && isset($valores_2['tabla_rel'])){
						 	if($valores_2['tabla_rel']==$valores['tabla']){


								if($valores_2['tipo_union']=='fuerte'){
									$subjoin='JOIN';
								}else{
									$subjoin='LEFT JOIN';
								}


								foreach ( $valores_2['estructura'] as $subcampo=>$atributos_array){			

									if($atributos_array['tipo']=='id_rel'){
										$subcampo_id_array=$subcampo;
										$subcampo_rel_padre=$atributos_array['campo_padre'];
									}

								}

						 		$sub_union_tablas_rel='('.$valores['tabla'].' '.$subjoin.' '.$valores_2['tabla'].' ON '.$valores['tabla'].'.'.$subcampo_rel_padre.'='.$valores_2['tabla'].'.'.$subcampo_id_array.')';
						 	}
						 	//esto significa que se ha encontrado en la estructura una tabla tipo rel que se va a relacionar con la tabla actual
						 }
					}


					$tabla_compuesta_parte2=$sub_union_tablas_rel.' ON '.$nombre_tabla.'.'.$campo_rel_padre.'='.$valores['tabla'].'.'.$campo_id_array;



					if($valores['tipo_union']=='fuerte'){
						$join='JOIN';
					}else{
						$join='LEFT JOIN';
					}


					$tabla_compuesta='('.$tabla_compuesta.') '.$join.' '.$tabla_compuesta_parte2;



				}
				
			}




				


		        $sql='select '.$campos_get.' from '.$tabla_compuesta.' where '.$condicion_2.' '.$orderby.' '.$limitacion_2;

				$rs = $cn->query($sql);


				while($fila=$rs->fetch_array(MYSQLI_ASSOC)){
					foreach($estructura as $campo=>$valores){
						if($valores['tipo']!='array'){

						$respuesta[$fila[$id]][$campo]=$fila[$campo];

						}						
					}

				



					foreach($campos_array as $nombre){

						if($estructura[$nombre]['union_plana']){
							//Al hacer una especificación de que la suma de las tablas ha generado una union plana, significa que se van a colocar en el mismo nivel todos los campos recogidos en la consulta, de este modo no se crean estructuras jerárquicas y es posible acceder a esos valores desde JAVASCRIPT de una forma directa
							foreach($estructura[$nombre]['estructura'] as $campo=>$valores){
	  							
	  							if($valores['alias']){
	  								//pero para evitar conflictos, al definir el campo en la respuesta, se debe tomar el valor alias que se ha definido para el cmapo de la tabla complementaria
									$respuesta[$fila[$id]][$valores['alias']]=$fila[$valores['alias']];
	  							}else{

									$respuesta[$fila[$id]][$campo]=$fila[$campo];
	  							}
								
							}

						}else{
							//muy a diferencia de la anterior ejecución, en este caso, se cera una nueva estructura array, para poder ingresar ahí valores que se han obtenido en la consulta, estos valores se obtienen usando el alias en la FILA que se está consultando en esta iteración, sin embargo, los valores se guardarán en campos dentro del nuevo array, cuyos nombres son los mismos que los definidos en la estructura de este array, o mejor dicho, los nombres originales de los campos de la tabla complementaria
							if(!$respuesta[$fila[$id]][$nombre]){
								$respuesta[$fila[$id]][$nombre]=array();		

							}

							//$contador=count($respuesta[$fila[$id]][$nombre]);
							
							$alias_id; //esto reemplaza al parche
							foreach($estructura[$nombre]['estructura'] as $campo=>$valores){
	  							
	  							if($valores['tipo']=='id'){
	  								if($valores['alias']){
	  									$alias_id=$valores['alias'];
	  								}else{
	  									$alias_id=$campo;
	  								}
	  								break;
	  							}
								
							}

							if($fila[$alias_id]){

								$respuesta[$fila[$id]][$nombre][$fila[$alias_id]]=array();
							
								
								foreach($estructura[$nombre]['estructura'] as $campo=>$valores){
		  							
		  							if($valores['alias']){

									$respuesta[$fila[$id]][$nombre][$fila[$alias_id]][$valores['alias']]=$fila[$valores['alias']];
		  							}else{

									$respuesta[$fila[$id]][$nombre][$fila[$alias_id]][$campo]=$fila[$campo];
		  							}
									
								}


								//ahora vamos a agregar los valores de los campos relacionados con los campos que pertenecen al array de subvalores, en este caso etiquetas
								foreach ($estructura as $campo_2 => $valores_2) {

									 if($valores_2['tipo']=='array' && isset($valores_2['tabla_rel'])){
									 	if($valores_2['tabla_rel']==$estructura[$nombre]['tabla']){


											foreach($valores_2['estructura'] as $campo=>$valores){
					  							
					  							if($valores['alias']){

													$respuesta[$fila[$id]][$nombre][$fila[$alias_id]][$valores['alias']]=$fila[$valores['alias']];
					  							}else{

													$respuesta[$fila[$id]][$nombre][$fila[$alias_id]][$campo]=$fila[$campo];
					  							}
												
											}
									 	}
									 	//esto significa que se ha encontrado en la estructura una tabla tipo rel que se va a relacionar con la tabla actual
									 }
								}

								
							}	
						}
						

					}

				}


/*
	
					if($id_elemento==$fila->id){
						
						if($fila->id_foto){
							$respuesta[$id_elemento]['fotos'][]=array('id'=> $fila->id,'imagen'=>$fila->imagen );
						}

					}else{
						$array_fotos=array();
						$id_aviso=$fila->id_aviso;

						$contador++;
 
						$respuesta[$contador]['id']=$id_aviso;
						$respuesta[$contador]['id_text']=$fila->id_text;
						$respuesta[$contador]['titulo']=$fila->titulo;
						$respuesta[$contador]['descripcion']=$fila->descripcion;
						$respuesta[$contador]['direccion']=$fila->direccion;
						$respuesta[$contador]['img_previa']=$fila->img_previa;
						
						$respuesta[$contador]['fotos']=array();

						
						
						if($fila->id_foto){
							$respuesta[$contador]['fotos'][]=array('id_foto'=> $fila->id_foto,'id_img_foto'=>$fila->id_img_foto ,'ext_img_foto'=>$fila->ext_img_foto);
						}

					}
*/
							
				$cn->query('COMMIT');

				mysqli_close($cn);
				
				if( $respuesta){
					return $respuesta;

				}else{

					return array("error"=>false, "vacio"=>true);
				}
				
				
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