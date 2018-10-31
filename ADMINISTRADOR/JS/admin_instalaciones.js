
var GL_IMG_TEMP_INSTALACION=new Array();
GL_IMG_TEMP_INSTALACION.id='';
GL_IMG_TEMP_INSTALACION.ext='';
GL_IMG_TEMP_INSTALACION.id_logo='';
GL_IMG_TEMP_INSTALACION.ext_logo='';


var GL_ID_INSTALACION_MODIF='';


$(document).ready(function(){



	$('#div_nueva_instalacion').on('keyup','#titulo_noticia',function(){
	
		$('#noticia_id_titulo').val(fun_filtra_solo_letras_y_numeros(fun_ignora_tildes($('#titulo_noticia').val())));
	});



	$('body').on('click','.instalacion .btn_modificar',function(){
		

		id=$(this).data('id_instalacion');
		GL_ID_INSTALACION_MODIF=id;
		$('#titulo_noticia').val(GL_INSTALACIONES[id].titulo);

		$('#noticia_id_titulo').val(GL_INSTALACIONES[id].id_titulo);
		$('#descripcion_noticia').val(GL_INSTALACIONES[id].descripcion);



        nodo_img='<div class="comp-ge-imagen" style="width:20%; margin-top:10px; background-image: url(IMG/NOTICIAS/FONDOS/WEB/'+GL_INSTALACIONES[id].id_img+'.'+GL_INSTALACIONES[id].ext_img+');"  ></div>';
		$('#comp-ge-imagen-imgprevia').html(nodo_img);





		for(var ind in GL_INSTALACIONES[id].fotos){

        	nodo_img='<div class="comp-ge-imagen" style="background-image:url(IMG/NOTICIAS/FOTOS/WEB/'+GL_INSTALACIONES[id].fotos[ind].id_img+'.'+GL_INSTALACIONES[id].fotos[ind].ext_img+')" data-origen="bd" data-indice="'+GL_INSTALACIONES[id].fotos[ind].id_foto+'"  ></div>';


			$('#comp-ge-imagen-fotos').append(nodo_img);
		}


		$('.comp-ge-btns .comp-ge-btn-accion').addClass('oculto');

		$('.comp-ge-btns .comp-ge-btn-accion[data-accion="update"]').removeClass('oculto');
		$('.comp-ge-btns .comp-ge-btn-accion[data-accion="cancelar"]').removeClass('oculto');

		$('#campo_form_id_elemento').val(GL_ID_INSTALACION_MODIF);


		$('html,body').animate({scrollTop: 0},'slow');

	
	});




	$('body').on('click','.instalacion .btn_eliminar',function(){
		mod_instalaciones.eliminar($(this).data('id_instalacion'));
	});
});



function fun_ejecuta_comp_ge_ant_update(id_componente){

		$('#div_nueva_instalacion .comp-ge-btn-accion[data-accion="cancelar"]').click();
}



