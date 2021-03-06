<?php
session_start();


require_once("../../UTIL_PHP/variables_globales.php");
require_once("../../UTIL_PHP/armador_sql.php");

require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOGestor.php");
require_once("config.php");


$elemento=$_POST['elemento'];
$imagen=$_POST['hay_imagen'];
$id_elemento=$_POST['id_elemento'];

unset($_POST['hay_imagen']);
unset($_POST['elemento']);
unset($_POST['id_elemento']);


$aux_files=array();

$partes_sql=fun_armar_campos_update($GL_ELEMENTOS[$elemento]->estructura_update,$_POST,$aux_files);




if($partes_sql['error']){

	echo json_encode($partes_sql);
}else{

	$DAOGestor=new DAOGestor();


	switch($elemento){

		case 'aviso':
			$condicion='id='.$id_elemento.' and id_usuario='.$_SESSION['id'];


			$resultado=$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$partes_sql['set'],$condicion);





					$array_indices_fotos_eliminadas=explode(' ',$_POST['fotos_eliminadas']);


					foreach($array_indices_fotos_eliminadas as $id_foto){
						$DAOGestor->fun_delete_elemento('aviso_fotos','id='.$id_foto);
					}





			if(!$resultado['error']){

				if(isset($imagen)){

					$nombre_campo='imagen-imgprevia';

					if(isset($_FILES[$nombre_campo]['name']) && $_FILES[$nombre_campo]['name']!=''){
							
												
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
							
								
							$uploaddir = "../../../IMG/AVISOS/";						
							$nombre_img=$id_elemento.'_'.rand(10000,20000);

							$valores_tam=array();
							$valores_tam['web']=array();
							$valores_tam['web']['tam_ancho']=500;
							$valores_tam['web']['tam_alto']=500;
							$valores_tam['web']['directorio']=$uploaddir.'VISTA_PREVIA/WEB/';
							$valores_tam['web']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['web']['nombre_inicial']=$nombre_img.".".$extension;

							$valores_tam['movil']=array();
							$valores_tam['movil']['tam_ancho']=300;
							$valores_tam['movil']['tam_alto']=300;
							$valores_tam['movil']['directorio']=$uploaddir.'VISTA_PREVIA/MOVIL/';
							$valores_tam['movil']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['movil']['nombre_inicial']=$nombre_img.".".$extension;

							$valores_tam['mini']=array();
							$valores_tam['mini']['tam_ancho']=150;
							$valores_tam['mini']['tam_alto']=150;
							$valores_tam['mini']['directorio']=$uploaddir.'VISTA_PREVIA/MINI/';
							$valores_tam['mini']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['mini']['nombre_inicial']=$nombre_img.".".$extension;

							$respuesta_img='error_archivo';


							include("subir_img_temp.php");

						if($respuesta_img!='error_archivo'){
							$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,'img_previa="'.$nombre_img.'", img_previa_ext="'.$ext.'"',$condicion);
						}
					}else{

					}



					$array_indices_fotos_ignoradas=array();
					if($_POST['fotos_ignoradas']!=''){
						$array_indices_fotos_ignoradas=explode(' ',$_POST['fotos_ignoradas']);

					}




					$ind_file=0;

					$nombre_campo='imagenes'.$ind_file.'-fotos';

					$indice_fotos=0;

					while($_FILES[$nombre_campo] ){

						if($_FILES[$nombre_campo]['error'][0]==UPLOAD_ERR_OK){
						

							for($i=0;$i<count($_FILES[$nombre_campo]['name']);$i++){


								if (!in_array((int)$indice_fotos, $array_indices_fotos_ignoradas)) {
									    //esto verifica si el archivo que intentamos subir ha sido ignorado

										$archivo=array();
										$archivo['name'] = $_FILES[$nombre_campo]['name'][$i];
										$archivo['type'] = $_FILES[$nombre_campo]['type'][$i];
										$archivo['tmp_name'] = $_FILES[$nombre_campo]['tmp_name'][$i];
										$archivo['error'] = $_FILES[$nombre_campo]['error'][$i];
										$archivo['size'] = $_FILES[$nombre_campo]['size'][$i];

										$tipo_archivo = $archivo['type']; 

										$partes=explode("/",$tipo_archivo);

										$extension_original=$partes[1];
										$extension=$partes[1];

								   		if($extension=='gif'){
								   			$ext='jpeg';
								   		}else{		   			
								   			$ext=$extension;
								   		}
										
											
										$uploaddir = "../../../IMG/AVISOS/";	


										do{
											
											$nombre_img=mt_rand(10000,50000);
											
										}while(file_exists($uploaddir.$id_elemento.'_'.$nombre_img.".".$ext));
											


										$nombre_img=$id_elemento.'_'.$nombre_img;

										$valores_tam=array();
										$valores_tam['web']=array();
										$valores_tam['web']['tam_ancho']='original';
										$valores_tam['web']['tam_alto']='original';
										$valores_tam['web']['directorio']=$uploaddir.'FOTOS/WEB/';
										$valores_tam['web']['nombre_final']=$nombre_img.".".$ext;
										$valores_tam['web']['nombre_inicial']=$nombre_img.".".$extension;

										$valores_tam['movil']=array();
										$valores_tam['movil']['tam_ancho']=400;
										$valores_tam['movil']['tam_alto']=300;
										$valores_tam['movil']['directorio']=$uploaddir.'FOTOS/MOVIL/';
										$valores_tam['movil']['nombre_final']=$nombre_img.".".$ext;
										$valores_tam['movil']['nombre_inicial']=$nombre_img.".".$extension;

										$valores_tam['mini']=array();
										$valores_tam['mini']['tam_ancho']=100;
										$valores_tam['mini']['tam_alto']=100;
										$valores_tam['mini']['directorio']=$uploaddir.'FOTOS/MINI/';
										$valores_tam['mini']['nombre_final']=$nombre_img.".".$ext;
										$valores_tam['mini']['nombre_inicial']=$nombre_img.".".$extension;

										$respuesta_img='error_archivo';


										include("subir_img_temp.php");


										if($respuesta_img!='error_archivo'){


											$rs=$DAOGestor->fun_insert_elemento('aviso_fotos','id_img,ext_img,id_profesor','"'.$nombre_img.'","'.$ext.'",'.$id_elemento);

											//$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,'id_img_logo="'.$nombre_img.'", ext_img_logo="'.$ext.'"','id='.$resultado['id_insert']);
										}

									}

								$indice_fotos++;
								

				
							}



						}

						$ind_file++;
						$nombre_campo='imagenes'.$ind_file.'-fotos';

					}

					//
				}else{

				}
			
			}
		break;

		case 'usuario':


			$condicion='id='.$_SESSION['id'];


			$resultado=$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$partes_sql['set'],$condicion);



			if(!$resultado['error']){


				$_SESSION['nombre']=$_POST['nombre'];
				$_SESSION['presentacion']=$_POST['presentacion'];
				$_SESSION['firma']=$_POST['firma'];
				$_SESSION['profesion']=$_POST['profesion'];
				$_SESSION['enlace_youtube']=$_POST['video'];
				$_SESSION['moneda']=$_POST['moneda'];
				$_SESSION['costo']=$_POST['costo'];

				if(isset($imagen)){

					$nombre_campo='imagen-imgperfil';

					if(isset($_FILES[$nombre_campo]['name']) && $_FILES[$nombre_campo]['name']!=''){
					
									
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
						
							
						$uploaddir = "../../../IMG/USUARIOS/";						
						$nombre_img=$_SESSION['id'].'_'.mt_rand(10000,50000);

						$valores_tam=array();
						$valores_tam['web']=array();
						$valores_tam['web']['tam_ancho']=200;
						$valores_tam['web']['tam_alto']=200;
						$valores_tam['web']['directorio']=$uploaddir.'WEB/';
						$valores_tam['web']['nombre_final']=$nombre_img.".".$ext;
						$valores_tam['web']['nombre_inicial']=$nombre_img.".".$extension;

						$valores_tam['movil']=array();
						$valores_tam['movil']['tam_ancho']=100;
						$valores_tam['movil']['tam_alto']=100;
						$valores_tam['movil']['directorio']=$uploaddir.'MOVIL/';
						$valores_tam['movil']['nombre_final']=$nombre_img.".".$ext;
						$valores_tam['movil']['nombre_inicial']=$nombre_img.".".$extension;

						$valores_tam['mini']=array();
						$valores_tam['mini']['tam_ancho']=50;
						$valores_tam['mini']['tam_alto']=50;
						$valores_tam['mini']['directorio']=$uploaddir.'MINI/';
						$valores_tam['mini']['nombre_final']=$nombre_img.".".$ext;
						$valores_tam['mini']['nombre_inicial']=$nombre_img.".".$extension;
						
						$respuesta_img='error_archivo';
						
						include("subir_img_temp.php");
						
						
						if($respuesta_img!='error_archivo'){
							
							$_SESSION['id_img']=$nombre_img;
							$_SESSION['ext_img']=$ext;
							
							$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,'id_img="'.$nombre_img.'", ext_img="'.$ext.'"',$condicion);
						}
						
					}else{
						
					}
					//
				}else{

				}
			
			}


		break;


		case 'password':


			if($_POST['password_actual']==''){
				$resultado=array("error"=>true,"campo"=>'password_actual',"detalle"=>'vacio');
			}else{

				if($_POST['password']!=$_POST['password_nuevo_repite']){

					$resultado=array("error"=>true,"campo"=>'password_nuevo_repite',"detalle"=>'diferente');

				}else{

					$condicion='password=AES_ENCRYPT("'.$_POST['password_actual'].'","123")  and id="'.$_SESSION['id'].'"';

					$resultado=$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$partes_sql['set'],$condicion);


				}
			}



		break;





		case 'noticia':
			$condicion='id='.$id_elemento.' and id_usuario="'.$_SESSION['super_user'].'"';


			$resultado=$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$partes_sql['set'],$condicion);


			$array_indices_fotos_eliminadas=explode(' ',$_POST['fotos_eliminadas']);


			foreach($array_indices_fotos_eliminadas as $id_foto){
				$DAOGestor->fun_delete_elemento('noticias_fotos','id='.$id_foto);
			}




			if(!$resultado['error']){

				if(isset($imagen)){

					$nombre_campo='imagen-imgprevia';

					if(isset($_FILES[$nombre_campo]['name']) && $_FILES[$nombre_campo]['name']!=''){
							
												
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
							
								
							$uploaddir = "../../../IMG/NOTICIAS/";						
							$nombre_img=$id_elemento.'_'.rand(10000,20000);

							$valores_tam=array();
							$valores_tam['web']=array();
							$valores_tam['web']['tam_ancho']='original';
							$valores_tam['web']['tam_alto']='original';
							$valores_tam['web']['directorio']=$uploaddir.'FONDOS/WEB/';
							$valores_tam['web']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['web']['nombre_inicial']=$nombre_img.".".$extension;

							$valores_tam['movil']=array();
							$valores_tam['movil']['tam_ancho']=400;
							$valores_tam['movil']['tam_alto']=400;
							$valores_tam['movil']['directorio']=$uploaddir.'FONDOS/MOVIL/';
							$valores_tam['movil']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['movil']['nombre_inicial']=$nombre_img.".".$extension;

							$valores_tam['mini']=array();
							$valores_tam['mini']['tam_ancho']=150;
							$valores_tam['mini']['tam_alto']=150;
							$valores_tam['mini']['directorio']=$uploaddir.'FONDOS/MINI/';
							$valores_tam['mini']['nombre_final']=$nombre_img.".".$ext;
							$valores_tam['mini']['nombre_inicial']=$nombre_img.".".$extension;

							$respuesta_img='error_archivo';


							include("subir_img_temp.php");

						if($respuesta_img!='error_archivo'){
							$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,'id_img="'.$nombre_img.'", ext_img="'.$ext.'"',$condicion);
						}
					}else{

					}






					$array_indices_fotos_ignoradas=array();
					if($_POST['fotos_ignoradas']!=''){

						$array_indices_fotos_ignoradas=explode(' ',$_POST['fotos_ignoradas']);

					}



					$nombre_campo='imagen-fotos';
					if(isset($_FILES[$nombre_campo]['name']) && $_FILES[$nombre_campo]['name']!=''){
					

						for($i=0;$_FILES[$nombre_campo]['name'][$i];$i++){


								if (!in_array((int)$i, $array_indices_fotos_ignoradas)) {
								    //esto verifica si el archivo que intentamos subir ha sido ignorado

									$archivo=array();
									$archivo['name'] = $_FILES['imagen-fotos']['name'][$i];
									$archivo['type'] = $_FILES['imagen-fotos']['type'][$i];
									$archivo['tmp_name'] = $_FILES['imagen-fotos']['tmp_name'][$i];
									$archivo['error'] = $_FILES['imagen-fotos']['error'][$i];
									$archivo['size'] = $_FILES['imagen-fotos']['size'][$i];

									$tipo_archivo = $archivo['type']; 

									$partes=explode("/",$tipo_archivo);

									$extension_original=$partes[1];
									$extension=$partes[1];

							   		if($extension=='gif'){
							   			$ext='jpeg';
							   		}else{		   			
							   			$ext=$extension;
							   		}
									
										
									$uploaddir = "../../../IMG/NOTICIAS/";	


									do{
										
										$nombre_img=mt_rand(10000,50000);
										
									}while(file_exists($uploaddir.$id_elemento.'_'.$nombre_img.".".$ext));
										


									$nombre_img=$id_elemento.'_'.$nombre_img;

									$valores_tam=array();
									$valores_tam['web']=array();
									$valores_tam['web']['tam_ancho']='original';
									$valores_tam['web']['tam_alto']='original';
									$valores_tam['web']['directorio']=$uploaddir.'FOTOS/WEB/';
									$valores_tam['web']['nombre_final']=$nombre_img.".".$ext;
									$valores_tam['web']['nombre_inicial']=$nombre_img.".".$extension;

									$valores_tam['movil']=array();
									$valores_tam['movil']['tam_ancho']=400;
									$valores_tam['movil']['tam_alto']=300;
									$valores_tam['movil']['directorio']=$uploaddir.'FOTOS/MOVIL/';
									$valores_tam['movil']['nombre_final']=$nombre_img.".".$ext;
									$valores_tam['movil']['nombre_inicial']=$nombre_img.".".$extension;

									$valores_tam['mini']=array();
									$valores_tam['mini']['tam_ancho']=100;
									$valores_tam['mini']['tam_alto']=100;
									$valores_tam['mini']['directorio']=$uploaddir.'FOTOS/MINI/';
									$valores_tam['mini']['nombre_final']=$nombre_img.".".$ext;
									$valores_tam['mini']['nombre_inicial']=$nombre_img.".".$extension;

									$respuesta_img='error_archivo';


									include("subir_img_temp.php");


									if($respuesta_img!='error_archivo'){


										$rs=$DAOGestor->fun_insert_elemento('noticias_fotos','id_img,ext_img,id_noticia','"'.$nombre_img.'","'.$ext.'",'.$id_elemento);

										//$DAOGestor->fun_update_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,'id_img_logo="'.$nombre_img.'", ext_img_logo="'.$ext.'"','id='.$resultado['id_insert']);
									}

								}

							

			
						}



					}else{

					}




					//
				}else{

				}
			
			}
		break;
	}



	echo json_encode($resultado);

}




?>