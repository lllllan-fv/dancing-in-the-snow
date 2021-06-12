<?php

    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $article_id = $_POST["article_id"];
    
    $query = "select * from article_management where article_id='" . $article_id . "'";
    $result = $conn->query($query);
    $row = mysqli_fetch_array($result);

    $query = "select * from user_info where user_id='" . $row["author_id"] . "'";
    $result = $conn->query($query);
    $_row = mysqli_fetch_array($result);

    $file = fopen("../" . $row["article_path"], "r");
    $article_text = fread($file, filesize("../" . $row["article_path"]));
    fclose($file);

    echo json_encode(array(
        "article_id" => $article_id,
        "article_title" => $row["article_title"],
        "article_text" => $article_text,
        "article_public" => $row["article_public"],
        "article_state" => $row["article_state"],
        "article_path" => $row["article_path"],
        "author_id" => $row["author_id"],
        "author_name" => $_row["user_name"],
        "update_time" => $row["update_time"],
    ));
?>