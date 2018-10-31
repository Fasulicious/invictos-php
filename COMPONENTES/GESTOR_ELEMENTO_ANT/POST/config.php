<?php
		

		
class COMP_TABLA{

	var $nombre_tabla='';
	var $estructura;
	
	function COMP_TABLA($nombre_tabla,$estructura_insert,$estructura_update){
		$this->nombre_tabla=$nombre_tabla;

		$this->estructura_insert=$estructura_insert;
		$this->estructura_update=$estructura_update;
	}
}


$GL_ELEMENTOS=array();



$GL_ELEMENTOS['aviso']=new COMP_TABLA('avisos',array(   //nombre campo tipo elemento insert
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "id_text" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "referencia" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "direccion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    //"img_previa" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    //"img_previa_ext" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),

		    "coor_latitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false),
		    "coor_longitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false),
		    "fecha" => array('tipo'=>"date",'now'=>true,'sesion'=>false,'obligatorio'=>true),
		    		    
		    "id_usuario" => array('tipo'=>"int",'sesion'=>'id','obligatorio'=>true))   
		,array(   //nombre campo tipo elemento update
		//    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "id_text" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "referencia" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "direccion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    //"img_previa" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    //"img_previa_ext" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    
		    "coor_latitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false),
		    "coor_longitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false),
		    "fecha" => array('tipo'=>"date",'sesion'=>false,'obligatorio'=>false))   
		);


$GL_ELEMENTOS['usuario']=new COMP_TABLA('grl_tbl_users',array()
		,array(   //nombre campo tipo elemento update
		    //"id" => array('tipo'=>"id",'editable'=>false,'sesion'=>true,'obligatorio'=>true),

		    "nombre" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "firma" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "profesion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "presentacion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),

		    "moneda" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "costo" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true),



		    "id_img" => array('tipo'=>"aux",'sesion'=>false,'obligatorio'=>false),
		    "ext_img" => array('tipo'=>"aux",'sesion'=>false,'obligatorio'=>false),
		   
		   
		    
		    "video" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false)
		    )
		);

$GL_ELEMENTOS['password']=new COMP_TABLA('grl_tbl_users',array()
		,array(   //nombre campo tipo elemento update
		   // "id" => array('tipo'=>"id",'editable'=>false,'sesion'=>true,'obligatorio'=>true),
		    "password" => array('tipo'=>"blob",'key_encrypt'=>'123','sesion'=>false,'obligatorio'=>true)
		    )
		);



$GL_ELEMENTOS['noticia']=new COMP_TABLA('noticias',array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "id_titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "descripcion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),		     
		    "id_img" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "ext_img" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "id_usuario" => array('tipo'=>"str",'sesion'=>'super_user','obligatorio'=>true))
		,array(   //nombre campo tipo elemento update
		    //"id" => array('tipo'=>"id",'sesion'=>false,'obligatorio'=>false),

		    "titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "id_titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "descripcion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),		     
		    "id_img" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "ext_img" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false))
		);





?>