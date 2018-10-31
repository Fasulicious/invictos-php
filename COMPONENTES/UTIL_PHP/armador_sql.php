<?php

require_once("../../UTIL_PHP/verificacion.php");

	function fun_armar_campos_insert($elemento_estructura_insert,$valores,$archivos){

		$info_error=array("error"=>false);	
		$data_elemento=array();
		$campo_id='';

		foreach($archivos as $campo=>$archivo){
			if($elemento_estructura_insert[$campo]['tipo']=='multi_imagen'){


				if($elemento_estructura_insert[$campo]['obligatorio'] && $archivo['error'][0] !== UPLOAD_ERR_OK){

					if($archivo['error']==4){
						
						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'vacio');

					}else{

						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'error_subida');

					}
					break;

				}


			}else{

				if($elemento_estructura_insert[$campo]['obligatorio'] && $archivo['error'] !== UPLOAD_ERR_OK){

					if($archivo['error']==4){
						
						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'vacio');

					}else{

						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'error_subida');

					}
					break;

				}

			}

			

			
		}

		if($info_error['error']){

			return $info_error;
		}else{

			$campos='';
			$vals='';




		foreach ( $elemento_estructura_insert as $campo=>$atributos){


				if($atributos['tipo']=='id' ){
					$campo_id=$campo;
					$tipo_id=$atributos['subtipo'];
				}

				if(  $atributos['tipo']!='archivo' &&  $atributos['tipo']!='imagen' &&  $atributos['tipo']!='multi_imagen' &&  $atributos['tipo']!='multi_campo'){
//$atributos['tipo']!='id' &&
					$data_elemento[$campo]=htmlentities(stripslashes($valores[$campo]), ENT_QUOTES, 'UTF-8');
					$bandera=false;


				if(!is_bool($atributos['query']) || $atributos['query']===true){
					
					if($atributos['obligatorio']){
						if(is_string($atributos['sesion'])){

							if($campos==''){
								$campos.=$campo;
							}else{
								$campos.=','.$campo;
							}

							$bandera=true;

							//si no es falso, debemos usar la sesion
							$valores[$campo]=$_SESSION[$atributos['sesion']];


						}else{


							if(!fun_esblanco($valores[$campo]) || (($atributos['tipo']=='int' || $atributos['tipo']=='bool'  || $atributos['tipo']=='float') && $valores[$campo]==0 )  || ($atributos['tipo']=='date' && $atributos['now']) ){

								$bandera=true;
								if($campos==''){
									$campos.=$campo;
								}else{
									$campos.=','.$campo;
								}
							}else{
								//si no admite vacio y ademas esta en blanco, entonces debemos avisar que hay error	
								
								$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'vacio');

							}


						}

					}else{

						if(!fun_esblanco($valores[$campo]) || (($atributos['tipo']=='int' || $atributos['tipo']=='float') && $valores[$campo]==0 ) || ($atributos['tipo']=='date' && $atributos['now']) || $atributos['tipo']=='str' ){

							$bandera=true;
							if($campos==''){
								$campos.=$campo;
							}else{
								$campos.=','.$campo;
							}
						}
					}


					if($info_error['error']){
						break;
					}else{

						if($bandera){
							

							switch($atributos['tipo']){

								case 'id': 
									switch($atributos['subtipo']){
										case 'auto': 
										break;
										case 'str': 

											if(is_string($valores[$campo])){
												if($vals==''){
													$vals.='"'.htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8').'"';
												}else{
													$vals.=',"'.htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8').'"';
												}
											}else{

												
												$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
											}

										break;
										case 'int':

											if(is_string($valores[$campo])){
												if($vals==''){
													$vals.=$valores[$campo];
												}else{
													$vals.=','.$valores[$campo];
												}
											}else{																				
												$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
											}

									 	break;
									}
									
								break;
		 

								case 'str': 

									if(is_string($valores[$campo])){
										if(is_bool($atributos['tildes']) && $atributos['tildes']===false){
											if($vals==''){
												$vals.='"'.preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8')).'"';
											}else{
												$vals.=',"'.preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8')).'"';
											}

										}else{			
											if($vals==''){
												$vals.='"'.htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8').'"';
											}else{
												$vals.=',"'.htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8').'"';
											}
										}
									}else{
										
										
										$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
									}
								break;
		 
								case 'bool': 


									if(strtolower($valores[$campo])=='true' || strtolower($valores[$campo])=='false' || strtolower($valores[$campo])=='1' || strtolower($valores[$campo])=='0'){
									
									
										if($vals==''){
											$vals.=$valores[$campo];
										}else{
											$vals.=','.$valores[$campo];
										}	
									}else{
										
										$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
									}
								break;
								case 'int': 

									if(is_numeric($valores[$campo])){
										$valores[$campo]=(int)$valores[$campo];
										if($vals==''){
											$vals.=$valores[$campo];
										}else{
											$vals.=','.$valores[$campo];
										}	
									}else{
										
										$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
									}
								break;


								case 'float': 
								
									if(is_numeric($valores[$campo])){
										$valores[$campo]=(float)$valores[$campo];
										if($vals==''){
											$vals.=$valores[$campo];
										}else{
											$vals.=','.$valores[$campo];
										}
									}else{
										
										$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
									}
								
								break;

								case 'date':
								
									if($valores[$campo]=='now' || $atributos['now']){
										if($vals==''){
											$vals.='utc_timestamp()';
										}else{
											$vals.=',utc_timestamp()';
										}
									}else{
										if(valida_string_tipo_fecha_hora($valores[$campo])){
											if($vals==''){
												$vals.='"'.$valores[$campo].'"';
											}else{
												$vals.=',"'.$valores[$campo].'"';
											}
										}else{
											
											$info_error=array("error"=>true, "campo"=>$campo,"detalle"=>$atributos['tipo']);	
										}
									}
								break;
							}
				
						}
						if($info_error['error']){
							break;
						}

					}
				}
			}

		}


			if($info_error['error']){
				return $info_error;
			}else{
				return array("error"=>false, "campos"=>$campos,"valores"=>$vals,"campo_id"=>$campo_id,"tipo_id"=>$tipo_id,"data_elemento"=>$data_elemento);

			}
		
		}
	}






	function fun_armar_campos_update($elemento_estructura_update,$valores,$archivos){

		$info_error=array("error"=>false);	
		$data_elemento=array();
		$campo_id='';



		foreach($archivos as $campo=>$archivo){
			if($elemento_estructura_update[$campo]['tipo']=='multi_imagen'){


				if($elemento_estructura_update[$campo]['obligatorio'] && $archivo['error'][0] !== UPLOAD_ERR_OK){

					if($archivo['error']==4){
						
						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'vacio');

					}else{

						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'error_subida');

					}
					break;

				}


			}else{

				if($elemento_estructura_update[$campo]['obligatorio'] && $archivo['error'] !== UPLOAD_ERR_OK){

					if($archivo['error']==4){
						
						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'vacio');

					}else{

						$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'error_subida');

					}
					break;

				}

			}
		}



		if($info_error['error']){

			return $info_error;

		}else{

			$campos='';
			$set='';

		



		foreach ( $elemento_estructura_update as $campo=>$atributos){


				if($atributos['tipo']=='id' ){
					$campo_id=$campo;
					$tipo_id=$atributos['subtipo'];
				}


			if( $atributos['tipo']!='archivo' &&  $atributos['tipo']!='imagen' &&  $atributos['tipo']!='multi_imagen' &&  $atributos['tipo']!='multi_campo'){
//$atributos['tipo']!='id'  && 
								
				$data_elemento[$campo]=htmlentities(stripslashes($valores[$campo]), ENT_QUOTES, 'UTF-8');
				$bandera=false;

				if(!is_bool($atributos['query']) || $atributos['query']===true){

				if($atributos['obligatorio']){

					if(is_string($atributos['sesion'])){

						

						$bandera=true;

						//si no es falso, debemos usar la sesion
						$valores[$campo]=$_SESSION[$atributos['sesion']];


					}else{

						if(!fun_esblanco($valores[$campo]) || (($atributos['tipo']=='int' || $atributos['tipo']=='float' || $atributos['tipo']=='bool') && $valores[$campo]==0 ) || ($atributos['tipo']=='date' && $atributos['now']) ){

							$bandera=true;
							
						}else{
							//si no admite vacio y ademas esta en blanco, entonces debemos avisar que hay error	
											
							$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>'vacio');

						}


					}

				}else{

					if(!fun_esblanco($valores[$campo]) || (($atributos['tipo']=='int' || $atributos['tipo']=='float') && $valores[$campo]==0 ) || ($atributos['tipo']=='date' && $atributos['now']) || $atributos['tipo']=='str' || $atributos['tipo']=='correo' ){

						$bandera=true;
					
					}
				}




				if($info_error['error']){
					break;
				}else{

				if($bandera){
					

					switch($atributos['tipo']){

						case 'id': 
							if($atributos['editable']){

								switch($atributos['subtipo']){
									case 'auto': 
									break;
									case 'str': 

										if(is_string($valores[$campo])){
											if($set==''){
												$set.=$campo.'="'.htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8').'"';
											}else{
												$set.=','.$campo.'="'.htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8').'"';
											}
										}else{
											

												$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);

										}

									break;
									case 'int':

											
										if(is_numeric($valores[$campo])){
											$valores[$campo]=(int)$valores[$campo];
											if($set==''){
												$set.=$campo.'='.$valores[$campo];
											}else{
												$set.=','.$campo.'='.$valores[$campo];
											}	
										}else{
											
											$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
										}

								 	break;

								}

							}
							
						break;



						case 'str': 
						
							if($campo=='descripcion'){
								/*echo ' *** '.$valores[$campo].'  //  '.utf8_decode($valores[$campo]).'  //  '.htmlentities(utf8_decode($valores[$campo]), ENT_QUOTES, 'UTF-8').' *--* '.htmlentities($valores[$campo], ENT_COMPAT, 'UTF-8').'  *--* ';*/
							}

							if(is_string($valores[$campo])){
							
								if(is_bool($atributos['convertir_html']) && $atributos['convertir_html']===false){
										$valor_dato=$valores[$campo];

									}else{
										$valor_dato=htmlentities($valores[$campo], ENT_QUOTES, 'UTF-8');

									}

								if(is_bool($atributos['tildes']) && $atributos['tildes']===false){

									if($set==''){
										$set.=$campo.'="'.preg_replace("/&([a-z])[a-z]+;/i", "$1", $valor_dato).'"';
									}else{
										$set.=','.$campo.'="'.preg_replace("/&([a-z])[a-z]+;/i", "$1", $valor_dato).'"';
									}

								}else{			
									if($set==''){
										$set.=$campo.'="'.$valor_dato.'"';
									}else{
										$set.=','.$campo.'="'.$valor_dato.'"';
									}
								}


							}else{
								if(is_string($atributos['default'])){

									if($set==''){
										$set.=$campo.'="'.htmlentities($atributos['default'], ENT_QUOTES, 'UTF-8').'"';
									}else{
										$set.=','.$campo.'="'.htmlentities($atributos['default'], ENT_QUOTES, 'UTF-8').'"';
									}

								}else{

									$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);

								}
								
							}


						break;

						case 'blob': 

							if(is_string($valores[$campo])){
								if($set==''){
									$set.=$campo.'=aes_encrypt("'.$valores[$campo].'","'.$atributos['key_encrypt'].'")';
								}else{
									$set.=','.$campo.'=aes_encrypt("'.$valores[$campo].'","'.$atributos['key_encrypt'].'")';
								}
							}else{
								
								
								$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
							}
						break;

						case 'bool': 



							if(strtolower($valores[$campo])=='true' || strtolower($valores[$campo])=='false'|| strtolower($valores[$campo])=='1' || strtolower($valores[$campo])=='0'){
							
							
								if($set==''){
									$set.=$campo.'='.$valores[$campo];
								}else{
									$set.=','.$campo.'='.$valores[$campo];
								}	
							}else{
								
								$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
							}
						break;

						case 'int': 

							if(is_numeric($valores[$campo])){
								$valores[$campo]=(int)$valores[$campo];
								if($set==''){
									$set.=$campo.'='.$valores[$campo];
								}else{
									$set.=','.$campo.'='.$valores[$campo];
								}	
							}else{
								
								$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
							}
						break;

						case 'correo':
					
							if(valida_string_correo($valores[$campo])){
								if($set==''){
										$set.=$campo.'="'.$valores[$campo].'"';
									}else{
										$set.=','.$campo.'="'.$valores[$campo].'"';
									}
								}else{
									
									$info_error=array("error"=>true, "campo"=>$campo,"detalle"=>$atributos['tipo']);	
								}				
							break;	


						case 'float': 
						
							if(is_numeric($valores[$campo])){
								$valores[$campo]=(float)$valores[$campo];
								if($set==''){
									$set.=$campo.'='.$valores[$campo];
								}else{
									$set.=','.$campo.'='.$valores[$campo];
								}
							}else{
								
								$info_error=array("error"=>true,"campo"=>$campo,"detalle"=>$atributos['tipo']);
							}
						
						break;

						case 'date':
						
							if($valores[$campo]=='now' || $atributos['now']){
								if($set==''){
									$set.=$campo.'=utc_timestamp()';
								}else{
									$set.=','.$campo.'=utc_timestamp()';
								}
							}else{
								if(valida_string_tipo_fecha_hora($valores[$campo])){
									if($set==''){
										$set.=$campo.'="'.$valores[$campo].'"';
									}else{
										$set.=','.$campo.'="'.$valores[$campo].'"';
									}
								}else{
									
									$info_error=array("error"=>true, "campo"=>$campo,"detalle"=>$atributos['tipo']);	
								}
							}
						break;
					}
		
				}
					if($info_error['error']){
						break;
					}

				}
			}

		}




		}

			if($info_error['error']){
				return $info_error;
			}else{
				return array("error"=>false,"set"=>$set,"campo_id"=>$campo_id,"tipo_id"=>$tipo_id,"data_elemento"=>$data_elemento);

			}	
		}
	}
	



	function fun_obtener_campo_id($elemento){

		foreach ( $elemento->estructura_insert as $campo=>$atributos){

			if($atributos['tipo']=='id' ){
				$campo_id=$campo;
				$tipo_id=$atributos['subtipo'];
			}
		}
		return array("campo_id"=>$campo_id,"tipo_id"=>$tipo_id);

	}

	function fun_armar_campos_select($elemento,$compuesto){

		
		$campos='';
		$campos2='';
		
		$info_error=array("error"=>false);	

		$campo_id='';

		$tablas_alias=array(0=>'a',1=>'b',2=>'c',3=>'d');

		if($compuesto){





			foreach ( $elemento->estructura_select as $campo=>$atributos){

				if($atributos['tipo']=='id'){

					$campo_id=$campo;
				}

				switch($atributos['tipo']){

					case 'datetime':

						if($atributos['subtipo']=='fecha'){


							if($campos==''){
								$campos.='date('.$elemento->nombre_tabla.'.'.$campo.') as '.$campo;
							}else{
								$campos.=',date('.$elemento->nombre_tabla.'.'.$campo.') as '.$campo;
							}

						}else{

							if($atributos['subtipo']=='hora'){

								if($campos==''){
									$campos.='hour('.$elemento->nombre_tabla.'.'.$campo.') as '.$campo;
								}else{
									$campos.=',hour('.$elemento->nombre_tabla.'.'.$campo.') as '.$campo;
								}

							}else{
								
								if($campos==''){
									$campos.=$elemento->nombre_tabla.'.'.$campo;
								}else{
									$campos.=','.$elemento->nombre_tabla.'.'.$campo;
								}

							}

						}

					break;
					case 'blob':

						if($campos==''){
							$campos.='aes_decrypt('.$elemento->nombre_tabla.'.'.$campo.',"'.$atributos['key_encrypt'].'") as '.$campo;
						}else{
							$campos.=',aes_decrypt('.$elemento->nombre_tabla.'.'.$campo.',"'.$atributos['key_encrypt'].'") as '.$campo;
						}

					break;
					case 'array':		

						foreach ( $atributos['estructura'] as $campo_array=>$atributos_array){			

							if($atributos_array['tipo']=='id_rel'){
								$campo_id_array=$campo_array;
							}
							if($atributos_array['alias']){

								$campos2.=','.$atributos['tabla'].'.'.$campo_array.' as '.$atributos_array['alias'];
							}else{

								$campos2.=','.$atributos['tabla'].'.'.$campo_array;
							}
							
						}

						$tabla_compuesta=$tabla_compuesta.' '.$atributos['tabla'].' ON '.$elemento->nombre_tabla.'.'.$campo_id.'='.$atributos['tabla'].'.'.$campo_id_array;
					
					break;
					default:

						if($campos==''){
							if($atributos['alias']){
								$campos.=$elemento->nombre_tabla.'.'.$campo.' as '.$atributos['alias'];

							}else{
								$campos.=$elemento->nombre_tabla.'.'.$campo;

							}
						}else{

							if($atributos['alias']){
								$campos.=','.$elemento->nombre_tabla.'.'.$campo.' as '.$atributos['alias'];

							}else{
								$campos.=','.$elemento->nombre_tabla.'.'.$campo;
							}
						}


				}
				
			}

			$campos=$campos.$campos2;




			return array("error"=>false, "campos"=>$campos, "campo_id"=>$campo_id);


		}else{


			foreach ( $elemento->estructura_select as $campo=>$atributos){

				if($atributos['tipo']=='id'){

					$campo_id=$campo;
				}

				switch($atributos['tipo']){

					case 'datetime':

						if($atributos['subtipo']=='fecha'){


							if($campos==''){
								$campos.='date('.$campo.') as '.$campo;
							}else{
								$campos.=',date('.$campo.') as '.$campo;
							}

						}else{

							if($atributos['subtipo']=='hora'){

								if($campos==''){
									$campos.='hour('.$campo.') as '.$campo;
								}else{
									$campos.=',hour('.$campo.') as '.$campo;
								}

							}else{
								
								if($campos==''){
									$campos.=$campo;
								}else{
									$campos.=','.$campo;
								}

							}

						}

					break;
					case 'blob':

						if($campos==''){
							$campos.='aes_decrypt('.$campo.',"'.$atributos['key_encrypt'].'") as '.$campo;
						}else{
							$campos.=',aes_decrypt('.$campo.',"'.$atributos['key_encrypt'].'") as '.$campo;
						}

					break;

					default:

						if($campos==''){
							if($atributos['alias']){
								$campos.=$campo.' as '.$atributos['alias'];

							}else{
								$campos.=$campo;

							}
						}else{

							if($atributos['alias']){
								$campos.=','.$campo.' as '.$atributos['alias'];

							}else{
								$campos.=','.$campo;
							}
						}

				}
				
			}
			return array("error"=>false, "campos"=>$campos, "campo_id"=>$campo_id);


		}




	}


	
?>