$flag = true;

function save(msg) {
    console.log("title ", $("#title").val());
    $.ajax({
        url: 'php/edit.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {
            article_id: $userdata["article_id"],
            article_title: $("#title").val(),
            article_text: simplemde.value(),
            article_public: msg == "save" ? "" : ($("[name='switch']").is(":checked") ? 1 : 0),
            article_state: "",
            article_path: $path,
        },
        success: function (data) {
            console.log(data);
            $flag = true;
            if (msg == "publish") {
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
                        window.open('article.html', '_self');
                    },
                    error: function () {
                        alert("edit.js => unWrite.php error");
                    }
                });
            } else {

            }
        },
        error: function () {
            alert("edit.js => edit.php error");
        }
    });
}

function publish() {
    console.log($("[name='switch']").is(":checked"));

    if (!$userdata["article_id"]) {
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
            success: function (data) {
                console.log(data);
                $flag = true;
                window.open('article.html', '_self');
            },
            error: function () {
                alert("edit.js => publish.php error");
            }
        });
    } else {
        save("publish");
    }

    $(".modal button").attr("disabled", false);
}

$(".btn-save").click(function () {
    console.log("save click");
    save("save");
})

$(".btn-publish").click(function () {
    if ($("#title").val() == "") {
        $('#warningModal').modal('show');
    } else {
        $('#publishModal').modal('show');
    }
})

$("#publish").click(function () {
    console.log("click");

    $(".modal button").attr("disabled", true);
    setTimeout(publish, 400);
})

document.onkeydown = function (e) {
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

$(document).ready(function () {
    console.log("$flag " + $flag);
    console.log("$userdata['article_id'] " + $userdata["article_id"]);

    if (!$userdata["article_id"]) {
        $(".btn-save").hide();
    } else {
        $.ajax({
            url: 'php/getArticle.php',
            async: false, // 取消异步
            type: 'POST',
            dataType: 'json',
            data: {
                article_id: $userdata["article_id"],
            },
            success: function (data) {
                console.log(data);
                init(data);
            },
            error: function () {
                alert("edit.js => edit.php error");
            }
        });
    }
})

function init(data) {
    $("#title").val(data["article_title"]);
    $("textarea").val(data["article_text"]);
    $("[name='switch']").prop("checked", "ture");
    $path = data["article_path"];
    console.log(simplemde.value());
}

$("#title").on("input propertychange change", function () { $flag = false; })
simplemde.codemirror.on("change", function () { $flag = false; })

window.addEventListener("beforeunload", function (e) {
    if (!$flag) {
        (e || window.event).returnValue = '确定离开此页吗？';
    }
});