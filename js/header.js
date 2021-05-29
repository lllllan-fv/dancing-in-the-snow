function setHeaderHeight() {
    var windowHeight = $(window).height();
    $('#header').height(windowHeight);
}

// ! 监听窗口大小变化
$(window).resize(function() {
    setHeaderHeight();
})

setHeaderHeight();