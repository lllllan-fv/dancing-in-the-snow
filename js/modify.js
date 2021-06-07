function modify() {

}

$(document).ready(function() {
    console.log("userdata => ", $userdata);

    $("#form-userid").html($userdata["user_id"]);
    $("#form-oldpwd").val("123456");
});