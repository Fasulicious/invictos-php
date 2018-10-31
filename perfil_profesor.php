     <section id="perfil_profesor" class="estilo-pagina area-pagina " data-area="perfil">
        
        <div class="contenido_perfil resultado" data-id_usuario="" data-tipo_usuario="">
          <div class="portada">
              <div class="difuminado_portada"></div>
              
              <div class="elementos_portada">
                <div class="btn_editar oculto" data-id="portada"><div class="icono"></div><span>Cambiar portada</span></div>
                <div class="foto">
                  <div class="btn_editar oculto"  data-id="foto_perfil"><div class="icono"></div><span>Cambiar foto</span></div>
                </div>
                <div class="info_portada">           
                  <div class="info">
                    <div class="nombre">Mart&iacute;n Saavedra Rojas</div>                    
                    <div class="btns_sociales">
                      <a target="blank"><div class="btn facebook"></div></a>
                      <a target="blank"><div class="btn linkedin"></div></a>
                      <a target="blank"><div class="btn twitter"></div></a>
                    </div>                                  
                  </div>
                  
                  <div class="valoracion">
                    <div class="fb-share-button"  
			    data-layout="button"
			    data-size="large"
			    style="display: block;">
  		    </div>
                    <div class="icono btn_votar_profesor"></div>
                    <div class="numero">150</div>
                    <div class="texto">Valoraci&oacute;n</div>
                  </div>
                </div>
              </div>
              
          
            <div class="popup_edit_portada">
              <div class="comp-gestion-elemento" data-titulo="" data-titulo_update="" data-elemento="foto_portada" data-objeto="foto_portada" data-accion="update" data-gestion="update" data-espaciototal="4" data-id_elemento_sesion="id">
                <bloque data-espacio="8">
                  <campo data-nombre="Cambiar portada" data-campo="portada" data-funcion="fun_cambia_portada" data-espacio="4"  data-tipo="imagen"></campo>                
                </bloque>
                
              </div>

            </div>


            <div class="popup_edit_foto_perfil">
                <div class="imagen"></div>
                
              <div class="comp-gestion-elemento" data-titulo="" data-titulo_update="" data-elemento="foto_perfil" data-objeto="foto_perfil" data-accion="update" data-gestion="update" data-espaciototal="4" data-id_elemento_sesion="id">
                <bloque data-espacio="8">
                  <campo data-nombre="Cambiar foto perfil" data-campo="foto" data-funcion="fun_cambia_foto_perfil" data-espacio="4"  data-tipo="imagen"></campo>                
                </bloque>
                
              </div>

            </div>
        
          </div>
          <div class="contenido_info">
            <div class="sup">
              <div class="izq">
                <div class="conocimientos">
                  <div class="conocimiento">Matem&aacute;ticas</div>
                  <div class="conocimiento">F&iacute;sica</div>
                  <div class="conocimiento">Lenguaje</div>
                </div>
                <div class="direccion">Los Olivos, Av Palmeras #124</div>
                <div class="enlace_mapa comp-btn-abrir-popup " data-popup='mapa_usuario'>
                  Ver mapa
                </div>
                <div class="telefono">Tel&eacute;fono: <span>123456789</span></div>
                <div class="edad">Edad: <span>32</span> a&ntilde;os</div>
                <div class="tiempo">Tiempo de ense&ntilde;anza: <span>500hrs</span></div>
                <div class="nivel">Grado de estudios: <span></span></div>
                <div class="educacion"><div class="label inline vertical-m"></div>: <span>Universidad Nacional de Ingenier&oiacute;a</span>
                </div>   

                         
                <div class="tiempo_ranking">Inscrito: <span></span></div>
                <div class="ranking">Ranking: <span>1050</span></div>
              </div>
              <div class="der">
                <div class="enlace_mapa comp-btn-abrir-popup " data-popup='mapa_usuario'>
                  Ver mapa
                </div>

                  <div class="info_ranking">
                    <div class="tiempo_ranking">Inscrito: <span></span></div>
                    <div class="ranking">Ranking: <span>1050</span></div>
                  </div>
               

              </div>
            </div>

              <div class="inf">              
                <div class="izq">
                  <div class="presentacion">
                    <div class="titulo">Presentaci&oacute;n</div>
                    <div class="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit id ut natus sequi, et, iste, minus aut tempore recusandae debitis qui provident nulla. Eligendi quo tempora assumenda ullam, culpa aspernatur.</div>
                  </div>
                  
                   <?php
                    if($_SESSION['tipo']!='P'){

                    ?>
                      <div class="contactar_profesor">
                        <?php
                        if($_SESSION['id']){

                        ?>
                        <textarea  placeholder="Escribir mensaje"></textarea>
                        <div id="enviar_msj_perfil" class="boton_invictos">Enviar</div>
                        <?php                    
                          }else{
                        ?>
                        <div class="div txt-centro">&iquest;Quieres contactarme?</div>
                        <div class="boton_invictos inicia_para_contactar comp-btn-abrir-popup" data-popup="login">
                          Inicia sesi&oacute;n
                        </div>
                        <?php 
                          }
                        ?>
                      </div>

                    <?php 
                      }
                    ?>
                  <div class="contacto_realizado">
                    Mensaje enviado
                  </div>


                </div>
                <div class="der">
                  <div class="pensamiento">
                    <div class="titulo">Pensamiento</div>
                    <div class="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis corrupti delectus quasi recusandae atque labore obcaecati, eveniet totam, et sunt, blanditiis nemo! Commodi placeat qui, cupiditate, perferendis tenetur nesciunt exercitationem.</div>
                  </div>
                </div>
              </div>


          </div>
        </div>



        

          <div class="comp-consultor-elemento" data-elemento="info_perfil" data-condicion="consulta_1" data-conteo="1" data-recarga="false">
            
            
            <condicion data-iddom="condicion_id_perfil" data-campo="id_usuario" data-valor="<?php echo $_SESSION['id'];?>"></condicion>
            <condicion data-iddom="condicion_username_perfil" data-campo="username" data-valor="<?php echo $_SESSION['username'];?>"></condicion>
              
              <estructura>
                
              </estructura>

          </div>



      </section>
      

      <script>
        $(document).ready(function(){
          $('body').on('click','.portada .btn_editar[data-id="portada"]',function(){
            $('.popup_edit_portada').show();
            $('.popup_edit_portada').css('background-image',$('.contenido_perfil .portada').css('background-image'));
            //$('.popup_edit_portada input[name="portada"]').click();
          });
          
          $('#enviar_msj_perfil').click(function(){

              fun_enviar_mensaje($('.contenido_perfil').data('id_usuario'),$('.contenido_perfil .inf .contactar_profesor textarea').val(),1); 
              $('.contenido_perfil .inf .contactar_profesor').slideUp(300);
              $('.contenido_perfil .inf .contactar_profesor textarea').val('');
              $('.contenido_perfil .inf .contacto_realizado').slideDown(300);

              
          });
        });

        function fun_cambia_portada(url){
          $('.popup_edit_portada').css('background-image','url('+url+')');
        }





        $(document).ready(function(){
          $('body').on('click','.portada .btn_editar[data-id="foto_perfil"]',function(){
            $('.popup_edit_foto_perfil').show();
            $('.popup_edit_foto_perfil .imagen').css('background-image',$('.contenido_perfil .foto').css('background-image'));
            //$('.popup_edit_portada input[name="portada"]').click();
          });
        });

        function fun_cambia_foto_perfil(url){
          $('.popup_edit_foto_perfil .imagen').css('background-image','url('+url+')');
        }


      </script>

      <style>

        .contenido_perfil .inf .contactar_profesor{
          margin-top: 30px;
        }
        .contenido_perfil .inf .contactar_profesor.oculto{
          display: none;
        }
        .contenido_perfil .inf .contactar_profesor textarea{
          width: 100%;
          outline: none;
          resize: none;
          padding: 5px 7px;
          font-size: 11px;
          border-radius: 5px;
          border: 1px solid #ccc;
          height: 70px;
        }
        .contenido_perfil .inf .contactar_profesor .boton_invictos{
          margin-top: 10px;
          width: 100px;
          text-align: center;
          margin-left: auto;
        }

        .contenido_perfil .inf .contacto_realizado{
          color:green;
          font-size: 18px;
          padding: 30px;
          display: none;
          text-align: center;
        }


      .difuminado_portada{
        z-index: 0;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10;
        width: 100%;
        height:100%;
 /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+52,000000+52,000000+100&0+54,0.47+97 */
background: -moz-linear-gradient(top,  rgba(0,0,0,0) 52%, rgba(0,0,0,0) 54%, rgba(0,0,0,0.47) 97%, rgba(0,0,0,0.47) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 52%,rgba(0,0,0,0) 54%,rgba(0,0,0,0.47) 97%,rgba(0,0,0,0.47) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(0,0,0,0) 52%,rgba(0,0,0,0) 54%,rgba(0,0,0,0.47) 97%,rgba(0,0,0,0.47) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#78000000',GradientType=0 ); /* IE6-9 */

      }
      .elementos_portada{
        position: relative;
        z-index: 10;
      }
      .popup_edit_portada{
        display:none;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10;
        width: 100%;
        height:100%;
        background-size:cover;
        background-position:center;
        background-image:url(IMG/PERFILES/PORTADAS/default.png);
      }
  .popup_edit_portada .comp-gestion-elemento{

    width: 50%;
    margin: auto;
  }
      .popup_edit_portada .comp-ge-vistas_previas{
       display: none; 
      }





      .popup_edit_foto_perfil{
        display:none;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10;
        width: 100%;
        background-color: white;
        padding-bottom: 20px;
        box-shadow: 0px 1px 1px #aaa;
      }
      .popup_edit_foto_perfil .imagen{
        width: 100%;

        background-size: 170px;
        height: 200px;
        background-image: url(IMG/USUARIOS/WEB/profesor_default.png);
        background-repeat: no-repeat;
        background-position: center;
      }
  .popup_edit_foto_perfil .comp-gestion-elemento{

    width: 50%;
    margin: auto;
  }
      .popup_edit_foto_perfil .comp-ge-vistas_previas{
       display: none; 
      }


      #perfil_profesor{
        padding-top: 80px;
        padding-left: 0px;
        padding-right: 0px;
        max-width: inherit;
        height: initial !important;
        min-height: 100vh;
        padding-bottom: 20px;
      }
      #perfil_profesor .comp-consultor-elemento[data-elemento="info_perfil"]{
        display: none;
      }
      .contenido_perfil{
        
      }
      .contenido_perfil .portada{
        height: 150px;
        background-size:cover;
        background-position:center;
        background-image:url(IMG/PERFILES/PORTADAS/default.png);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0px 30px 0px 40px;
        position: relative;

      }
      .contenido_perfil .portada .foto{    
        width: 130px;
        height: 130px;
        background: url(IMG/USUARIOS/WEB/profesor_default.png);
        background-position: center;
        background-repeat: no-repeat;
        background-color: gainsboro;
        background-size: cover;
        border: 1px solid #c7c7c7;
        border-radius: 10px;
        vertical-align: bottom;
        -webkit-transform: translate3d(0px,100px,0px);
        -moz-transform: translate3d(0px,100px,0px);
        -ms-transform: translate3d(0px,100px,0px);
        -o-transform: translate3d(0px,100px,0px);
        transform: translate3d(0px,100px,0px);
        display: inline-block;
        position: relative;

      }
      .contenido_perfil .portada .foto .btn_editar{ 
        position: absolute;
        top: initial;
        bottom: 0px;
        width: 100%;
        text-align: center;
        left: 0px;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0px 0px 8px 8px;
      }


      .contenido_perfil .portada .info_portada{        
    vertical-align: bottom;
        width: calc(100% - 135px);
        display: inline-block;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    padding-left: 15px;

      }

      .contenido_perfil .portada .btn_editar{ 

        position: absolute;
        top: 10px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 8px;
        padding: 3px 15px 3px 5px;
        left: 40px;
        cursor: pointer;

      }
      .contenido_perfil .portada .btn_editar.oculto{ 
        display: none;
      }
      .contenido_perfil .portada .btn_editar .icono{ 

        background-image: url(IMG/PERFILES/editar.png);
        width: 20px;
        height: 20px;
        background-size: 100%;
        background-position: center;
        display: inline-block;
        vertical-align: middle;

      }

      .contenido_perfil .portada .btn_editar span{ 
        color: white;
        font-size: 12px;
        margin-left: 10px;
        display: inline-block;
        vertical-align: middle;
      }
      .contenido_perfil .portada .btn_editar:hover span{ 
        text-decoration:underline;
      }
      .contenido_perfil .portada .info_portada .info{
        width: calc(100% - 145px);
        display: inline-block;
      }
      .contenido_perfil .portada .info_portada .info .nombre{
        color: white;
        border-bottom:1px solid white;
        display: inline-block;
        vertical-align: middle;
        font-weight: bold;
        font-size:18px;
      }
      .contenido_perfil .portada .info_portada .info .btns_sociales{
        display: inline-block;
        vertical-align: middle;
        margin-left: 20px;
      }
      .contenido_perfil .portada .info_portada .info .btns_sociales .btn{
        display: inline-block;
        vertical-align: middle;
        margin-right: 2px;
        width: 30px;
        height: 30px;
        background-size: cover;
        background-position: center;
      }
      .contenido_perfil .portada .info_portada .info .btns_sociales .btn.facebook{
        background-image:url(IMG/PERFILES/facebook.png);
      }
      .contenido_perfil .portada .info_portada .info .btns_sociales .btn.twitter{
        background-image:url(IMG/PERFILES/twitter.png);
      }
      .contenido_perfil .portada .info_portada .info .btns_sociales .btn.linkedin{
        background-image:url(IMG/PERFILES/linkedin.png);
      }
      
      .contenido_perfil .portada .info_portada .valoracion{
    color: #f1f1f1;
    font-size: 13px;
    display: inline-block;
    text-align: right;
    width: 140px;
      }
      .contenido_perfil .portada .info_portada .valoracion .icono{
        background-image:url(IMG/valoracion.png);        
        width: 25px;
        height: 25px;
        background-size: cover;
        background-position: center;
        display: inline-block;
        vertical-align:middle;
      }
      .contenido_perfil .portada .info_portada .valoracion .icono.activo{
        background-image:url(IMG/valoracion_activo.png);   
      }
      .contenido_perfil .portada .info_portada .valoracion .numero{
        
        background-size: cover;
        background-position: center;
        display: inline-block;
        vertical-align:middle;
      }
      .contenido_perfil .portada .info_portada .valoracion .texto{
        background-size: cover;
        background-position: center;
        display: inline-block;
        vertical-align:middle;
        
      }
  

      .contenido_perfil .contenido_info{
        padding: 10px 30px 10px 190px;
        color:gray;
      }

      .contenido_perfil .contenido_info .sup{
        font-size:12px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom:1px solid gray; 
        padding-bottom: 15px;
      }
      .contenido_perfil .contenido_info .sup .izq{
        width: calc(100% - 145px);
        display: inline-block;
        vertical-align: top;
      }
      .contenido_perfil .contenido_info .sup .izq .conocimientos{
      }
      .contenido_perfil .contenido_info .sup .izq .conocimientos .conocimiento{
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        color: #7db6ff;
      }
      .contenido_perfil .contenido_info .sup .izq .direccion,
      .contenido_perfil .contenido_info .sup .izq .edad,
      .contenido_perfil .contenido_info .sup .izq .nivel,
      .contenido_perfil .contenido_info .sup .izq .tiempo,
      .contenido_perfil .contenido_info .sup .izq .educacion,
      .contenido_perfil .contenido_info .sup .izq .telefono{
        margin-top: 3px;
      }
      .contenido_perfil .contenido_info .sup .izq .edad.oculto,
      .contenido_perfil .contenido_info .sup .izq .telefono.oculto{
        display: none;
      }
      .contenido_perfil.alumno .contenido_info .sup .izq .telefono,
      .contenido_perfil.alumno .contenido_info .sup .izq .tiempo{
        display: none;
      }
      .contenido_perfil.profesor .contenido_info .sup .izq .nivel,
      .contenido_perfil .contenido_info .sup .izq  .tiempo_ranking,
      .contenido_perfil .contenido_info .sup .izq  .ranking{
        display: none;
      }

      .contenido_perfil .contenido_info .sup .izq .enlace_mapa{
        color: #7db6ff;
        cursor:pointer;
        display: none;
      }
      .contenido_perfil .contenido_info .sup .der{
        position: relative;
        width: 140px;
        display: inline-block;
        vertical-align: top;
        height: 100px;
      }
      .contenido_perfil .contenido_info .sup .der .enlace_mapa{
        position: absolute;
        color: #7db6ff;
        cursor:pointer;
        right: 0px;
        top:0px;
      }
      .contenido_perfil .contenido_info .sup .der .enlace_mapa:hover{
        text-decoration:underline;
      }
      .contenido_perfil .contenido_info .sup .der .info_ranking{
        position: absolute;
        text-align: right;
        bottom: 0px;
        right: 0px;
      }

      .contenido_perfil.alumno .contenido_info .sup .der .info_ranking{
        display: none;
      }

      .contenido_perfil .contenido_info .inf{
        text-align: center;
        font-size: 13px;
        padding-top: 15px;
      }
      .contenido_perfil.alumno .contenido_info .inf{
        display: none;
      }
      .contenido_perfil .contenido_info .inf .izq,
      .contenido_perfil .contenido_info .inf .der{
        width: calc(50% - 2px);
        display:inline-block;
        vertical-align:top;
        text-align: justify;
      }
      .contenido_perfil .contenido_info .inf .izq .presentacion{

    padding-right: 30px;
      }

      .contenido_perfil .contenido_info .inf .izq .titulo,
      .contenido_perfil .contenido_info .inf .der .titulo{
    font-size: 15px;
    padding-bottom: 7px;
      }

.inicia_para_contactar{

    width: 150px !important;
    margin: auto !important;
    margin-top: 10px !important;
}
      </style>



<?php
  include('VISTAS_PERFIL_PROFESOR/popup_mapa_usuario.html');
  
?>



