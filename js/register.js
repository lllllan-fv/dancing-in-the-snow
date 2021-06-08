function register() {

    $.ajax({
        url: 'php/register.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {
            user_id: $("#form-userid").val().replace(/\b(0+)/gi, ""),
            user_name: $("#form-username").val(),
            user_pwd: $("#form-pwd").val(),
            ava_path: ava_path,
            realname: $("#form-realname").val(),
            email: $("#form-email").val()
        },
        success: function(data) {
            console.log(data);
            if (data.status == 0) {
                $(".help-block").html(data.msg);
            } else {
                window.open('index.html', '_self');
            }
        },
        error: function() {
            alert("register.js => register.php error");
        }
    });
    $("#form-btn").attr("disabled", false);
}

$('#form-btn').click(function() {
    if ($("#form-userid").val() == "" || $("#form-username").val() == "" || $("#form-pwd").val() == "" || $("#form-checkpwd").val() == "" || !$("#form-checkbox").is(':checked')) {
        $(".help-block").html("请填入完整信息");
        $("#form-btn").attr("disabled", true);
        if ($("#form-userid").val() == "") {
            $("#form-userid").parent().addClass("has-error");
        }
        if ($("#form-username").val() == "") {
            $("#form-username").parent().addClass("has-error");
        }
        if ($("#form-pwd").val() == "") {
            $("#form-pwd").parent().addClass("has-error");
        }
        if ($("#form-checkpwd").val() == "") {
            $("#form-checkpwd").parent().addClass("has-error");
        }
    } else if (isNaN($("#form-userid").val())) {
        $(".help-block").html("UserID必须由数字组成");
        $("#form-userid").parent().addClass("has-error");
        $("#form-btn").attr("disabled", true);
    } else if ($("#form-pwd").val() != $("#form-checkpwd").val()) {
        $(".help-block").html("两次密码不一致");
        $("#form-btn").attr("disabled", true);
    } else if ($("#form-ava").val() == "" || canUpload) {
        if (canUpload) uploadAvatar();
        $("#form-btn").attr("disabled", true);
        setTimeout(register, 100);
    }
})

// ! 回车提交
document.onkeydown = function(e) {
    e = e || window.event;
    if ($("input").is(":focus")) {
        if (e.keyCode == 13) {
            $('#form-btn').click();
            return false; // ! 防止页面跳转刷新掉
        }
    }
}

// ! input监听
$("input").on("input propertychange change", function() {
    if ($("#form-userid").val() != "" && $("#form-username").val() != "" && $("#form-pwd").val() != "" && $("#form-checkpwd").val() != "" && $("#form-checkbox").is(':checked') == true) {
        $(".help-block").html("");
        $("#form-btn").attr("disabled", false);
    }
    if ($("#form-userid").val() != "") {
        $("#form-userid").parent().removeClass("has-error");
    }
    if ($("#form-username").val() != "") {
        $("#form-username").parent().removeClass("has-error");
    }
    if ($("#form-pwd").val() != "") {
        $("#form-pwd").parent().removeClass("has-error");
    }
    if ($("#form-checkpwd").val() != "") {
        $("#form-checkpwd").parent().removeClass("has-error");
    }
});

$(document).ready(function() {
    canUpload = false;
    ava_path = "";
    fdata = new FormData();
    console.log("init", canUpload, ava_path, fdata);
})