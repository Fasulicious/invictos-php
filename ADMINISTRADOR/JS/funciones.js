
$(window).resize(function(){ 
  fun_resize_menu();
fun_resize_preformas();
  
});

var GL_CLICK_MENU_RESPONSIVE=false;

$(document).ready(function(){


//fun_get_usuarios_activos();
fun_resize_menu();
fun_resize_preformas();

//FUNCION PARA EL BOTOND DE LOGUEAR ALUMNO
var delay=setInterval(function(){
  clearInterval(delay);
  fun_animacion_inicial();
},100);


$('.header .opcion').click(function(){
    var area=$(this).data('area');

  $('.contenido-principal').removeClass('contenido_select');
  $('#contenido-'+area+'-principal').addClass('contenido_select');

});


var GL_INTERVAL_CONSULTA;
$('#filtro_temas_cursos').keyup(function(){
  
    clearInterval(GL_INTERVAL_CONSULTA);
    var valor_filtro=$(this).val();
    GL_INTERVAL_CONSULTA=setInterval(function(){
      clearInterval(GL_INTERVAL_CONSULTA);
      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['temas_cursos'].reset();
      $('#condicion_temas_cursos').val(valor_filtro);

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['temas_cursos'].consultar();
        
    },300);
    
});


var GL_INTERVAL_CONSULTA_USUARIOS;
$('#filtro_usuario').keyup(function(){
  
    if(isNaN($(this).val()) || $.trim($(this).val())==''){
      $('.comp-consultor-elemento[data-elemento="usuarios_invictos"]').find('input[name="condicion"]').val('consulta_nombre');
      $('.comp-consultor-elemento[data-elemento="usuarios_invictos"]').find('input[name="orderby"]').val('order_nombre');
    }else{
      $('.comp-consultor-elemento[data-elemento="usuarios_invictos"]').find('input[name="condicion"]').val('consulta_id');
      $('.comp-consultor-elemento[data-elemento="usuarios_invictos"]').find('input[name="orderby"]').val('order_id');
    }
    clearInterval(GL_INTERVAL_CONSULTA_USUARIOS);
    var valor_filtro=$.trim($(this).val());
    GL_INTERVAL_CONSULTA_USUARIOS=setInterval(function(){
      
      clearInterval(GL_INTERVAL_CONSULTA_USUARIOS);
      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['usuarios_invictos'].reset();
      $('#condicion_filtro_id_usuario').val(valor_filtro);
      $('#condicion_filtro_nombre_usuario').val(valor_filtro);

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['usuarios_invictos'].consultar();
        
    },300);
    
});



var GL_INTERVAL_CONSULTA_PROBLEMAS;
$('#filtro_usuario_problema').keyup(function(){
  

    clearInterval(GL_INTERVAL_CONSULTA_PROBLEMAS);
    var valor_filtro=$.trim($(this).val());
    GL_INTERVAL_CONSULTA_PROBLEMAS=setInterval(function(){
      
      clearInterval(GL_INTERVAL_CONSULTA_PROBLEMAS);
      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['problemas_clase'].reset();
      $('#condicion_filtro_nombre_alumno').val(valor_filtro);


      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['problemas_clase'].consultar();
        
    },300);
    
});




$('body').on('click','#contenido-usuarios_activos-principal .usuario',function(){
  $('#div_editar_usuario').removeClass('oculto');
  $('body,html').scrollTop(0);

  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #campo_form_id_elemento').val($(this).data('id_elemento'));


  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_estado').val($(this).find('.estado_pago').val());
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_monto').val($(this).find('.monto_acumulado').val());
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_comision').val($(this).find('.div_comision').data('valor'));
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_fecha_fin').val($(this).find('.div_fecha').data('valor'));

});

$('body').on('keyup','#nombre_tema_curso',function(){
    
  $('#nombre_busqueda_tema_curso').val($(this).val());
    
});


$('body').on('click','#radios_estado_deuda input',function(){
  if($(this).val()==1){


  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_estado').val($(this).val());
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_monto').val(0);
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_comision').val(0);
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_fecha_fin').val('');


  }else{


  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_estado').val($(this).val());
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_monto').val($('.comp-gestion-elemento[data-elemento="usuarios_invictos"] input[name="monto_acumulado"]').val());
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_comision').val($('.comp-gestion-elemento[data-elemento="usuarios_invictos"] input[name="comision"]').val());
  $('.comp-gestion-elemento[data-elemento="pago_usuario"] #pago_fecha_fin').val($('.comp-gestion-elemento[data-elemento="usuarios_invictos"] input[name="fecha_fin"]').val());


  }
});
  


$('body').on('click','#contenido-problemas_clases-principal .elemento',function(){
  $('#div_editar_problema').removeClass('oculto');
  $('body,html').scrollTop(0);

  $('#div_editar_problema #nombre_usuario').val($(this).data('nombre'));
  $('#div_editar_problema #cod_profesor').val($(this).data('cod_profesor'));
  $('#div_editar_problema #cod_alumno').val($(this).data('cod_alumno'));
  $('#div_editar_problema #fecha_clase').val($(this).data('fecha'));
  $('#div_editar_problema #hora_clase').val($(this).data('hora'));
  $('#div_editar_problema #estado_problema').val($(this).data('estado_problema'));

});

$('body').on('click','#contenido-problemas_clases-principal .comp-ge-btn-accion[data-accion="update"]',function(){
  fun_actualizar_problema($('#div_editar_problema #cod_profesor').val(),$('#div_editar_problema #cod_alumno').val(),$('#div_editar_problema #fecha_clase').val(),$('#div_editar_problema #hora_clase').val(),$('#div_editar_problema #estado_problema').val());

});

                 

/*
  $('#btn_menu_responsive').click(function(){
    $('#menu_responsive').removeClass('menu_oculto');
    GL_CLICK_MENU_RESPONSIVE=true;
    
  });

  $('#menu_responsive').click(function(){
    GL_CLICK_MENU_RESPONSIVE=true;
  });

  $('html').click(function(){
    if(!GL_CLICK_MENU_RESPONSIVE){
      $('#menu_responsive').addClass('menu_oculto');
      $('#menu_responsive .submenu').addClass('submenu_oculto');
    }
    GL_CLICK_MENU_RESPONSIVE=false;
  });
*/

});





function fun_resize_menu(){

  if($(window).width()<=400){
    $('body').addClass('responsive');
  }else{
    $('body').removeClass('responsive');

  }

}



function fun_resize_preformas(){


  $('#content_preformas .preforma').removeClass('responsive_720');

  if($(window).width()<=720){
    $('#content_preformas .preforma').addClass('responsive_720');

  }
    


}




function fun_inicia_cargando(){
  var delay=setInterval(function(){
    clearInterval(delay);
    $('body').removeClass('sin_scroll');

    $('.comp-cargando #imagen').addClass('mostrado');
    $('.comp-cargando #comp-cargando-barra').addClass('mostrado');

  },100);

}




function fun_actualizar_problema(cod_profesor,cod_alumno,fecha,hora,estado){


  var boton=$('#contenido-problemas_clases-principal .comp-ge-btn-accion[data-accion="update"]');

  $.ajax({
        url: "POST/CLASES/set_estado_problema.php",
        type: "POST",
        datatype:'json',
        data:{cod_alumno:cod_alumno,cod_profesor:cod_profesor,fecha:fecha,hora:hora,estado:estado},
        async:false,
        beforeSend: function(objeto){
           $(boton).find('.comp-ge-boton').html('Guardando...');
        },          
    success: function(data){
    
    console.log(data);
      data=$.parseJSON(data);

      if(data.error){
      
          $(boton).parent().find('.comp-ge-btn-accion').css('pointer-events','initial');
             
          $(boton).find('.comp-ge-boton').html('Guardar Cambios');
         

      }else{

        $(boton).find('.comp-ge-boton').html('Guardado');
               
        var delay_boton=setInterval(function(){
          clearInterval(delay_boton);
          
          $(boton).parent().find('.comp-ge-btn-accion').css('pointer-events','initial');
  
            $(boton).find('.comp-ge-boton').html('Guardar Cambios');
        
        },2000);


        $('#div_editar_problema').addClass('oculto');
        $('#filtro_usuario_problema').keyup();



      }
    }

  });
}


function fun_inicia_gestor_elemento(elemento,id_dom){
  
  switch(elemento){
    case 'info_empresa':

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_empresa'].seleccionar_elemento(1);
     
    break;

    case 'terminos':

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['terminos'].seleccionar_elemento(1);
     
    break;
    case 'contacto':

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['contacto'].seleccionar_elemento(1);
     
      

    break;
  }
}


function fun_ejecuta_comp_consultor_consulta(elemento,data){
  switch(elemento){
    case 'info_empresa':

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_empresa'].seleccionar_elemento(1);
     
    break;
    case 'terminos':

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['terminos'].seleccionar_elemento(1);
     
    break;
    case 'contacto':

      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['contacto'].seleccionar_elemento(1);
     
      

    break;

    case 'usuarios_invictos':

      $('#contenido-usuarios_activos-principal .usuario').each(function(){
        switch(parseInt($(this).find('.situacion_usuario').html())){
          case -1:
            $(this).find('.situacion_usuario').html('Usuario bloqueado por caso cr&iacute;tico');
          break;
          case 0:
            $(this).find('.situacion_usuario').html('Desactivado por no pagar comisi&oacute;n');
          break;
          case 1:
            $(this).find('.situacion_usuario').html('Usuario en buen estado');
          break;
        }

        if($(this).find('.fecha').html().indexOf('-')!=-1){
          $(this).find('.fecha').html(fun_oracion_fecha(fun_formatear_fecha($(this).find('.fecha').html(),'--?')));
        }


      });
    break;

    case 'problemas_clase':

      $('#contenido-problemas_clases-principal .elemento').each(function(){

        switch(parseInt($(this).find('.problema_txt').html())){
          case 1:
            $(this).find('.problema_txt').html('El docente no lleg&oacute; a la clase.');
          break;
          case 2:
            $(this).find('.problema_txt').html('El docente tuvo un comportamiento acosador.');
          break;
          case 3:
            $(this).find('.problema_txt').html('El docente hizo otra cosa.');
          break;
          case 4:
            $(this).find('.problema_txt').html('Olvid&eacute; mi pertenencia.');
          break;
        }
      });
    break;

  }
}



function fun_ejecuta_comp_ge_insert(elemento,data){
  
  switch(elemento){
    case 'temas_cursos':

      if(data.error){
        switch(data.detalle){

          case 'duplicado':
            
            data.constraint=fun_replaceAll(data.constraint,"'",'');
            $('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="nombre"]').addClass('comp-contacto-alerta');
            $('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="nombre"] .aviso-aux').html('Ya existe este tema o curso.');
            $('.comp-gestion-elemento[data-elemento="'+elemento+'"] .comp-ge-campo[data-campo="nombre"] .aviso-aux').removeClass('oculto');

          break;
        }
      }
    break;

    case 'usuarios_invictos':

      $('#div_editar_usuario').addClass('oculto');
    break;
    case 'problemas_clase':

      $('#div_editar_problema').addClass('oculto');
    break;
    }
  }




function fun_ejecuta_comp_ge_update(elemento,data){
  
  switch(elemento){
    case 'usuarios_invictos':

      $('#div_editar_usuario').addClass('oculto');

      $('#contenido-usuarios_activos-principal .usuario').each(function(){
        switch(parseInt($(this).find('.situacion_usuario').html())){
          case -1:
            $(this).find('.situacion_usuario').html('Usuario bloqueado por caso cr&iacute;tico');
          break;
          case 0:
            $(this).find('.situacion_usuario').html('Desactivado por no pagar comisi&oacute;n');
          break;
          case 1:
            $(this).find('.situacion_usuario').html('Usuario en buen estado');
          break;
        }

        if($(this).find('.fecha').html().indexOf('-')!=-1){
          $(this).find('.fecha').html(fun_oracion_fecha(fun_formatear_fecha($(this).find('.fecha').html(),'--?')));
        }


      });

      $('.comp-gestion-elemento[data-elemento="pago_usuario"] .comp-ge-btn-accion[data-accion="update"]').click();

    break;

    }
  }


function fun_ejecuta_comp_ge_cancelar(elemento){
  
  switch(elemento){
    case 'usuarios_invictos':

      $('#div_editar_usuario').addClass('oculto');
    break;

    case 'problemas_clase':

      $('#div_editar_problema').addClass('oculto');
    break;

    case 'info_empresa':
      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['info_empresa'].seleccionar_elemento(1);
    break;

    case 'terminos':
      GL_COMPONENTE_CONSULTOR_ELEMENTOS.LISTA['terminos'].seleccionar_elemento(1);
    break;
    }
  }




