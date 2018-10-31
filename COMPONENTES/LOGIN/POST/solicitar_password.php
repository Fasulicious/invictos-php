<?php
session_start();
header('Access-Control-Allow-Origin: *');
require_once("../../CONEXION/Conexion.php");
require_once("../DAO/DAOLogin.php");
require_once("../../UTIL_PHP/verificacion.php");
require_once("../../UTIL_PHP/variables_globales.php");

require_once("../../UTIL_PHP/phpmailer/PHPMailerAutoload.php");

require_once("../../UTIL_PHP/phpmailer/class.phpmailer.php");
require_once("../../UTIL_PHP/phpmailer/class.smtp.php");
require('config.php');

$DAOLogin=new DAOLogin();

	if(empty($_POST['correo'])){
		$resultado=array("error"=>true,'detalle'=>'sin_correo');
	}else{

		if(!filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL)){
				
			$resultado=array("error"=>true,'detalle'=>'no_es_correo');
		
	}else{

	
		$resultado=$DAOLogin->solicitar_password($_POST['correo']);	
		
		if(!$resultado['error']){

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
				$mail->AddAddress($_POST['correo']); //direccion de destino
				$mail->Subject= $config->nombre_pagina.' - Solicitud de Password';

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
		                      <table width="90%" height="400px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
		                          
		                          <tr>
		                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">Recuperaci&oacute;n de contrase&ntilde;a</h2><br>
		                          Nos has solicitado tu contrase&ntilde;a desde el nuestro portal '.$config->nombre_pagina.':
		                          <br>
		                          <br>
		                          <b>Tu contrase&ntilde;a es: '.$resultado['data'].'</b>
		                          <br>
		                          <br>
		                          <a style="text-decoration:none;" href="http://'.$config->dir_raiz.'" target="blank"><table style="text-align:center; background-color:rgb(223, 70, 70); color: white; border-radius:30px; font-size: 18px;" align="center" width="200px" height="50px" cellpadding="0" cellspacing="0">
		                            <tr> 
		                              <td>
		                                Ir a Invictos
		                              </td>
		                              
		                            </tr>
		                          </table>
		                          </a>
		                          <br>
		                          <br>
		                          Si t&uacute; no has solicitado tu contrase&ntilde;a, por favor ignora este correo.
		                          </td>
		                          <td width="5%"></td>
		                          </tr>

		                          <tr>
		                          <td height="150px"> </td>
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


				
				//$mail->AltBody="Texto que debe decir lo mismo que el Body, pero sin etiquetas HTML";
				$mail->Send();	
				


				$resultado=array("error"=>false,'detalle'=>'ok_recuperacion');
			
		}
			
	}
	}
				echo json_encode($resultado);
		


?>