<?php

	function fun_verifica_usuario($user,$password,$cd){

		$user_consulta='no user';
		if($user!='' && $password!='' &&  valida_string_alias($user) && valida_string_tipo_password($password) ){

			require_once($cd."LOGIN/DAO/DAOLogin.php");

			$login=new DAOLogin();

			$validacion=$login->valida_usuario_mobile($user,$password);
			
			if($validacion=='si user'){
				$user_consulta=$user;
			}else{
				$user_consulta='no user';
			}

		}

		return $user_consulta;
	}

    function fun_esblanco($cadena){ 
		
		
		$cadena=(string)$cadena;
		$valores= split(" ",$cadena);
		$blanco=true;
	
		//	echo " xxx ".$valores[0]." xxx ";
		for($i=0;$i<count($valores);$i++){
		//	echo " xxx ".$valores[$i]." xxx ";
			if($valores[$i]!="0"){
				if($valores[$i]){
					$blanco=false;
				}
			}				
			
		}
		return $blanco;
	}
	
	
 	function fun_esinteger($num){   //solo se aceptan enteros
		
		//echo "     b       ".$num."       b     ";
		$numero=false;
	
		$num=(string)$num;
		
		for($i=0;$i<strlen($num);$i++){
		
			if(ctype_digit($num[$i])  || $num[$i]=="-"){
				$numero=true;
			}else{
				$i=strlen($num);
				$numero=false;
			}
			
		}
		return $numero;
	}
	
	
 	function fun_esfloat($num){ 
		
		//echo "     b       ".$num."       b     ";
		$numero=true;
	
		$num=(string)$num;
		
		for($i=0;$i<strlen($num) and $numero;$i++){
		
			if(ctype_digit($num[$i]) || $num[$i]=="." || $num[$i]=="-"){
				$numero=true;
			}else{
				$numero=false;
			}
		}
		
		return $numero;
	}
	
	
	
	function fun_escifra($cifra){
		
		if( $cifra=='0' || $cifra=='1' || $cifra=='2' || $cifra=='3' || $cifra=='4' || $cifra=='5' || $cifra=='6' || $cifra=='7' || $cifra=='8' || $cifra=='9' ){
		
			return true;
			
		}else{
		
			return false;
		
		}
		
	}
	
	
    function valida_string_correo($cadena){  //ideal para correos
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if($cadena[$i]=='a' || $cadena[$i]=='b' || $cadena[$i]=="c" || $cadena[$i]=='d' || $cadena[$i]=='e' || $cadena[$i]=='f' || $cadena[$i]=='g' || $cadena[$i]=='h' || $cadena[$i]=='i' || $cadena[$i]=='j' || $cadena[$i]=='k' || $cadena[$i]=='l' || $cadena[$i]=='m' || $cadena[$i]=='n'|| $cadena[$i]=='o'|| $cadena[$i]=='p'|| $cadena[$i]=='q'|| $cadena[$i]=='r'|| $cadena[$i]=='s'|| $cadena[$i]=='t'|| $cadena[$i]=='u'|| $cadena[$i]=='v'|| $cadena[$i]=='w'|| $cadena[$i]=='x'|| $cadena[$i]=='y'|| $cadena[$i]=='z' || $cadena[$i]=='A' || $cadena[$i]=='B' || $cadena[$i]=="C" || $cadena[$i]=='D' || $cadena[$i]=='E' || $cadena[$i]=='F' || $cadena[$i]=='G' || $cadena[$i]=='H' || $cadena[$i]=='I' || $cadena[$i]=='J' || $cadena[$i]=='K' || $cadena[$i]=='L' || $cadena[$i]=='M' || $cadena[$i]=='N'|| $cadena[$i]=='O'|| $cadena[$i]=='P'|| $cadena[$i]=='Q'|| $cadena[$i]=='R'|| $cadena[$i]=='S'|| $cadena[$i]=='T'|| $cadena[$i]=='U'|| $cadena[$i]=='V'|| $cadena[$i]=='W'|| $cadena[$i]=='X'|| $cadena[$i]=='Y'|| $cadena[$i]=='Z'|| $cadena[$i]=='0'|| $cadena[$i]=='1'|| $cadena[$i]=='2'|| $cadena[$i]=='3'|| $cadena[$i]=='4'|| $cadena[$i]=='5'|| $cadena[$i]=='6'|| $cadena[$i]=='7'|| $cadena[$i]=='8'|| $cadena[$i]=='9' || $cadena[$i]=='_' || $cadena[$i]=='-'  || $cadena[$i]=='.'  || $cadena[$i]==','  || $cadena[$i]==':' || $cadena[$i]=='@'  ){
				$valido=true;
			}else{
		
				$valido=false;
			}
		}
		
		return $valido;
	}
	
	
    function valida_string_solo_letras_numeros($cadena){  
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if($cadena[$i]=='a' || $cadena[$i]=='b' || $cadena[$i]=="c" || $cadena[$i]=='d' || $cadena[$i]=='e' || $cadena[$i]=='f' || $cadena[$i]=='g' || $cadena[$i]=='h' || $cadena[$i]=='i' || $cadena[$i]=='j' || $cadena[$i]=='k' || $cadena[$i]=='l' || $cadena[$i]=='m' || $cadena[$i]=='n'|| $cadena[$i]=='o'|| $cadena[$i]=='p'|| $cadena[$i]=='q'|| $cadena[$i]=='r'|| $cadena[$i]=='s'|| $cadena[$i]=='t'|| $cadena[$i]=='u'|| $cadena[$i]=='v'|| $cadena[$i]=='w'|| $cadena[$i]=='x'|| $cadena[$i]=='y'|| $cadena[$i]=='z' || $cadena[$i]=='A' || $cadena[$i]=='B' || $cadena[$i]=="C" || $cadena[$i]=='D' || $cadena[$i]=='E' || $cadena[$i]=='F' || $cadena[$i]=='G' || $cadena[$i]=='H' || $cadena[$i]=='I' || $cadena[$i]=='J' || $cadena[$i]=='K' || $cadena[$i]=='L' || $cadena[$i]=='M' || $cadena[$i]=='N'|| $cadena[$i]=='O'|| $cadena[$i]=='P'|| $cadena[$i]=='Q'|| $cadena[$i]=='R'|| $cadena[$i]=='S'|| $cadena[$i]=='T'|| $cadena[$i]=='U'|| $cadena[$i]=='V'|| $cadena[$i]=='W'|| $cadena[$i]=='X'|| $cadena[$i]=='Y'|| $cadena[$i]=='Z'|| $cadena[$i]=='0'|| $cadena[$i]=='1'|| $cadena[$i]=='2'|| $cadena[$i]=='3'|| $cadena[$i]=='4'|| $cadena[$i]=='5'|| $cadena[$i]=='6'|| $cadena[$i]=='7'|| $cadena[$i]=='8'|| $cadena[$i]=='9' || $cadena[$i]=='_' || $cadena[$i]=='-'  || $cadena[$i]=='.'  ){
				$valido=true;
			}else{
				$valido=false;
			}
		}
		
		return $valido;
	}
	
    function valida_string_alias($cadena){  
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;isset($cadena[$i])  && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if($cadena[$i]=='a' || $cadena[$i]=='b' || $cadena[$i]=="c" || $cadena[$i]=='d' || $cadena[$i]=='e' || $cadena[$i]=='f' || $cadena[$i]=='g' || $cadena[$i]=='h' || $cadena[$i]=='i' || $cadena[$i]=='j' || $cadena[$i]=='k' || $cadena[$i]=='l' || $cadena[$i]=='m' || $cadena[$i]=='n'|| $cadena[$i]=='o'|| $cadena[$i]=='p'|| $cadena[$i]=='q'|| $cadena[$i]=='r'|| $cadena[$i]=='s'|| $cadena[$i]=='t'|| $cadena[$i]=='u'|| $cadena[$i]=='v'|| $cadena[$i]=='w'|| $cadena[$i]=='x'|| $cadena[$i]=='y'|| $cadena[$i]=='z' || $cadena[$i]=='A' || $cadena[$i]=='B' || $cadena[$i]=="C" || $cadena[$i]=='D' || $cadena[$i]=='E' || $cadena[$i]=='F' || $cadena[$i]=='G' || $cadena[$i]=='H' || $cadena[$i]=='I' || $cadena[$i]=='J' || $cadena[$i]=='K' || $cadena[$i]=='L' || $cadena[$i]=='M' || $cadena[$i]=='N'|| $cadena[$i]=='O'|| $cadena[$i]=='P'|| $cadena[$i]=='Q'|| $cadena[$i]=='R'|| $cadena[$i]=='S'|| $cadena[$i]=='T'|| $cadena[$i]=='U'|| $cadena[$i]=='V'|| $cadena[$i]=='W'|| $cadena[$i]=='X'|| $cadena[$i]=='Y'|| $cadena[$i]=='Z'|| $cadena[$i]=='0'|| $cadena[$i]=='1'|| $cadena[$i]=='2'|| $cadena[$i]=='3'|| $cadena[$i]=='4'|| $cadena[$i]=='5'|| $cadena[$i]=='6'|| $cadena[$i]=='7'|| $cadena[$i]=='8'|| $cadena[$i]=='9' || $cadena[$i]=='_' || $cadena[$i]=='-'   ){
				$valido=true;
			}else{
				$valido=false;
			}
		}
		
		return $valido;
	}


    function valida_string_alias_reservado($cadena){  //ningun alias puede tener el valor de  PERFIL_EMP,  a1, CSS, ACTIVACION_CUENTA, JS, RAL, CONEXION, IMG, LOGIN, PAG_WEB,PLANTILLAS,POST, USUARIO, UTIL, DAO, DEFAULT
	//	echo "**".$cadena."**";
		$valido=true;
	
		$cadena=strtolower($cadena);
	
		switch($cadena){
			case 'perfil_emp':  	
			case 'negocios': 	
			case 'campana': 
			case 'a1': 
			case 'mapknawer':
			case 'css': 
			case 'cpanel': 
			case 'activacion_cuenta': 
			case 'fbconect': 
			case 'presentacion':  
			case 'js': 
			case 'ral': 
			case 'conexion': 
			case 'img': 
			case 'html': 
			case 'login': 
			case 'pag_web': 
			case 'plantillas': 
			case 'post': 
			case 'usuario': 
			case 'util': 
			case 'dao': 
			case 'cpanel': 
			case 'artist': 
			case 'embed': 
			case 'worker': 
			case 'donate': 
			case 'transit': 
			case 'taxi': 
			case 'pets': 
			case 'developers': 
			case 'mobile': 
			case 'musicians': 
			case 'academics': 
			case 'foundedStuffs':		
			case 'tourist': 
			case 'default': $valido=false; break;
		}
		
		
		return $valido;
	}


    
    
    function valida_string_todo_menos_llaves($cadena){   //ideal para descripciones en las que se consideran signos de puntuacion, o hasta saltos de linea
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if($cadena[$i]=='{' || $cadena[$i]=='}' ||  $cadena[$i]=='"' || $cadena[$i]=="'"  || $cadena[$i]=="<" || $cadena[$i]==">"  || $cadena[$i]=="(" || $cadena[$i]==")"){
				$valido=false;
			}else{
				$valido=true;
			}
		}
		
		return $valido;
	}
	
	
	
    function valida_string_tipo_nombre($cadena){   //ideal para validar nombres, o apellidos, en donde solo se admiten letras, espacios y los caracteres & y ;  para generar vocales con tildes o tildes especiales
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			//if($cadena[$i]=='a' || $cadena[$i]=='b' || $cadena[$i]=="c" || $cadena[$i]=='d' || $cadena[$i]=='e' || $cadena[$i]=='f' || $cadena[$i]=='g' || $cadena[$i]=='h' || $cadena[$i]=='i' || $cadena[$i]=='j' || $cadena[$i]=='k' || $cadena[$i]=='l' || $cadena[$i]=='m' || $cadena[$i]=='n'|| $cadena[$i]=='o'|| $cadena[$i]=='p'|| $cadena[$i]=='q'|| $cadena[$i]=='r'|| $cadena[$i]=='s'|| $cadena[$i]=='t'|| $cadena[$i]=='u'|| $cadena[$i]=='v'|| $cadena[$i]=='w'|| $cadena[$i]=='x'|| $cadena[$i]=='y'|| $cadena[$i]=='z' || $cadena[$i]=='A' || $cadena[$i]=='B' || $cadena[$i]=="C" || $cadena[$i]=='D' || $cadena[$i]=='E' || $cadena[$i]=='F' || $cadena[$i]=='G' || $cadena[$i]=='H' || $cadena[$i]=='I' || $cadena[$i]=='J' || $cadena[$i]=='K' || $cadena[$i]=='L' || $cadena[$i]=='M' || $cadena[$i]=='N'|| $cadena[$i]=='O'|| $cadena[$i]=='P'|| $cadena[$i]=='Q'|| $cadena[$i]=='R'|| $cadena[$i]=='S'|| $cadena[$i]=='T'|| $cadena[$i]=='U'|| $cadena[$i]=='V'|| $cadena[$i]=='W'|| $cadena[$i]=='X'|| $cadena[$i]=='Y'|| $cadena[$i]=='Z'|| $cadena[$i]=='á'|| $cadena[$i]=='é'|| $cadena[$i]=='í'|| $cadena[$i]=='ó'|| $cadena[$i]=='ú'||  $cadena[$i]=='Á'|| $cadena[$i]=='É'|| $cadena[$i]=='Í'|| $cadena[$i]=='Ó'|| $cadena[$i]=='Ú'||  $cadena[$i]==' ' ){
				
			if($cadena[$i]!='"' && $cadena[$i]!="'"  && $cadena[$i]!="{" && $cadena[$i]!="}" && $cadena[$i]!="<" && $cadena[$i]!=">"  && $cadena[$i]!="(" && $cadena[$i]!=")" ){
				
				$valido=true;
			}else{
				$valido=false;
			}
		}
		
		return $valido;
	}
	
	
	
    function valida_string_tipo_rs($cadena){   //ideal para nombres de razon social donde pueden haber numeros letras y tildes, y hasta el caracter ', el cual es interpretado debidamente con clave html
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if( $cadena[$i]!='"' && $cadena[$i]!="'" &&  $cadena[$i]!="{" && $cadena[$i]!="}"  && $cadena[$i]!="<" && $cadena[$i]!=">"  || $cadena[$i]=="(" || $cadena[$i]==")" ){
				
				$valido=true;
			}else{
				$valido=false;
			}
		}
		
		return $valido;
	}
	
    function valida_string_tipo_fecha($cadena){   //
    
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if( $cadena[$i]=='0'|| $cadena[$i]=='1'|| $cadena[$i]=='2'|| $cadena[$i]=='3'|| $cadena[$i]=='4'|| $cadena[$i]=='5'|| $cadena[$i]=='6'|| $cadena[$i]=='7'|| $cadena[$i]=='8'|| $cadena[$i]=='9'  ||  $cadena[$i]=='-' ){
				$valido=true;
			}else{
				$valido=false;
			}
		}
		
		return $valido;
	}
	
    function valida_string_tipo_hora($cadena){   //
    
	//	echo "**".$cadena."**";
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if( $cadena[$i]=='0'|| $cadena[$i]=='1'|| $cadena[$i]=='2'|| $cadena[$i]=='3'|| $cadena[$i]=='4'|| $cadena[$i]=='5'|| $cadena[$i]=='6'|| $cadena[$i]=='7'|| $cadena[$i]=='8'|| $cadena[$i]=='9'  ||  $cadena[$i]==':' ){
				$valido=true;
			}else{
				$valido=false;
			}
		}
		
		return $valido;
	}
	
	
	
    function valida_string_tipo_password($cadena){   //ideal para passwords, donde no se admiten vocales con tildes
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if($cadena[$i]=="'" || $cadena[$i]=='"' || $cadena[$i]==' ' ){
				$valido=false;
			}else{
				$valido=true;
			}
		}
		
		return $valido;
	}
	
	
	
	
	
    function valida_dato_concatenado($cadena){   //ideal para un tipo de dato el cual es producto de una concatenacion de datos, por lo que posee la llave de tipo { en medio. Es posible que entre los datos se encuentren descripciones o numeros por lo que seria como la comprobacion de la funcion valida_string_todo_menos_llaves pero con la unica diferencia de que aqui si se permiten llaves {  }
		$valido=true;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if( $cadena[$i]=='"' || $cadena[$i]=="'" || $cadena[$i]=="<" || $cadena[$i]==">" || $cadena[$i]=="(" || $cadena[$i]==")" ){
				$valido=false;
			}else{
				$valido=true;
			}
		}
		
		return $valido;
	}
	
	
	
?>