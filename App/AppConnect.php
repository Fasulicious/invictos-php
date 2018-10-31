<?php
$db_server = "localhost";
$db_user = "yosoysta_user";
$db_pass = "invictos123456";
$db_name = "yosoysta_invictos";

$db = new mysqli($db_server, $db_user, $db_pass, $db_name);

if ($db->connect_errno) {
    printf("Error while connecting to database: %s\n", $db->error);
    exit();
}

if (!$db->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $db->error);
    exit();
}
