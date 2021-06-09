var xmlHttp = null;

function getMD() {
    console.log($userdata["article_id"]);

    if ($userdata["article_id"]) {
        $.ajax({
            url: 'php/getArticle.php',
            async: false, // 取消异步
            type: 'POST',
            dataType: 'json',
            data: {
                article_id: $userdata["article_id"],
            },
            success: function(data) {
                console.log(data);
                getHtml(data);
            },
            error: function() {
                alert("getArticle.js => getArticle.php error");
            }
        });
    } else {
        $('.page-title').html("无内容");
        $('.page-body').html("<h1>未选择任何文章内容</h1>");
    }
}

function getHtml(data) {
    mdtext = data.article_text;
    var parser = new HyperDown,
        html = parser.makeHtml(mdtext);
    console.log(html);

    // ! 解决markdown渲染字体过小
    html = "<font size=4>" + html + "</font>";

    $('.page-title').html(data.article_title);
    $('.page-author a').html(data.author_name);
    $info = "<div class='page-info'><div class='posted'>posted @ " + data.update_time + "</div></div>";
    if (data.author_id == $userdata["user_id"]) {
        $info = "<div class='page-info'><div class='posted'>posted @ " + data.update_time + "</div><a href='edit.html' target='_self' class='edit'>编辑</a></div>";
    }
    $('.page-body').html(html + $info);
}

$(document).ready(function() {
    console.log("getArticle", $userdata);
    getMD();
})