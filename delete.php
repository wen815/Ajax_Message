<?php
require 'includes/connect.php';
$id=$_GET['id'];
$q = "DELETE FROM gbook WHERE ID=$id LIMIT 1";
$r = mysqli_query ($dbc, $q);
if($r){
    header("Location:message.php");
}