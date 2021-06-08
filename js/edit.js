document.onkeydown = function(e) {
    e = e || window.event;
    var currKey = 0,
        e = e || event || window.event;
    currKey = e.keyCode || e.which || e.charCode;
    if (currKey == 83 && (e.ctrlKey || e.metaKey)) {
        console.log("ctrl + s");
        return false;
    }
}