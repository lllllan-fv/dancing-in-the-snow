// ! ****************************************** 标题点击浮动样式 *************************************************************

var Animate = [
    "animate__bounce", "animate__flash", "animate__pulse", "animate__shakeX", "animate__shakeY",
    "animate__headShake", "animate__swing", "animate__tada", "animate__jello", "animate__flip", "animate__hinge",
];

function removeClass() {
    var _this = $(".page-title")
    _this.removeClass();
    _this.addClass("page-title animate__animated");
}

$(".page-title").click(function() {
    console.log("title-click");

    var s = Animate[parseInt(Math.random() * 11)];
    console.log(s);
    $(this).addClass(s);

    setTimeout("removeClass()", 1000);
});

// ! **************************************************************************************************************************
// ! **************************************************************************************************************************