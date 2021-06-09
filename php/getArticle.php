<?php

    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $article_id = $_POST["article_id"];

    $query = "select * from article_management where article_id='" . $article_id . "'";
    $result = $conn->query($query);
    $row = mysqli_fetch_array($result);

    $file = fopen("../" . $row["article_path"], "r");
    $article_text = fread($file, filesize("../" . $row["article_path"]));
    fclose($file);

    echo json_encode(array(
        "article_title" => $row["article_title"],
        "article_text" => $article_text,
        "author_id" => $row["user_id"],
        "author_name" => $row["user_name"],
        "update_time" => $row["update_time"]
    ));
?>