<?php
session_start();


require_once("../../UTIL_PHP/variables_globales.php");
require_once("../../UTIL_PHP/armador_sql.php");

require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOConsultor.php");
require_once("config.php");



$elemento=$_POST['elemento'];

if(!$GL_ELEMENTOS[$elemento]->nombre_tabla){

	$query=$GL_ELEMENTOS[$elemento]->query;
	

	if(isset($_POST['condicion']) && $_POST['condicion']!=''){
		if($GL_ELEMENTOS[$elemento]->condiciones!='' ){
		
			foreach($GL_ELEMENTOS[$elemento]->condiciones as $indice=>$valor){

				if($_POST['condicion']==$indice){ //verificamos si se ha elegido la condicion a usar
					
					$query_final=$query;

					if($valor['variables_post']){		

						foreach($valor['variables_post'] as $variable){
							// && !empty($_POST['var_'.$variable])
							if(isset($_POST['var_'.$variable])){
								$query_final=str_replace('{'.$variable.'}',$_POST['var_'.$variable],$query_final);	
							}else{
								$query_final=str_replace('{'.$variable.'}',$valor['valores_default'][$variable],$query_final);
							}

						}	
					}

					if($valor['variables_sesion']){		
						foreach($valor['variables_sesion'] as $variable){
							// && !empty($_SESSION[$variable])
							if(isset($_SESSION[$variable])){
								$query_final=str_replace('{'.$variable.'}',$_SESSION[$variable],$query_final);	
							}else{
								$query_final=str_replace('{'.$variable.'}',$valor['valores_default'][$variable],$query_final);
							}

						}

							


					}
					
					//$tipo_union=$valor['tipo_union'];
					break;
				}
			}
			

		}

	}


	$DAOConsultor=new DAOConsultor();	
	$resultado=$DAOConsultor->fun_select_auxiliar($query_final);

	$resultado = array("campo_id"=>$GL_ELEMENTOS[$elemento]->estructura_select['campo_id'], "data"=>$resultado);


}else{

	$compuesto=false;

	foreach($GL_ELEMENTOS[$elemento]->estructura_select as $campo=>$valores){
		if($valores['tipo']=='array'){
			$compuesto=true;
			break;
		}
	}



$partes_sql=fun_armar_campos_select($GL_ELEMENTOS[$elemento],$compuesto);

if($partes_sql['error']){

	echo json_encode($partes_sql);

}else{

	$DAOConsultor=new DAOConsultor();
	$condicion='';
	$condicion_final='';
	$orderby='';
	$orderby_final='';
	$nivel_condicion=1;
	$nivel_limite=1;

	//$tipo_union='fuerte';

	if(isset($_POST['condicion']) && $_POST['condicion']!=''){
		if($GL_ELEMENTOS[$elemento]->condiciones!='' ){
			foreach($GL_ELEMENTOS[$elemento]->condiciones as $indice=>$valor){

				if($_POST['condicion']==$indice){ //verificamos si se ha elegido la condicion a usar
					
					$condicion_final=$valor['condicion'];


					if($valor['variables_post']){						
						foreach($valor['variables_post'] as $variable){
							
							if(isset($_POST['var_'.$variable]) ){
								$condicion_final=str_replace('{'.$variable.'}',$_POST['var_'.$variable],$condicion_final);	
							}else{
								$condicion_final=str_replace('{'.$variable.'}',$valor['valores_default'][$variable],$condicion_final);
							}

						}	
					}

					if($valor['variables_sesion']){		
						foreach($valor['variables_sesion'] as $variable){
							//&& !empty($_SESSION[$variable])
							if(isset($_SESSION[$variable]) ){
								$condicion_final=str_replace('{'.$variable.'}',$_SESSION[$variable],$condicion_final);	
							}else{
								$condicion_final=str_replace('{'.$variable.'}',$valor['valores_default'][$variable],$condicion_final);
							}

						}

							


					}


					
					$nivel_condicion=$valor['nivel'];

					$nivel_limite=$valor['nivel_limite'];
					//$tipo_union=$valor['tipo_union'];
					break;
				}
			}
			

		}

	}




	if(isset($_POST['orderby']) && $_POST['orderby']!=''){

		if($GL_ELEMENTOS[$elemento]->orderby!='' ){
			$orderby_final='';
			foreach($GL_ELEMENTOS[$elemento]->orderby as $indice=>$valor){
				if($_POST['orderby']==$indice){ //verificamos si se ha elegido la condicion a usar

					$orderby_final=$valor['condicion'];

					if($valor['variables_post']){						
						foreach($valor['variables_post'] as $variable){	
							// && !empty($_POST['var_'.$variable])
							if(isset($_POST['var_'.$variable])){
								$orderby_final=str_replace('{'.$variable.'}',$_POST['var_'.$variable],$orderby_final);	
							}else{
								$orderby_final=str_replace('{'.$variable.'}',$valor['valores_default'][$variable],$orderby_final);
							}
						}	
					}

					if($valor['variables_sesion']){		
						foreach($valor['variables_sesion'] as $variable){		
						//&& !empty($_SESSION[$variable])					
							if(isset($_SESSION[$variable]) ){
								$orderby_final=str_replace('{'.$variable.'}',$_SESSION[$variable],$orderby_final);	
							}else{
								$orderby_final=str_replace('{'.$variable.'}',$valor['valores_default'][$variable],$orderby_final);
							}
						}
					}





/*
					if($orderby_final==''){
						$orderby_final=$orderby;
					}*/

					break;
				}
			}
		}
	}


	if($compuesto){

		$resultado=$DAOConsultor->fun_select_elemento_compuesto($GL_ELEMENTOS[$elemento]->nombre_tabla,$partes_sql['campos'],$condicion_final, $nivel_condicion,$orderby_final,$_POST['indice'],$_POST['conteo'],$GL_ELEMENTOS[$elemento]->estructura_select, $nivel_limite);
		//,$tipo_union

	}else{

		$resultado=$DAOConsultor->fun_select_elemento($GL_ELEMENTOS[$elemento]->nombre_tabla,$partes_sql['campos'], $condicion_final  , $orderby_final , $_POST['indice'] , $_POST['conteo'] );
		
	}



	if(!$resultado['error']){
		$resultado = array("campo_id"=>$partes_sql['campo_id'], "data"=>$resultado);
	}

}
}
	echo json_encode($resultado);

?>