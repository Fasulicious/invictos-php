<?php
session_start();


require_once("../../UTIL_PHP/variables_globales.php");
require_once("../../UTIL_PHP/armador_sql.php");

require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOGestor.php");
require_once("config.php");



$elemento=$_POST['elemento'];
$imagen=$_POST['hay_imagen'];
unset($_POST['hay_imagen']);
unset($_POST['elemento']);


$partes_sql=fun_armar_campos_insert($GL_ELEMENTOS[$elemento]->estructura_insert,$_POST,$_FILES);


//ahora revisaremos si hay alguna falta o error en los elementos de tipo multicampo
	

if($partes_sql['error']){
	echo json_encode($partes_sql);
}else{


	$data_elemento = new ArrayObject($partes_sql['data_elemento']);

	$DAOGestor=new DAOGestor();

	$cn;
	$resultado_cn=$DAOGestor->fun_conectar_a_base_de_datos($cn);
	$cn=$resultado_cn['conexion'];

	if(!$resultado_cn['error']){


	$resultado=$DAOGestor->fun_insertar_elemento_bd($cn,$GL_ELEMENTOS[$elemento]->nombre_tabla,$partes_sql['campos'],$partes_sql['valores']);
	$cn=$resultado['conexion'];

	if(!$resultado['error']){

	
		if(!isset($resultado['id_insert']) || $resultado['id_insert']==0){
			//esto se coloca para los casos en que el id insertado no es un AUTO INCREMENT, entonces el resultado no viene con un valor seteado en el campo id_insert, por lo que hay que copiar el valor que viene desde el POST
			$resultado['id_insert']=$_POST[$partes_sql['campo_id']];
		}


			foreach($GL_ELEMENTOS[$elemento]->estructura_insert as $nombre_campo=>$atributos){


				switch ($atributos['tipo']) {

					case 'multi_campo':

/*						$array_indices_fotos_ignoradas=array();
						if($_POST['fotos_ignoradas']!=''){
							$array_indices_fotos_ignoradas=explode(' ',$_POST['fotos_ignoradas']);

						}
*/		
						$sub_estructura=$atributos['estructura'];

						$campo_rel_es_id_padre=false; //si esta variable es true, significa que debemos sacar el valor para el campo rel de la subtabla desde la variable id_insert
						$campo_rel_post=false; //esta variable va a guardar el nombre del campo POST de donde debemos sacar la info para el campo rel de la subtabla
						//
						$nombre_campo_rel='';
						foreach($sub_estructura as $subcampo=>$sub_valores){
							if(gettype($sub_valores['campo_relacion'])=='string'){
								$nombre_campo_rel=$subcampo;
								//esto significa que el campo relacion esta seteado, entonces es un campo que debe obtener su informacion de los valores padre
								if($sub_valores['campo_relacion']==$partes_sql['campo_id']){
									$campo_rel_es_id_padre=true;
								}else{
									$campo_rel_post=$sub_valores['campo_relacion'];
								}
								break;
							}
						}
						$contador=0;

						$data_elemento[$nombre_campo]=array();


						foreach($_POST[$nombre_campo] as $obj_multicampo){
							$subarchivos=array();

							if($nombre_campo_rel!=''){
								//con esto nos aseguramos que vamos a llenar un campo relacionado
								if($campo_rel_es_id_padre){
									$obj_multicampo[$nombre_campo_rel]=$resultado['id_insert'];
									
								}else{
									$obj_multicampo[$nombre_campo_rel]=$_POST[$campo_rel_post];
								}
							}

							$sub_partes_sql=fun_armar_campos_insert($sub_estructura,$obj_multicampo,$subarchivos);
							if($sub_partes_sql['error']){

								//$condicion_eliminar=$partes_sql['campo_id'].'='.$resultado['id_insert'];

								//$subresultado=$DAOGestor->fun_delete_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$condicion_eliminar);
								
								$partes_sql=array('error'=>$sub_partes_sql['error'], 'campo'=>$nombre_campo,'subcampo'=>$sub_partes_sql['campo'],'indice'=>$contador,'detalle'=>$sub_partes_sql['detalle']);
								break;
								
							}else{

								$subresultado=$DAOGestor->fun_insertar_elemento_bd($cn,$atributos['tabla_relacionada'], $sub_partes_sql['campos'], $sub_partes_sql['valores']);


								$data_elemento[$nombre_campo][$subresultado['id_insert']]=new ArrayObject($sub_partes_sql['data_elemento']);


								$data_elemento[$nombre_campo][$subresultado['id_insert']][$sub_partes_sql['campo_id']]=$subresultado['id_insert'];

								$cn=$subresultado['conexion'];
								
								if($subresultado['error']){
									break;
								}
							}

							$contador++;

						}

					break;
				}
				if($sub_partes_sql['error'] || $subresultado['error']){
					break;
				}
			}

	if($subresultado['error']){

		$DAOGestor->fun_cerrar_base_de_datos($subresultado['error'],$cn);
		echo json_encode($subresultado);

	}else{


		if($partes_sql['error']){
			$DAOGestor->fun_cerrar_base_de_datos($partes_sql['error'],$cn);
			echo json_encode($partes_sql);
		}else{

			foreach($GL_ELEMENTOS[$elemento]->estructura_insert as $nombre_campo=>$atributos){

				switch ($atributos['tipo']) {
					case 'imagen':
						
						if($_FILES[$nombre_campo]['error'][0]==UPLOAD_ERR_OK){
						
										
							$archivo = new ArrayObject($_FILES[$nombre_campo]);
							$tipo_archivo = $archivo['type']; 

							$partes=explode("/",$tipo_archivo);

							$extension_original=$partes[1];
							$extension=$partes[1];

					   		if($extension=='gif'){
					   			$ext='jpeg';
					   		}else{		   			
					   			$ext=$extension;
					   		}
														
							$uploaddir = $atributos['dir'];						
							$nombre_img=$resultado['id_insert'].'_'.mt_rand(10000,20000);


							$valores_tam=array();

							foreach($atributos['detalles'] as $tipo=>$detalle){

								$valores_tam[$tipo]=array();
								$valores_tam[$tipo]['tam_ancho']=$detalle['ancho'];
								$valores_tam[$tipo]['tam_alto']=$detalle['alto'];
								$valores_tam[$tipo]['directorio']=$uploaddir.$detalle['dir'].'/';
								$valores_tam[$tipo]['nombre_final']=$nombre_img.".".$ext;
								$valores_tam[$tipo]['nombre_inicial']=$nombre_img.".".$extension;
							}


	/*
							$valores_tam['movil']=array();
							$valores_tam['movil']['tam_ancho']=300;
							$valores_tam['movil']['tam_alto']=300;
							$valores_tam['movil']['directorio']=$uploaddir.'/VISTA_PREVIA/MOVIL/';
							$valores_tam['movil']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['movil']['nombre_inicial']=$nombre_img.".".$extension;

							$valores_tam['mini']=array();
							$valores_tam['mini']['tam_ancho']=150;
							$valores_tam['mini']['tam_alto']=150;
							$valores_tam['mini']['directorio']=$uploaddir.'/VISTA_PREVIA/MINI/';
							$valores_tam['mini']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['mini']['nombre_inicial']=$nombre_img.".".$extension;*/

							$respuesta_img='error_archivo';


							include("subir_img_temp.php");

							$data_elemento[$nombre_campo]=$nombre_img.'.'.$ext;

							if($respuesta_img!='error_archivo'){
								$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$nombre_campo.'="'.$nombre_img.'.'.$ext.'"',$partes_sql['campo_id'].'='.$resultado['id_insert']);
							}


						}else{

						}

				
						break;

					case 'multi_imagen':

						$array_indices_fotos_ignoradas=array();
						if($_POST['fotos_ignoradas']!=''){
							$array_indices_fotos_ignoradas=explode(' ',$_POST['fotos_ignoradas']);

						}


						$ind_file=0;

						$nombre_campo_ind=$nombre_campo.$ind_file;

						$indice_fotos=0;

						$data_elemento[$nombre_campo]=array();


						while($_FILES[$nombre_campo_ind] ){

							if($_FILES[$nombre_campo_ind]['error'][0]==UPLOAD_ERR_OK){

								for($i=0;$i<count($_FILES[$nombre_campo_ind]['name']);$i++){


									if (!in_array((int)$indice_fotos, $array_indices_fotos_ignoradas)) {
										
										$archivo=array();
										$archivo['name'] = $_FILES[$nombre_campo_ind]['name'][$i];
										$archivo['type'] = $_FILES[$nombre_campo_ind]['type'][$i];
										$archivo['tmp_name'] = $_FILES[$nombre_campo_ind]['tmp_name'][$i];
										$archivo['error'] = $_FILES[$nombre_campo_ind]['error'][$i];
										$archivo['size'] = $_FILES[$nombre_campo_ind]['size'][$i];


										$tipo_archivo = $archivo['type']; 


										$partes=explode("/",$tipo_archivo);

										$extension_original=$partes[1];
										$extension=$partes[1];

								   		if($extension=='gif'){
								   			$ext='jpeg';
								   		}else{		   			
								   			$ext=$extension;
								   		}
										
											
										$uploaddir = $atributos['dir'];	
										
										do{
											
											$nombre_img=$resultado['id_insert'].'_'.mt_rand(10000,20000);
											
										}while(file_exists($uploaddir.$nombre_img.".".$ext));
												
						
						


										$valores_tam=array();

							 			foreach($atributos['detalles'] as $tipo=>$detalle){
			/*
											if(file_exists($uploaddir.$detalle['dir'].'/'.$_POST['eliminar-imagen-'.$nombre_campo])){
												unlink($uploaddir.$detalle['dir'].'/'.$_POST['eliminar-imagen-'.$nombre_campo]);
											}*/
											$valores_tam[$tipo]=array();
											$valores_tam[$tipo]['tam_ancho']=$detalle['ancho'];
											$valores_tam[$tipo]['tam_alto']=$detalle['alto'];
											$valores_tam[$tipo]['directorio']=$uploaddir.$detalle['dir'].'/';
											$valores_tam[$tipo]['nombre_final']=$nombre_img.".".$ext;
											$valores_tam[$tipo]['nombre_inicial']=$nombre_img.".".$extension;

										}


										$respuesta_img='error_archivo';


										include("subir_img_temp.php");

										if($respuesta_img!='error_archivo'){

												$rs=$DAOGestor->fun_insert_elemento($atributos['tabla_relacionada'],'imagen,id_padre','"'.$nombre_img.".".$ext.'",'.$resultado['id_insert']);


											$data_elemento[$nombre_campo][$rs['id_insert']]=array('id_foto'=>$rs['id_insert'],'ruta'=>$nombre_img.'.'.$ext);
											//$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,'id_img_logo="'.$nombre_img.'", ext_img_logo="'.$ext.'"','id='.$resultado['id_insert']);
										}

					
									}
									$indice_fotos++;
								}




							}
							$ind_file++;
							$nombre_campo_ind=$nombre_campo.$ind_file;


						}
					break;


					case 'archivo':

						//$nombre_campo='id_pdf';

						if($_FILES[$nombre_campo]['error'] == UPLOAD_ERR_OK){
															
							$archivo = new ArrayObject($_FILES[$nombre_campo]);
								
							$uploaddir = $atributos['dir'];	
							$nombre_archivo=$resultado['id_insert'].'_'.mt_rand(10000,50000);
													
							$respuesta_archivo='error_archivo';

							include("subir_archivo.php");

							$data_elemento['nombre_pdf']=$archivo['name'];

							$data_elemento['id_pdf']=$nombre_archivo.'.pdf';

							if($respuesta_archivo!='error_archivo'){
								$respuesta_archivo=$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$atributos['campo_nombre'].'="'.$archivo['name'].'", '.$nombre_campo.'="'.$nombre_archivo.'.pdf"',$partes_sql['campo_id'].'='.$resultado['id_insert']);
							}

						}else{

							$data_elemento['nombre_pdf']='';
							$data_elemento['id_pdf']='';
						}



						break;
					



				}




			}

			

			$resultado['campo_id']=$partes_sql['campo_id'];
			$data_elemento[$partes_sql['campo_id']]=$resultado['id_insert'];
			$resultado['elemento']=$data_elemento;

			
			$DAOGestor->fun_cerrar_base_de_datos(false,$cn);

			echo json_encode($resultado);

		}
	}


	}else{

		$DAOGestor->fun_cerrar_base_de_datos(true,$cn);
		echo json_encode($resultado);
	}
	}else{

		$DAOGestor->fun_cerrar_base_de_datos(true,$cn);
		echo json_encode($resultado_cn);
	}
}





































?>

