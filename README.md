[TOC]

# 官网主页的文章摘要写法

- 所有的文章摘要，必须放在`<div id = "preview"> </div>`的内部
- 一篇文章摘要使用一个div:

<details>
  <summary><strong>格式如下</strong></summary>

```html
# 左图右文
<div class="preview-row row">
    <div class="preview-col preview-img col-sm-4 col-xs-12 wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s">
        <img src="img/OIP.jpg" class="img-rounded img-responsive center-block">
        <a href="#">
            <div class="preview-info">
                <h3>Author: <strong>作者</strong></h3>
                <p>view more</p>
            </div>
        </a>
    </div>
    <div class="preview-col preview-col-text col-sm-8 col-xs-12">
        <div class="preview-text">
            <h2 class="preview-title">文章标题</h2>
            <P>文章摘要</P>
        </div>
    </div>
</div>

#左文右图
<div class="preview-row row">
    <div class="preview-col preview-col-text col-sm-8 col-xs-12">
        <div class="preview-text">
            <h2 class="preview-title">文章标题</h2>
            <P>文章摘要</P>
        </div>
    </div>
    <div class="preview-col preview-img col-sm-4 col-xs-12 wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">
        <img src="img/OIP.jpg" class="preview-reverse img-rounded img-responsive center-block">
        <a href="#">
            <div class="preview-info">
                <h3>Author: <strong>作者</strong></h3>
                <p>view more</p>
            </div>
        </a>
    </div>
</div>
```
</details>

<br>

- `class="preview-row"` preview部分的行。设置了圆角，背景颜色，溢出隐藏
- `class="preview-col"` preview部分的列。设置l高度上限。
- `class="preview-img"` preview部分的图片列。设置了外边框（强行居中
- `class="preview-col-text"` preview部分的文字列。设置了背景颜色和内边框，溢出隐藏。
- `class="preview-title"` 设置了标题字体。
- `class="preview-text"` 文字列中真正呈现文字的部分。
- `class="preview-reverse"` 针对图片列的图片翻转。

----

# 页面中的平滑滚动

- 需要引入插件`smooth-scroll.js`
- 并对齐进行初始化`smoothScroll.init();`
- 只需要在按钮或`a`标签中添加`data-scroll`，如：

```
<a data-scroll href="#rig">Register</a>
<div id="rig"></div>

<script src="js/smooth-scroll.js"></script>
<script>
smoothScroll.init();
</script>
```

----

# bootstrap图标库使用

- [bootstrap图标库](https://icons.bootcss.com/#styling)
- 添加图标字体`<i class="bi-alarm"></i>`
- 使用font-size和color更改图标外观`<i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>`

----

# 打开新页面并传递参数

- 父页面添加按钮点击事件，事件内容里添加
```
let params = {
  "article_id": id,
};
window["filter"] = params;
window.open("https://blog.csdn.net/weekdawn", '_blank'); // 跳转到新页面
window.open("https://blog.csdn.net/weekdawn", '_self'); // 覆盖当前页面

```

- 子页面js中接受数据
```
let receive = window.opener["filter"];
let article_id = receive["article_id"];
```

# simplemde 使用

- 引入对应css和js
```
<body>
<textarea></textarea>

<div class="MyID"></div>
</body>

<script>
<!-- ! 新建编辑框 -->
  var simplemde = new SimpleMDE({
      element: $("#MyID")[0],
      <!-- ! 内容初始化 -->
      initialValue: "Hello world!",
  });

<!-- ! 编辑框监听 -->
  simplemde.codemirror.on("change", function() {
      console.log(simplemde.value());

<!-- ! 通过另一插件进行渲染 -->
      var parser = new HyperDown,
          html = parser.makeHtml(simplemde.value());
      console.log(html);

  });
</script>
```

# AJAX读取文件内容

```
var xmlHttp = null;
if (window.ActiveXObject) {
    <!-- ! IE6, IE5 浏览器执行代码 -->
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
} else if (window.XMLHttpRequest) {
    <!-- ! IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码 -->
    xmlHttp = new XMLHttpRequest();
}
<!-- ! 2.如果实例化成功，就调用open（）方法： -->
if (xmlHttp != null) {
  <!-- ^ 路径 -->
    xmlHttp.open("get", "article/test.md", true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = doResult; //设置回调函数                 
}

function doResult() {
    if (xmlHttp.readyState == 4) { //4表示执行完成
        if (xmlHttp.status == 200) { //200表示执行成功
            console.log(xmlHttp.responseText);
<!-- ! markdown渲染 -->
            var parser = new HyperDown,
                html = parser.makeHtml(xmlHttp.responseText);
            console.log(html);

            $('body').append(html);
        }
    }
}
```

# 视差滚动

```
css:
{
  height: 100vh;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;

  background-image: url(../img/OIP.jpg);
}
```