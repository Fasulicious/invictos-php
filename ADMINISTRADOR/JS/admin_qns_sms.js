var GL_IMG_TEMP_MISION=new Array();
GL_IMG_TEMP_MISION.id='';
GL_IMG_TEMP_MISION.ext='';

var GL_IMG_TEMP_VISION=new Array();
GL_IMG_TEMP_VISION.id='';
GL_IMG_TEMP_VISION.ext='';


$(document).ready(function(){



	$('#btn_guardar_qns_sms').click(function(){
		
		presentacion=new Array();
		presentacion.qns_sms=$('#div_qns_sms').val();

		presentacion.mision_vision=$('#div_mision_vision').val();
		
		mision_vision.set_presentacion(presentacion);
	});

});

