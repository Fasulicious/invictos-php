<?php

require 'AppConnect.php';

$sql = "SELECT * FROM app_preguntas";

$result = mysqli_query($db, $sql);

$response = array();
$response['error'] = false;
$response['images'] = array();

while ($row = mysqli_fetch_array($result)) {
$temp = array();
$temp['id'] = $row['id'];
$temp['url'] = $row['foto'];
array_push($response['images'], $temp);
}

echo json_encode($response);
