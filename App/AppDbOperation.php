<?php
 
class AppDbOperation
{

    //Database connection link
    private $con;
 
    //Class constructor
    function __construct()
    {
        //Getting the DbConnect.php file
        require_once dirname(__FILE__) . '/AppDbConnect.php';
 
        //Creating a DbConnect object to connect to the database
        $db = new AppDbConnect();
 
        //Initializing our connection link of this class
        //by calling the method connect of DbConnect class
        $this->con = $db->connect();
    }

    //getting a specified token to send push to selected device
    public function getTokenById($id){
        $stmt = $this->con->prepare("SELECT notification_token FROM grl_tbl_users WHERE id = ?");
        $stmt->bind_param("s",$id);
        $stmt->execute(); 
        $stmt->bind_result($col1);
        while ($stmt->fetch()) {
             //printf("%s \n", $col1);
             return array($col1); 
        }    
    }
}