<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $user_id = $_POST["user_id"];
    $user_name = $_POST["user_name"];
    $article_title = $_POST["article_title"];
    $article_text = $_POST["article_text"];
    $article_public = $_POST["article_public"];

    $article_path = "article/" . time() . ".md";

    $file = fopen("../" . $article_path, "w");
    fwrite($file, $article_text);
    fclose($file);

    $query = "insert into article_management values (0, '$user_id', '$user_name', '$article_title', '$article_path', '$article_public', '1', now(), now())";
    $res = mysqli_query($conn, $query);

    $query = "select * from article_management where article_path='" . $article_path . "'";
    $result = $conn->query($query);
    $row = mysqli_fetch_array($result);

    $_SESSION["article_id"] = $row["article_id"];
    echo json_encode(array(
        "article_id" => $row["article_id"],
    ));
?>