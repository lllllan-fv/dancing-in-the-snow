$flag = false;

// ?  未完成
function save() {
    $.ajax({
        url: 'php/edit.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {
            article_id: $userdata["article_id"],
            article_title: $("#title").val(),
            article_text: simplemde.value(),
            article_public: $("[name='switch']").is(":checked"),
        },
        success: function(data) {
            console.log(data);
            $flag = true;
            // window.open('article.html', '_self');
        },
        error: function() {
            alert("edit.js => edit.php error");
        }
    });
}

function publish() {
    console.log($("[name='switch']").is(":checked"));

    if ($article_id == "new") {
        $.ajax({
            url: 'php/publish.php',
            async: false, // 取消异步
            type: 'POST',
            dataType: 'json',
            data: {
                article_title: $("#title").val(),
                article_text: simplemde.value(),
                article_public: $("[name='switch']").is(":checked") ? "1" : "0",
                user_id: $userdata["user_id"],
                user_name: $userdata["user_name"]
            },
            success: function(data) {
                console.log(data);
                $flag = true;
                window.open('article.html', '_self');
            },
            error: function() {
                alert("edit.js => publish.php error");
            }
        });
    } else {
        save();
    }

    $(".modal button").attr("disabled", false);
}

$(".btn-save").click(function() {
    console.log("save click");
})

$(".btn-publish").click(function() {
    if ($("#title").val() == "") {
        $('#warningModal').modal('show');
    } else {
        $('#publishModal').modal('show');
    }
})

$("#publish").click(function() {
    console.log("click");

    $(".modal button").attr("disabled", true);
    setTimeout(publish, 400);
})

document.onkeydown = function(e) {
    e = e || window.event;
    var currKey = 0,
        e = e || event || window.event;
    currKey = e.keyCode || e.which || e.charCode;
    if (currKey == 83 && (e.ctrlKey || e.metaKey)) {
        console.log("ctrl + s");
        if ($(".btn-save").attr("disabled") == false) {
            $(".btn-save").click();
        }
        return false;
    }
}

$(document).ready(function() {
    let receive = window.opener["filter"];
    $article_id = receive["article_id"];
    console.log($article_id, $userdata["article_id"]);

    if ($article_id == "new") {
        $(".btn-save").attr("disabled", true);
    } else {
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
                init(data);
            },
            error: function() {
                alert("getArticle.js => getArticle.php error");
            }
        });
    }
})

function init(data) {
    $("#title").val(data["article_title"]);
    $("textarea").val(data["article_text"]);
    console.log(simplemde.value());
}

$("#title").on("input propertychange change", function() { $flag = false; })
simplemde.codemirror.on("change", function() { $flag = false; })

window.addEventListener("beforeunload", function(e) {
    if (!$flag) {
        (e || window.event).returnValue = '确定离开此页吗？';
    }
});