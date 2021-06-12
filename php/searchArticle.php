<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $pageIndex = $_POST["index"];
    $pageSize = $_POST["size"];
    $user_id = $_POST["user_id"];
    $author_id = $_POST["author_id"];

    $query_limit = "";

    if ($author_id == "") {
        $query_limit = "and article_public='1'";
    } else if ($author_id == $user_id) {
        $query_limit = "and author_id='" . $author_id . "'";
    } else {
        $query_limit = "and author_id='" . $author_id . "' and article_public='1'";
    }

    if ($pageIndex == 0) {
        $query = "select count(*) from article_management where article_state='1'" . $query_limit;

        $result = $conn->query($query);

        echo json_encode(array(
            "total" => mysqli_fetch_array($result)['0']
        ));
    } else {
        $startRowNum = ($pageIndex-1) * $pageSize;  
		$numOfRows = $pageSize;  // 返回的最多行数
		$query = "select * from article_management where article_state='1'" . $query_limit . " order by article_id desc limit " .$startRowNum . "," . $numOfRows;

        $result = $conn->query($query);

        $articles = array();
		while($row = mysqli_fetch_array($result)){
	        array_push($articles, $row);
		}

		echo json_encode($articles);
    }   

?>