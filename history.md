

<center>

# Dancing in the snow
**Version:** 2.3.0
**update:** 01/06/05 00：38

</center>

# 历史版本

## Version 2.3.0

- 2021.6.5 00:38


<details>
  <summary><strong>更新内容</strong></summary>

- 新增`login`页面雏形
</details>


## Version 2.2.0

- 2021.6.4 17：20


<details>
  <summary><strong>更新内容</strong></summary>

- 取消'edit.css'的全部元素的溢出隐藏 —— 实测发现会禁用md编辑器的编辑
- 取消`#navigation`的溢出隐藏 —— 直接把下拉列表给隐藏了可还行
- 将nav栏的DS点击设为返回页面顶部
- 注册页面的雏形，还有一些校验状态没搞

</details>

## Version 2.2.0

- 2021.6.4 01:01

<details>
  <summary><strong>更新内容</strong></summary>

- `edit.html`页面
  - 调好css未设其他js和后端连接
  - 对顶部设有媒体查询
- `input`设置了对焦样式

</details>

---

## Version 2.1.0

- 2021.6.3 01:14

<details>
  <summary><strong>更新内容</strong></summary>

- 对文章页面的呈现文章部分添加了媒体查询
- edit页面雏形

</details>

---

## Version 2.0.1

- 2021.6.3 01:02

<details>
  <summary><strong>更新内容</strong></summary>

- 文章页面
  - 新增页头，包含视差滚动的背景、标题、作者
  - 动态添加文章内容详见`article.html`下的js部分
  - 勉强对页头部分设置了媒体查询
</details>

---

## Version 2.0.0

- 2021.6.2 01:27

<details>
  <summary><strong>更新内容</strong></summary>

- 主页样式
  - 添加了背景图片
  - 更改了一些容器的颜色
- `artilce.html`
  - 尝试从主页链接到文章页，并传递`article_id`参数
- simplemde
  - markdown编辑器
  - `simplemde-1.11.2.min.css`
  - `simplemde-1.11.2.min.js`
- markdown渲染
  - `parser.js`
</details>

---


## Version 1.1.2 
- 2021.5.30 10:53

<details>
  <summary><strong>更新内容</strong></summary>

- 课程设计书`book.html`
</details>

----

## Version 1.1.1

- 2021.5.30 01:17

<details>
  <summary><strong>更新内容</strong></summary>

- `preview.css`
  - 将`#preview`的`margin-top`改为`padding`，使得锚点跳转时不遮盖
- `style.css`
  - 修改了导航栏左边logo的鼠标悬浮区域
</details>

----

## Version 1.1.0

- 2021.5.30 00:56

<details>
  <summary><strong>更新内容</strong></summary>

- 中间主体呈现文章摘要
  - 图片大小设为父级的80%等比缩放
  - 修改了`#preview`的`margin-top`，使得离导航狼更远一些
- 页面中的平滑滚动
  - 引入插件`smooth-scroll.js`，并在`scroll.js`中对其进行初始化，实现页面内的锚点跳转为滚动方式
- 导航栏
  - 导航狼的列表里姑且先放了登录注册等字和图标
</details>

----

## Version 1.0.1

- 2021.5.29 10:35

<details>
  <summary><strong>更新内容</strong></summary>

- 中间主体呈现文章摘要
  - 改掉原先的左右浮动，改用栅格系统
  - 大屏幕坐图右文，小屏幕上图下文
  - <font color="red">出现的问题的，图片部分的悬浮效果，悬浮范围不稳定</font>
</details>

----

## Version 1.0.0

<details>
  <summary><strong>更新内容</strong></summary>

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
- 页面上尝试了滚动视差的图片，还在试验阶段

</details>

----
