<?php

class DAOCorreo extends Conexion {

    function obtener_datos($id) {
		
		$cn = $this->conexion();
		
		if($cn!='no_conexion') {
            
            $rs = $cn->query('BEGIN');
            try{

                $sql = 'select nombres, apellidos, correo from grl_tbl_users where id='.$id;
                $rs = $cn->query($sql);                  
                $fila = mysqli_fetch_object($rs);
                $cn -> query('COMMIT');
                mysqli_close($cn);
                if($fila) {
                    return array("error"=>false, "data"=>$fila);
                }else {
                    return array("error"=>false, "data"=>false);
                }
            }catch(Exception $ex) {

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else {
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}

	function obtener_datos_profesor($id) {
		
		$cn = $this->conexion();
		
		if($cn!='no_conexion') {
            
            $rs = $cn->query('BEGIN');
            try{

                $sql = 'select nombres, apellidos, correo from grl_tbl_users where id = '.$id.' and tipo="P"';
                $rs = $cn->query($sql);
                $fila = mysqli_fetch_object($rs);
                $cn -> query('COMMIT');
                mysqli_close($cn);
                if($fila) {
                    return array("error"=>false, "data"=>$fila);
                }else {
                    return array("error"=>false, "data"=>false);
                }
            }catch(Exception $ex) {

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else {
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}
	
	function obtener_datos_alumno($id) {
		
		$cn = $this->conexion();
		
		if($cn!='no_conexion') {
            
            $rs = $cn->query('BEGIN');
            try{

                $sql = 'select nombres, apellidos, correo from grl_tbl_users where id = '.$id.' and tipo="A"';
                $rs = $cn->query($sql);
                $fila = mysqli_fetch_object($rs);
                $cn -> query('COMMIT');
                mysqli_close($cn);
                if($fila) {
                    return array("error"=>false, "data"=>$fila);
                }else {
                    return array("error"=>false, "data"=>false);
                }
            }catch(Exception $ex) {

				$cn->query('ROLLBACK');
				mysqli_close($cn);
				
				return array("error"=>true,'detalle'=>'mysql');		
				 
			}
		}else {
				return array("error"=>true,'detalle'=>'mysql');		
		}
	}
}
