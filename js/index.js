//页面索引初始值  
var pageIndex = 1;
//每页显示条数初始化，修改显示条数，修改这里即可    
var pageSize = 8;
//总的记录数，随便赋个初值好了，后面会重新赋值的 
var pageCount = 30;

$(document).ready(function () {
    // 得到要显示的总的记录数
    $.ajax({
        url: 'php/searchArticle.php',
        async: false, // 取消异步，因为只有先得到总记录数，才能计算实际需要多少页
        type: 'POST',
        dataType: 'json',
        data: {
            index: '0',
            size: pageSize,
            user_id: $userdata["user_id"],
            author_id: ""
        }, // 提交数据
        success: function (data) {
            console.log("total " + data.total);
            pageCount = data.total;
        },
        error: function () {
            alert("1 error");
        }
    });

    InitTable(pageIndex); //初始化表格数据
    InitPager();
});

function InitPager() {
    //分页，PageCount是总条目数，这是必选参数，其它参数都是可选
    $("#pager").pagination(pageCount, {
        callback: pageCallback, //PageCallback() 为翻页调用次函数。
        prev_text: "上一页",
        next_text: "下一页",
        items_per_page: pageSize,
        num_edge_entries: 2, //两侧首尾分页条目数
        num_display_entries: 8, //连续分页主体部分分页条目数
        current_page: pageIndex - 1, //当前页索引
    });
}

//翻页调用   
function pageCallback(index, jq) {
    InitTable(index + 1);
}

//请求数据   
function InitTable(pageIndex) {
    $.ajax({
        type: "POST",
        url: "php/searchArticle.php",
        dataType: "json",
        //提交两个参数：pageIndex(页面索引)，pageSize(显示条数)
        data: {
            index: pageIndex,
            size: pageSize,
            user_id: $userdata["user_id"],
            author_id: ""
        },
        success: function (data) {
            console.log("length ", data.length);
            console.log("articles ", data);
            var idx = 0;
            var str = "";
            $.each(data, function () {
                $.ajax({
                    type: "POST",
                    url: "php/getArticle.php",
                    dataType: "json",
                    data: {
                        article_id: this["article_id"]
                    },
                    success: function (article) {
                        console.log("article ", article);
                        ++idx;
                        var html = getHtml(article["article_text"].substring(0, Math.min(150, article["article_text"].length)));
                        if (idx & 1) {
                            str += "<div class='preview-row row wow animate__animated animate__fadeInLeft'>\
                            <div class='preview-col preview-img col-sm-4 col-xs-12 wow animate__animated animate__lightSpeedInLeft' data-wow-delay='0.5s'>\
                                <img src='img/OIP.jpg' class='img-rounded img-responsive center-block'>\
                                <a role='button' class='a-space' author='";
                            str += article["author_id"];
                            str += "'><div class='preview-info'><h3>Author: <strong>";
                            str += article["author_name"];
                            str += "</strong></h3><p>view more</p></div></a></div>\
                            <div class='preview-col preview-col-text col-sm-8 col-xs-12'>\
                                <div class='preview-text'><h2 class='preview-title'><a";
                            str += " article='" + article["article_id"] + "'> ";
                            str += article["article_title"] + "</a></h2>";
                            str += html + "...";
                            str += "</div></div></div>";
                        } else {
                            str += "<div class='preview-row row wow animate__animated animate__fadeInRight'>\
                            <div class='preview-col preview-col-text col-sm-8 col-xs-12'>\
                                <div class='preview-text'><h2 class='preview-title'><a";
                            str += " article='" + article["article_id"] + "'>";
                            str += article["article_title"] + "</a></h2>";
                            str += html + "...";
                            str += "</div></div>\
                            <div class='preview-col preview-img col-sm-4 col-xs-12 wow animate__animated animate__lightSpeedInRight' data-wow-delay='0.5s'>\
                                <img src='img/OIP.jpg' class='preview-reverse img-rounded img-responsive center-block'><a class='a-space' author='";
                            str += article["author_id"];
                            str += "'> <div class='preview-info'><h3>Author: <strong>"
                            str += article["author_name"];
                            str += "</strong></h3><p>view more</p></div></a></div></div>";
                        }
                        $("#preview .preview-body").html(str);
                        $(".a-space").click(function () {
                            console.log("a-space click", $(this).attr("author"));
                            $.ajax({
                                url: 'php/space.php',
                                async: false, // 取消异步
                                type: 'POST',
                                dataType: 'json',
                                data: {
                                    author_id: $(this).attr("author")
                                },
                                success: function (data) {
                                    console.log(data);
                                    window.open("space.html", "_blank");
                                },
                                error: function () {
                                    alert("basic.js => space.php error");
                                }
                            });
                        })

                        $("h2.preview-title a").click(function () {
                            console.log("title click", $(this).attr("article"));
                            $.ajax({
                                url: 'php/unWrite.php',
                                async: false, // 取消异步
                                type: 'POST',
                                dataType: 'json',
                                data: {
                                    article_id: $(this).attr("article"),
                                },
                                success: function (data) {
                                    console.log(data);
                                    window.open("article.html", "_blank");
                                },
                                error: function () {
                                    alert("index.js => unWrite.php error");
                                }
                            });
                        })
                    },
                    error: function () {
                        alert("index.js => getArticle.php error");
                    }
                });
            })
        },
        error: function () {
            alert("2 error");
        }
    });
}


function getHtml(data) {
    mdtext = data;
    var parser = new HyperDown,
        html = parser.makeHtml(mdtext);

    // ! 解决markdown渲染字体过小
    html = "<font size=4>" + html + "</font>";

    return html;
}