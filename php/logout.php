<?php
    require_once("sessionCheck.php"); 

    // $_SESSION = array(); 
    unset($_SESSION["user_id"]);
    unset($_SESSION["user_name"]);
    unset($_SESSION["user_pwd"]);
    unset($_SESSION["identity"]);
    unset($_SESSION["realname"]);
    unset($_SESSION["email"]);

    echo json_encode($_SESSION);
?>