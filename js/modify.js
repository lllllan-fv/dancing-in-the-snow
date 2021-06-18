function modify() {
    $.ajax({
        url: 'php/modify.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {
            user_id: $userdata["user_id"],
            user_name: $("#form-username").val(),
            user_pwd: $("#form-pwd").val(),
            ava_path: ava_path,
        },
        success: function (data) {
            console.log(data);
            if (data.status == 0) {
                $(".help-block").html(data.msg);
            } else {
                window.open('index.html', '_self');
            }
        },
        error: function () {
            alert("modify.js => modify.php error");
        }
    });
    $("#form-btn").attr("disabled", false);
}

$("#form-btn").click(function () {
    $flag = true;

    if ($("#form-username").val() == "") {
        $flag = false;
        $("#form-username").parent().addClass("has-error");
        $(".help-block").html("username不能为空");
    }

    if ($("#form-oldpwd").val() == "" || $("#form-oldpwd").val() != $userdata["user_pwd"]) {
        $flag = false;
        $("#form-oldpwd").parent().addClass("has-error");
        $(".help-block").html("请输入正确的原密码");
    }

    if ($("#form-pwd").val() != $("#form-checkpwd").val()) {
        $flag = false;
        $("#form-pwd").parent().addClass("has-error");
        $("#form-checkpwd").parent().addClass("has-error");
        $(".help-block").html("两次密码不一致");
    }

    if ($flag) {
        if (canUpload) uploadAvatar();
        $("#form-btn").attr("disabled", true);
        setTimeout(modify, 100);
    }
});

// ! 回车提交
document.onkeydown = function (e) {
    e = e || window.event;
    if ($("input").is(":focus")) {
        if (e.keyCode == 13) {
            $('#form-btn').click();
            return false; // ! 防止页面跳转刷新掉
        }
    }
}

// ! input监听
$("input").on("input propertychange change", function () {
    $flag = false;

    if ($("#form-username").val() != "") {
        $flag = true;
        $("#form-username").parent().removeClass("has-error");
    }
    if ($("#form-oldpwd").val() != "") {
        $flag = true;
        $("#form-oldpwd").parent().removeClass("has-error");
    }
    if ($("#form-pwd").val() != "") {
        $flag = true;
        $("#form-pwd").parent().removeClass("has-error");
    }
    if ($("#form-checkpwd").val() != "") {
        $flag = true;
        $("#form-checkpwd").parent().removeClass("has-error");
    }

    if ($flag) {
        $(".help-block").html("");
        $("#form-btn").attr("disabled", false);
    }
});

$(document).ready(function () {
    canUpload = false;
    ava_path = "";
    fdata = new FormData();
    console.log("init", canUpload, ava_path, fdata);

    console.log("userdata => ", $userdata);

    $("#form-userid").html($userdata["user_id"]);
    $("#form-username").val($userdata["user_name"]);
    $("#form-realname").val($userdata["realname"] == "" ? "Unnamed" : $userdata["realname"]);
    $("#form-email").val($userdata["email"] == "" ? "Unknown" : $userdata["email"]);
});