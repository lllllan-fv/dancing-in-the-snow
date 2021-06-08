$(".btn-save").click(function() {
    console.log("save click");
})

$(".btn-publish").click(function() {
    if ($("#title").val() == "") {
        $('#warningModal').modal('show');
    } else {
        $('#publishModal').modal('show');
    }
})

$("#publish").click(function() {
    console.log("click");
})

document.onkeydown = function(e) {
    e = e || window.event;
    var currKey = 0,
        e = e || event || window.event;
    currKey = e.keyCode || e.which || e.charCode;
    if (currKey == 83 && (e.ctrlKey || e.metaKey)) {
        console.log("ctrl + s");
        if ($(".btn-save").attr("disabled") == false) {

        }
        return false;
    }
}

$(document).ready(function() {
    if (!$userdata["article_id"]) {
        // $(".btn-save").attr("disabled", true);
    }
})