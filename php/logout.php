<?php
    require_once("sessionCheck.php"); 

    // $_SESSION = array(); 
    unset($_SESSION["user_id"]);
    unset($_SESSION["identity"]);

    echo json_encode($_SESSION);
?>