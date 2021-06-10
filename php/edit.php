<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $article_id = $_POST["article_id"];
    $article_title = $_POST["article_title"];
    $article_text = $_POST["article_text"];
    $article_public = $_POST["article_public"];
    $article_state = $_POST["article_state"];
    $article_path = $_POST["article_path"];
    
    $modifyState = $article_state == "" ? "" : ", article_state='" . $article_state . "'";
    $modifyPublic = $article_public == "" ? "" : ", article_public='" . $article_public . "'";

    $query = "update article_management set article_title='" . $article_title . "'" . $modifyPublic . $modifyState . ", update_time=now() where article_id='" . $article_id . "'";

    $conn->query($query);

    $file = fopen("../" . $article_path, "w");
    fwrite($file, $article_text);
    fclose($file);

    echo json_encode(array(
        "status" => "1",
        "msg" => "success"
    ));
?>