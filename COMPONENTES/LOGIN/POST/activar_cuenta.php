<?php
session_start();
header('Access-Control-Allow-Origin: *');
require_once('../../CONEXION/Conexion.php');
require_once("../DAO/DAOLogin.php");
require_once("../../UTIL_PHP/verificacion.php");

$DAOLogin=new DAOLogin();

	if(valida_string_solo_letras_numeros($_POST['codigo_activacion'])  ){
			
		$respuesta=$DAOLogin->activar_cuenta($_POST['id_user'],$_POST['codigo_activacion']);	

		if($respuesta!='mysql_no'){

			if($respuesta['respuesta']=='activado'){

				$_SESSION['id']=$respuesta['id'];
				$_SESSION['username']=$respuesta['username'];
				$_SESSION['id_fb']=$respuesta['id_fb'];
				$_SESSION['correo']=$respuesta['correo'];
				$_SESSION['latitud_ini']=$respuesta['latitud_ini'];
				$_SESSION['longitud_ini']=$respuesta['longitud_ini'];
				$_SESSION['nombres']=$respuesta['nombres'];
				$_SESSION['apellidos']=$respuesta['apellidos'];
				$_SESSION['tipo']=$respuesta['tipo'];
				$_SESSION['foto']=$respuesta['foto'];
				$_SESSION['usuario_activo']=1;
				$_SESSION['situacion_usuario']=1;

				if($_SESSION['tipo']=='P'){
					$mensaje_al_usuario='Hoy te damos la bienvenida a la plataforma Invictos donde podr&aacute;s ser contactado por alumnos que necesiten repotenciar sus conocimientos en temas y/o cursos de tu dominio.';
				}else{
					$mensaje_al_usuario='Hoy te damos la bienvenida a la plataforma Invictos donde podr&aacute;s repotenciar tus conocimientos de la mano de los profesores que se encuentran en actividad en sus respectivas &aacute;reas.';
				}
				
				

					require_once("../../UTIL_PHP/phpmailer/PHPMailerAutoload.php");

					require_once("../../UTIL_PHP/phpmailer/class.phpmailer.php");
					require_once("../../UTIL_PHP/phpmailer/class.smtp.php");
					require('config.php');
									

					$config=new COMP_LOGIN_CONFIG();


					$mail=new PHPMailer();
					$mail->SMTPOptions = array(
					    'ssl' => array(
					        'verify_peer' => false,
					        'verify_peer_name' => false,
					        'allow_self_signed' => true
					    )
					);
					$mail->Mailer="smtp";
					$mail->IsSMTP();
					$mail->Helo = $config->dir_pagina; //Muy importante para que llegue a hotmail y otros
					$mail->SMTPAuth=true;
					$mail->Host = $config->host_mail;
					$mail->Port=25; //depende de lo que te indique tu ISP. El default es 25, pero nuestro ISP lo tiene puesto al 26
					$mail->Username = $config->user_mail;
					$mail->Password=$config->pass_user_mail;
					$mail->From=$config->dir_correo_emisor;
					$mail->FromName=$config->nombre_pagina;
					$mail->Timeout=60;
					$mail->IsHTML(true);
					//Enviamos el correo
					//$mail->AddAddress($GL_USER_MAIL); 
					$mail->AddAddress($respuesta['correo']); //direccion de destino
					$mail->Subject= $config->nombre_pagina.' te da la bienvenida - Cuenta activada';
					
					
					$mail->Body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />      
                <html>
                
                <body>
                            
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr> 
                    <td style="height:60px; text-align: center;"><img src="http://'.$config->dir_raiz.'/IMG/MSJ_CONTACTO/cabecera.png"></td>
                  </tr>

                  <tr>
                    <td width="100%" style="border-top: 1px solid rgb(204,204,204); background: #eeeeee;">
                      

                      <table width="90%"  align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr width="100%">
                            <td width="100%"><img width="100%" src="http://'.$config->dir_raiz.'/IMG/MSJ_CONTACTO/banner.png">
                            </td>
                          </tr>

                      <table width="90%" height="400px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">Bienvenido, '.$respuesta['nombres'].' '.$respuesta['apellidos'].'</h2>
                          '.$mensaje_al_usuario.' No olvides completar la informaci&oacute;n de <a style="" href="http://'.$config->dir_raiz.'/'.$respuesta['id'].'" target="blank">tu perfil</a>.
                          <br>
                          <br>
                          &iexcl;Invictos te desea el mayor de los &eacute;xitos!
                          <br>
                          <br>
                          <br>
                          <br>
                          <br>
                          <a style="text-decoration:none;" href="http://'.$config->dir_raiz.'/'.$respuesta['id'].'" target="blank"><table style="text-align:center; background-color:rgb(223, 70, 70); color: white; border-radius:30px; font-size: 18px;" align="center" width="200px" height="50px" cellpadding="0" cellspacing="0">
                            <tr> 
                              <td>
                                Ir a Invictos
                              </td>
                              
                            </tr>
                          </table>
                          </a>
                          </td>
                          <td width="5%"></td>
                          </tr>

                          <tr>
                          <td height="50px"> </td>
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

		/*			
 if(!$mail->Send()) {
        echo 'Message was not sent.';
        echo 'Mailer error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent.';
    }
*/
					
					//$mail->AltBody="Texto que debe decir lo mismo que el Body, pero sin etiquetas HTML";
					$mail->Send();	
					



			}

			echo $respuesta['respuesta'];

		}else{
			echo 'mysql_no';
		}

	}else{
		echo "no permitido";
	}


?>