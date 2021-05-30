

<center>
  <h4>
    2020-2021-2 学期
    <br> <br>
    《Web程序设计》课程设计文档
    <br> <br>
    软工192 2019212212236 苏桐渤 
    <br> <br>
    任课教师：姚争为
  </h4>
</center>

<br> 

[TOC]

# 1 选题及作品名称

- **设计主题：冰雪运动**
- **设计类型：Web主题网站**
- **作品名称：雪中起舞 - DS(Dancing in the Snow)**

# 2 实现需求

- 结合设计主题进行设计实现，风格积极健康
- 网站的**内容需从数据库读取**
- 组队制作，需提供网站**后台管理系统**，即可以对数据库的页面内容进行 CRUD 操作

# 3 功能模块设计

## 3.1 流程设计

<font color="#3498db">*写接口过程中感觉工作量太大故删除了很多内容*</font>
![](https://img-blog.csdnimg.cn/20210525233934436.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2MTg3MTU3,size_16,color_FFFFFF,t_70)

<div STYLE="page-break-after: always;"></div>

## 3.2 界面设计

- 用户
  - 官网主页
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210525234009914.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2MTg3MTU3,size_16,color_FFFFFF,t_70)
  - 个人主页
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210525234046402.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2MTg3MTU3,size_16,color_FFFFFF,t_70)
  - 文章页面
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210525234400642.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2MTg3MTU3,size_16,color_FFFFFF,t_70)
  - 编辑文章
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210525234419582.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2MTg3MTU3,size_16,color_FFFFFF,t_70)
- 管理员 
  - 文章管理
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/202105252344321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2MTg3MTU3,size_16,color_FFFFFF,t_70)

## 3.3 功能设计

- **用户注册。** 用户自行选择一个字符串作为用户名，要求连接数据库和所有用户比较不能出现相同用户名。两次密码校验是否相同，然后完成注册。
- **用户登录。** 输入用户名和密码，连接数据库后校验用户名是否存在以及用户名和密码是否正确。
- **浏览文章。** 数据库中存放每篇文章的文件存放路径，通过连接数据库访问路径提取每篇文章的内容通过html渲染呈现出来。
- **发布新文章。** 将md格式的内容保存到文件中，将文件路径保存到数据库中。
- **编辑文章。** 连接数据库获取文章的文件路径，获取文件中的内容呈现到页面上，将修改好的内容一并覆盖源文件。
- **删除文章。** 连接数据库删除记录。
- **管理文章。** 管理员可以对所有文章进行编辑。

## 3.4 数据库设计

- **用户信息表** `User_info`

| 字段名称  | 数据类型 |  长度  | 字段含义 | 是否主键 | Unique | NOT NULL |
| :-------: | :------: | :----: | :------: | :------: | :----: | :------: |
| user_name | varchar  | 2 - 11 |  用户名  |    否    | **是** |  **是**  |
| user_pwd  | varchar  | 8 - 16 | 用户密码 |    否    |   否   |  **是**  |
|  avator   | varchar  |   /    | 用户头像 |    否    |   否   |    否    |
| identity  | varchar  |   /    |   身份   |    否    |   否   |  **是**  |

- **文章管理表** `Article_management`

|   字段名称    | 数据类型 | 长度  |   字段含义   | 是否主键 | Unique | NOT NULL |
| :-----------: | :------: | :---: | :----------: | :------: | :----: | :------: |
|   user_name   | varchar  |   /   |    用户名    |    否    |   否   |  **是**  |
|  article_id   |   int    |   5   |   文章编号   |  **是**  | **是** |  **是**  |
| article_title | varchar  |   /   |   文章标题   |    否    |   否   |  **是**  |
|  article_pre  | varchar  |   /   |   文章首段   |    否    |   否   |  **是**  |
| article_path  | varchar  |   /   |   文章路径   |    否    | **是** |  **是**  |
|  create_time  |   date   |   /   |   创建时间   |    否    |   否   |  **是**  |
|  update_time  |   date   |   /   | 上次更新时间 |    否    |   否   |  **是**  |


## 3.5 接口设计

- [用户登录](#login)
- [用户注册](#register)
- [官网首页的文章](#home_article)
- [个人主页的文章](#personal_article)
- [具体文章的获取](#article)
- [发布新文章](#article_new)
- [编辑文章](#article_edit)
- [删除文章](#article_del)
  
---

<span id="login">**用户登录**</span>


- 功能说明：用于检查用户是否存在、账号密码是否匹配
- 请求方式：POST
- 请求地址：\
- 参数设置：如下


<details>
	<summary><strong>请求参数</strong></summary>

| 参数名称  | 数据类型 |   含义   | 是否必需 |
| :-------: | :------: | :------: | :------: |
| user_name |  string  |  用户名  |    是    |
| user_pwd  |  string  | 用户密码 |    是    |

</details>

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {
		"user_name": ""
	},
	"msg": "登录成功"
}
```
</details>


<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 0,
	"data": {
		"errcode": "",
		"errinfo": [
			"用户不存在",
			"密码错误",
		],
	},  
	"msg": "登录失败"
}
```
</details>


----

<span id="register">**用户注册**</span>

- 功能说明：用于新用户的注册
- 请求方式：POST
- 请求地址：\
- 参数设置：如下

<details>
	<summary><strong>请求参数</strong></summary>

| 参数名称  | 数据类型 |   含义   | 是否必需 |
| :-------: | :------: | :------: | :------: |
| user_name |  string  |  用户名  |    是    |
| user_pwd  |  string  | 用户密码 |    是    |

</details>

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {
		"user_name": ""
	},
	"msg": "注册成功"
}
```
</details>


<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 0,
	"data": {
		"errcode": "",
		"errinfo": [
			"用户名已存在"
		]
	},
	"msg": "注册失败"
}
```
</details>


---

<span id="home_article">**官网主页的文章**</span>

- 功能说明：将部分文章（标题、首段）呈现到主页
- 请求方式：POST
- 请求地址：\

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {
		[
			"user_name": "",
			"article_id": "",
			"article_title": "",
			"article_pre": "",
			"update_time": "",
		],
	},
	"msg": "获取成功"
}
```
</details>


<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 1,
	"data": {
		"errcode": "",
		"errinfo": [
			"没有文章"
		]
	},
	"msg": "获取失败"
}
```
</details>


---

<span id="personal_article">**个人主页的文章**</span>

- 功能说明：将博主的所有文章（标题、首段）呈现到主页
- 请求方式：POST
- 请求地址：\

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {
		[
			"article_id": "",
			"article_title": "",
			"article_pre": "",
			"update_time": "",
		],
	},
	"msg": "获取成功"
}
```
</details>

<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 1,
	"data": {
		"errcode": "",
		"errinfo": [
			"没有文章"
		]
	},
	"msg": "获取失败"
}
```
</details>


---

<span id="article"><strong>具体文章的呈现</strong></span>

- 功能说明：获取具体文章的全部内容呈现到网页上
- 请求方式：POST
- 请求地址：\
- 参数设置：如下

<details>
	<summary><strong>请求参数</strong></summary>

|  参数名称  | 数据类型 |   含义   | 是否必需 |
| :--------: | :------: | :------: | :------: |
| article_id |   int    | 文章编号 |    是    |

</details>

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {
		[
			"article_id": "",
			"article_path": "",
			"update_time": "",
		],
	},
	"msg": "获取成功"
}
```
</details>

<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 1,
	"data": {},
	"msg": "获取失败"
}
```
</details>


---

<span id="article_new">**发布新文章**</span>

- 功能说明：用于用户发布新文章
- 请求方式：POST
- 请求地址：\
- 参数设置：如下

<details>
	<summary><strong>请求参数</strong></summary>

|   参数名称   | 数据类型 |   含义   | 是否必需 |
| :----------: | :------: | :------: | :------: |
|  user_name   |  string  |  用户名  |    是    |
| article_body |  string  | 文章内容 |    是    |
| create_time  |   date   | 发布时间 |    是    |

</details>

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {
		"article_id": "",
		"article_path": "",
	},
	"msg": "发布成功"
}
```
</details>

<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 0,
	"data": {},
	"msg": "发布失败"
}
```
</details>

---

<span id="article_edit">**编辑文章**</span>

- 功能说明：用于用户编辑自己的文章
- 请求方式：POST
- 请求地址：\
- 参数设置：如下


<details>
	<summary><strong>请求参数</strong></summary>

|  参数名称  | 数据类型 |   含义   | 是否必需 |
| :--------: | :------: | :------: | :------: |
| user_name  |  string  |  用户名  |    是    |
| article_id |   int    | 文章编号 |    是    |

</details>

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {},
	"msg": "修改成功"
}
```
</details>

<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 0,
	"data": {},
	"msg": "修改失败"
}
```
</details>

---

<span id="article_del">**删除文章**</span>

- 功能说明：用于用户删除自己的文章
- 请求方式：POST
- 请求地址：\
- 参数设置：如下

<details>
	<summary><strong>请求参数</strong></summary>

|  参数名称  | 数据类型 |   含义   | 是否必需 |
| :--------: | :------: | :------: | :------: |
| user_name  |  string  |  用户名  |    是    |
| article_id |   int    | 文章编号 |    是    |

</details>

<details>
	<summary><strong>成功返回</strong></summary>

```
{
	"status": 1,
	"data": {},
	"msg": "删除成功"
}
```
</details>

<details>
	<summary><strong>失败返回</strong></summary>

```
{
	"status": 0,
	"data": {},
	"msg": "删除失败"
}
```
</details>

---


# 4 软件说明

## 4.1 开发环境说明

- **Microsoft Visual Studio Code 1.56.2**
- **WampServer 2.5**

## 4.2 运行环境说明

- **Microsoft Edge 90.0.818.62**

# 5 开发计划

## 5.1 时间安排


|  时间   |            计划内容            | 分工情况 |             备注              |
| :-----: | :----------------------------: | :------: | :---------------------------: |
| 5月24日 |            选题截止            | 组长申报 |              无               |
| 5月31日 |          上交作品设计          | 组长提交 |              无               |
| 6月21日 | 上交源代码、视频演示、课程总结 | 组长提交 | 站点目录规划、视频5min、200MB |
| 6月22日 |              答辩              | 组长答辩 |              无               |


## 5.2 项目分工

&emsp;&emsp;**单人完成**

# 6 非原创部分说明

1. Bootstrap,http://bootcss.com 用于前端界面搭建和交互组件调用
2. jQuery,https://jquery.com 用于前端交互开发的JS框架
3. animate,https://animate.style 提供了动画
4. wow,https://www.bootcdn.cn/wow 向下滚动时显示css动画 
5. SimpleMDE, https://simplemde.com markdown编辑器
6. Parser, https://github.com/SegmentFault/HyperDown.js 渲染markdown
