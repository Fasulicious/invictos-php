
$(window).resize(function(){ 
  fun_resize_menu();

  if($(window).width()>400){
  	fun_resize_banner();  

  }
  
  
});



$(document).ready(function(){



$('#username').focus();

fun_resize_menu();
  fun_resize_banner();


//FUNCION PARA EL BOTOND DE LOGUEAR ALUMNO
var delay=setInterval(function(){
	clearInterval(delay);
fun_animacion_inicial();

},100);


	$("body").on('click','#btn_logear',function(){

		fun_logear($("#username").val(),$("#password").val());
				
	});
$("body").on('keyup','#password',function(event){

		tecla=(document.all) ? event.keyCode : event.which;	
		
		if(tecla == 13 ){
		fun_logear($("#username").val(),$("#password").val());
				}
	});


$("body").on('keyup','#username',function(event){

		tecla=(document.all) ? event.keyCode : event.which;	
		
		if(tecla == 13 ){
		fun_logear($("#username").val(),$("#password").val());
				}
	});


});




function fun_logear(usuario,password){

//	alert("dfgdf");
	$('#campo_user').removeClass('campo_aviso');
	$('#campo_pass').removeClass('campo_aviso');
	$('#aviso_no_login').removeClass('campo_aviso');

	$.ajax({
        url: "ADMIN/POST/logear.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{usuario:usuario,password:password},
        async:true,
        beforeSend: 
		function(objeto){
        	
        	$('#btn_logear').css('pointer-events','none');
			$("#cargando_login").show();
			
        },
        
	success: function(data){
        	$('#btn_logear').css('pointer-events','initial');
			$("#cargando_login").hide();
	if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();	
				
		}else{
			
			if(data=="sin username" || data=="sin password"){

				if(data=="sin username"){
					$('#campo_user').addClass('campo_aviso');
				}

				if(data=="sin password"){
					$('#campo_pass').addClass('campo_aviso');

				}
				
			}else{
				
				switch(data){
					case 'ok': 	parent.document.location='ADMINISTRADOR'; break;
					case 'no_user': 
						$('#aviso_no_login').addClass('campo_aviso'); break;
				}
				
				
			}
			
		}
}
        
});		
}




function fun_animacion_inicial(){

  $('.logo').removeClass('inicio');


  var delay_inicio=setInterval(function(){
    clearInterval(delay_inicio);
  $('.logo h1').removeClass('inicio');


    //aparecen los botones del menu superior
   /* var cont=1;
    $('.item-menu-head ').each(function(){
      
      var delay_link=setInterval(function(objeto){

        clearInterval(delay_link);
        $(objeto).removeClass('inicio');
      },200*cont,$(this));
      cont++;
    });
*/


GL_SLIDE_BANNER_LANZADO=true;
    fun_slide_banner();


   nuevo_left=($('.content_banner .mostrado img').width()-$(window).width())/3;

   $('.content_banner .mostrado').prev().css('left','0px');

   $('.content_banner .mostrado').css('left','-'+nuevo_left+'px');

  },300);


}






var GL_SLIDE_BANNER_LANZADO=false;
function fun_slide_banner(){
  GL_SLIDE_BANNER_LANZADO=true;
  var slide_banner=setInterval(function(){


    if($('.content_banner .banner.mostrado').next().html()){


        mostrado_aux=$('#banner .banner.mostrado');

       $('#banner .mostrado').removeClass('mostrado');
       $(mostrado_aux).next().addClass('mostrado');

        id_banner=$('#banner .banner.mostrado').attr('id');


        //deslizamiento del banner
        var delay_left=setInterval(function(){
        clearInterval(delay_left);

           nuevo_left=($('.content_banner .mostrado img').width()-$(window).width())/3;

           $('.content_banner .mostrado').prev().css('left','0px');

           $('.content_banner .mostrado').css('left','-'+nuevo_left+'px');
        },500);


    }else{

     $('#banner .mostrado').removeClass('mostrado');
     $('#banner .banner').first().addClass('mostrado'); 

//deslizamiento del banner
      var delay_left=setInterval(function(){
          clearInterval(delay_left);

          nuevo_left=($('#banner .banner').first().find('img').width()-$(window).width())/3;

         $('#banner .banner').last().css('left','0px');
         $('#banner .banner').first().css('left','-'+nuevo_left+'px');
     },500);

    }


  },8000);
}



function fun_resize_banner(){

  	var delay=setInterval(function(){

		if($('#banner .banner img:first-child').width()!=0){

		  clearInterval(delay);

		  $('#banner .banner').each(function(){

		    var w=$(this).find('img').width();
		    var h=$(this).find('img').height();

		    var wf=$(window).width();
		    var hf=$(window).height();

		  $('#banner .content_banner').css('height',hf+'px');
		  $('#banner .content_banner .banner').css('height',hf+'px');

		    hn=h*wf/w;
		    if(hn<hf){
		      wn=wf*hf/hn;


		      $(this).find('img').width(wn);
		      $(this).find('img').height('100%');
		      //$(this).css('left','-'+(Math.abs(wn-wf)/2)+'px');

		    }else{
		      if(hf>hn){

		        $(this).find('img').width('100%');
		        $(this).find('img').height(hn);
		        $(this).css('top','-'+((hf-hn)/2)+'px');

		      }else{

		  $('#banner .content_banner').css('width',(wf)+'px');
		  $('#banner .content_banner .banner').css('width',(wf)+'px');
		        $(this).find('img').width('100%');
		        $(this).find('img').height('100%');
		        
		        if(hn>hf){

		         $(this).css('top','-'+((hn-hf)/2)+'px');
		        
		        }else{
		          $(this).css('top','0px');
		        
		        }
		      }      
		    }

		  });

		}

	},100); 


  $('#banner').removeClass('responsive_420');

  if($(window).width()<420){
    $('#banner').addClass('responsive_420');
  }

}





function fun_resize_menu(){

  $('.header').removeClass('responsive_790');
  if($(window).width()<=870){
    $('.header').addClass('responsive_790');
  }


  $('#caja_login').removeClass('responsive_400');
 if($(window).width()<=400){
    $('#caja_login').addClass('responsive_400');
  }

}

