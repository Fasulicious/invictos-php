
var GL_CLICK_MENU=false;
$(document).ready(function(){


	$('body').on('click','.comp-menu-opcion',function(){

		if($('.comp-menu-opcion.seleccionado').data('opcion')!=$(this).data('opcion')){

			id_menu=$(this).data('idmenu');
			id_opcion=$(this).data('opcion');

			$('.comp-menu-opcion[data-idmenu="'+id_menu+'"]').removeClass('seleccionado');
			$(this).addClass('seleccionado');

			$('.comp-menu-area[data-idmenu="'+id_menu+'"]').hide();
			$('.comp-menu-area[data-opcion="'+id_opcion+'"]').fadeIn(300);

		}
	});

	$('body').on('click','.comp-menu-opcion.iniciar',function(){

		$(this).removeClass('iniciar');
		id_menu=$(this).data('idmenu');
		id_opcion=$(this).data('opcion');
		$(this).addClass('seleccionado');

		$('.comp-menu-area[data-idmenu="'+id_menu+'"]').hide();
		$('.comp-menu-area[data-opcion="'+id_opcion+'"]').fadeIn(300);

	
	});


	$('.comp-menu-opcion.iniciar').click();
	

});
