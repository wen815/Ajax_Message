<?php
session_start();
$_SESSION = array(); // Clear the variables.
session_destroy(); // Destroy the session itself
header('Location:message.php');

