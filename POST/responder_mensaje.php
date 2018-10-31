<?php
session_start();

require_once("../CONEXION/Conexion.php");
require_once("../DAO/AVISOS/DAOAvisos.php");
require_once("config_contacto_aviso.php");


$DAOAvisos=new DAOAvisos();

				
	$r=$DAOAvisos->responder_mensaje($_SESSION['id'],$_POST['id_mensaje'],$_POST['mensaje']);


require_once("../UTIL/phpmailer/class.phpmailer.php");
require_once("../UTIL/variables_globales.php");

/*
$GL_NOMBRE_PAGINA='Inmovidi';
$GL_DIR_PAGINA='www.inmovidi.pe';
$GL_HOST_MAIL='webmail.inmovidi.pe';

$GL_USER_MAIL='sender@inmovidi.pe';
$GL_PASS_USER_MAIL='Senderi123+';*/

echo $_POST['correo'];
			
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
	$mail->Helo = $GL_DIR_PAGINA; //Muy importante para que llegue a hotmail y otros
	$mail->SMTPAuth=true;
	$mail->Host = $GL_HOST_MAIL;
	$mail->Port=25; //depende de lo que te indique tu ISP. El default es 25, pero nuestro ISP lo tiene puesto al 26
	$mail->Username = $GL_USER_MAIL;
	$mail->Password=$GL_PASS_USER_MAIL;
	$mail->From=$_SESSION['user'];
	$mail->FromName=$_SESSION['nombre'];
	$mail->Timeout=60;
	$mail->IsHTML(true);
	//Enviamos el correo
	//$mail->AddAddress($GL_USER_MAIL); 
	$mail->AddAddress($_POST['correo']); //Puede ser Hotmail
	$mail->Subject=$_SESSION['nombre'].' ha respondido a tu consulta desde la web '.$GL_NOMBRE_PAGINA;
	$body='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
					 
		<html>
		
		<body>
		<br/>	
						
			<table>
				<tr>
					<td width="750px" style="padding-left:20px;font-size:40px;font-weight:bold;color:white;background:rgba(20, 22, 113, 1);height:55px;padding-top:5px;">Inmovidi</td>
				</tr>
			</table>

		<br/>	
		<br/>	
		'.$_SESSION['nombre'].' ha respondido a tu consulta desde la web '.$GL_NOMBRE_PAGINA.', debido a que te pusiste en contacto desde el siguiente aviso inmobiliario:


		<br/>	
		<br/>	
			<a href="'.$GL_DNS.'/anuncios/'.$_POST['id_aviso'].'_'.$_POST['aviso_id_text'].'" style="color:black; text-decoration:none;" target="blank">
				<table width="500px">
					<tr>
						<td width="150px"  style="vertical-align: sub;"><img src="'.$GL_DNS.'/IMG/AVISOS/VISTA_PREVIA/MINI/'.$_POST['aviso_id_img'].'.'.$_POST['aviso_ext_img'].'"></td>
						<td width="320px"><span style="font-weight:bold; font-size:18px;"> '.$_POST['aviso_titulo'].'</span> <br> <span style="margin:10px 0px 10px 0px; font-size:16px;">'.$_POST['aviso_precio'].'</span> <br>'.$_POST['aviso_direccion'].'</td>
					</tr>
				</table>
			</a>

			<br/>
			<br/>

		El mensaje es el siguiente, y puedes responder a este correo para continuar manteniendo contacto con quien publico el anuncio:	

		<h3>Mensaje</h3> '.$_POST['mensaje'].'<br>	
		
		</body>
		</html>
	';
	
	$mail->Body=$body;
	//$mail->AltBody="Texto que debe decir lo mismo que el Body, pero sin etiquetas HTML";
	$mail->Send();	
	


	if($r){

		print json_encode($r);
	}else{
		print 'no data';
	}


?>