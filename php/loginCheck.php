<?php
    require_once("sessionCheck.php");
    echo json_encode(array("user_id" => $_SESSION["user_id"], "identity" => $_SESSION["identity"]));
?>