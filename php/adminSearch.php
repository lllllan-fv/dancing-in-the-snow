<?php
    require_once("sessionCheck.php");
    require_once("DBconnect.php");

    $pageIndex = $_POST["index"];
    $pageSize = $_POST["size"];

    if ($pageIndex == 0) {
        $query = "select count(*) from article_management";

        $result = $conn->query($query);

        echo json_encode(array(
            "total" => mysqli_fetch_array($result)['0']
        ));
    } else {
        $startRowNum = ($pageIndex-1) * $pageSize;  
		$numOfRows = $pageSize;  // 返回的最多行数
		$query = "select * from article_management order by article_id desc limit " .$startRowNum . "," . $numOfRows;

        $result = $conn->query($query);

        $articles = array();
		while($row = mysqli_fetch_array($result)){
	        array_push($articles, $row);
		}

		echo json_encode($articles);
    }   

?>