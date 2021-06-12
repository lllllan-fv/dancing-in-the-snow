$(document).ready(function () {
    if ($userdata["ava_path"] != "") {
        $(".avatar").attr("src", $userdata["ava_path"]);
    } else {
        textToImg($userdata['user_name'], 0, "#9b59b6");
    }
})

function textToImg(name, size, color) {
    //名字
    name = name || '';
    //图像大小
    size = size || 40;
    //背景颜色
    var colours = [
        "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
        "#f1c40f", "#e67e22", "#e74c3c", "#00bcd4", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
    ],
        nameSplit = String(name).split(' '),
        initials, charIndex, colourIndex, canvas, context, dataURI;
    if (nameSplit.length == 1) {
        initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
    } else {
        initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    }
    //上面对名字进行一系列处理，下面找到绘图元素
    var canvas = document.getElementById('headImg');
    charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
    colourIndex = charIndex % 20;
    //图像大小
    canvas.width = size;
    canvas.height = size;
    context = canvas.getContext("2d");
    //图像背景颜色
    context.fillStyle = color ? color : colours[colourIndex - 1];
    context.fillRect(0, 0, canvas.width, canvas.height);
    //字体大小
    context.font = Math.round(canvas.width / 2) + "px 'Microsoft Yahei'";
    context.textAlign = "center";
    //字体颜色
    context.fillStyle = "#FFF";
    //绘制位置
    context.fillText(initials, size / 2, size / 1.5);
    //显示图像
    $('.avatar').attr('src', canvas.toDataURL("image/png"));

    return canvas.toDataURL("image/png")
};