<?php
 
class DbOperation
{

    //Database connection link
    private $con;
 
    //Class constructor
    function __construct()
    {
        //Getting the DbConnect.php file
        require_once dirname(__FILE__) . '/DbConnect.php';
 
        //Creating a DbConnect object to connect to the database
        $db = new DbConnect();
 
        //Initializing our connection link of this class
        //by calling the method connect of DbConnect class
        $this->con = $db->connect();
    }

    //getting a specified token to send push to selected device
    public function uploadInst($tipo, $gest, $nombre, $dpt, $prov, $dist){
            //Crating an statement
            $stmt = $this->con->prepare("INSERT INTO form_academ(tipo, gest, nombre, dpt, prov, dist) values(?, ?, ?, ?, ?, ?)");
 
            //Binding the parameters
            $stmt->bind_param("ssssss", $tipo, $gest, $nombre, $dpt, $prov, $dist);
 
            //Executing the statment
            $result = $stmt->execute();
 
            //Closing the statment
            $stmt->close();
 
            //If statment executed successfully
            if ($result) {
                //Returning 0 means student created successfully
                return 0;
            } else {
                //Returning 1 means failed to create student
                return 1;
            } 
    }
}