//页面索引初始值  
var pageIndex = 1;
//每页显示条数初始化，修改显示条数，修改这里即可    
var pageSize = 8;
//总的记录数，随便赋个初值好了，后面会重新赋值的 
var pageCount = 30;

$(document).ready(function () {
    $(".page-title").html($userdata["author_name"] + "的空间");
    $("h2.user-name").html($userdata["author_name"]);
    $("p.user-info").html($userdata["author_id"] == "7" ? "一个在役ACMer菜鸡，正在努力做Web作业。" : "这个人很懒，什么也没有留下");
    $("img.user-ava").attr("src", $userdata["author_ava"] == "" ? textToImg($userdata["author_name"]) : $userdata["author_ava"]);
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
            author_id: $userdata["author_id"]
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
            author_id: $userdata["author_id"]
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
                        var animatein = ((++idx) % 2 == 1) ? "animate__lightSpeedInLeft" : "animate__lightSpeedInRight";
                        console.log(article["create_time"]);
                        var html = getHtml(article["article_text"].substring(0, Math.min(150, article["article_text"].length)));
                        str += "<div class='page-article width-100 wow animate__animated ";
                        str += animatein;
                        str += "'><div class='article-title'>";
                        str += article["article_title"];
                        str += "</div><div class='article-text'>";
                        str += html;
                        str += "</div><div class='article-details'>\
                            <div class='details-time'>\
                                <i class='bi bi-calendar-check'></i>";
                        str += article["update_time"];
                        str += "</div><a class='details-more' article='";
                        str += article["article_id"];
                        str += "'> 阅读全文 <i class='bi bi-chevron-double-right'></i></a></div></div> ";

                        $("#show").html(str);
                        $("a.details-more").click(function () {
                            console.log($(this).attr("article"));
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
                                    alert("space.js => unWrite.php error");
                                }
                            });
                        })
                    },
                    error: function () {
                        alert("getArticle error");
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