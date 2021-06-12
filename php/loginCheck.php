<?php
    require_once("sessionCheck.php");

    $user_id = getSession("user_id");
    $user_name = getSession("user_name");
    $user_pwd = getSession("user_pwd");
    $identity = getSession("identity");
    $ava_path = getSession("ava_path");
    $realname = getSession("realname");
    $email = getSession("email");
    $article_id = getSession("article_id");
    $author_id = getSession("author_id");
    $author_name = getSession("author_name");
    $author_ava = getSession("author_ava");
    
    echo json_encode(array(
        "user_id" => $user_id,
        "user_name" => $user_name,
        "user_pwd" => $user_pwd,
        "ava_path" => $ava_path,
        "identity" => $identity,
        "realname" => $realname,
        "email" => $email,
        "article_id" => $article_id,
        "author_id" => $author_id,
        "author_name" => $author_name,
        "author_ava" => $author_ava
    ));
?>