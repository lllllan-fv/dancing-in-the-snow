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

function uploadAvatar() {
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