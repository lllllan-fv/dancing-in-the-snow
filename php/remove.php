<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $article_id = $_POST["article_id"];

    $query = "delete from article_management where article_id=$article_id";

    $res = mysqli_query($conn, $query);

    echo json_encode($article_id);

?>