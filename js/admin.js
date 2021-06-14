//页面索引初始值  
var pageIndex = 1;
//每页显示条数初始化，修改显示条数，修改这里即可    
var pageSize = 15;
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
        url: "php/adminSearch.php",
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
            var str = "<thead><tr>\
                            <th>#</th>\
                            <th>文章标题</th>\
                            <th>作者</th>\
                            <th>发布时间</th>\
                            <th>上次更新</th>\
                            <th>正常/禁用</th>\
                            <th>公开/私密</th>\
                            <th>操作</th>\
                        </tr></thead>";

            $.each(data, function () {
                var state_check = this["article_state"] == "1" ? "checked" : "";
                var public_check = this["article_public"] == "1" ? "checked" : "";
                str += "<tr id='" + this["article_id"] + "'>";
                str += "<th scope='row'>" + this["article_id"] + "</th>";
                str += "<td>" + this["article_title"].substring(0, Math.min(10, this["article_title"].length)) + "..</td>";
                str += "<td>" + this["author_id"] + "</td>";
                str += "<td>" + this["create_time"] + "</td>";
                str += "<td>" + this["update_time"] + "</td>";
                str += "<td><input type='checkbox' name='state_switch' " + state_check + " article_id='" + this["article_id"] + "'></td>";
                str += "<td><input type='checkbox' name='public_switch' " + public_check + " article_id='" + this["article_id"] + "'></td>";
                str += "<td><a role='button' class='edit'>编辑</a>&emsp;<a role='button' class='remove'>删除</a></td>";
                str += "</tr>";
            })

            str += "</tbody>";

            $("table").html(str);

            $("[name='state_switch']").bootstrapSwitch({
                onText: "正常", // 设置ON文本
                offText: "禁用", // 设置OFF文本
                onColor: "success", // 设置ON文本颜色(info/success/warning/danger/primary)
                offColor: "warning", // 设置OFF文本颜色 (info/success/warning/danger/primary)
                size: "normal", // 设置控件大小,从小到大  (mini/small/normal/large)
                // 当开关状态改变时触发
                onSwitchChange: function (event, state) {
                    console.log($(this).attr("article_id"), state);
                    $.ajax({
                        url: 'php/adminState.php',
                        async: false, // 取消异步
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            article_id: $(this).attr("article_id"),
                            article_state: state ? "1" : "0",
                        },
                        success: function (data) {
                            console.log(data);
                        },
                        error: function () {
                            alert("admin.js => adminState.php error");
                        }
                    });
                }
            });

            $("[name='public_switch']").bootstrapSwitch({
                onText: "公开", // 设置ON文本
                offText: "私密", // 设置OFF文本
                onColor: "success", // 设置ON文本颜色(info/success/warning/danger/primary)
                offColor: "warning", // 设置OFF文本颜色 (info/success/warning/danger/primary)
                size: "normal", // 设置控件大小,从小到大  (mini/small/normal/large)
                // 当开关状态改变时触发
                onSwitchChange: function (event, state) {
                    console.log($(this).attr("article_id"), state);
                    $.ajax({
                        url: 'php/adminPublic.php',
                        async: false, // 取消异步
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            article_id: $(this).attr("article_id"),
                            article_public: state ? "1" : "0",
                        },
                        success: function (data) {
                            console.log(data);
                        },
                        error: function () {
                            alert("admin.js => adminPublic.php error");
                        }
                    });
                }
            });

            $("a.edit").click(function () {
                console.log('edit click', this, $(this).prevAll("[name='public_switch']"));
                $.ajax({
                    url: 'php/unWrite.php',
                    async: false, // 取消异步
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        article_id: $(this).parent().parent().attr("id")
                    },
                    success: function (data) {
                        console.log(data);
                        window.open("edit.html", "_blank");
                    },
                    error: function () {
                        alert("getArticle.js => unWrite.php error");
                    }
                });
            })

            $("a.remove").click(function () {
                $.ajax({
                    url: 'php/remove.php',
                    async: false, // 取消异步
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        article_id: $(this).parent().parent().attr("id")
                    },
                    success: function (data) {
                        console.log(data);
                        location.reload();
                    },
                    error: function () {
                        alert("admin.js => remove.php error");
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