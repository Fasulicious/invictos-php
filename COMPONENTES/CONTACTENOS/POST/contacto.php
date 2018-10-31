<?php
session_start();

require_once("../../UTIL_PHP/verificacion.php");

//require_once("../../UTIL_PHP/phpmailer/PHPMailerAutoload.php");
require_once("config.php");
require_once("../../UTIL_PHP/phpmailer/PHPMailerAutoload.php");

require_once("../../UTIL_PHP/phpmailer/class.phpmailer.php");
require_once("../../UTIL_PHP/phpmailer/class.smtp.php");





$info_error=array("error"=>false);	

	foreach($_POST as $campo=>$valor){


		if($valor==''){
			$info_error=array('error'=>true,'detalle'=>'vacio','campo'=>$campo);
		}else{



			if($GL_ELEMENTOS[$_POST['motivo']]->estructura[$campo]['tipo']=='email' && !filter_var($valor, FILTER_VALIDATE_EMAIL)){

				$info_error=array('error'=>true,'detalle'=>'email','campo'=>$campo);
				
			}
		}

		if($info_error['error']){
			break;
		}

	}


	foreach($_FILES as $campo=>$valor){
		if($valor['error']!=UPLOAD_ERR_OK){

			$info_error=array('error'=>true,'detalle'=>'vacio','campo'=>$campo);
		}

		if($info_error['error']){
			break;
		}
	}


if($info_error['error']){
	echo json_encode($info_error);
}else{


		$mail = new PHPMailer;
		$mail->SMTPOptions = array(
		    'ssl' => array(
		        'verify_peer' => false,
		        'verify_peer_name' => false,
		        'allow_self_signed' => true
		    )
		);

		$mail->Mailer="smtp";
		$mail->IsSMTP();
		$mail->Helo = $GL_DIR_PAGINA; //Muy importante para que llegue a hotmail y otros
		$mail->SMTPAuth=true;
		$mail->Host = $GL_HOST_MAIL;
		$mail->Port=25; //depende de lo que te indique tu ISP. El default es 25, pero nuestro ISP lo tiene puesto al 26
		$mail->Username = $GL_USER_MAIL;
		$mail->Password=$GL_PASS_USER_MAIL;
		$mail->From='websender@mindtec.pe';
		$mail->FromName='Invictos';
		$mail->Timeout=60;
		$mail->IsHTML(true);
		//Enviamos el correo
		//$mail->AddAddress($GL_USER_MAIL); 
		//$mail->AddAddress('reyarturo_zafiro@hotmail.com');


			foreach($GL_ELEMENTOS[$_POST['motivo']]->receptor_mail as $receptor){
				$mail->AddAddress($receptor);
			}



		

		switch($_POST['motivo']){

			case 'contacto':
		
		$mail->Subject=$_POST['nombre'].' se puso en contacto desde la Web '.$GL_NOMBRE_PAGINA;

				$body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
							  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />      
							  <html>
							  
							  <body>
							              
							  <table width="100%" cellspacing="0" cellpadding="0">
							    <tr> 
							      <td style="height:60px; text-align: center;"><img src="http://'.$GL_DIR_RAIZ.'/IMG/MSJ_CONTACTO/cabecera.png"></td>
							    </tr>

							    <tr>
							      <td width="100%" style="border-top: 1px solid rgb(204,204,204); background: #eeeeee;">
							        <table width="90%" height="400px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
							            
							            <tr>
							            <td width="5%"></td>
							            <td width="90%"><h2 style="color:#ff5757;">Mensaje recibido</h2><br>
							            '.$_POST['mensaje'].'.
							            </td>
							            <td width="5%"></td>
							            </tr>
										
							            <tr>	
							            <td height="250px"> </td>
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

					$body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
                          <td width="5%"></td><td width="90%"><h2 style="color:#ff5757;">Recomendaci&oacute;n</h2>
                            Tienes un nuevo mensaje de recomendaci&oacute;n
                          
                          </td>
                          <td width="5%"></td>
                          </tr>

                      </table>

                        <table width="90%" height="150px" align="center" style="background: #eeeeee;"  cellspacing="0" cellpadding="0">
                          
                          <tr>
                          <td width="5%"></td>
                          <td width="90%">
                          <div style="     width: 400px;    height: 120px;    margin: auto;    margin-bottom: 25px;    margin-top: 25px;    padding: 15px 15px 30px 15px;    background: white;    border: 1px solid #ccc;    border-radius: 5px;">
                          

                              <div style="    font-size: 20px;    margin-bottom: 5px;">
                                Recomendaci&oacute;n
                              </div>
                              <div style="    padding-bottom: 7px; border-bottom: 1px solid #d8d8d8;    margin-bottom: 13px; color:gray;  ">
                              <a href="http://'.$config->dir_raiz.'">Alfonso Mu&ntilde;oz</a> te recomienda al profesor:
                              </div>
                              <a href="http://'.$config->dir_raiz.'" style="margin-left: 60px;">
                              <div style="display: inline-block; vertical-align: middle; width: 60px; height: 60px; background-color: rgb(219,219,219);  border-radius: 4px;    border: 1px solid #d0d0d0;">

                              <img width="60px" height="60px" src="http://'.$config->dir_raiz.'/IMG/USUARIOS/WEB/profesor_default.png"/>
                              </div>

                              <div style="display: inline-block; vertical-align: middle; color:gray;     width: 260px;    padding-left: 5px;" >
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
                                </div>

                              </div>
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
              </html>';*/
			break;


			case 'pago':

		$mail->Subject=$_POST['nombre'].' ha enviado su pago de Invictos';

				$body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
							  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />      
							  <html>
							  
							  <body>
							              
							  <table width="100%" cellspacing="0" cellpadding="0">
							    <tr> 
							      <td style="height:60px; text-align: center;"><img src="http://'.$GL_DIR_RAIZ.'/IMG/MSJ_CONTACTO/cabecera.png"></td>
							    </tr>

							    <tr>
							      <td width="100%" style="border-top: 1px solid rgb(204,204,204); background: #eeeeee;">
							        <table width="90%" height="400px" align="center" style="background: white;"  cellspacing="0" cellpadding="0">
							            
							            <tr>
							            <td width="5%"></td>
							            <td width="90%"><h2 style="color:#ff5757;">Pago recibido</h2><br>
							            El usuario '.$_SESSION['nombres'].' '.$_SESSION['apellidos'].' te ha enviado su voucher de pago pendiente.<br>
							            Su ID de usuario es: '.$_SESSION['id'].'
				<br>
				<br>
				<br>
	                            <div style="background-color:rgb(223, 70, 70); border-radius:30px;  width: 250px;  margin:auto;  ">
	                                <a style="text-decoration:none;" href="http://'.$GL_DIR_RAIZ.'/ADMIN" target="blank">
	                                <table style="text-align:center;  color: white; font-size: 18px;" align="center" height="50px" cellpadding="0" cellspacing="0">
	                                <tr> 
	                                  <td>
	                                    Ir al administrador Invictos
	                                  </td>                                  
	                                </tr>
	                              </table>

	                            </a>

	                            </div>


							            </td>
							            <td width="5%"></td>
							            </tr>
										
							            <tr>	
							            <td height="250px"> 

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
			break;
		}
		

		/*
		$body='
			Datos recibidos
		<br/><br/>';

			foreach($_POST as $campo=>$valor){
				if($campo!='motivo'){

					if($GL_ELEMENTOS[$_POST['motivo']]->estructura[$campo]['tipo']=='check'){
						if($valor=='true'){
							$body.='<div><h3>'.$GL_ELEMENTOS[$_POST['motivo']]->estructura[$campo]['label'].'</h3></div><br>	';
						}
					}else{

						$body.='<div><h3>'.$GL_ELEMENTOS[$_POST['motivo']]->estructura[$campo]['label'].'</h3>'.$valor.' </div><br>	';

					}

				}
			}

*/

			foreach($_FILES as $campo=>$valor){		
				$mail->AddAttachment($valor['tmp_name'], $valor['name']);
			}


			
		$mail->Body=$body;
		//$mail->AltBody="Texto que debe decir lo mismo que el Body, pero sin etiquetas HTML";
		$mail->Send();	
	
	/*  if(!$mail->Send()) {
        echo 'Message was not sent.';
        echo 'Mailer error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent.';
    }*/

	echo json_encode(array('error'=>false));

}

?>