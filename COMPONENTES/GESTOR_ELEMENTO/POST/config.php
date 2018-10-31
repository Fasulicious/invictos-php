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




$GL_ELEMENTOS['info_perfil']=new COMP_TABLA('grl_tbl_users',array()
		,array(   //nombre campo tipo elemento update
		    		    			    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>'id','obligatorio'=>true),
		    "username" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "nombres" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "nombres_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false),
		    "apellidos" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "apellidos_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false),		    
		    "correo" => array('tipo'=>"correo",'sesion'=>false,'obligatorio'=>true),
		    "telefono" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "mostrar_telefono" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>false),
		    "direccion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "ciudad" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "latitud_ini" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false),
		    "longitud_ini" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false),
		    "fecha_nacimiento" => array('tipo'=>"date",'sesion'=>false,'obligatorio'=>false),
		    "mostrar_edad" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>false),
		    "pensamiento" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false, 'default'=>''),
		    "presentacion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false, 'default'=>''),	    
		    "foto" => array('tipo'=>"imagen",'dir'=>'../../../IMG/USUARIOS',  
		    	'detalles'=>array(
		    		'web'=>array('ancho'=>200,'alto'=>200,'dir'=>'/WEB'),
		    		'movil'=>array('ancho'=>150,'alto'=>150,'dir'=>'/MOVIL'),
		    		'movil'=>array('ancho'=>50,'alto'=>50,'dir'=>'/MINI')
		    		),
		    	'sesion'=>false,'obligatorio'=>false),
		    "link_facebook" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "link_twitter" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "link_linkedin" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "educacion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true, 'default'=>''),
		    "nivel_educativo" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>false)


		    )
		);




$GL_ELEMENTOS['aviso']=new COMP_TABLA('avisos',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    	"direccion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
	    	"coor_latitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>true),
	    	"coor_longitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>true),
	    	"id_usuario"=>array('tipo'=>'int','sesion'=>'id','obligatorio'=>true)


	    	),
		array(   //nombre campo tipo elemento update
		    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false,'editable'=>false),
	    	"direccion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
	    	"coor_latitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false),
	    	"coor_longitud" => array('tipo'=>"float",'sesion'=>false,'obligatorio'=>false)
	    	)
		);




$GL_ELEMENTOS['foto_portada']=new COMP_TABLA('grl_tbl_users',array()
		,array(   //nombre campo tipo elemento update
		    		    		    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>'id','obligatorio'=>true),
		    "portada" => array('tipo'=>"imagen",'dir'=>'../../../IMG/PERFILES/PORTADAS',  
		    	'detalles'=>array(
		    		'web'=>array('ancho'=>'original','alto'=>'original','dir'=>'/WEB'),
		    		'movil'=>array('ancho'=>500,'alto'=>200,'dir'=>'/MOVIL')
		    		),
		    	'sesion'=>false,'obligatorio'=>false)

		    )
		);

$GL_ELEMENTOS['foto_perfil']=new COMP_TABLA('grl_tbl_users',array()
		,array(   //nombre campo tipo elemento update
		    		    		    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>'id','obligatorio'=>true),
		    "foto" => array('tipo'=>"imagen",'dir'=>'../../../IMG/USUARIOS',  
		    	'detalles'=>array(
		    		'web'=>array('ancho'=>200,'alto'=>200,'dir'=>'/WEB'),
		    		'movil'=>array('ancho'=>150,'alto'=>150,'dir'=>'/MOVIL'),
		    		'movil'=>array('ancho'=>50,'alto'=>50,'dir'=>'/MINI')
		    		),
		    	'sesion'=>false,'obligatorio'=>false)

		    )
		);



$GL_ELEMENTOS['conocimiento']=new COMP_TABLA('conocimiento_profe',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "id_profesor" => array('tipo'=>"int",'sesion'=>'id','obligatorio'=>true),
		    "id_conocimiento" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true),
	    	"nombre" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false,'query'=>false),
		    "nivel" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true)),
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>false,'obligatorio'=>false),
		    
		    "nivel" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true))
		);



$GL_ELEMENTOS['nuevo_tema']=new COMP_TABLA('conocimientos',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "nombre" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "nombre_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>true)),false
		);



$GL_ELEMENTOS['temas_cursos']=new COMP_TABLA('conocimientos',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "nombre" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "nombre_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false)),
		
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>false,'obligatorio'=>false),

		    "nombre" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "nombre_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false))

		);





$GL_ELEMENTOS['mis_recursos']=new COMP_TABLA('recurso_profesor',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "id_profesor" => array('tipo'=>"int",'sesion'=>'id','obligatorio'=>true),
		    "titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "titulo_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false),
		    "autor" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "autor_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false),
		    "link_externo" => array('tipo'=>"str",'convertir_html'=>false,'sesion'=>false,'obligatorio'=>true)),
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>false,'obligatorio'=>false),
		    
		    "titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "titulo_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false),
		    "autor" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "autor_busqueda" => array('tipo'=>"str",'tildes'=>false,'sesion'=>false,'obligatorio'=>false),
		    "link_externo" => array('tipo'=>"str",'convertir_html'=>false,'sesion'=>false,'obligatorio'=>false))
		);

/*

UTILIZANDO UN MULTI CAMPO


$GL_ELEMENTOS['mis_recursos']=new COMP_TABLA('recurso_profesor',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),

		    "id_profesor" => array('tipo'=>"int",'sesion'=>'id','obligatorio'=>true),
		    "titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "autor" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "descripcion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "link_externo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
		    "etiquetas" => array('tipo'=>"multi_campo",'tabla_relacionada'=>'recurso_profesor_etiqueta',  
		    	'estructura'=>array(
		    		'id'=>array('tipo'=>'id','subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    			"id_recurso" => array('tipo'=>"int",'campo_relacion'=>'id','sesion'=>false,'obligatorio'=>false),
	    			"id_conocimiento" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>false),
	    			"nombre_conocimiento" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false,'query'=>false)
		    		),
		    	'sesion'=>false,'obligatorio'=>false)),
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>false,'obligatorio'=>false),
		    
		    "titulo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "descripcion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "link_externo" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "etiquetas" => array('tipo'=>"multi_campo",'tabla_relacionada'=>'recurso_profesor_etiqueta',  
		    	'estructura'=>array(
		    		'id'=>array('tipo'=>'id','subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    			"id_recurso" => array('tipo'=>"int",'campo_relacion'=>'id','sesion'=>false,'obligatorio'=>false),
	    			"id_conocimiento" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>false),
	    			"nombre_conocimiento" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>false,'query'=>false)
		    		),
		    	'sesion'=>false,'obligatorio'=>false))
		);
*/



$GL_ELEMENTOS['info_empresa']=new COMP_TABLA('info_empresa',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    	"quienes_somos" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
	    	"mision" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
	    	"vision" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true)

	    	),
		array(   //nombre campo tipo elemento update
		    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    	"quienes_somos" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
	    	"mision" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
	    	"vision" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false)
	    	)
		);


$GL_ELEMENTOS['terminos']=new COMP_TABLA('info_empresa',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    	"terminos_condiciones" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true)

	    	),
		array(   //nombre campo tipo elemento update
		    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    	"terminos_condiciones" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false)
	    	)
		);



$GL_ELEMENTOS['contacto']=new COMP_TABLA('contacto',
		array(   //nombre campo tipo elemento update

		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    	"direccion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
	    	"telefono" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true),
	    	"email" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>true)

	    	),
		array(   //nombre campo tipo elemento update
		    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','sesion'=>false,'obligatorio'=>false),
	    	"direccion" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
	    	"telefono" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
	    	"email" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false)
	    	)
		);




$GL_ELEMENTOS['password']=new COMP_TABLA('grl_tbl_users',array()
		,array(   //nombre campo tipo elemento update
		   // "id" => array('tipo'=>"id",'editable'=>false,'sesion'=>true,'obligatorio'=>true),
		    "password" => array('tipo'=>"blob",'key_encrypt'=>'123','sesion'=>false,'obligatorio'=>true)
		    )
		);





$GL_ELEMENTOS['usuarios_invictos']=new COMP_TABLA('grl_tbl_users',array()
		,array(   //nombre campo tipo elemento update
		    		    
		    "id" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>false,'obligatorio'=>false),
		    "situacion_usuario" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true)


		    )
		);


$GL_ELEMENTOS['pago_usuario']=new COMP_TABLA('cuenta_por_pagar',array()
		,array(   //nombre campo tipo elemento update
		    		    
		    "cod_profesor" => array('tipo'=>"id",'subtipo'=>'auto','editable'=>false,'sesion'=>false,'obligatorio'=>false),
		    "fecha_fin" => array('tipo'=>"str",'sesion'=>false,'obligatorio'=>false),
		    "monto_acumulado" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true),
		    "comision" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true),
		    "pagado" => array('tipo'=>"int",'sesion'=>false,'obligatorio'=>true)


		    )
		);



?>


