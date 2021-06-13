<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $article_id = $_POST["article_id"];
    $article_public = $_POST["article_public"];
    $article_state = $_POST["article_state"];

    $query = "update article_management set article_public='" . $article_public . "', article_state='" . $article_state . "' where article_id='" . $article_id . "'";

    $conn->query($query);

    echo json_encode($query);
?>