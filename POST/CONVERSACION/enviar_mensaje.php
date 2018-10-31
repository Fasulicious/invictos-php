<?php
session_start();

require_once("../../CONEXION/Conexion.php");
require_once("../../DAO/DAOConversacion.php");


$DAOConversacion=new DAOConversacion();
	
	$respuesta=$DAOConversacion->obtener_tipo_usuario($_POST['id_usuario']);


	$r=$DAOConversacion->insertar_mensaje($_SESSION['id'],$_POST['id_usuario'],$_SESSION['tipo'],$respuesta->tipo,$_POST['mensaje']);



if($_POST['n']==1){


	$respuesta=$DAOConversacion->obtener_correo_usuario($_POST['id_usuario']);
	if(!$respuesta['error']){


	if(filter_var($respuesta['data'], FILTER_VALIDATE_EMAIL)){


			require_once("../../COMPONENTES/LOGIN/POST/config.php");
			require_once("../../COMPONENTES/UTIL_PHP/phpmailer/PHPMailerAutoload.php");
			require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.phpmailer.php");
			require_once("../../COMPONENTES/UTIL_PHP/phpmailer/class.smtp.php");




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
			$mail->AddAddress($respuesta['data']); //direccion de destino

			$mail->Subject=$_SESSION['nombres'].' '.$_SESSION['apellidos'].' se quiere poner en contacto contigo';
			

			$mensaje_corto=substr($_POST['mensaje'], 0,140);

			if(count($_POST['mensaje'])>140){
				$mensaje_corto=$mensaje_corto.'...';			
			}

			$foto=$_SESSION['foto'];
			if(empty($foto)){
				$foto='alumno_default.png';
			}

					
						$mail->Body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
	                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">Nuevo mensaje</h2>
	                         Te han enviado un mensaje nuevo a tu cuenta de Invictos.
	                          
	                          </td>
	                          <td width="5%"></td>
	                          </tr>

	                      </table>

	                        <table width="90%" height="150px" align="center" style="background: #eeeeee;"  cellspacing="0" cellpadding="0">
	                          
	                          <tr>
	                          <td width="5%"></td>
	                          <td width="90%">

	                          <div style=" width: 350px; height: 90px; margin:auto; margin-bottom: 10px;   margin-top: 35px;">
	                              <div style="display: inline-block; vertical-align: middle; width: 80px; height: 80px; background-color: rgb(219,219,219);  border-radius: 4px;    border: 1px solid #d0d0d0;">
	                              <img style="border-radius: 4px;" width="80px" height="80px" src="http://'.$config->dir_raiz.'/IMG/USUARIOS/WEB/'.$foto.'"/>
	                              </div>
	                              <div style="display: inline-block; vertical-align: middle; color:gray;         width: 250px;   padding-left: 10px;" >
	                                <div style="font-size: 18px; display: inline-block; border-bottom: 1px solid gray;">
	                                  '.$_SESSION['nombres'].' '.$_SESSION['apellidos'].'
	                                </div>
	                                <div style="font-size: 13px; padding-top: 4px;">
	                                '.$mensaje_corto.'
	                                </div>
	                              </div>
	                          </div>

	                            <div style="background-color:rgb(223, 70, 70); border-radius:30px;  width: 200px;  margin:auto;     margin-bottom: 20px;">
	                                <a style="text-decoration:none;" href="http://'.$config->dir_raiz.'/MENSAJES/'.$_SESSION['id'].'" target="blank">
	                                <table style="text-align:center;  color: white; font-size: 18px;" align="center" height="50px" cellpadding="0" cellspacing="0">
	                                <tr> 
	                                  <td>
	                                    Leer tu mensaje
	                                  </td>                                  
	                                </tr>
	                              </table>

	                            </a>

	                            </div>

	                          </td>
	                          <td width="5%"></td>
	                          </tr>

	                      </table>
	                      <table width="90%" height="150px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
	                          
	                          <tr>
	                          <td></td>
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
	             $mail->Send();

	

	}


	}


}

	print json_encode($r);




?>