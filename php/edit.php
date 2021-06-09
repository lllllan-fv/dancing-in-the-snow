<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $article_id = $_POST["article_id"];
    $article_title = $_POST["article_title"];
    $article_text = $_POST["article_text"];
    $article_public = $_POST["article_public"];
    
    $query = "select * from article_management where article_id='" . $article_id . "'";
    $result = $conn->query($query);
    $row = mysqli_fetch_array($result);
    
    $article_path = $row["article_path"]

    $file = fopen("../" . $article_path, "w");
    fwrite($file, $article_text);
    fclose($file);

    $query = "insert into article_management values (0, '$user_id', '$user_name', '$article_title', '$article_path', '$article_public', '1', now(), now())";
    $res = mysqli_query($conn, $query);

    echo json_encode(array(
        "status" => "1",
        "msg" => "success"
    ));
?>