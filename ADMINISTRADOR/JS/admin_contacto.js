

var GL_DELAY_MSG_CONTACTO;



$(document).ready(function(){


	$('#btn_guardar_contacto').click(function(){
		contacto=new Array();
		/*
		contacto.subtitulo=$('#nueva_contacto-subtitulo').val();*/
		contacto.direccion=$('#edit-direccion').val();
		contacto.telefono=$('#edit-telefono').val();
		contacto.email=$('#edit-email').val();
		
		mod_contacto.modificar(contacto);
	});



});

