

<center>

# Dancing in the snow
**Version:** 1.0.1
**update:** 01/05/29 02:18

</center>

## 历史版本

<details>
  <summary><strong>1.0.0更新内容</strong></summary>

- 主页封面
  - 基本算是完工，左边栏为作品信息，右边栏是一张背景
  - 载入时有一个加载的动画，然后真个屏幕显示封面
  - 很多内容采用了`wow`和`animate`的入场动效
- 顶部导航栏
  - 暂时只有一个logo返回页面顶部
- 中间主体呈现文章摘要
  - 只做了个样子
  - 图片悬浮效果
  - 摘要还不知道怎么处理，暂时设定文字区域溢出隐藏
- 页脚
  - 信息一栏和版权一栏
  - 基本算是完工，不再大改

</details>


<details>
  <summary><strong>1.0.1更新内容</strong></summary>

- 中间主体呈现文章摘要
  - 改掉原先的左右浮动，改用栅格系统
  - 大屏幕坐图右文，小屏幕上图下文
  - <font color="red">出现的问题的，图片部分的悬浮效果，悬浮范围不稳定</font>
</details>


## 官网主页的文章摘要写法

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

### 解释说明

- `class="preview-row"` preview部分的行。设置了圆角，背景颜色，溢出隐藏
- `class="preview-col"` preview部分的列。设置l高度上限。
- `class="preview-img"` preview部分的图片列。设置了外边框（强行居中
- `class="preview-col-text"` preview部分的文字列。设置了背景颜色和内边框，溢出隐藏。
- `class="preview-title"` 设置了标题字体。
- `class="preview-text"` 文字列中真正呈现文字的部分。
- `class="preview-reverse"` 针对图片列的图片翻转。

----

## bootstrap图标库使用

- [bootstrap图标库](https://icons.bootcss.com/#styling)
- 添加图标字体`<i class="bi-alarm"></i>`
- 使用font-size和color更改图标外观`<i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>`