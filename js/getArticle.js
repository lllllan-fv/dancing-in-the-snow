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
            success: function (data) {
                console.log("articeldata", data);
                getHtml(data);
            },
            error: function () {
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

    $('.page-title').html(data.article_title.length > 15 ? data.article_title.substring(0, 15) + "..." : data.article_title);
    $('.page-author a').html(data.author_name);
    $(".posted").html("posted @ " + data.update_time);
    if (data.author_id != $userdata["user_id"]) {
        $(".edit").hide();
    }
    $('.body-text').html(html);

    $('.page-author a').click(function () {
        console.log("author click");
        $.ajax({
            url: 'php/space.php',
            async: false, // 取消异步
            type: 'POST',
            dataType: 'json',
            data: {
                author_id: data.author_id
            },
            success: function (data) {
                console.log(data);
                window.open("space.html", "_blank");
            },
            error: function () {
                alert("basic.js => space.php error");
            }
        });
    })
}

$("#edit").click(function () {
    console.log("click");
    $.ajax({
        url: 'php/unWrite.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {
            article_id: $userdata["article_id"],
        },
        success: function (data) {
            console.log(data);
            window.open("edit.html", "_self");
        },
        error: function () {
            alert("getArticle.js => unWrite.php error");
        }
    });
})

$(document).ready(function () {
    getMD();
})