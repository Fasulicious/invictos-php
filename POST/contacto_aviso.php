<?php
session_start();
header('Access-Control-Allow-Origin: *');


require_once("../UTIL/phpmailer/class.phpmailer.php");
require_once("../UTIL/variables_globales.php");
require_once("../CONEXION/Conexion.php");
require_once("config_contacto_aviso.php");
require_once("../DAO/AVISOS/DAOAvisos.php");



			
$DAOAvisos=new DAOAvisos();
$correo_contacto=$DAOAvisos->get_correo_anunciante($_POST['id_aviso']);

if($correo_contacto){



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
	$mail->From=$_POST['correo'];
	$mail->FromName='Inmovidi';
	$mail->Timeout=60;
	$mail->IsHTML(true);
	//Enviamos el correo
	//$mail->AddAddress($GL_USER_MAIL); 
	$mail->AddAddress($correo_contacto->correo); // DIRECCION DE DESTINO
	$mail->Subject=$_POST['nombre'].' esta interesado en el aviso que publicaste '.$GL_NOMBRE_PAGINA;
	$body='				
		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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

		Alguien se puso en contacto contigo por un aviso que publicaste en Inmovidi.
		El aviso desde el que se puso en contacto es el siguiente.

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
			Los datos de la persona que se puso en contacto contigo son los siguientes.
			Puedes responderle simplemente respondiendo al correo que estas leyendo ahora mismo.
			<br/>
			<div><h3>Nombre</h3>'.$_POST['nombre'].'</div><br>	
			<div><h3>Correo</h3>'.$_POST['correo'].'</div><br>		
			<div><h3>Telefono</h3>'.$_POST['telefono'].'</div><br>	

			<h3>Mensaje</h3> '.$_POST['mensaje'].'<br>	
		</body>
		</html>
	';
	
	$mail->Body=$body;
	//$mail->AltBody="Texto que debe decir lo mismo que el Body, pero sin etiquetas HTML";
	$mail->Send();	
	
	if($_SESSION['id_usuario']){
		$id_contacto=$_SESSION['id_usuario'];
	}else{
		$id_contacto=0;
	}	

	$respuesta=$DAOAvisos->set_aviso_contacto($_POST['id_aviso'],$id_contacto,$_POST['nombre'],$_POST['mensaje'],$_POST['correo'],$_POST['telefono']);

	
	echo $respuesta;

}else{
	echo 'mysql_no';
}			
		
			

?>
