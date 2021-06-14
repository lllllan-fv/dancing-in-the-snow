

<center>

# Dancing in the snow
**Version:** 3.3.7
**update:** 01/06/14 16:34

</center>

# 历史版本

## Version 3.3.7

- 2021.6.14 16:34

<details>
  <summary><strong>更新内容</strong></summary>

- 修改了inaccessible.html
</details>

---

## Version 3.3.6

- 2021.6.14 16:27

<details>
  <summary><strong>更新内容</strong></summary>

- 修改了admin界面
  - 修改开关的同时及访问后台数据库进行修改
</details>

---

## Version 3.3.5

- 2021.6.14 01:34

<details>
  <summary><strong>更新内容</strong></summary>

- 完成了admin页面，后台管理系统
  - 编辑文章的状态以及删除
</details>

---

## Version 3.3.4

- 2021.6.13 10:32

<details>
  <summary><strong>更新内容</strong></summary>

- 处理了一些bug
  - 编辑文章之后点开了另一篇不属于自己的文章，刷新编辑页面会跳转到别人的文章编辑
  - 编辑页面编辑框的生成和后台数据的读取速度方面的不确定性，导致初始化不稳定
</details>

---

## Version 3.3.3

- 2021.6.13 01:44

<details>
  <summary><strong>更新内容</strong></summary>

- 除开后台管理系统，大概是竣工了，待测试
</details>

---

## Version 3.3.2

- 2021.6.11 16:06

<details>
  <summary><strong>更新内容</strong></summary>

- 还是没能处理掉3.3.1中遇到的问题，打算忽略以后再想办法
- 该版本完成了主页分页显示文章内容
  - 遇到的新问题是，换页时会刷新页面
  - 但由于主页有一个封面的缘故，刷新界面后的阅读体验并不好
  - 初步的设想是，主页不再设置分页，只显示部分文章。并新建一个页面，用来分页显示所有的文章。
</details>

---

## Version 3.3.1

- 2021.6.11 00:06

<details>
  <summary><strong>更新内容</strong></summary>

- 现在完成了文章的创建、浏览和编辑
- 但是遇到一个新的问题
  - 由于当前访问的文章id，保存在session中
  - 所以如果打开多篇文章，则会改变session中对文章id的记录
  - 如果对页面进行刷新，则会呈现到最新一篇文章的内容
</details>

---

## Version 3.3.0

- 2021.6.10 00:43

<details>
  <summary><strong>更新内容</strong></summary>

- 写文章
  - 新文章禁用了”保存文章“的按钮
  - 发布之后进入文章页面，完成了页面的渲染，右下有该篇文章的编辑按钮
- 编辑文章
  - php部分还没写，先睡觉
</details>

---

## Version 3.2.1

- 2021.6.9 00:42

<details>
  <summary><strong>更新内容</strong></summary>

- 设置了非管理员禁用按键
  - ctrl + u
  - F12
  - 鼠标右键
- 增加了主页的滚动效果
</details>

----

## Version 3.2.0

- 2021.6.8 11:17

<details>
  <summary><strong>更新内容</strong></summary>

- 修改页面基本完成
- 设置密码框不能输入空格
- 登录、注册、修改需要响应时间，设置了按钮点击之后短暂的时间不能重复点击
- 增加了警告页面，针对在用户页面退出了账号
- 修改edit页面的ctrl + s保存编辑框内容
</details>

---

## Version 3.1.1

- 2021.6.8 00:10

<details>
  <summary><strong>更新内容</strong></summary>

- 注册页面
  - 增加对userid数字的判断，以及传参时去除前导零
- 修改页面
  - 做了一点点，没完。困了先睡
</details>

---

## Version 3.1.0

- 2021.6.7 17：25

<details>
  <summary><strong>更新内容</strong></summary>

- 可以注册了！
</details>

---

## Version 3.0.0

- 2021.6.6 23:35

<details>
  <summary><strong>更新内容</strong></summary>

- 设置了session检查用户的登录状态
- 简单设置了'basic.js'用来改变不同登录状态下的导航栏
- 开始连接数据判断登录
</details>

---

## Version 2.4.0

- 2021.6.5 06:38

<details>
  <summary><strong>更新内容</strong></summary>

- 新增`modify`页面雏形
- 修改navigation
</details>

---

## Version 2.3.0

- 2021.6.5 00:38


<details>
  <summary><strong>更新内容</strong></summary>

- 新增`login`页面雏形
</details>

---

## Version 2.2.0

- 2021.6.4 17：20


<details>
  <summary><strong>更新内容</strong></summary>

- 取消'edit.css'的全部元素的溢出隐藏 —— 实测发现会禁用md编辑器的编辑
- 取消`#navigation`的溢出隐藏 —— 直接把下拉列表给隐藏了可还行
- 将nav栏的DS点击设为返回页面顶部
- 注册页面的雏形，还有一些校验状态没搞

</details>

---

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
