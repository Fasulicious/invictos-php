<?php
		

		
class COMP_TABLA{

	var $nombre_tabla='';
	var $estructura;
	
	function COMP_TABLA($nombre_tabla,$estructura_select,$condiciones,$orderby,$query){
		$this->nombre_tabla=$nombre_tabla;

		$this->estructura_select=$estructura_select;
		$this->condiciones=$condiciones;
		$this->orderby=$orderby;
		$this->query=$query;

	}
}

//class COMP_CONDICION




$GL_ELEMENTOS=array();



//En la siguiente estructura se define una unión plana entre 2 tablas, esto significa que el array resultante es una estructura jerárquica que agrupa los valores de la tabla contenida en ese campo (conocimiento_profe), en un array que se guardar'a en el campo llamado "conocimiento_profe"

$GL_ELEMENTOS['conocimiento']=new COMP_TABLA('conocimientos',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0,'alias'=>'id_c'),
		    "nombre" => array('tipo'=>"str",'permiso'=>0),
		    "conocimiento_profe" => array('tipo'=>"array",'union_plana'=>true,
				'tipo_union'=>'fuerte','tabla'=>'conocimiento_profe',
		    	'estructura'=>array(
		    		'id'=>array('tipo'=>'id'),
	    			"id_profesor" => array('tipo'=>"str"),
	    			"nivel" => array('tipo'=>"str",'alias'=>'nivel'),
		    		'id_conocimiento'=>array('tipo'=>'id_rel','campo_padre'=>'id')
		    		),'permiso'=>0)),	
		array(
			'consulta_1'=>array(
				'condicion'=>'conocimiento_profe.id_profesor={id}',
				'variables_post'=>false,
				'variables_sesion'=>array('id'),
				'nivel'=>2,
				'nivel_limite'=>2,
				'tipo_union'=>'fuerte')  //el nivel de una condición es algo auxiliar en este caso, solo nos sirve cuando la consulta es compuesta, y el nivel 2 implica que la condición será aplicada a toda la consulta, más no solamente a la tabla principal, en este caso CONOCIMIENTOS
		    		),'',''
		);
		
		
$GL_ELEMENTOS['academ']=new COMP_TABLA('form_academ',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0,'alias'=>'id_c'),
		    "nombre" => array('tipo'=>"str",'permiso'=>0),
		    ),'','',''
		);		


$GL_ELEMENTOS['temas_cursos']=new COMP_TABLA('conocimientos',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "nombre" => array('tipo'=>"str",'permiso'=>0),
		    "nombre_busqueda" => array('tipo'=>"str",'permiso'=>0)
		    ),
		array(
			'consulta_1'=>array(
				'condicion'=>'nombre_busqueda  like "{nombre_busqueda}%"',
				'variables_post'=>array('nombre_busqueda'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil'),  //el nivel de una condición es algo auxiliar en este caso, solo nos sirve cuando la consulta es compuesta, y el nivel 2 implica que la condición será aplicada a toda la consulta, más no solamente a la tabla principal, en este caso CONOCIMIENTOS,
			'consulta_admin'=>array(
				'condicion'=>'nombre_busqueda  like "{nombre_busqueda}%"',
				'variables_post'=>array('nombre_busqueda'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil')
		    ),
		array(
			'order_1'=>array(
				'condicion'=>'case when nombre_busqueda like "{nombre_busqueda}%" then 0 else 1 end',
				'variables_post'=>array('nombre_busqueda'),
				'variables_sesion'=>false),
				
			'order_nombre'=>array(
				'condicion'=>'nombre_busqueda',
				'variables_post'=>false,
				'variables_sesion'=>false)
		    ),''
		);


$GL_ELEMENTOS['temas_academ']=new COMP_TABLA('form_academ',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "nombre" => array('tipo'=>"str",'permiso'=>0),
		    ),
		array(
			'consulta_1'=>array(
				'condicion'=>'(nombre like "{nombre}%" OR nombre_2 like "{nombre}%")',
				'variables_post'=>array('nombre'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil'),  //el nivel de una condición es algo auxiliar en este caso, solo nos sirve cuando la consulta es compuesta, y el nivel 2 implica que la condición será aplicada a toda la consulta, más no solamente a la tabla principal, en este caso CONOCIMIENTOS,
			'consulta_admin'=>array(
				'condicion'=>'(nombre  like "{nombre}%" OR nombre_2 like "{nombre}%")',
				'variables_post'=>array('nombre'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil')
		    ),
		array(
			'order_1'=>array(
				'condicion'=>'case when nombre_2 like "{nombre}%" then 0 else 1 end',
				'variables_post'=>array('nombre'),
				'variables_sesion'=>false),
				
			'order_nombre'=>array(
				'condicion'=>'nombre',
				'variables_post'=>false,
				'variables_sesion'=>false)
		    ),''
		);


$GL_ELEMENTOS['buscar_conocimientos']=new COMP_TABLA('conocimientos',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "nombre" => array('tipo'=>"str",'permiso'=>0),
		    "nombre_busqueda" => array('tipo'=>"str",'permiso'=>0)
		    ),
		array(
			'consulta_1'=>array(
				'condicion'=>'nombre_busqueda  like "{nombre_busqueda}%"',
				'variables_post'=>array('nombre_busqueda'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil'),  //el nivel de una condición es algo auxiliar en este caso, solo nos sirve cuando la consulta es compuesta, y el nivel 2 implica que la condición será aplicada a toda la consulta, más no solamente a la tabla principal, en este caso CONOCIMIENTOS,
			'consulta_admin'=>array(
				'condicion'=>'nombre_busqueda  like "{nombre_busqueda}%"',
				'variables_post'=>array('nombre_busqueda'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil')
		    ),
		array(
			'order_1'=>array(
				'condicion'=>'case when nombre_busqueda like "{nombre_busqueda}%" then 0 else 1 end',
				'variables_post'=>array('nombre_busqueda'),
				'variables_sesion'=>false),
				
			'order_nombre'=>array(
				'condicion'=>'nombre_busqueda',
				'variables_post'=>false,
				'variables_sesion'=>false)
		    ),''
		);


$GL_ELEMENTOS['buscar_academ']=new COMP_TABLA('form_academ',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "nombre" => array('tipo'=>"str",'permiso'=>0),
		    ),
		array(
			'consulta_1'=>array(
				'condicion'=>'(nombre like "{nombre}%" OR nombre_2 like "{nombre}%")',
				'variables_post'=>array('nombre'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil'),  //el nivel de una condición es algo auxiliar en este caso, solo nos sirve cuando la consulta es compuesta, y el nivel 2 implica que la condición será aplicada a toda la consulta, más no solamente a la tabla principal, en este caso CONOCIMIENTOS,
			'consulta_admin'=>array(
				'condicion'=>'(nombre  like "{nombre}%" OR nombre_2 like "{nombre}%")',
				'variables_post'=>array('nombre'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'tipo_union'=>'debil')
		    ),
		array(
			'order_1'=>array(
				'condicion'=>'case when nombre_2 like "{nombre}%" then 0 else 1 end',
				'variables_post'=>array('nombre'),
				'variables_sesion'=>false),
				
			'order_nombre'=>array(
				'condicion'=>'nombre',
				'variables_post'=>false,
				'variables_sesion'=>false)
		    ),''
		);


$GL_ELEMENTOS['mis_recursos']=new COMP_TABLA('recurso_profesor',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "titulo" => array('tipo'=>"str",'permiso'=>0),
		    "autor" => array('tipo'=>"str",'permiso'=>0),
		    "link_externo" => array('tipo'=>"str",'permiso'=>0),
		    "valoraciones" => array('tipo'=>"str",'permiso'=>0),
		    "descargas" => array('tipo'=>"str",'permiso'=>0),
		    "mi_voto" => array('tipo'=>"array",'union_plana'=>true,
				'tipo_union'=>'false','tabla'=>'votos_recurso', 
				'condicion'=>'and votos_recurso.id_usuario={id}',
				'variables_post'=>false,
				'variables_sesion'=>array('id'),
		    	'estructura'=>array(
		    		'id_usuario'=>array('tipo'=>'int'),
	    			"activo" => array('tipo'=>"str"),
		    		'id_recurso'=>array('tipo'=>'id_rel','campo_padre'=>'id')
		    		),'permiso'=>0)),
		array(
			'consulta_1'=>array(
				'condicion'=>' recurso_profesor.id_profesor={id}',
				'variables_post'=>false,
				'variables_sesion'=>array('id'),
				'nivel'=>2,
				'nivel_limite'=>2,
				'tipo_union'=>'debil') 
		    		),'',''
		);






$GL_ELEMENTOS['busqueda_recurso']=new COMP_TABLA('recurso_profesor',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0,'indice'=>false),
		    "id_profesor" => array('tipo'=>"str",'permiso'=>0),
		    "autor" => array('tipo'=>"str",'permiso'=>0),
		    "titulo" => array('tipo'=>"str",'permiso'=>0),
		    "link_externo" => array('tipo'=>"str",'permiso'=>0),
		    "descargas" => array('tipo'=>"str",'permiso'=>0),
		    "valoraciones" => array('tipo'=>"str",'permiso'=>0),
		    "datos_profe" => array('tipo'=>"array",'union_plana'=>true,
				'tipo_union'=>'fuerte','tabla'=>'grl_tbl_users',
		    	'estructura'=>array(
	    			"nombres" => array('tipo'=>"str"),
	    			"apellidos" => array('tipo'=>"str"),
	    			"username" => array('tipo'=>"str"),
		    		'id'=>array('tipo'=>'id_rel','campo_padre'=>'id_profesor','alias'=>'id_profe')
		    		),'permiso'=>0)),	
		array(
			'consulta_1'=>array(
				'condicion'=>'recurso_profesor.titulo_busqueda like "%{texto}%" or recurso_profesor.autor_busqueda like "%{texto}%" or concat(grl_tbl_users.nombres_busqueda, grl_tbl_users.apellidos_busqueda) like "%{texto}%"',
				'variables_post'=>array('texto'),
				'variables_sesion'=>false,
				'nivel'=>2,
				'nivel_limite'=>2,
				'tipo_union'=>'fuerte')  //el nivel de una condición es algo auxiliar en este caso, solo nos sirve cuando la consulta es compuesta, y el nivel 2 implica que la condición será aplicada a toda la consulta, más no solamente a la tabla principal, en este caso CONOCIMIENTOS
		    		),
		array(
			'order_1'=>array(
				'condicion'=>'case when recurso_profesor.titulo_busqueda like "{texto}%" or recurso_profesor.autor_busqueda like "{texto}%" or concat(grl_tbl_users.nombres_busqueda, grl_tbl_users.apellidos_busqueda) like "{texto}%" then 4*valoraciones when recurso_profesor.titulo_busqueda or recurso_profesor.autor_busqueda like "%{texto}%" or concat(grl_tbl_users.nombres_busqueda, grl_tbl_users.apellidos_busqueda) like "%{texto}%" then 3*valoraciones when recurso_profesor.titulo_busqueda or recurso_profesor.autor_busqueda like "%{texto}" or concat(grl_tbl_users.nombres_busqueda, grl_tbl_users.apellidos_busqueda) like "%{texto}" then 2*valoraciones else 0*valoraciones end DESC',
				'variables_post'=>array('texto'),
				'variables_sesion'=>false)
		    ),''
		);





$GL_ELEMENTOS['info_empresa']=new COMP_TABLA('info_empresa',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "quienes_somos" => array('tipo'=>"str",'permiso'=>0),
		    "mision" => array('tipo'=>"str",'permiso'=>0),
		    "vision" => array('tipo'=>"str",'permiso'=>0)
		    ),	
		'',		
		'',''
		);

$GL_ELEMENTOS['terminos']=new COMP_TABLA('info_empresa',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "terminos_condiciones" => array('tipo'=>"str",'permiso'=>0),
		    ),	
		'',		
		'',''
		);

$GL_ELEMENTOS['contacto']=new COMP_TABLA('contacto',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "direccion" => array('tipo'=>"str",'permiso'=>0),
		    "telefono" => array('tipo'=>"str",'permiso'=>0),
		    "email" => array('tipo'=>"str",'permiso'=>0),
		    ),	
		'',		
		'',''
		);


/*******************************/
/* Busqueda de profesores segun geografia usando componente*/

/*******************************/



$GL_ELEMENTOS['busqueda_profesor_zona']=new COMP_TABLA('avisos',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "coor_longitud" => array('tipo'=>"str",'permiso'=>0),
		    "coor_latitud" => array('tipo'=>"str",'permiso'=>0),
		    "conocimiento" => array('tipo'=>"array",'union_plana'=>true,
				'tipo_union'=>'fuerte','tabla'=>'conocimiento_profe','tabla_rel'=>'avisos',
		    	'estructura'=>array(
	    			"id" => array('tipo'=>"str",'alias'=>'id_conocimiento'),
		    		'id_profesor'=>array('tipo'=>'id_rel','campo_padre'=>'id_usuario','alias'=>'id_profe')
		    		),'permiso'=>0)),
		array(
			'consulta_1'=>array(
				'condicion'=>'conocimiento_profe.id_conocimiento={id_con_bus} and POW(POW({longitud}-avisos.coor_longitud,2)+POW({latitud}-avisos.coor_latitud,2),0.5)<0.00000925*{distancia}',
				'variables_post'=>array('id_con_bus','latitud','longitud','distancia'),
				'variables_sesion'=>false,
				'nivel'=>2,
				'nivel_limite'=>1,
				'tipo_union'=>'fuerte') 
		    		),'',''
		);



/*
$GL_ELEMENTOS['info_perfil'] = new COMP_TABLA(false,
	array(
		'campo_id'=>'id'),
		array(
			'consulta_1'=>array(

				'variables_post'=>array('id_usuario'),
				'variables_sesion'=>array('id')) 
		    		),false,
		'select u.id, u.nombres, u.apellidos, u.direccion, u.correo, u.telefono, u.ranking, u.fecha_nacimiento, u.fecha_registro, u.pensamiento, u.presentacion, u.foto, u.portada, u.link_facebook, u.link_twitter, u.link_linkedin, u.horas_trabajo, u.educacion, u.calificacion, IF(v.activo IS NULL OR v.activo=0,0,1) voto from grl_tbl_users u LEFT JOIN votos_profesor v ON u.id = v.id_profesor and v.id_usuario={id} where id={id_usuario}'		
		);
*/



$GL_ELEMENTOS['info_perfil']=new COMP_TABLA('grl_tbl_users',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "username" => array('tipo'=>"str",'permiso'=>0),
		    "nombres" => array('tipo'=>"str",'permiso'=>0),
		    "apellidos" => array('tipo'=>"str",'permiso'=>0),
		    "tipo" => array('tipo'=>"str",'permiso'=>0),
		    "telefono" => array('tipo'=>"str",'permiso'=>0),
		    "mostrar_telefono" => array('tipo'=>"str",'permiso'=>0),

		    "direccion" => array('tipo'=>"str",'permiso'=>0),
		    "ranking" => array('tipo'=>"str",'permiso'=>0),
		    "correo" => array('tipo'=>"str",'permiso'=>0),
		    "ciudad" => array('tipo'=>"str",'permiso'=>0),
		    "latitud_ini" => array('tipo'=>"str",'permiso'=>0),
		    "longitud_ini" => array('tipo'=>"str",'permiso'=>0),
		    "fecha_nacimiento" => array('tipo'=>"str",'permiso'=>0),
		    "mostrar_edad" => array('tipo'=>"str",'permiso'=>0),
		    
		    "fecha_registro" => array('tipo'=>"str",'permiso'=>0),
		    "nivel_educativo" => array('tipo'=>"str",'permiso'=>0),
		    "pensamiento" => array('tipo'=>"str",'permiso'=>0),
		    "presentacion" => array('tipo'=>"str",'permiso'=>0),
		    "foto" => array('tipo'=>"str",'permiso'=>0),
		    "portada" => array('tipo'=>"str",'permiso'=>0),
		    "link_facebook" => array('tipo'=>"str",'permiso'=>0),
		    "link_twitter" => array('tipo'=>"str",'permiso'=>0),
		    "link_linkedin" => array('tipo'=>"str",'permiso'=>0),
		    "horas_trabajo" => array('tipo'=>"str",'permiso'=>0),
		    "educacion" => array('tipo'=>"str",'permiso'=>0),
		    "calificacion" => array('tipo'=>"str",'permiso'=>0),
		    "mi_voto" => array('tipo'=>"array",'union_plana'=>true,
				'tipo_union'=>'false','tabla'=>'votos_profesor', 
				'condicion'=>'and votos_profesor.id_usuario={id}',
				'variables_post'=>false,
				'variables_sesion'=>array('id'),
				'valores_default'=>array(
					"id"=>0
					),
		    	'estructura'=>array(
		    		'id_usuario'=>array('tipo'=>'int'),
	    			"activo" => array('tipo'=>"str",'alias'=>"voto"),
		    		'id_profesor'=>array('tipo'=>'id_rel','campo_padre'=>'id')
		    		),'permiso'=>0),
		    "conocimientos" => array('tipo'=>"array",'union_plana'=>false,
				'tipo_union'=>'false','tabla'=>'conocimiento_profe',
		    	'estructura'=>array(
		    		'id'=>array('tipo'=>'id','alias'=>'id_con_profe'),
	    			"id_conocimiento" => array('tipo'=>"str"),
	    			"nivel" => array('tipo'=>"str"),
		    		'id_profesor'=>array('tipo'=>'id_rel','campo_padre'=>'id')
		    		),'permiso'=>0),
		    "datos_conocimiento" => array('tipo'=>"array",'union_plana'=>true,
				'tipo_union'=>'fuerte','tabla'=>'conocimientos','tabla_rel'=>'conocimiento_profe',
		    	'estructura'=>array(
	    			"nombre" => array('tipo'=>"str",'alias'=>'nombre_conocimiento'),
		    		'id'=>array('tipo'=>'id_rel','campo_padre'=>'id_conocimiento','alias'=>'id_con')
		    		),'permiso'=>0)),	
		array(
			'consulta_1'=>array(
				'condicion'=>'(grl_tbl_users.username="{username}" and grl_tbl_users.username<>"" ) or grl_tbl_users.id={id_usuario}',
				'variables_post'=>array('id_usuario','username'),
				'variables_sesion'=>false,
				'nivel'=>1,
				'nivel_limite'=>1,
				'tipo_union'=>'fuerte')  //el nivel de una condición es algo auxiliar en este caso, solo nos sirve cuando la consulta es compuesta, y el nivel 2 implica que la condición será aplicada a toda la consulta, más no solamente a la tabla principal, en este caso CONOCIMIENTOS
		    		),'',''
		);




$GL_ELEMENTOS['aviso']=new COMP_TABLA('avisos',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "coor_longitud" => array('tipo'=>"str",'permiso'=>0),
		    "coor_latitud" => array('tipo'=>"str",'permiso'=>0),
		    "direccion" => array('tipo'=>"str",'permiso'=>0),
		    "referencia" => array('tipo'=>"str",'permiso'=>0)),
		array(
			'consulta_1'=>array(
				'condicion'=>'id_usuario={id}',
				'variables_post'=>false,
				'variables_sesion'=>array('id'),
				'nivel'=>2,
				'nivel_limite'=>1,
				'tipo_union'=>'fuerte') 
		    		),'',''
		);


$GL_ELEMENTOS['zonas_profesor']=new COMP_TABLA('avisos',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "coor_longitud" => array('tipo'=>"str",'permiso'=>0),
		    "coor_latitud" => array('tipo'=>"str",'permiso'=>0),
		    "direccion" => array('tipo'=>"str",'permiso'=>0),
		    "referencia" => array('tipo'=>"str",'permiso'=>0)),
		array(
			'consulta_1'=>array(
				'condicion'=>'id_usuario={id_usuario}',
				'variables_post'=>array('id_usuario'),
				'variables_sesion'=>false,
				'nivel'=>2,
				'nivel_limite'=>1,
				'tipo_union'=>'fuerte') 
		    		),'',''
		);



$GL_ELEMENTOS['cuentas']=new COMP_TABLA('cuenta_por_pagar',
		array(   //nombre campo tipo elemento update
		    "cod_profesor" => array('tipo'=>"id",'permiso'=>0),
		    "YEAR(fecha_fin)" => array('tipo'=>"str",'permiso'=>0,'alias'=>'anio_fin'),
		    "MONTH(fecha_fin)" => array('tipo'=>"str",'permiso'=>0,'alias'=>'mes_fin'),
		    "DAY(fecha_fin)" => array('tipo'=>"str",'permiso'=>0,'alias'=>'dia_fin'),
		    "monto_acumulado" => array('tipo'=>"str",'permiso'=>0),
		    "comision" => array('tipo'=>"str",'permiso'=>0)),
		array(
			'consulta_1'=>array(
				'condicion'=>'cod_profesor={id} and pagado=FALSE',
				'variables_post'=>false,
				'variables_sesion'=>array('id'),
				'nivel'=>2,
				'nivel_limite'=>1,
				'tipo_union'=>'fuerte') 
		    		),'',''
		);





$GL_ELEMENTOS['usuarios_invictos']=new COMP_TABLA('grl_tbl_users',
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"id",'permiso'=>0),
		    "nombres" => array('tipo'=>"str",'permiso'=>0),
		    "apellidos" => array('tipo'=>"str",'permiso'=>0),
		    "foto" => array('tipo'=>"str",'permiso'=>0),
		    "situacion_usuario" => array('tipo'=>"str",'permiso'=>0),
		    "correo" => array('tipo'=>"str",'permiso'=>0),
		    "estado_cuenta" => array('tipo'=>"array",'union_plana'=>true,
				'tipo_union'=>'false','tabla'=>'cuenta_por_pagar', 
				'condicion'=>'',
				'variables_post'=>false,
				'variables_sesion'=>false,
		    	'estructura'=>array(
		    		'fecha_fin'=>array('tipo'=>'str'),
	    			"monto_acumulado" => array('tipo'=>"str"),
	    			"comision" => array('tipo'=>"str"),
	    			"pagado" => array('tipo'=>"str"),
		    		'cod_profesor'=>array('tipo'=>'id_rel','campo_padre'=>'id')
		    		),'permiso'=>0)),
		array(
			'consulta_id'=>array(
				'condicion'=>' grl_tbl_users.id={id_usuario}',
				'variables_post'=>array('id_usuario'),
				'variables_sesion'=>false, 
				'valores_default'=>array(
					"id_usuario"=>0
					),
				'nivel'=>2,
				'nivel_limite'=>2,
				'tipo_union'=>'debil'),

			 'consulta_nombre'=>array(
				'condicion'=>'grl_tbl_users.nombres like "{nombre_usuario}%" or grl_tbl_users.apellidos like "{nombre_usuario}%"',
				'variables_post'=>array('nombre_usuario'),
				'variables_sesion'=>false, 
				'valores_default'=>array(
					"nombre_usuario"=>""
					),
				'nivel'=>2,
				'nivel_limite'=>2,
				'tipo_union'=>'debil')
		    		),
		array(				
			'order_nombre'=>array(
				'condicion'=>'case when nombres="{nombre_usuario}" then 1 when apellidos="{nombre_usuario}" then 2 when nombres like "{nombre_usuario}%" then 3 when apellidos like "{nombre_usuario}%" then 4 else 5 end',
				'variables_post'=>array('nombre_usuario'),
				'variables_sesion'=>false,
				'valores_default'=>array(
					"nombre_usuario"=>""
					))

		    ),''
		);




$GL_ELEMENTOS['problemas_clase'] = new COMP_TABLA(false,
	array(
		'campo_id'=>'cod_alumno'),
		array(
			'consulta_1'=>array(

				'variables_post'=>array('nombre_filtro'),
				'variables_sesion'=>null) 
		    		),false,
		"select c.fecha, c.hora, c.cod_alumno, c.cod_profesor, c.problema_mensaje, c.problema, u1.nombres nombre_alumno, u1.apellidos apellido_alumno, u1.foto foto_alumno, u1.correo correo_alumno, u2.nombres nombre_profesor, u2.apellidos apellido_profesor, u2.foto foto_profesor, u2.correo correo_profesor from (clase c JOIN grl_Tbl_users u1 ON u1.id=c.cod_alumno) JOIN grl_tbl_users u2 ON u2.id=c.cod_profesor where (c.problema>0 and c.estado_problema='activo')and (u1.nombres like '{nombre_filtro}%' or u1.apellidos like '{nombre_filtro}%') order by case when u1.nombres='{nombre_filtro}' then 0 when u1.apellidos='{nombre_filtro}' then 1 when u1.nombres like '{nombre_filtro}%' then 2 when u1.apellidos like '{nombre_filtro}%' then 3 else 4 end;"
		);







$GL_ELEMENTOS['numero_usuarios'] = new COMP_TABLA(false,
	array(
		'campo_id'=>'id'),
		array(
			'consulta_1'=>array(

				'variables_post'=>false,
				'variables_sesion'=>false) 
		    		),false,
		'select id, tipo, count(*) conteo from grl_tbl_users where usuario_activo=1 group by tipo order by tipo asc'		
		);


?>

