var canUpload = false;
var ava_path = "";
var fdata = new FormData();

$("#form-ava").change(function() {
    console.log("ava change");

    fdata = new FormData();

    $.each($('#form-ava')[0].files, function(i, file) {
        var fileSize = $(this)[0].size;
        var fileType = $(this)[0].type;

        console.log("file", $(this)[0].size, $(this)[0].type, $(this)[0].name);

        if ((fileType == 'image/gif' || fileType == 'image/jpeg' || fileType == 'image/pjpeg' || fileType == 'image/png') && (fileSize > 0 && fileSize < 2097152)) {
            console.log("ava ===>", file);
            fdata.append('avatar', file);
            canUpload = true;
            $("#form-btn").attr("disabled", false);
            $(".help-block").html("");
        } else {
            canUpload = false;
            $("#form-btn").attr("disabled", true);
            $(".help-block").html("图像必须是 GIF, JPEG, 或者PNG格式, 文件大小不能超过2M!");
        }
    });

});

function register() {

    console.log("ava", ava_path);

    $.ajax({
        url: 'php/register.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {
            user_id: $("#form-userid").val(),
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
    } else if ($("#form-pwd").val() != $("#form-checkpwd").val()) {
        $(".help-block").html("两次密码不一致");
        $("#form-btn").attr("disabled", true);
    } else if ($("#form-ava").val() == "" || canUpload) {
        console.log("DBconnect");

        if (canUpload) {
            $.ajax({
                url: 'php/uploadAvatar.php',
                type: 'POST',
                data: fdata,
                cache: false,
                contentType: false, //不可缺
                processData: false, //不可缺
                success: function(data) {
                    console.log("data", data);
                    ava_path = "../img/ava/" + data;
                }
            });
        }
        setTimeout(register, 400);
    }
})

// ! 回车提交
document.onkeydown = function(e) {
    e = e || window.event;
    if ($("input").is(":focus")) {
        console.log("focus");
        if (e.keyCode == 13) {
            $('#form-btn').click();
            return false; // ! 防止页面跳转刷新掉
        }
    }
}

$("input").on("input propertychange change", function() {
    console.log("input change");
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