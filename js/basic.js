$userdata = Array();

function load() {

    $.ajax({
        url: 'php/loginCheck.php',
        async: false,
        type: 'POST',
        dataType: 'json',
        data: {},
        success: function(data) {
            console.log(data);
            $userdata = data;

            $(".dropdown-menu ul li").show();
            // ! 检查是否登录
            if (data.user_id) {
                console.log("#a-login hide");
                console.log("#a-register hide");
                $("#a-login").hide();
                $("#a-register").hide();
            } else {
                console.log("#a-logout hide");
                console.log("#a-space hide");
                console.log("#a-modify hide");
                console.log("#a-write hide");
                $("#a-logout").hide();
                $("#a-space").hide();
                $("#a-modify").hide();
                $("#a-write").hide();
            }

            // ! 检查是否有管理员权限
            if (!data.user_id || data.identity == "0") {
                console.log("#a-admin hide");
                $("#a-admin").hide();
            }
        },
        error: function() {
            alert("basic.js => loginCheck.php error");
        }
    });

    var strUrl = window.location.href;
    var arrUrl = strUrl.split("/");
    var strPage = arrUrl[arrUrl.length - 1];
    if (strPage.indexOf("?") > -1) {
        var pageName = strPage.split("?");
        strPage = pageName[0];
    }
    console.log("now", strPage);

    if (!$userdata["user_id"]) {
        if (strPage == "modify.html" || strPage == "edit.html" || strPage == "space.html") {
            window.open('inaccessible.html', '_self');
        }
    }
}

$(document).ready(function() { load(); });

$("#a-logout").click(function() {
    $.ajax({
        url: 'php/logout.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {},
        success: function(data) {
            console.log(data);
            load();
        },
        error: function() {
            alert("basic.js => logout.php error");
        }
    });
})