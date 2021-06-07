var xmlHttp = null;

function getMD() {
    if (window.ActiveXObject) {
        // IE6, IE5 浏览器执行代码
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlHttp = new XMLHttpRequest();
    }
    //2.如果实例化成功，就调用open（）方法：
    if (xmlHttp != null) {
        xmlHttp.open("get", "article/test.md", true);
        xmlHttp.send();
        xmlHttp.onreadystatechange = doResult; //设置回调函数                 
    }

    function doResult() {
        if (xmlHttp.readyState == 4) { //4表示执行完成
            if (xmlHttp.status == 200) { //200表示执行成功
                // console.log(xmlHttp.responseText);
                mdtext = xmlHttp.responseText;
                var parser = new HyperDown,
                    html = parser.makeHtml(xmlHttp.responseText);
                console.log(html);

                // ! 解决markdown渲染字体过小
                html = "<font size=4>" + html + "</font>";

                $('.page-title').html("the title");
                $('.page-title').attr("article_id", "1");
                $('.page-author a').html("lllllan");
                $('.page-author a').attr("author", "lllllan");
                $('.page-author p').html("posted @ 2021-06-13 01:56");
                $('.page-body').html(html);
            }
        }
    }
}

getMD();