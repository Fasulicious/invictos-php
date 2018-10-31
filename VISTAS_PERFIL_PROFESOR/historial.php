  
      <section id="" <?php if($_SESSION['tipo']=='P'){ ?> class="columna_historial profesor" <?php }else{ ?>class="columna_historial" <?php } ?> data-area="historial">             
         
         <div class="contenido">
         	
            <div class="comp-menu-fijo comp-animacion-ini trans_bezier_05" data-fraccion_altura="1.1" data-posicionlogo="der"  data-resizable="false" data-tipo="menu-superior" data-animaciondelay="0.5" data-srclogo=""  data-msrclogo="" data-dim_msrc="750" data-menufijo="no">

              <?php
              	if($_SESSION['tipo']=='P'){
              ?>
	              <opcion area="valoraciones" texto="Mis Alumnos" rol="historial" columna="valoraciones">  
	              </opcion>
	              <opcion area="mis_alumnos" texto="Mis Clases"  rol="historial"  columna="mis_alumnos">
	              </opcion>
              <?php
              	}else if($_SESSION['tipo']=='A'){
              ?>
	              <opcion area="valoraciones" texto="Mis Profesores" rol="historial" columna="valoraciones">  
	              </opcion>
	              <opcion area="mis_alumnos" texto="Mis Clases" rol="historial"  columna="mis_alumnos">          
	              </opcion>
              <?php
              	}
              ?>
            </div>


            <div class="rol-columnas trans_bezier_1" data-rol="historial">

              <div class="columna-pagina none oculto" data-columna="valoraciones">
              
                <div class="lista_resultados" id="resultados_historial">
                	

                </div>

                <div id="paginacion_1" class="paginacion" data-conteo="5" data-paginas="#resultados_historial .elemento">
                	<div class="btns">
                		<span class="flecha izq vertical-m"></span>
                    <div class="btn_numeros inline vertical-m">
                      
                    </div>
                		<span class="flecha der vertical-m"></span>
                	</div>
                </div>

              </div>

              <div class="columna-pagina none oculto" data-columna="mis_alumnos">
               	
               	<div class="lista_resultados" id="resultados_mis_alumnos">
                	
                </div>

                <div id="paginacion_2" class="paginacion" data-conteo="5" data-paginas="#resultados_mis_alumnos .elemento">
                	<div class="btns">
                		<span class="flecha izq vertical-m"></span>
                      <div class="btn_numeros inline vertical-m">                      
                      </div>
                		<span class="flecha der vertical-m"></span>
                	</div>
                </div>

              </div>
         	</div>

	
         </div>

      </section>


<?php
  include('VISTAS_PERFIL_PROFESOR/popup_recomendacion.html');
?>

	<script>
		$(document).ready(function(){
      

      $('body').on('click','.resultado .btn_ver_msj',function(){
				if($(this).parents('.resultado').find('.mensaje').hasClass('oculto')){
					$(this).find('span').html('Ver menos');	
					$(this).parents('.resultado').find('.mensaje').removeClass('oculto');
				}else{
					$(this).find('span').html('Ver detalle');
					$(this).parents('.resultado').find('.mensaje').addClass('oculto');
				}
			});

			$('body').on('click','.paginacion .btn',function(){
				$('.paginacion .btn').removeClass('activo');
				$(this).addClass('activo');
				var pagina=parseInt($(this).data('pagina'));
				var conteo=parseInt($(this).parents('.paginacion').data('conteo'));
				var paginas = $(this).parents('.paginacion').data('paginas');
				$(paginas).addClass('oculto');

				for(var i=1;i<=conteo;i++){
          elemento=((pagina-1)*conteo)+i;
					$(paginas+':nth-child('+elemento+')').removeClass('oculto');	
				}				
			});
			
			$('body').on('click','.paginacion .flecha',function(){
				var paginacion=$(this).parents('.paginacion');
				var pagina_elegida=$(paginacion).find('.btn.activo').data('pagina');
				if($(this).hasClass('izq')){					
					if(pagina_elegida>1){
						$(paginacion).find('.btn').removeClass('activo');
						pagina_elegida--;
						$(paginacion).find('.btn[data-pagina="'+pagina_elegida+'"]').click();
					}
				}else{
					if(pagina_elegida<$(paginacion).find('.btn').length){
						$(paginacion).find('.btn').removeClass('activo');
						pagina_elegida++;
						$(paginacion).find('.btn[data-pagina="'+pagina_elegida+'"]').click();
					}
				}
			});

		});


          function fun_get_profesores(){

            $.ajax({
              url:'POST/CLASES/get_profesores.php',
              data:{},
              type:'POST',
              datatype:'json',
              async:true,
              beforeSend: function(objeto){
              },
              success:function (data){
                console.log(data);
                data=$.parseJSON(data);

                if(data.error){
              FMSG_ERROR_CONEXION();
                }else{
                  if(data.vacio){

                  }else{  
                    data=data.data;
                    var html_historial='';

                    var conteo=0;

                    for(var ind in data){

                      conteo++; 
                      var background='';

                        if(data[ind].foto){
                          background='style="background-image:url(IMG/USUARIOS/MINI/'+data[ind].foto+')"';
                        } 

                      html_historial+='<div class="resultado elemento oculto" data-id_elemento="" data-id_usuario="'+data[ind].id_usuario+'">'+
                        '<div class="content">'+
                          '<div class="foto" '+background+'></div>'+
                          '<div class="informacion">'+
                            '<div class="info_sup">'+
                              '<div class="nombre">'+
                                '<div class="texto comp-menu-celda-content" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="'+(data[ind].username ? data[ind].username : data[ind].id_usuario )+'">'+
                                  data[ind].nombres+' '+data[ind].apellidos+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                            '<div class="info_inf">';

                            
                            if($('#ss_tipo').val()=='A'){
                                html_historial+='<div class="conocimientos">';

                                for(var ind2 in data[ind].conocimientos){
                                  html_historial+='<div class="conocimiento">'+data[ind].conocimientos[ind2].nombre_conocimiento+'</div>';
                                }
                            
                    html_historial+='</div>'+
                                '<div class="valoracion">'+
                                  '<div class="btn_votar">'+
                                    '<div class="icono"></div>'+
                                    '<div class="numero">'+data[ind].calificacion+'</div>'+
                                  '</div>'+
                                '</div>';

                            }else{
                                html_historial+=
                                '<div class="conocimientos">Edad: '+
                                  fun_anios_hasta_hoy(data[ind].fecha_nacimiento.split('-')[2],data[ind].fecha_nacimiento.split('-')[1],data[ind].fecha_nacimiento.split('-')[0])+
                                '</div>'+
                                '<div class="conocimientos">'+
                                  data[ind].educacion+
                                '</div>';
                            }

                            html_historial+='</div>'+
                          '</div>'+
                        '</div>';
                            if($('#ss_tipo').val()=='A'){

                        html_historial+='<div class="valoracion_clase">'+
                          '<div class="boton_invictos comp-btn-abrir-popup" data-popup="recomendacion">Recomendar</div>'+
                        '</div>';
                        }         
                    html_historial+='</div>';
                    }


                    $('.columna_historial #resultados_historial').html(html_historial);

                    var conteo_elementos=$('.columna_historial #paginacion_1').data('conteo');

                    var numero_paginas=Math.ceil(conteo/conteo_elementos);

                    var paginacion='';

                    for(var i=0;i<numero_paginas;i++){
                      paginacion+='<span class="btn" data-pagina="'+(i+1)+'">'+(i+1)+'</span>';
                    }

                    $('.columna_historial #paginacion_1 .btn_numeros').html(paginacion);

                    $('.columna_historial #paginacion_1 .btn_numeros .btn:first-child').click();


                  }
                }

              }

            });
          }


          function fun_get_clases(){

            $.ajax({
              url:'POST/CLASES/get_clases.php',
              data:{},
              type:'POST',
              datatype:'json',
              async:true,
              beforeSend: function(objeto){
              },
              success:function (data){
                console.log(data);
                data=$.parseJSON(data);

                if(data.error){
                  FMSG_ERROR_CONEXION();
                }else{
                  if(data.vacio){

                  }else{  
                    data=data.data;
                    var html_historial='';

                    var conteo=0;

                    for(var ind in data){

                      conteo++; 

                      var background='';

                        if(data[ind].foto){
                          background='style="background-image:url(IMG/USUARIOS/MINI/'+data[ind].foto+')"';
                        } 


                      html_historial+='<div class="resultado elemento oculto" data-id_elemento=""  data-id_usuario="'+data[ind].id_usuario+'">'+
                        '<div class="content">'+
                          '<div class="foto" '+background+'></div>'+
                          '<div class="informacion">'+
                            '<div class="info_sup">'+
                              '<div class="nombre">'+
                                '<div class="texto comp-menu-celda-content" data-area="perfil" data-columna="perfil" data-rol="principal" data-href="'+(data[ind].username ? data[ind].username : data[ind].id_usuario )+'">'+
                                  data[ind].nombres+' '+data[ind].apellidos+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                            '<div class="info_inf">';

                            if($('#ss_tipo').val()=='A'){

                                html_historial+='<div class="conocimientos">';

                                for(var ind2 in data[ind].conocimientos){
                                  html_historial+='<div class="conocimiento">'+data[ind].conocimientos[ind2].nombre_conocimiento+'</div>';
                                }
                            
                              html_historial+='</div>'+
                                '<div class="valoracion">'+
                                  '<div class="btn_votar">'+
                                    '<div class="icono"></div>'+
                                    '<div class="numero">'+data[ind].calificacion+'</div>'+
                                  '</div>'+
                                '</div>';

                            }else{
                                html_historial+=
                                '<div class="conocimientos">Edad: '+
                                  fun_anios_hasta_hoy(data[ind].fecha_nacimiento.split('-')[2],data[ind].fecha_nacimiento.split('-')[1],data[ind].fecha_nacimiento.split('-')[0])+
                                '</div>'+
                                '<div class="conocimientos">'+
                                  data[ind].educacion+
                                '</div>';
                            }

                            html_historial+='</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="valoracion_clase">'+
                          '<div class="voto">'+
                            '<div class="icono '+(data[ind].calificacion_clase==2? 'negativo': '')+'"></div>'+
                          '</div>'+
                          '<div class="fecha">fecha: '+fun_formatear_fecha(data[ind].fecha,'-/?')+'</div>'+                          
                        '</div>'+    

                        '<div class="mensaje oculto">'+
                          '<span>Comentario:</span>'+
                          '<p>'+data[ind].comentario+'</p>'+
                        '</div>';
                        if($('#ss_tipo').val()=='A'){
                        html_historial += '<div class="btn_ver_msj c-celeste">'+
                          '<span class="a-pointer">Ver detalle</span>'+
                        '</div>';
                        }
                    html_historial += '</div>';





                    }

                    $('.columna_historial #resultados_mis_alumnos').html(html_historial);

                    var conteo_elementos=$('.columna_historial #paginacion_2').data('conteo');

                    var numero_paginas=Math.ceil(conteo/conteo_elementos);

                    var paginacion='';

                    for(var i=0;i<numero_paginas;i++){
                      paginacion+='<span class="btn" data-pagina="'+(i+1)+'">'+(i+1)+'</span>';
                    }

                    $('.columna_historial #paginacion_2 .btn_numeros').html(paginacion);

                    $('.columna_historial #paginacion_2 .btn_numeros .btn:first-child').click();


                  }
                }

              }

            });
          }


	</script>

      <style>
      .columna_historial{        
    height: initial !important;
      }
      .columna_historial .rol-columnas{		
        margin-top: 25px;
      }
      .columna_historial .contenido{
        max-width: 600px;
        margin: auto;
      }
      .columna_historial .comp-menu-fijo.menu-superior{
  	    background: transparent;
  	    color: gray;
        height: 40px;
        margin-top: 25px;
        font-size: 15px;
        padding-left: 15px;
      }

      .columna_historial .comp-menu-fijo.menu-superior .menu-principal .comp-menu-celda-content:after{
        position: absolute;
        height: 2px;
        width: 0px;
        background: rgb(255,87,87);
        bottom: 0px;
        left:0px;
        content: ' ';
        -webkit-transition: all .4s cubic-bezier(0,0,0.25,1);
        -moz-transition: all .4s cubic-bezier(0,0,0.25,1);
        -ms-transition: all .4s cubic-bezier(0,0,0.25,1);
        -o-transition: all .4s cubic-bezier(0,0,0.25,1);
        transition: all .4s cubic-bezier(0,0,0.25,1);
      }
    
      .columna_historial .comp-menu-fijo.menu-superior .menu-principal .comp-menu-celda-content:hover:after{
        width: 100%;
      }
      .columna_historial .comp-menu-fijo.menu-superior .menu-principal .comp-menu-celda-content.activo:after{
        width: 100%;
      }
      .columna_historial .comp-menu-fijo.menu-superior .menu-principal .comp-menu-opcion .comp-menu-celda{   
        padding-left: 30px;
        padding-right: 30px;
      }
      .columna_historial .comp-menu-fijo.menu-superior .menu-principal .comp-menu-celda-content:hover .comp-menu-celda{
      }

      .columna_historial .comp-menu-fijo.menu-superior .menu-principal .comp-menu-celda-content.activo .comp-menu-celda{
        font-weight: bold;

      }






            .columna_historial .lista_resultados .resultado{
                  margin-bottom: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
            }

            .columna_historial .lista_resultados .resultado.oculto{
				display: none;
            }
            .columna_historial .lista_resultados .resultado .content{
      				width: calc(100% - 105px);
      				display: inline-block;
      				vertical-align: middle;
            }
            .columna_historial.profesor .lista_resultados .resultado .content{
              width: 100%;
            }


            .columna_historial .columna-pagina[data-columna="mis_alumnos"] .lista_resultados .resultado .content{
				width: calc(100% - 125px);
			}

            .columna_historial .lista_resultados .foto{
              width: 65px;
              height: 65px;
              background: url(IMG/USUARIOS/WEB/profesor_default.png);
              background-position: center;
              background-repeat: no-repeat;
              background-color: gainsboro;
              background-size: 100%;
              border: 1px solid #c7c7c7;
              border-radius: 10px;
              display: inline-block;
              vertical-align: middle;
            }
            .columna_historial .lista_resultados .informacion{
              display: inline-block;
              vertical-align: middle;
              width: calc(100% - 65px);
              /*height: 70px;*/
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              -ms-box-sizing: border-box;
              -o-box-sizing: border-box;
              box-sizing: border-box;
              padding-left: 5px;
              text-align: left;
              }

              .columna_historial .lista_resultados .info_sup{

                color: gray;
			    margin-bottom: 5px;
			    margin-top: 2px;
                } 
              .columna_historial .lista_resultados .nombre .texto{

                  display: inline-block;
                  border-bottom: 1px solid gray;
                  cursor: pointer;
              }
              .columna_historial .lista_resultados .conocimientos{

                font-size: 12px;
                color: gray;
              }
              .columna_historial .lista_resultados .conocimientos .conocimiento{

                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
              }
              .columna_historial .lista_resultados .conocimientos .conocimiento.match{
                color: #7db6ff;
              }
              .columna_historial .lista_resultados .valoracion{
				margin-top: -3px;
              }

              .columna_historial .lista_resultados .valoracion .btn_votar{                 
                  cursor: default;
              }

              .columna_historial .lista_resultados .valoracion .icono{
                width: 20px;
                height: 20px;
                display: inline-block;
                background: url(IMG/valoracion_activo.png);
                vertical-align: middle;
                background-size: cover;
                background-position: center;
              }
/*
              .columna_historial .lista_resultados .valoracion .btn_votar.activo .icono {
                background-image: url(IMG/valoracion_activo.png);
              }*/
              .columna_historial .lista_resultados .valoracion .numero{
                display: inline-block;
                vertical-align: middle;
                font-size: 13px;
                color: gray;
              }

              .columna_historial .lista_resultados .valoracion_clase{
			    width: 100px;
			    display: inline-block;
			    vertical-align: top;
			    text-align: right;
			    font-size: 12px;
              }

              .columna_historial .lista_resultados .valoracion_clase .boton_invictos{
			    padding: 3px;
			    text-align: center;
    			margin-top: 20px;
              }

              .columna_historial .lista_resultados .valoracion_clase .voto{
              }

              .columna_historial .lista_resultados .valoracion_clase .voto .icono{
			    display: inline-block;
			    width: 35px;
			    height: 35px;
			    vertical-align: bottom;
			    background-size: cover;
			    background-position: center;
			    background-image: url(IMG/valoracion_activo.png);
    			margin-bottom: 10px;
              }

          	.columna_historial .lista_resultados .valoracion_clase .voto .icono.negativo{
			    background-image: url(IMG/valoracion_negativo.png);
          	}

              .columna_historial .lista_resultados .valoracion_clase .fecha{
			    font-size: 10px;
			    margin-top: 5px;
              }
				.columna-pagina[data-columna="mis_alumnos"] .valoracion_clase{
					width: 120px;
				}
              .columna-pagina[data-columna="mis_alumnos"] .valoracion_clase .fecha{
			    font-size: 13px;
			    margin: initial;
			    margin-bottom: 2px;
              }
              .columna-pagina[data-columna="mis_alumnos"] .valoracion_clase .tiempo{
			    font-size: 13px;
              }

              .columna-pagina[data-columna="mis_alumnos"] .mensaje{

			    font-size: 13px;
			    margin-top: 10px;
              }
              .columna-pagina[data-columna="mis_alumnos"] .mensaje span{
              	color: gray;
              }
				
              .columna-pagina[data-columna="mis_alumnos"] .mensaje.oculto {
              	display: none;
				
              }
				
              .columna-pagina[data-columna="mis_alumnos"] .btn_ver_msj {
              	width: 150px;
              	margin-left: auto;
    			text-align: right;
    font-size: 13px;
				
              }





              	.paginacion{
    text-align: right;

              	}
              	.paginacion .btns{
              		
              	}
              	.paginacion .flecha{
              		position: relative;
              		display: inline-block;
              		width: 20px;
              		height: 20px;
    cursor: pointer;		
    vertical-align: middle;	

              	}

              	.paginacion .flecha:hover:after{
				
    border-top: 1px solid  #ff5757;
    border-left: 1px solid  #ff5757;	
              	}
              	.paginacion .flecha:after{
    position: absolute;
    content: ' ';
    top: 25%;
    left: 25%;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(-45deg);
    width: 50%;
    height: 50%;
    border-top: 1px solid gray;
    border-left: 1px solid gray;	
              	}


              	.paginacion .flecha.der:after{

    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
              	}

              	.paginacion .btns .izq{

              	}
              	.paginacion .btns .der{
              		
              	}
              	.paginacion .btns .btn{
              		
    font-weight: bold;
              	}
              	.paginacion .btns .btn.activo{
              		    color: #ff5757;
              	}


      </style>