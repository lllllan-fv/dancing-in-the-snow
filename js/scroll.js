function scroll() {
    // ! 计算位置判断是否为导航栏添加 ‘fiexd-top’ class
    if ($(window).scrollTop() >= $(window).height()) {
        $('#navigation').addClass('fixed-top');
    } else {
        $('#navigation').removeClass('fixed-top');
    }
}

$(document).ready(function() {
    document.onscroll = scroll;
});