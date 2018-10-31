<?php
  
    
class COMP_LOGIN_CONFIG{

  var $nombre_pagina='Invictos';
  var $dir_pagina='local.dantevidal.com';
  var $dir_raiz='local.dantevidal.com/INVICTOS';
  var $host_mail='webmail.dantevidal.com';

  var $user_mail='websender@dantejeffar.com';
  var $pass_user_mail='Jeffar123456+';


  var $activar_usuario=true; //esta variable le dice al sistema que es necesario activar un usuario con una clave que se envía al correo del nuevo usuario

  var $mensaje_registro="Bienvenido a Invictos, ahora podr&aacute;s publicar en nuestra web y lograr vender o alquilar m&aacute;s r&aacute;pido tus inmuebles.";
  var $dir_correo_emisor='websender@dantejeffar.com';
  var $color_cab_correo='green';
}

      $config=new COMP_LOGIN_CONFIG();


echo '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />      
                <html>
                
                <body>
                            
                <table style="min-width:500px;" width="100%" cellspacing="0" cellpadding="0">
                  <tr> 
                    <td style="height:60px; text-align: center;"><img src="http://'.$config->dir_raiz.'/IMG/MSJ_CONTACTO/cabecera.png"></td>
                  </tr>

                  <tr>
                    <td width="100%" style="border-top: 1px solid rgb(204,204,204); background: #eeeeee;">
                      <table width="90%" height="150px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">No olvides calificar a tu profesor</h2>
                            No te olvides de calificar a tu profesor y seleccionar los criterios de evaluaci&oacute;n, o reportar si algo estuvo mal con tu experiencia.
                          
                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>

                        <table width="90%" height="150px" align="center" style="background: #eeeeee;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td>
                          <td width="90%">
                          <div style="     width: 400px;    min-height: 60px;    margin: auto;    margin-bottom: 5px;    margin-top: 25px;    padding: 15px 15px 13px 15px;    background: white;    border: 1px solid #ccc;    border-radius: 5px;">
                          
                              
                              <a href="" style="">
                              <div style="display: inline-block; vertical-align: middle; width: 60px; height: 60px; background-color: rgb(219,219,219);  border-radius: 4px;    border: 1px solid #d0d0d0;">

                              <img width="60px" height="60px" src="http://'.$config->dir_raiz.'/IMG/USUARIOS/WEB/profesor_default.png"/>
                              </div>

                              <div style="display: inline-block; vertical-align: top; color:gray;     width: 270px;    padding-left: 5px;     padding-top: 3px;" >
                                <div style="font-size: 18px; display: inline-block; border-bottom: 1px solid gray;">
                                  Nombre Profesor
                                </div>
                                <div style="font-size: 13px; padding-top: 4px;">
                                <div style="font-size: 12px;">
                                  <div style="display:inline-block; vertical-align:middle; margin-right:5px;">Materia 1</div>
                                  <div style="display:inline-block; vertical-align:middle; margin-right:5px;">Materia 2</div>
                                  <div style="display:inline-block; vertical-align:middle; margin-right:5px;">Materia 3</div>
                                </div>
                                <img style="display:inline-block; vertical-align:middle;" width="20px" height="20px" src="http://'.$config->dir_raiz.'/IMG/valoracion_activo.png">
                                <span style="display:inline-block; vertical-align:middle;">65</span>

                                <div>

                                </div>
                                </div>

                              </div>
                          

                              </a>

                          </div>

                              <div style=" padding-top:10px;  width: 440px; text-align: right; margin: auto; margin-bottom:20px;">
                                <div style="display: inline-block; text-align: center; width: 100px; color: gray;    margin-left: 5px;">
                                  <div style="padding-bottom: 3px; border-bottom:1px solid gray;">
                                    Tiempo
                                  </div>
                                  <div style="padding-top: 2px;">
                                    <b>02:00 hrs</b>
                                  </div>
                                </div>
                                <div style="display: inline-block; text-align: center; width: 100px; color: gray;    margin-left: 5px;">
                                  <div style="padding-bottom: 3px; border-bottom:1px solid gray;">
                                    Precio total
                                  </div>
                                  <div style="padding-top: 2px;">
                                    <b>S/. 50.00</b>
                                  </div>
                                </div>
                                <div style="display: inline-block; text-align: center; width: 100px; color: gray;     margin-left: 5px;">
                                  <div style="padding-bottom: 3px; border-bottom:1px solid gray;">
                                    Fecha
                                  </div>
                                  <div style="padding-top: 2px;">
                                    <b>10/06/2016</b>
                                  </div>
                                </div>


                              </div>

                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>
                      <table width="90%" height="150px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td>
<div style="background-color:rgb(223, 70, 70); border-radius:30px;  width: 200px;  margin:auto;     margin-bottom: 60px;">
                                  <a style="text-decoration:none;" href="http://'.$config->dir_raiz.'/mensajes/ID" target="blank">
                                  <table style="text-align:center;  color: white; font-size: 18px;" align="center" height="50px" cellpadding="0" cellspacing="0">
                                  <tr> 
                                    <td>
                                      Revisar conversaci&oacute;n
                                    </td>                                  
                                  </tr>
                                </table>

                              </a>

                              </div>
                          </td>
                          </tr>

                      </table>
                      
                    </td>
                </tr>
                
                <tr>
                  <td width="100%" style="background-color:rgb(223, 70, 70); height:15px; color:white; text-align:center;">
                    <table   width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td  height="35px">Copyright &copy; 2016 Invictos</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                </table>
                
                </body>
              </html>';
?>