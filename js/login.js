$('#form-btn').click(function() {
    console.log("#form-id.val", $("#form-id").val(), "#form-pwd.val", $("#form-pwd").val());
    // ! 先检查输入是否完整
    if ($("#form-id").val() == "" || $("#form-pwd").val() == "") {
        $(".help-block").html("不能为空");
        if ($("#form-id").val() == "") {
            $("#form-id").parent().addClass("has-error");
        }
        if ($("#form-pwd").val() == "") {
            $("#form-pwd").parent().addClass("has-error");
        }
    } else {

        // ! 再到数据库里调取内容
        $.ajax({
            url: 'php/login.php',
            async: false, // 取消异步
            type: 'POST',
            dataType: 'json',
            data: { user_id: $("#form-id").val(), user_pwd: $("#form-pwd").val() },
            success: function(data) {
                console.log(data);
                if (!data) {

                } else {

                }
                // ! 登录成功返回上一页
                // javascript: history.back(-1);
                // console.log(data.user_id);
            },
            error: function() {
                alert("login.js => login.php error");
            }
        });
    }
})

// ! 回车提交
document.onkeydown = function(e) {
    e = e || window.event;
    if ($("#form-id").is(":focus") || $('#form-pwd').is(":focus")) {
        if (e.keyCode == 13) {
            console.log("13 click");
            $('#form-btn').click();
            return false; // ! 防止页面跳转刷新掉
        }
    }
}

function change() {
    if ($("#form-id").val() != "" && $("#form-pwd").val() != "") {
        $(".help-block").html("");
    }
    if ($("#form-id").val() !== "") {
        $("#form-id").parent().removeClass("has-error");
    }
    if ($("#form-pwd").val() != "") {
        $("#form-pwd").parent().removeClass("has-error");
    }
}

$("#form-id").on("input propertychange change", function(event) {
    change();
})
$("#form-pwd").on("input propertychange change", function(event) {
    change();
})