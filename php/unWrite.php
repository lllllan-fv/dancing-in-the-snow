<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $_SESSION["article_id"] = $_POST["article_id"];

    echo json_encode($_SESSION["article_id"]);
?>