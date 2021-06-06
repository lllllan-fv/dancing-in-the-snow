$(document).ready(function() {

    // ! 登录检查
    $.ajax({
        url: 'php/loginCheck.php',
        async: false, // 取消异步
        type: 'POST',
        dataType: 'json',
        data: {},
        success: function(data) {
            console.log(data);
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
            if (!data.user_id || !data.identity) {
                console.log("#a-admin hide");
                $("#a-admin").hide();
            }
        },
        error: function() {
            alert("basic.js => loginCheck.php error");
        }
    });
})