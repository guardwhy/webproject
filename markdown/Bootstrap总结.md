## 1- Bootstrap概述

### 1.1 什么是Bootstrap

一个前端的框架，提高前端的开发效率，制作出更加专业，漂亮的页面。

基于`html、css、js`技术，只要有这个基础就可以使用`Bootstrap`。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/bt3-01.png)

`bootstrap`中文官网：http://www.bootcss.com

### 1.2 Bootstrap的优势

自 `Bootstrap 3` 起，框架包含了贯穿于整个库的移动设备优先的样式。

`Bootstrap`支持所有的主流浏览器。如：`Internet Explorer、 Firefox、 Opera、 Google Chrome、Safari`。

只要具备 `HTML `和 `CSS` 的基础知识，就可以开始学习 `Bootstrap`。`Bootstrap` 的响应式` CSS` 能够自适应于台式机、平板电脑和手机。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/bt3-02.png)

### 1.3 响应式设计网页

#### 1.3.1 网页的响应式设计

同一个网页可以自适应不同设备的屏幕宽度

#### 1.3.1 电脑效果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/05-bt.png" style="zoom: 50%;" />

#### 1.3.2 移动端效果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/06-bt.png" style="zoom: 67%;" />

### 1.4 响应式布局特点

同一个网页可以自适应不同的设备宽度。

### 1.5 支持四类设备

在bootstrap框架中有以下四种设备，以分辨率为标准来划分。

类样式以这些缩写开头

| 四类设备 | 缩写 |
| -------- | ---- |
| 微型设备 | xs   |
| 小型设备 | sm   |
| 中型设备 | md   |
| 大型设备 | lg   |

## 2- Bootstrap目录

### 2.1 Bootstrap内容

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/07-bt.png)

### 2.2 Bootstrap下载

https://github.com/twbs/bootstrap/releases，下载用于生产环境的Bootstrap。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/08-bt.png)

### 2.3 目录结构

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/09-bt.png" style="zoom:67%;" />

### 2.4 目录的作用

css：框架制作好的样式。

js：框架中JS插件，要用到jQuery框架。

font：字体图标。

## 3- 创建Bootstrap的模板

### 3.1 创建步骤

- 复制解压出来的三个文件夹到项目中：css, js, fonts
- 复制jquery框架：jquery-3.1.1.min.js复制到js目录下
- 复制："起步->基本模板"中代码到网页，修改网页的内容。

### 3.2 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap的模板</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
	<h3>世界你好！！！</h3>
</body>
</html>
```

## 4- 栅格系统

### 4.1 栅格系统组成

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12格。栅格系统用于**<font color="red">通过一系列的行（row）与列（column）的组合</font>**来创建页面布局。

### 4.2 两种容器

| 容器的类样式名      | **特点**                               |
| ------------------- | -------------------------------------- |
| **container**       | 固定宽度的容器，在不同的设备上宽度不同 |
| **container-fluid** | 始终占屏幕宽度的100%                   |

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->

  <style type="text/css">
	div{
        border: 2px solid red;
		height: 100px;
	}
  </style>
  <title>容器创建</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container">
	container：不同的设备上有不同的固定宽度
  </div>
  <div class="container-fluid">
	container-fluid：100%宽度显示
  </div>
  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>
  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/10-bootStrap.png" style="zoom:67%;" />

### 4.3 设备查询@media

通过不同的设备类型和条件定义样式表规则。设备查询让CSS可以更精确作用于不同的设备类型和同一设备的不同条件。设备查询的大部分特性都接受min和max用于表达“大于或等于”和“小于或等于”。打开文件：bootstrap.css，可以看到以下代码：

```css
.container {
  padding-right: 15px;  内右边距
  padding-left: 15px;   内左边距
  margin-right: auto;   块级元素居中
  margin-left: auto;
}
@media (min-width: 768px) {   屏幕宽度大于或等于768
  .container {
    width: 750px;    固定750
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}
```

### 4.4 类样式名

| **栅格系统**         | **描述**                                                     | **类似于表格** |
| -------------------- | ------------------------------------------------------------ | -------------- |
| **.container**       | 固定宽度的容器                                               | table          |
| **.container-fluid** | 100%的宽度                                                   | table          |
| **.row**             | 表示一行，一行最多12列                                       | tr             |
| .**col-xx-n**        | 1个格子占多少列<br />.col-xs-3 微型设备上占3列<br />.col-lg-4 在大型设备上占4列 | td             |

### 4.5 栅格的参数

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/11-bt.png" style="zoom: 67%;" />

## 5- 栅格系统的布局

### 5.1 基本结构

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <style type="text/css">
	.row div{
        border: 1px solid green;
		height: 100px;
	}
  </style>
  <title>基本结构</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
  <!--一行-->
  <div class="row">
	<!--一个格子占4列-->
	<div class="col-md-4">
	  内容
	</div>
	<div class="col-md-4">
	  内容
	</div>
	<div class="col-md-4">
	  内容
	</div>
  </div>

  <!--一行-->
  <div class="row">
	<!--一个格子占4列-->
	<div class="col-md-4">
	  内容
	</div>
	<div class="col-md-4">
	  内容
	</div>
	<div class="col-md-4">
	  内容
	</div>
  </div>
</div>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/12-bt.png" style="zoom:67%;" />

### 5.2 不同屏幕的适配

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>不同屏幕的适配</title>
  <style type="text/css">
	.row div{
        border: 1px solid green;
		height: 100px;
	}
  </style>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
  <!--行-->
  <div class="row">
	<!--格子：在微型设备上占6列，在小型设备上占4列，在中型设备上占3列 -->
	<div class="col-xs-6 col-sm-4 col-md-3">java</div>
	<div class="col-xs-6 col-sm-4 col-md-3">java</div>
	<div class="col-xs-6 col-sm-4 col-md-3">java</div>
	<div class="col-xs-6 col-sm-4 col-md-3">java</div>
	<div class="col-xs-6 col-sm-4 col-md-3">java</div>
	<div class="col-xs-6 col-sm-4 col-md-3">java</div>
  </div>
</div>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/13-bt.png" style="zoom: 80%;" />

### 5.3 显示和隐藏块

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <style type="text/css">
	.row div{
        border: 2px solid red;
		height: 100px;
	}
  </style>
  <title>显示和隐藏块</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<div class="container">
	  <!--一行-->
	  <div class="row">
		<!--格子：在微型设备上占6列，在小型设备上占4列，在中型设备上占3列 -->
		<div class="hidden-xs col-xs-6 col-sm-4 col-md-3">
		  微型设备隐藏
		</div>
		<div class="visible-sm coll-xs-6 col-sm-4 col-md-3">
		  小型设备显示
		</div>
		<div class="col-xs-6 col-sm-4 col-md-3">
		  内容
		</div>
		<div class="col-xs-6 col-sm-4 col-md-3">
		  内容
		</div>
	  </div>
	</div>
	<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
	<script src="../static/js/jquery-3.1.1.js"></script>
	<!-- 加载 Bootstrap的所有 JavaScript插件-->
	<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/14-bt.png" style="zoom:80%;" />

### 5.4 总结

| **类样式名**             | **作用**                   |
| ------------------------ | -------------------------- |
| **.container**           | 固定大小容器               |
| **.container-fluid**     | 100%宽度容器               |
| **.row**                 | 代表1行                    |
| **.col-xs-n**            | 微型设备上一个格子占多少列 |
| **.col-sm-n**            | 小型设备上一个格子占多少列 |
| **.col-md-n**            | 中型设备上一个格子占多少列 |
| **.col-lg-n**            | 大型设备上一个格子占多少列 |
| **.hidden-lg/md/sm/xs**  | 在指定设备上隐藏           |
| **.visible-lg/md/sm/xs** | 只在指定的设备上显示       |

## 6- BootStrap 表格

### 6.1 基本表格

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>基本表格</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>七龙珠</h2>
  <table class="table">
	<thead>
	  <th>编号</th>
	  <th>姓名</th>
	  <th>性别</th>
	  <th>电话</th>
	</thead>
	<tr>
	  <td>1302</td>
	  <td>贝吉塔</td>
	  <td>男</td>
	  <td>19509869504</td>
	</tr>
	<tr>
	  <td>5940</td>
	  <td>孙悟空</td>
	  <td>男</td>
	  <td>13938475687</td>
	</tr>
	<tr>
	  <td>6841</td>
	  <td>龟仙人</td>
	  <td>男</td>
	  <td>18501029504</td>
	</tr>
  </table>
</div>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/15-bt.png" style="zoom: 67%;" />

### 6.2 带斑马线的表格

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>带斑马线的表格</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>七龙珠</h2>
  <table class="table table-striped">
	<thead>
	<th>编号</th>
	<th>姓名</th>
	<th>性别</th>
	<th>电话</th>
	</thead>
	<tr>
	  <td>1302</td>
	  <td>贝吉塔</td>
	  <td>男</td>
	  <td>19509869504</td>
	</tr>
	<tr>
	  <td>5940</td>
	  <td>孙悟空</td>
	  <td>男</td>
	  <td>13938475687</td>
	</tr>
	<tr>
	  <td>6841</td>
	  <td>龟仙人</td>
	  <td>男</td>
	  <td>18501029504</td>
	</tr>
  </table>
</div>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/20210104105335.png" style="zoom:67%;" />

### 6.3 带边框的表格

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>带边框的表格</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>七龙珠</h2>
  <table class="table table-bordered">
	<thead>
	<th>编号</th>
	<th>姓名</th>
	<th>性别</th>
	<th>电话</th>
	</thead>
	<tr>
	  <td>1302</td>
	  <td>贝吉塔</td>
	  <td>男</td>
	  <td>19509869504</td>
	</tr>
	<tr>
	  <td>5940</td>
	  <td>孙悟空</td>
	  <td>男</td>
	  <td>13938475687</td>
	</tr>
	<tr>
	  <td>6841</td>
	  <td>龟仙人</td>
	  <td>男</td>
	  <td>18501029504</td>
	</tr>
  </table>
</div>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/17-bt.png" style="zoom:67%;" />

### 6.4 鼠标悬停状态

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>鼠标悬停状态</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>七龙珠</h2>
  <table class="table table-hover">
	<thead>
	<th>编号</th>
	<th>姓名</th>
	<th>性别</th>
	<th>电话</th>
	</thead>
	<tr>
	  <td>1302</td>
	  <td>贝吉塔</td>
	  <td>男</td>
	  <td>19509869504</td>
	</tr>
	<tr>
	  <td>5940</td>
	  <td>孙悟空</td>
	  <td>男</td>
	  <td>13938475687</td>
	</tr>
	<tr>
	  <td>6841</td>
	  <td>龟仙人</td>
	  <td>男</td>
	  <td>18501029504</td>
	</tr>
  </table>
</div>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/18-bt.png" style="zoom: 67%;" />

### 6.5 紧凑的表格

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>紧凑的表格</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>七龙珠</h2>
  <table class="table table-condensed">
	<thead>
	<th>编号</th>
	<th>姓名</th>
	<th>性别</th>
	<th>电话</th>
	</thead>
	<tr>
	  <td>1302</td>
	  <td>贝吉塔</td>
	  <td>男</td>
	  <td>19509869504</td>
	</tr>
	<tr>
	  <td>5940</td>
	  <td>孙悟空</td>
	  <td>男</td>
	  <td>13938475687</td>
	</tr>
	<tr>
	  <td>6841</td>
	  <td>龟仙人</td>
	  <td>男</td>
	  <td>18501029504</td>
	</tr>
  </table>
</div>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/19-bt.png" style="zoom:80%;" />

### 6.6 表格效果整合

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>表格效果整合</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>七龙珠</h2>
  <table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<th>编号</th>
	<th>姓名</th>
	<th>性别</th>
	<th>电话</th>
	</thead>
	<tr>
	  <td>1302</td>
	  <td>贝吉塔</td>
	  <td>男</td>
	  <td>19509869504</td>
	</tr>
	<tr>
	  <td>5940</td>
	  <td>孙悟空</td>
	  <td>男</td>
	  <td>13938475687</td>
	</tr>
	<tr>
	  <td>6841</td>
	  <td>龟仙人</td>
	  <td>男</td>
	  <td>18501029504</td>
	</tr>
  </table>
</div>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/20-bt.png" style="zoom: 67%;" />

### 6.7 其他样式

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>常见样式</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>七龙珠</h2>
  <table class="table">
	<thead>
	<th>编号</th>
	<th>姓名</th>
	<th>性别</th>
	<th>电话</th>
	</thead>
	<!--信息样式-->
	<tr class="info">
	  <td>1302</td>
	  <td>贝吉塔</td>
	  <td>男</td>
	  <td>19509869504</td>
	</tr>
	<!--成功样式-->
	<tr class="success">
	  <td>5940</td>
	  <td>孙悟空</td>
	  <td>男</td>
	  <td>13938475687</td>
	</tr>
	<!--激活样式-->
	<tr class="active">
	  <td>6841</td>
	  <td>龟仙人</td>
	  <td>男</td>
	  <td>18501029504</td>
	</tr>
	<!--警告样式-->
	<tr class="warning">
	  <td>6741</td>
	  <td>雅木茶</td>
	  <td>男</td>
	  <td>18501029590</td>
	</tr>
	<!--危险样式-->
	<tr class="danger">
	  <td>6741</td>
	  <td>小林</td>
	  <td>男</td>
	  <td>18501029590</td>
	</tr>
  </table>
</div>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/21-bt.png" style="zoom:67%;" />

## 7- Bootstrap按钮

### 7.1 常用按钮

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap按钮</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<!--提交成功按钮-->
<button class="btn btn-success">按钮</button>
<!--原始按钮-->
<button type="button" class="btn">原始样式按钮</button>
<!--默认按钮-->
<button type="button" class="btn btn-default">默认按钮</button>
<!--提交按钮-->
<button type="button" class="btn btn-primary">提交按钮</button><br/>

<!--信息按钮，显示更多信息-->
<button type="button" class="btn btn-info">信息按钮</button>
<!--警告按钮-->
<button type="button" class="btn btn-warning">警告按钮</button>
<!--危险按钮-->
<button type="button" class="btn btn-danger">危险按钮</button>
<!--表现为连接-->
<button type="button" class="btn btn-link">表现为链接</button><br/>

<!--大一点的按钮-->
<button type="button" class="btn btn-lg">大一点的按钮</button>
<!--小一点的按钮-->
<button type="button" class="btn btn-sm">小一点的按钮</button>
<!--最小的按钮-->
<button type="button" class="btn btn-xs">最小的按钮</button>
<!--宽屏按钮-->
<button type="button" class="btn btn-block">宽屏按钮</button><br/>
<!--激活按钮-->
<button type="button" class="btn active">激活状态按钮</button>

<!--无效按钮-->
<button type="button" class="btn disabled">红包失效</button>

<!--按钮混合使用-->
<button type="button" class="btn disabled btn-danger btn-xs">红包真香</button>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/22-bt.png" style="zoom:80%;" />

## 8- Bootstrap图片

### 8.1 图片形状

| 图片形状   | 类样式名      |
| ---------- | ------------- |
| 圆角       | img-rounded   |
| 圆或者椭圆 | img-circle    |
| 有边框     | img-thumbnall |

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstraptu</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
	<!--圆角-->
	<img width="200px" src="../static/images/timg.jpg" class="img-responsive img-rounded"><br/>
	<!--圆形-->
	<img width="200px" src="../static/images/timg.jpg" class="img-responsive img-circle"><br>
	<!--缩略图-->
	<img width="200px" src="../static/images/timg.jpg" class="img-responsive img-thumbnail"><br>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/23-bt.png" style="zoom:67%;" />

## 9- Bootstrap表单和背景

### 9.1 表单

| 样式名       | 作用                                                         |
| ------------ | ------------------------------------------------------------ |
| form-control | <input>、<textarea>和<select>元素都将被默认设置宽度属性为width：100% |
| form-group   | 将label 元素和前面提到的控件包裹在一行中进行分组             |

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap的表单</title>
  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container">
	<form style="max-width: 400px">
	  <h3>添加联系人</h3>
	  <div class="form-group">
		<label for="name">姓名</label>
		<input type="text" class="form-control" placeholder="请输入姓名" id="name">
	  </div>
	  <div class="form-group">
		<label>性别</label>
		<input type="radio" id="male" name="gender" checked="checked"><label for="male">男</label>
		<input type="radio" id="female" name="gender" checked="checked"><label for="female">女</label>
	  </div>
	  <div class="form-group">
		<label for="edu">学历</label>
		<select id="edu" class="form-control">
		  <option>本科</option>
		  <option>硕士</option>
		  <option>博士</option>
		</select>
	  </div>
	  <div class="form-group text-center">
		<input type="submit" class="btn btn-primary" value="注册">
		<input type="reset" class="btn btn-default" value="取消">
		<input type="button" class="btn btn-danger" value="退出">
	  </div>
	</form>
  </div>
  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>
  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/24-bt.png" style="zoom:67%;" />

### 9.2 背景

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap的背景</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>

  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</head>
<body>
<!--强调的背景-->
<p class="bg-primary">强调</p>
<!--成功操作文字-->
<p class="bg-success">操作成功</p>
<!--信息提示文字的背景顶-->
<p class="bg-info">请输入姓名</p>
<!--警告提示文字背景-->
<p class="bg-warning">警告语</p>
<!--危险提示文字-->
<p class="bg-danger">rm-rf</p>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/25-bt.png" style="zoom: 80%;" />

### 9.3 其他属性

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap的其他属性</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!--1.关闭按钮-->
  <button type="button" class="close" aria-hidden="true">&times;</button>
  <!--2.下拉菜单的按钮-->
  <span class="caret"></span><br/>
  <!--3.左浮动-->
  <div class="pull-left">文字浮动到左边</div>
  <!--4.右浮动-->
  <div class="pull-right">文字浮动到右边</div><br/>

  <!--5.显示-->
  <div class="show">显示1</div><br/>
  <!--6.隐藏:强行隐藏,会把该元素的位置也让出来-->
  <div class="show">显示2</div>
  <div class="hidden">隐藏</div>
  <div class="show">显示3</div><br/>

  <!--7.强行隐藏，该元素的位置会保留-->
  <div class="show">显示4</div>
  <div class="invisible">隐藏</div>
  <div class="show">显示5</div>

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>
  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/26-bt.png" style="zoom:67%;" />

## 10- Bootstrap 组件

### 10.1 下拉菜单

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签必须放在最前面，任何其他内容都必须跟随其后！ -->
  <title>Bootstrap的模板</title>
  <style type="text/css">
	#dp{
		height: 200px;
	}
  </style>
  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="dropdown" id="dp">
  <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
	学习前端
	<span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
	<!--1.标题不可点击-->
	<li class="dropdown-header">
	  静态页面(不可点击)
	</li>
	<li role="presentation">
	  <a href="#">CSS</a>
	</li>
	<!--2.分割线-->
	<li role="presentation" class="divider"></li>
	<!--3.动态页面-->
	<li class="dropdown-header">
	  动态页面
	</li>
	<li role="presentation">
	  <a href="#">Vue.js</a>
	</li>
	<li role="presentation">
	  <a href="#">javaScript</a>
	</li>
	<li role="presentation">
	  <a href="#">jQuery</a>
	</li>
	<!--4.禁用项目-->
	<li role="presentation" class="disabled">
	  <a role="menuitem" tabindex="-1" href="#">nodejs(栏目开发中)</a>
	</li>
  </ul>
</div>
  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>
  <!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
  <script src="../static/js/popper.js"></script>
  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/28-bt.png" style="zoom: 80%;" />

### 10.2 按钮组

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>Bootstrap按钮组</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!--1.按钮组-->
  <div class="btn-group" role="group" aria-label="web">
	<h4>按钮组</h4>
	<button type="button" class="btn btn-default">javaScript</button>
	<button type="button" class="btn btn-default">jQuery</button>
	<button type="button" class="btn btn-default">Vue.js</button>
  </div>

  <!--2.按钮工具栏-->
  <div class="btn-toolbar" role="toolbar" aria-label="learning">
	<h4>按钮工具栏</h4>
	<div class="btn-group" role="group" aria-label="java">
	  <button type="button" class="btn btn-default">集合</button>
	  <button type="button" class="btn btn-default">多线程</button>
	  <button type="button" class="btn btn-default">网络编程</button>
	</div>
	<div class="btn-group" role="group" aria-label="web">
	  <button type="button" class="btn btn-default">jsp</button>
	  <button type="button" class="btn btn-default">javaScript</button>
	  <button type="button" class="btn btn-default">react.js</button>
	</div>
	<div class="btn-group" role="group" aria-label="framework">
	  <button type="button" class="btn btn-default">spring</button>
	  <button type="button" class="btn btn-default">springBoot</button>
	  <button type="button" class="btn btn-default">Mybatis</button>
	</div>
  </div>

  <!--3.按钮组大小-->
  <h4>按钮组大小</h4>
  <div class="btn-group btn-group-lg" role="group" aria-label="web">
	<button type="button" class="btn btn-default">javaScript</button>
	<button type="button" class="btn btn-default">jQuery</button>
	<button type="button" class="btn btn-default">Vue.js</button>
  </div><br/>
  <div class="btn-group btn-group" role="group" aria-label="web">
	<button type="button" class="btn btn-default">javaScript</button>
	<button type="button" class="btn btn-default">jQuery</button>
	<button type="button" class="btn btn-default">Vue.js</button>
  </div><br/>
  <div class="btn-group btn-group-sm" role="group" aria-label="web">
	<button type="button" class="btn btn-default">javaScript</button>
	<button type="button" class="btn btn-default">jQuery</button>
	<button type="button" class="btn btn-default">Vue.js</button>
  </div><br/>
  <div class="btn-group btn-group-xs" role="group" aria-label="web">
	<button type="button" class="btn btn-default">javaScript</button>
	<button type="button" class="btn btn-default">jQuery</button>
	<button type="button" class="btn btn-default">Vue.js</button>
  </div><br/>

  <!--4.垂直排列的按钮组-->
  <div class="btn-group-vertical" role="group" aria-label="web">
	<h4>垂直排列的按钮组</h4>
	<button type="button" class="btn btn-default">javaScript</button>
	<button type="button" class="btn btn-default">jQuery</button>
	<button type="button" class="btn btn-default">Vue.js</button>
  </div>

  <!--5.复选框-->
  <h4>复选框</h4>
  <div class="btn-group" data-toggle="buttons">
	<label class="btn btn-default active">
	  <input type="checkbox" checked> Spring(默认选中)
	</label>
	<label class="btn btn-default">
	  <input type="checkbox"> SpringBoot
	</label>
	<label class="btn btn-default">
	  <input type="checkbox"> springCloud
	</label>
  </div>

  <!--5.单选框-->
  <h4>单选框</h4>
  <div class="btn-group" data-toggle="buttons">
	<label class="btn btn-default active">
	  <input type="radio" checked> Spring
	</label>
	<label class="btn btn-default">
	  <input type="radio"> SpringMVC
	</label>
	<label class="btn btn-default">
	  <input type="radio"> Mybatis
	</label>
  </div>
  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>
  <!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
  <script src="../static/js/popper.js"></script>
  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/29-bt.png" style="zoom: 50%;" />

### 10.3 按钮式下拉菜单

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签必须放在最前面，任何其他内容都必须跟随其后！ -->
  <style type="text/css">
	.btn-group{
		height: 100px;
	}
  </style>
  <title>按钮式下拉菜单</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!--1.单按钮下拉菜单-->
  <div class="btn-group">
	<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
	  单按钮下拉菜单
	  <span class="caret"></span>
	</button>
	<ul class="dropdown-menu" role="menu">
	  <li>
		<a href="#">CSS</a>
	  </li>
	  <li role="presentation">
		<a href="#">Vue.js</a>
	  </li>
	  <li role="presentation">
		<a href="#">javaScript</a>
	  </li>
	  <li role="presentation">
		<a href="#">jQuery</a>
	  </li>
	</ul>
  </div><br/>

  <!--2.分裂式按钮下拉菜单-->
  <div class="btn-group">
	<button type="button" class="btn btn-default">分裂式按钮下拉菜单</button>
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
	  <span class="caret"></span>
	</button>

	<ul class="dropdown-menu" role="menu">
	  <li>
		<a href="#">Spring</a>
	  </li>
	  <li role="presentation">
		<a href="#">SpringMVC</a>
	  </li>
	  <li role="presentation">
		<a href="#">SpringBoot</a>
	  </li>
	  <li role="presentation">
		<a href="#">SpringCloud</a>
	  </li>
	</ul>
  </div><br/>

  <!--3.向上弹出式菜单-->
  <div class="btn-group dropup">
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" id="dropdownMenu1">
	  向上弹出式菜单
	  <span class="caret"></span>
	</button>
	<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
	  <li>
		<a href="#">CSS</a>
	  </li>
	  <li role="presentation">
		<a href="#">Vue.js</a>
	  </li>
	  <li role="presentation">
		<a href="#">javaScript</a>
	  </li>
	  <li role="presentation">
		<a href="#">jQuery</a>
	  </li>
	</ul>
  </div><br/>

  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery-3.1.1.js"></script>
  <!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
  <script src="../static/js/popper.js"></script>
  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/30-bt.png" style="zoom: 80%;" />

### 10.4 输入框组

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签必须放在最前面，任何其他内容都*必须*跟随其后！ -->
  <style type="text/css">
	div{
		margin: 5px;
	}
  </style>
  <title>Bootstrap的输入框</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

 <!--1.基本组合-->
 <h4>登录名</h4>
 <div class="input-group">
   <input type="text" class="form-control" placeholder="邮箱" aria-describedby="basic">
   <span class="input-group-addon" id="basic">@aliyun.com</span>
 </div>
 <h4>登录密码</h4>
 <div class="input-group">
   <input type="text" class="form-control" placeholder="登录密码" aria-label="">
   <span class="input-group-addon"></span>
 </div>

 <!--2.搜索按钮-->
 <h4>搜索按钮</h4>
 <div class="input-group">
   <input type="text" class="form-control" placeholder="Search..">
   <span class="input-group-btn">
	 <button class="btn btn-default" type="button">搜索</button>
   </span>
 </div>
 <!--3.整合搜索按钮-->
 <h4>整合搜索按钮</h4>
 <div class="input-group">
   <div class="input-group-btn">
	 <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	   搜索
	   <span class="caret"></span>
	 </button>
	 <ul class="dropdown-menu" role="menu">
	   <li><a href="#">百度</a></li>
	   <li><a href="#">必应</a></li>
	   <li><a href="#">Google</a></li>
	   <li><a href="#">雅虎</a></li>
	 </ul>
   </div>
   <input type="text" class="form-control" aria-label="">
 </div>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
<script src="../static/js/popper.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/31-bt.png" style="zoom:67%;" />

### 10.5 导航栏

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都必须跟随其后！ -->
  <title>Bootstrap的导航栏</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<!--1.标签页-->
<h4>标签页</h4>
<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#">Spring</a></li>
  <li role="presentation"><a href="#">SpringBoot</a></li>
  <li role="presentation"><a href="#">SpringCloud</a></li>
</ul>
<!--2.胶囊式标签页-->
<h4>胶囊式标签页</h4>
<ul class="nav nav-pills">
  <li role="presentation" class="active"><a href="#">Spring</a></li>
  <li role="presentation"><a href="#">SpringBoot</a></li>
  <li role="presentation"><a href="#">SpringCloud</a></li>
</ul>

<!--3.垂直胶囊式标签页-->
<h4>垂直胶囊式标签页</h4>
<ul class="nav nav-pills nav-stacked" style="width: 100px">
  <li role="presentation" class="active"><a href="#">Spring</a></li>
  <li role="presentation"><a href="#">SpringBoot</a></li>
  <li role="presentation"><a href="#">SpringCloud</a></li>
</ul>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
<script src="../static/js/popper.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/32-bt.png" style="zoom: 67%;" />

### 10.6 面包屑导航和分页

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
  <title>面包屑导航和分页</title>
  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<!--1.面包屑导航-->
<h4>面包屑导航</h4>
<ol class="breadcrumb">
  <li><a href="#">天猫精选</a></li>
  <li><a href="#">聚划算</a></li>
  <li><a href="#">天猫超市</a></li>
</ol>

<!--2.基本分页-->
<h4>基本分页</h4>
<nav>
  <ul class="pagination">
	<li>
	  <a href="#" aria-label="Previous">
		<span aria-hidden="true">&laquo;</span>
	  </a>
	</li>
	<li><a href="#">1</a></li>
	<li><a href="#">2</a></li>
	<li><a href="#">3</a></li>
	<li><a href="#">4</a></li>
	<li><a href="#">5</a></li>
	<li>
	  <a href="#" aria-label="Next">
		<span aria-hidden="true">&raquo;</span>
	  </a>
	</li>
  </ul>
</nav>

<!--3.翻页-->
<h4>翻页</h4>
<nav>
  <ul class="pager">
	<li><a href="#">上一页</a></li>
	<li><a href="#">下一页</a></li>
  </ul>
</nav>

<!--4.翻页禁用状态-->
<h4>翻页禁用状态</h4>
<nav>
  <ul class="pager">
	<li class="disabled"><a href="#">上一页</a></li>
	<li><a href="#">下一页</a></li>
  </ul>
</nav>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
<script src="../static/js/popper.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/33-bt.png" style="zoom: 67%;" />

### 10.7 标签

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都必须跟随其后！ -->
  <style type="text/css">
	div{
		height: 10px;
	}
  </style>
  <title>Bootstrap标签和微章</title>
  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<!--1.标签-->
<h4>默认标签</h4>
<span class="label label-default">默认</span>

<h4>强调标签</h4>
<span class=" label label-primary">强调</span>

<h4>成功标签</h4>
<span class="label label-success">成功</span>

<h4>信息标签</h4>
<span class="label label-info">信息</span>

<h4>警告标签</h4>
<span class="label label-warning">警告</span>

<h4>危险标签</h4>
<span class="label label-danger">危险</span><br/>

<!--2.微章-->
<!--2.1 超链旁的徽记-->
<h4>超链旁的徽记</h4>
<a href="#">新的消息<span class="badge">42</span></a>

<h4>按钮中的徽记</h4>
<button class="btn btn-primary" type="button">
  未读消息<span class="badge">6</span>
</button>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
<script src="../static/js/popper.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/35-bt.png" style="zoom: 50%;" />

### 10.8 缩略图

扩展 Bootstrap 的 栅格系统，可以很容易地展示栅格样式的图像、视频、文本等内容。

| 缩率图的类样式 | 特性                                                         |
| -------------- | ------------------------------------------------------------ |
| thumbnall      | 将元素设置成缩略图，内部可以包含图片、文字，等其他元素，这个缩略图放在div栅格布局的容器中。 |
| caption        | 缩略图中的标题                                               |

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签必须放在最前面，任何其他内容都必须跟随其后！ -->
  <style type="text/css">
	img{
		width: 150px;
	}
	div.col-xs-3{
		text-align: center;
	}
  </style>
  <title>Bootstrap缩略图</title>
  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
  <div class="row">
	<div class="col-xs-3">
	  <a href="#" class="thumbnail">
		<img src="../static/images/ka.jpg">
	  </a>
	  <div class="caption">
		<div class="text-muted">Leonard</div><br/>
		<p>
		  <a href="#" class="btn btn-primary" role="button">选中</a>
		</p>
	  </div>
	</div>
	<div class="col-xs-3">
	  <a href="#" class="thumbnail">
		<img src="../static/images/kobe.jpg">
	  </a>
	  <div class="caption">
		<div class="text-muted">Kobe</div><br/>
		<p>
		  <a href="#" class="btn btn-primary" role="button">选中</a>
		</p>
	  </div>
	</div>
	<div class="col-xs-3">
	  <a href="#" class="thumbnail">
		<img src="../static/images/curry.jpg">
	  </a>
	  <div class="caption">
		<div class="text-muted">Curry</div><br/>
		<p>
		  <a href="#" class="btn btn-primary" role="button">选中</a>
		</p>
	  </div>
	</div>
	<div class="col-xs-3">
	  <a href="#" class="thumbnail">
		<img src="../static/images/Rondo.jpg">
	  </a>
	  <div class="caption">
		<div class="text-muted">Rondo</div><br/>
		<p>
		  <a href="#" class="btn btn-primary" role="button">选中</a>
		</p>
	  </div>
	</div>
  </div>
</div>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
<script src="../static/js/popper.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/36-bt.png" style="zoom:67%;" />

### 10.9 进度条

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签必须放在最前面，任何其他内容都必须跟随其后！ -->
  <title>Bootstrap的进度条</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<!--1.基本进度条-->
<h4>基本进度条</h4>
<div class="progress">
  <div class="progress-bar" style="width: 60%;"></div>
</div>

<!--2.带有提示的进度条-->
<h4>带有提示的进度条</h4>
<div class="progress">
  <div class="progress-bar" style="width: 30%; min-width: 2em;">
	30%
  </div>
</div>

<!--3.不同颜色的进度条-->
<h4>不同颜色的进度条</h4>
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 40%; min-width: 2em;">
	40%
  </div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-info" style="width: 70%; min-width: 2em;">
	70%
  </div>
</div>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery-3.1.1.js"></script>
<!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
<script src="../static/js/popper.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap.min.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/37-bt.png" style="zoom: 67%;" />

## 10- 插件

### 10.1 可切换导航栏

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签必须放在最前面，任何其他内容都必须跟随其后！ -->
  <title>Bootstrap的可切换导航栏</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<ul id="myTab" class="nav nav-tabs">
  <li class="active">
	<a href="#c" data-toggle="tab">
	  c语言
	</a>
  </li>
  <li><a href="#java" data-toggle="tab">java</a></li>
  <li class="dropdown">
	<a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown">其他类型语言<b class="caret"></b></a>
	<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
	  <li><a href="#python" tabindex="-1" data-toggle="tab">python</a></li>
	  <li><a href="#vue" tabindex="-1" data-toggle="tab">vue.js</a></li>
	</ul>
  </li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade in active" id="c">
	<p>
	  C 语言是一种通用的、面向过程式的计算机程序设计语言。1972年,为了移植与开发 UNIX 操作系统，丹尼斯·里奇在贝尔电话实验室设计开发了C语言。
	  C 语言是一种广泛使用的计算机语言，它与 Java 编程语言一样普及，二者在现代软件程序员之间都得到广泛使用。
	  当前最新的 C 语言标准为 C18 ，在它之前的 C 语言标准有 C17、C11...C99 等。
	</p>
  </div>
  <div class="tab-pane fade" id="java">
	<p>
	  Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言。
	  Java 可运行于多个平台，如 Windows, Mac OS 及其他多种 UNIX 版本的系统。
	  移动操作系统 Android 大部分的代码采用 Java 编程语言编程。
	</p>
  </div>
  <div class="tab-pane fade" id="python">
	<p>
	  Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。
	  Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字。
	  其他语言的一些标点符号，它具有比其他语言更有特色语法结构。
	</p>
  </div>
  <div class="tab-pane fade" id="vue">
	<p>
	  vue是一套用于构建用户界面的渐进式框架。
	  与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
	  Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
	  另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
	</p>
  </div>
</div>
<!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
<script src="../static/js/jquery/2.0.0/jquery.min.js"></script>
<!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
<script src="../static/js/bootstrap/3.3.6/npm.js"></script>
<!-- 加载 Bootstrap的所有 JavaScript插件-->
<script src="../static/js/bootstrap/3.3.6/bootstrap.js"></script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/39-bt.png)

### 10.2 轮播图

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!--网页编码的类型-->
  <meta charset="utf-8">
  <!--使用最新的支持H5浏览器内核来解析-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--
  视口：在浏览器中一个虚拟的网页容器。参数：网页的宽度设置为设备的宽度 初始缩放比: 1:1
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- 上述3个meta标签必须放在最前面，任何其他内容都必须*跟随其后！ -->
  <style type="text/css">
	img{
		width: 110%;
		height: 80%;
	}
  </style>
  <title>Bootstrap轮播图</title>

  <!-- 导入文件：bootstrap.css -->
  <link href="../static/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
  <h2>轮播图</h2>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="2000">
	<!-- 1. 指示器(小圆点) -->
	<ol class="carousel-indicators">
	  <!--每个li就是一个圆点，class="active" 表示默认选中 -->
	  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
	  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
	  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
	</ol>

	<!-- 2. 中间的图片 -->
	<div class="carousel-inner" role="listbox">
	  <!--active表示默认选中-->
	  <div class="item active">
		<img src="../static/images/kobe.jpg">
		<div class="carousel-caption">
			kobe
		</div>
	  </div>
	  <div class="item">
		<img src="../static/images/ka.jpg" alt="...">
		<div class="carousel-caption">
		  Leonard
		</div>
	  </div>
	  <div class="item">
		<img src="../static/images/curry.jpg" alt="...">
		<div class="carousel-caption">
		  Curry
		</div>
	  </div>
	</div>

	<!-- 3. 左右箭头 -->
	<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
	  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	</a>
	<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
	  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	</a>
  </div>
</div>
  <!-- 导入jQuery文件Bootstrap的所有JavaScript插件都依赖 jQuery，所以必须放在前边 -->
  <script src="../static/js/jquery/2.0.0/jquery.min.js"></script>
  <!--在Bootstrap4中很多的提示/弹窗都是通过popper.min.js实现的, 所以需要导入-->
  <script src="../static/js/bootstrap/3.3.6/npm.js"></script>
  <!-- 加载 Bootstrap的所有 JavaScript插件-->
  <script src="../static/js/bootstrap/3.3.6/bootstrap.js"></script>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/jQuery/jquery2/40-bt.png" style="zoom:67%;" />

