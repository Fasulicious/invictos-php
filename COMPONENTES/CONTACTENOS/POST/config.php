<?php
		

$GL_NOMBRE_PAGINA='Invictos';

$GL_DIR_PAGINA='www.invictos.la';
$GL_DIR_RAIZ='www.invictos.la';

$GL_HOST_MAIL='webmail.invictos.la';
$GL_USER_MAIL='websender@invictos.la';
$GL_PASS_USER_MAIL='Invictos123456+';
		
		

class COMP_TABLA{

	var $estructura;
	var $receptor_mail;
	
	function COMP_TABLA($estructura,$receptor_mail){
		$this->estructura=$estructura;
		$this->receptor_mail=$receptor_mail;
	}
	
}


$GL_ELEMENTOS=array();

$GL_ELEMENTOS['contacto']=new COMP_TABLA(
		array(   //nombre campo tipo elemento update
		    /*"nombre" => array('tipo'=>"str",'label'=>'Nombres:'),
		    "correo" => array('tipo'=>"email",'label'=>'Correo Electronico:'),
		    "telefono" => array('tipo'=>"str",'label'=>'Telefono:'),*/
		    "mensaje" => array('tipo'=>"str",'label'=>'Mensaje:')),
		array("contacto@invictos.la")
		);



$GL_ELEMENTOS['pago']=new COMP_TABLA(
		array(   //nombre campo tipo elemento update
		    "id" => array('tipo'=>"str",'label'=>'ID usuario:'),			
		   	"nombre" => array('tipo'=>"str",'label'=>'Nombres:'),
		    "correo" => array('tipo'=>"email",'label'=>'Correo Electronico:'),
		    "comprobante" => array('tipo'=>"str",'label'=>'Comprobante:')),
		array("pagos@invictos.la")
		);

?>