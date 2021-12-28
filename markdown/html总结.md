## 1-html基础标签

### 1.1 html基本结构

```css
<!DOCTYPE html>
<html lang="en">
<!--头部信息-->
<head>
    <!--页面编码设置-->
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<!--网页主体内容-->
<body>
    <p>hello world</p>
</body>
</html>
```

### 1.2 html注释标签

```xml
<!-- 要注释的内容 -->
快捷键:Ctrl + /
注释在网页中不显示
```

### 1.3 字符实体

在HTML中有的字符是被HTML保留的, 有的HTML字符在HTML中是有特殊含义的, 是不能在浏览器中直接显示出来的, 要想显示出来就必须通过字符实体。

| *&nbsp* | 空格, 一个 就是一个空格 |
| ------- | ----------------------- |
| *&lt*   | 小于符号 `<`            |
| *&gt*   | 大于符号 `>`            |
| *&copy* | 版权符号                |

**代码实现**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>01-字符实体</title>
</head>
<body>
<p>Curry是&nbsp;&nbsp;&nbsp;MVP！！！</p>

<p>我们学习了&lt;h1&gt;标签, &lt;table&gt;标签, &lt;img&gt;标签....</p>

&copy;
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/15-html.png)

## 2-文字和段落标签

### 2.1 标题标签

```properties
<h1></h1>~<h6></h6>
```

### 2.2 段落标签

```properties
<p> </p>   align是对齐属性值
```

| 值      | 描述                                       |
| ------- | ------------------------------------------ |
| left    | 左对齐内容。                               |
| right   | 右对齐内容。                               |
| center  | 居中对齐内容。                             |
| justify | 对行进行伸展，这样每行都可以有相等的长度。 |

### 2.3 换行标签

```css
<br/>
```

### 2.4 水平线

```css
<hr/>
```

| 属性    | 描述                             |
| ------- | -------------------------------- |
| width   | 设置水平线宽度，可以像素或百分比 |
| color   | 设置水平线颜色                   |
| align   | 设置水平线居中对齐               |
| noshade | 设置水平线无阴影                 |

### 2.5 文字斜体

```css
<i></i> 、 <em></em>
```

### 2.6 加粗

```css
<b></b> 、<strong></strong>
```

### 2.7 上标和下标

```cpp
- <sub>
- <sup>  
```

### 2.8 插入和删除内容

```cpp
- ins
- del
```

### 2.9 特殊符号

| 属性   | 显示结果 | 描述             |
| ------ | -------- | ---------------- |
| &lt    | <        | 小于号或显示标记 |
| &gt    | >        | 大于号或显示标记 |
| &reg   | ®        | 已注册           |
| &copy  | ©        | 版权             |
| &trade | ™        | 商标             |
| &nbsp  | Space    | 不断行的空白     |

### 2.10 图片标签

图片标签：img  作用：在页面中显示一张图片  单标签

```css
<img src=" " alt= …/>
```

**img属性**

- src：图片显示的路径
- alt：如果图片加载不出来，会显示这个属性中的文字
- title：介绍这张图片
- width：图片的宽度
- height：图片的高度

#### 2.10.1 代码示例

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>图片标签</title>
</head>
<body>
<!--
    图片标签：img  作用：在页面中显示一张图片  单标签

    属性：
      1、src：告诉浏览器要显示哪一张图片
          属性值：路径（当前文件找目标文件的过程）
                  当前文件：当前img标签所在的文件（09-图片标签.html）
                  目标文件：就是要显示的那张图片
          特殊情况：当当前文件和目标文件在同一级目录时，直接写目标文件的名字即可

      2、alt：当图片加载失败（路径写错了）时，才显示的文字

      3、title：图片的标题
                当鼠标悬停在图片上才会显示的文字

      4、width：图片的宽度

      5、height：图片的高度
        注意点：一般来说 图片只会设置width或者height中的一个，如果同时设置了宽度和高度，图片可能会拉伸变形
   -->
    <img src="image/my.jpg" alt="guardwhy" title="mvp" height="200" width="300">
</body>
</html>
```

### 2.11 路径问题

```css
1.图像与文件在同一目录下 <img src = "x.jpg"/>
2.图像在上一级目录中 <img src = "../x.jpg"/>
3.图像在下一级目录中 <img src="文件夹名/x.jpg">
```

#### 2.11.1 代码示例

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>路径问题</title>
</head>
<body>
  <!--上级目录-->
  <img src="../static/images/my.jpg" width="80" height="95"><br/>
  <!--下级目录-->
  <img src="image/my.jpg" height="200" width="300"><br/>

  <!--同级目录-->
  <img src="my.jpg" height="300">
</body>
</html>
```

### 2.12 超链接标签

```css
< a href=" ">内容</a>
```

| 属性 描述 |                                            |
| --------- | ------------------------------------------ |
| href      | 链接地址                                   |
| target    | 链接的目标窗口_self、_blank、_top、_parent |
| title     | 链接提示文字                               |
| name      | 链接命名                                   |

#### 2.12.1 代码示例

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>超链接标签</title>
</head>
<body>
<!--
  target属性：
    这个属性的作用就是专门用于控制如何跳转
    _self: 用于在当前选项卡中跳转, 也就是不新建界面跳转. 默认就是_self
    _blank: 用于在新的选项卡中跳转, 也就是新建界面跳转
  -->
<a href="https://www.baidu.com" title="坑爹啊" target="_blank">百度一下</a>
</body>
</html>
```

### 2.13 base标签

专门用来统一的指定当前网页中所有的超链接(a标签)需要如何打开。

#### 2.13.1 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>base标签</title>
    <base target="_blank">
</head>
<body>
<!-- 
注意点:
    1.base标签必须写在head标签的开始标签和结束标签之间
    2.如果既在base中指定了target又在a标签中指定了target,那么浏览器会按照a标签中指定的来执行
-->
    <a href="http://news.baidu.com/">新闻</a>
    <a href="https://www.google.com/">google</a>
    <a href="http://map.baidu.com/">地图</a>
    <a href="http://v.baidu.com/">视频</a>
</body>
</html>
```

### 2.14 定义锚

#### 2.14.1 同一页面

```html
< a href=“#锚名1”>目录1 </a>
< a href=“#锚名2”>目录2 </a>
    
< a href=“…”name=“锚名1”>内容</a>
< a href=“…”name=“锚名2”>内容</a>
```

#### 2.14.2 不同页面

```html
网页1:<a href= "网页名称#锚名">...</a>
网页2:<a name= "锚名"></a>
```

- 定义锚的位置和锚名。
- 设置寻找锚的链接

## 3- 列表标签

### 3.1 无序列表

基本语法

```css
<ol>
   <li>列表项</li>
   <li>列表项</li>
</ol>
```

type属性值

| 值     | 描述   |
| ------ | ------ |
| disc   | 圆点   |
| square | 正方形 |
| circle | 空心圆 |

#### 3.1.1 代码示例

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>无序列表</title>
</head>
<body>
  <!--
    总结:
    1.ul标签中最好只放li标签。
    2.但是li标签中还可以继续放其它的标签。

     UL格式:
     ul>li 含义: 生成一对ul标签, 然后在这对ul标签中再生成一对li标签(按TAB键)。
     ul>li*3 含义: 生成一对ul标签, 然后在这对ul标签中再生成3对li标签。
  -->
  <h1>物品清单</h1>
  <ul>
    <li>
      <h3>蔬菜</h3>
      <ul>
        <li>白菜</li>
        <li>萝卜</li>
        <li>黄瓜</li>
      </ul>
    </li>
    <li>
      <h3>水果</h3>
      <ul>
        <li>苹果</li>
        <li>桃子</li>
        <li>香蕉</li>
      </ul>
    </li>
  </ul>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/01-html.png" style="zoom:80%;" />

### 3.2 有序列表

基本语法

```css
<ol>
   <li>列表项</li>
   <li>列表项</li>
</ol>
```

type属性值

| 值 描述           |                 |
| ----------------- | --------------- |
| 1 数字1，2……      | 数字1，2……      |
| a 小写字母a , b…… | 小写字母a , b…… |
| A 大写字母A , B…… | 大写字母A , B…… |
| i 小写罗马数字 i  | 小写罗马数字 i  |
| I 大写罗马数字 I  | 大写罗马数字 I  |

#### 3.2.1 代码示例

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>有序列表</title>
</head>
  <body>
    <ol>
      <li>kobe</li>
      <li>James</li>
      <li>curry</li>
    </ol>
  </body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/02-有序列表.png)

### 3.3 定义列表

基本语法

```xml
<dl>
    <dt>定义列表项</dt>
    <dd>列表项描述</dd>
    <dt>定义列表项</dt>
    <dd>列表项描述</dd>
</dl>
```

#### 3.3.1 代码实现

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>定义列表</title>
</head>
<body>
  <dl>
    <dt>什么是 HTML？</dt>
    <dd>HTML 是用来描述网页的一种语言。</dd>
    <dd>
      <ul>
        <li>HTML 指的是超文本标记语言 (Hyper Text Markup Language)</li>
        <li>HTML 不是一种编程语言，而是一种标记语言 (markup language)</li>
        <li>标记语言是一套标记标签 (markup tag)</li>
        <li>HTML 使用标记标签来描述网页</li>
      </ul>
    </dd>
    <dt>HTML 标签</dt>
    <dd>HTML 标记标签通常被称为 HTML 标签 (HTML tag)</dd>
    <dd>
      <ol>
        <li>HTML 标记标签通常被称为 HTML 标签</li>
        <li>HTML 标签是由尖括号包围的关键词</li>
        <li>HTML 标签通常是成对出</li>
        <li>标签对中的第一个标签是开始标签，第二个标签是结束标签</li>
      </ol>
    </dd>
  </dl>
</body>
</html>
```

**操作结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/03-html.png" style="zoom: 67%;" />

## 4- html表格

### 4.1 基本标签

```css
<table> 表格
<tr> 行
<td> 单元格
<th></th> 表格头，内容居中，加粗显示
<caption></caption> 表格标题，居中显示
```

### 4.2 基本语法

```xml
<!– 表格开始 -->
<table>
    <!–- tr 行标签 -->
    <tr>
        <!– td 单元格 -->
        <td>……</td>
    </tr>
    <tr>
        <td>……</td>
    </tr>
    <!– 表格结束 -->
</table>
```

**代码示例(两行三列的表格)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>表格标签的基本使用</title>
</head>
  <body>
    <!--创建2行3列表格 -->
    <table border="1">
      <tr>
        <td>科比</td>
        <td>欧文</td>
        <td>老詹</td>
      </tr>
      <tr>
        <td>8</td>
        <td>2</td>
        <td>23</td>
      </tr>
    </table>
  </body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/04-html.png)



### 4.3 表格结构

表格划分三部分：表头、主体、脚注。

-  thead：表格的头 （放表格的表头）
-  tbody：表格的主体 （放数据本体）
-  tfoot：表格的脚 （放表格的脚注）

**语法**

```css
<table>
    <caption>表格的标题</caption>
    <thead>
        <tr>
            <th>每一列的标题</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>数据</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>数据</td>
        </tr>
    </tfoot>
</table>

<!--
	caption作用: 指定表格的标题
	thead作用: 指定表格的表头信息
	tbody作用: 指定表格的主体信息
	tfoot作用: 指定表格的附加信息
-->
```

**代码示例**

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>表格结构</title>
</head>
<body>
  <table border="1px" width="200px" height="200px">
    <caption>学生信息</caption>
    <thead>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>张三</td>
        <td>20</td>
      </tr>
      <tr>
        <td>李四</td>
        <td>40</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>2</td>
        <td>30</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/05-html.png" style="zoom: 80%;" />

### 4.4 table属性

| 属性        | 值                             | 描述                           |
| ----------- | ------------------------------ | ------------------------------ |
| width       | pixels、%                      | 规定表格的宽度                 |
| align       | left、center、right            | 表格相对周围元素的对齐方式     |
| border      | pixels                         | 规定表格边框的宽度             |
| bgcolor     | rgb(x,x,x)、#xxxxxx、colorname | 表格的背景颜色                 |
| cellpadding | pixels、%                      | 单元边沿与其内容之间的空白     |
| cellspacing | pixels、%                      | 单元格之间的空白               |
| frame       | 属性值                         | 规定外侧边框的那个部分是可见的 |
| rules       | 属性值                         | 规定内侧边框的哪个部分是可见的 |

### 4.5 标签属性

#### 4.5.1 tr标签

| 属性    | 值                                            | 描述             |
| ------- | --------------------------------------------- | ---------------- |
| align   | align、Left、center、right、justify、char     | 行内容的水平对齐 |
| valign  | top、middle、bottom、baseline                 | 行内容的垂直对齐 |
| bgcolor | •rgb(x,x,x)<br/>•#xxxxxx<br/>• colorname<br/> | 行的背景颜色。   |

#### 4.5.2 td和th标签

| 属性    | 值                                         | 描述                 |
| ------- | ------------------------------------------ | -------------------- |
| align   | Left、center、right、<br/>justify、char    | 单元格内容的水平对齐 |
| valign  | top、middle、bottom、<br/>baseline         | 单元格内容的垂直对齐 |
| bgcolor | • rgb(x,x,x)<br/>• #xxxxxx<br/>• colorname | 单元格的背景颜色     |
| width   | • %<br/>• pixels                           | 单元格的宽度         |
| height  | %<br/>• pixels                             | 单元格的高度         |

#### 4.5.3 thead和tbody和tfoot标签

| 属性   | 值                                 | 描述                                     |
| ------ | ---------------------------------- | ---------------------------------------- |
| align  | Left、center、right、justify、char | <thead>、<tbody>和<tfoot> 内容的水平对齐 |
| valign | top、middle、bottom、baseline      | <thead>、<tbody>和<tfoot> 内容的垂直对齐 |

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>表格标签</title>
</head>
  <body>
    <table bgcolor="black" cellpadding="1px" width="800px" align="left">
      <caption>
        <h3>今日影视剧排行榜</h3>
      </caption>
      <tr bgcolor="#a9a9a9">
        <th>排名</th>
        <th>关键词</th>
        <th>趋势</th>
        <th>今日搜索</th>
        <th>最近七天</th>
        <th>相关链接</th>
      </tr>
      <tr bgcolor="white" align="center">
        <td>1</td>
        <td align="left">琅琊榜</td>
        <td>
          <img src="images/up.jpg">
        </td>
        <td>623557</td>
        <td>4088311</td>
        <td>
          <a href="#">腾讯视频</a>
          <a href="#">优酷视频</a>
          <a href="#">爱奇艺</a>
        </td>
      </tr>
      <tr bgcolor="white" align="center">
        <td>2</td>
        <td align="left">风筝</td>
        <td>
          <img src="images/up.jpg">
        </td>
        <td>623538</td>
        <td>4088290</td>
        <td>
          <a href="#">腾讯视频</a>
          <a href="#">优酷视频</a>
          <a href="#">爱奇艺</a>
        </td>
      </tr>
      <tr bgcolor="white" align="center">
        <td>3</td>
        <td align="left">以父之名</td>
        <td>
          <img src="images/down.jpg">
        </td>
        <td>623557</td>
        <td>4088231</td>
        <td>
          <a href="#">腾讯视频</a>
          <a href="#">优酷视频</a>
          <a href="#">爱奇艺</a>
        </td>
      </tr>
      <tr bgcolor="white" align="center">
        <td>4</td>
        <td align="left">陆战之王</td>
        <td>
          <img src="images/down.jpg">
        </td>
        <td>613557</td>
        <td>4058311</td>
        <td>
          <a href="#">腾讯视频</a>
          <a href="#">优酷视频</a>
          <a href="#">爱奇艺</a>
        </td>
      </tr>
      <tr bgcolor="white" align="center">
        <td>5</td>
        <td align="left">外交风云</td>
        <td>
          <img src="images/up.jpg">
        </td>
        <td>623211</td>
        <td>4087011</td>
        <td>
          <a href="#">腾讯视频</a>
          <a href="#">优酷视频</a>
          <a href="#">爱奇艺</a>
        </td>
      </tr>
    </table>
  </body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/06-html.png" style="zoom:80%;" />

### 4.6 单元格合并

#### 4.6.1 跨列属性colspan

```html
<table>
    <tr>
        <td colspan=“2”>…</td>
        <td>…</td>
    </tr>
    <tr>
        <td>…</td>
        <td>…</td>
        <td>…</td>
    </tr>
</table>
```

#### 4.6.2 跨行属性rowspan

```html
<table>
    <tr>
        <td>…</td>
        <td rowspan=“2”>…</td>
        <td>…</td>
    </tr>
    <tr>
        <td>…</td>
        <td>…</td>
    </tr>
</table>
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>单元格合并</title>
</head>
  <body>
    <!--水平方向上合并-->
    <table bgcolor="black" width="200px" height="200px" align="left">
      
      <tr bgcolor="white">
        <td colspan="2"></td>
        <!--<td></td>-->
        <td></td>
      </tr>
      <tr bgcolor="white">
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr bgcolor="white">
        <td></td>
        <td colspan="2"></td>
        <!--<td></td>-->
      </tr>
    </table>
    
    <!--垂直方向合并-->
    <table bgcolor="black" width="200px" height="200px" align="center">
      <tr bgcolor="white">
        <td rowspan="2"></td>
        <td></td>
        <td></td>
      </tr>
      <tr bgcolor="white">
        <!--<td></td>-->
        <td></td>
        <td></td>
      </tr>
      <tr bgcolor="white">
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/07-html.png" style="zoom:80%;" />

## 5- html表单

### 5.1 表单基本框架

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>基本框架</title>
</head>
<body>
  <form action="" method="" name="">
    表单元素..
  </form>
</body>
</html>
```

### 5.2 form标签属性

| 属性                      | 值                                   | 描述                             |
| ------------------------- | ------------------------------------ | -------------------------------- |
| action                    | URL                                  | 提交表单时向何处发送表单数据     |
| method                    | get、post                            | 设置表单以何种方式发送到指定页面 |
| name form_name 表单的名称 | form_name                            | 表单的名称                       |
| target                    | _blank、_self<br/>_parent、_top<br/> | 在何处打开 action URL            |

### 5.3 post和get区别

**GET方法**

```css
使用URL传递参数 对所发送信息的数量也有限制 一般用于信息获取。
```

**POST方法**

```css
表单数据作为HTTP请求体的一部分对所发送信息的数量无限制 一般用于修改服务器上的资源。
```

## 6- 表单元素标签

### 6.1 输入标签

> 表单输入标签

```html
<input type=“类型属性” name=“名称 ” …… />
```

#### 6.1.1 type属性值

| Type属性值 | 描述     |
| ---------- | -------- |
| text       | 文字域   |
| password   | 密码域   |
| file       | 文件域   |
| checkbox   | 复选域   |
| radio      | 单选域   |
| Button     | 按钮     |
| Submit     | 提交按钮 |
| Reset      | 重置按钮 |
| Hidden     | 隐藏域   |
| image      | 图像域   |

#### 6.1.2 单行文本域(text)

```html
<form>
    <input type="text" name="".... />
</form>
```

**单行文本域属性**

| 属性        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| Name        | 文字域的名称                                                 |
| Maxlength   | 指用户输入的最大字符长度。                                   |
| Size        | 指定文本框的宽度，以字符个数为单位；文本框的缺省宽度是20个字符。 |
| value       | 指定文本框的默认值                                           |
| placeholder | 规定用户填写输入字段的提示                                   |

#### 6.1.3 密码框

```html
<form>
	<input type=" password " name=““ ….. />
</form>
```

#### 6.1.4 文件域属性

```html
<form>
	<input type=" file " name=“…“ />
</form>
```

#### 6.1.5 单选框属性

```html
<form>
	<input type=“radio” name=“…“ value=“…” checked />
</form>
```

#### 6.1.6 复选框标签

```html
<form>
	<input type=“checkbox” name=“…“value=“…” checked />
</form>
```

#### 6.1.7 按钮标签

```html
<input type=“button” name="..." value=“…” />
	<!-- 提交按钮 -->
<input type=“submit” name="..." value=“…” />
	<!--重置按钮-->
<input type=“reset” name="..." value=“…” />
```

#### 6.1.8 代码示例

```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>01-表单标签</title>
</head>
<body>
  <form>
      <!--明文输入框-->
      姓名：<input type="text" name="username"/><br/>
      密码：<input type="password" name="pwd"/><br/>

      <!--单选框-->
      性别:
      <input type="radio" name="xx" checked>男
      <input type="radio" name="xx">女
      <input type="radio" name="xx">保密<br/>

      <!--多选框-->
      爱好:
      <input type="checkbox">篮球
      <input type="checkbox">足球
      <input type="checkbox" checked="checked">游泳
      <input type="checkbox" checked="checked">跑步<br/>

      <!--提交按钮-->
      <input type="submit" value="提交按钮"/>
  </form>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/08-html.png)

#### 6.1.9 图像提交按钮

```html
<input type=“image” name=“…“ src=“imageurl” />
```

#### 6.1.10 隐藏域

```html
<input type=“hidden” name=“…“ value=“…” />
```

#### 6.1.11 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>02-表单标签</title>
</head>
  <body>
    <form action="http://www.baidu.com">
      <!--明文输入框-->
      姓名：<input type="text" name="aa"/><br/>
      密码：<input type="password" name="bb"/><br/>

      <!--2.创建普通按钮-->
      <input type="button" value="普通按钮" onclick="alert('Curry')">

      <!--3.图片按钮-->
      <input type="image" src="images/register.jpg" onclick="alert('curry')">

      <!--4.重置按钮-->
      <input type="reset" value="清空">

      <!--5.提交按钮-->
      <input type="submit" value="提交按钮">

      <!--6.隐藏域-->
      <input type="hidden" name="guardwhy" value="隐藏域">
    </form>
  </body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/09-html.png)

### 6.2 多行文本域textarea

> 文字域标签

```html
<textarea name=“..”rows=“..” cols=“..” …>
	内容.....
</ textarea >
```

**多行文本域属性**

| 属性        | 描述                               |
| ----------- | ---------------------------------- |
| name        | 设置文本区的名称。                 |
| placeholder | 设置描述文本区域预期值的简短提示。 |
| rows        | 设置文本区内的可见行数。           |
| cols        | 设置文本区内的可见宽度。           |

### 6.3 select标签

> 菜单和列表标签

| 属性     | 描述                     |
| -------- | ------------------------ |
| name     | 设置下拉菜单和列表的名称 |
| multiple | 设置可选择多个选项       |
| size     | 设置列表中可见选项的数目 |

### 6.4 option标签

> 菜单和列表项目标签

| 属性     | 描述                     |
| -------- | ------------------------ |
| selected | 设置选项初始选中状态。   |
| value    | 定义送往服务器的选项值。 |

**语法描述：**

```html
<select >
    <option value =“…“ >选项</option>
    <option value=“…“ >选项</option>
</select>
```

### 6.5 optgroup标签

> 菜单和列表项目分组标签

```html
<select name=“”>
    <optgroup label=“组1”>
        <option value =“…“ >选项</option>
        <option value=“…“ >选项</option>
    </optgroup>
    <optgroup label=“组2”>
        <option value =“…“ >选项</option>
        <option value=“…“ >选项</option>
    </optgroup>
</select>
```

**代码实现**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>表单标签综合</title>
</head>
<body>
<h1 align="center">注册信息</h1>
<hr color="#336699"/>
<form action="action.jsp" method="post" target="_blank">
  <table width="600px" bgcolor="#f2f2f2" align="left" >
    <tr>
      <td align="right">姓名：</td>
      <td align="left"><input type="text" name="username" size="25" maxlength="6" placeholder="请输入姓名"/></td>
    </tr>
    <tr>
      <td align="right">邮箱：</td>
      <td align="left"><input type="text" name="email" value="@163.com"/></td>
    </tr>
    <tr>
      <td align="right">密码：</td>
      <td align="left"><input type="password" name="paw" size="25" maxlength="6" placeholder="请输入密码"/></td>
    </tr>
    <tr>
      <td align="right">确认密码：</td>
      <td align="left"><input type="password" name="paw_confirm" size="25" maxlength="6" placeholder="请再输入密码"/></td>
    </tr>
    <tr>
      <td align="right">上传照片：</td>
      <td align="left"><input type="file" name="file"/></td>
    </tr>
    <tr>
      <td align="right">性别：</td>
      <td align="left">男<input type="radio" name="sex" value="man"/>
        女<input type="radio" name="sex" value="woman"/>
        保密<input type="radio" name="sex" value="bm" checked/>
      </td>
    </tr>
    <tr>
      <td align="right">爱好：</td>
      <td align="left">读书<input type="checkbox" name="dx1" value="read" checked/>
        跳舞<input type="checkbox" name="dx1" value="dance"/>
        唱歌<input type="checkbox" name="dx1" value="sing"/></td>
    </tr>
    <tr>
      <td align="right">爱好的运动：</td>
      <td align="left">跑步<input type="checkbox" name="dx2" value="1" checked/>
        篮球<input type="checkbox" name="dx2" value="2"/>
        跳绳<input type="checkbox" name="dx2" value="3"/></td>
    </tr>
    <tr>
      <td align="right">城市：</td>
      <td align="left">
        <select name="city">
          <option value="xz">--请选择--</option>
          <option value="bj" selected>北京</option>
          <option value="tj">天津</option>
          <option value="hb">河北</option>
          <option value="sh">上海</option>
          <option value="fj">福建</option>
          <option value="xm">厦门</option>

        </select>

        <select name="city" size="6" multiple>
          <option value="bj">北京</option>
          <option value="tj">天津</option>
          <option value="hb">河北</option>
          <option value="sh">上海</option>
          <option value="fj">福建</option>
          <option value="xm">厦门</option>

        </select>

        <select name="city">
          <option>--请选择--</option>
          <optgroup label="华北">
            <option value="bj" selected>北京</option>
            <option value="tj">天津</option>
            <option value="hb">河北</option>
          </optgroup>
          <optgroup label="华东">
            <option value="sh">上海</option>
            <option value="fj">福建</option>
            <option value="xm">厦门</option>
          </optgroup>
        </select>

        <select name="city" size="5" multiple>
          <option>--请选择--</option>
          <optgroup label="华北">
            <option value="bj" selected>北京</option>
            <option value="tj">天津</option>
            <option value="hb">河北</option>
          </optgroup>
          <optgroup label="华东">
            <option value="sh">上海</option>
            <option value="fj">福建</option>
            <option value="xm">厦门</option>
          </optgroup>
        </select>

      </td>
    </tr>
    <tr>
      <td align="right">简介:</td>
      <td align="left"><textarea name="jj" rows="6" cols="50" placeholder="请输入个人介绍"></textarea></td>
    </tr>
    <tr >
      <td colspan="2" align="center"><input type="button" value="来点我" name="button"/>
        <input type="submit" value="submit" name="submit"/>
        <input type="reset" value="reset" name="reset"/>
        <input type="image" name="image_button" src="image/image-button.png"/>
      </td>
    </tr>
    <tr>
      <td><input type="hidden" name="hidden" value="这是一个用户注册信息"/></td>
      <td></td>
    </tr>
  </table>
</form>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/10-html.png" style="zoom: 67%;" />



## 7- 网页布局

### 7.1.1 div标签

> 是一个区块容器标记，<div></div>之间是一个容器，可以包含段落、表格、图片等各种HTML元素。

### 7.1.2 span标签

> 没有实际意义，为了应用样式.

### 7.1.3 HTML标签分类

- 块级标签:占据一行，换行

```html
<div>、<ul>、<ol>、<li>、<dl>、<dt>、<dd>
<h1>~<h6>、<p>、<form>、<hr>.....
```

- 行内标签:在一行，不换行

```html
<b>、<em>、<img>、<input>、<a>、<sup>、
<sub>、<textarea>、<span/>
```

### 7.1.4 标签嵌套规则

- 块级元素可包含行内元素和某些块级元素
- 行内元素不能包含块元素，只能包含其他行内元素
- 块级元素不能放在<p>标签内
- 特殊块级元素只能包含行内元素，不能在包含块级元素如：h1、h2、h3、h4、h5、h6、p、dt。
- 块级元素与块元素并列，行内元素和行内元素并列

**代码实现**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
    <!--div标签-->
    <div><img src="images/1-kobe.jfif" height="100" width="100"/>Kobe</div>
    <div><img src="images/2-curry.jfif"height="100" width="100"/>Curry</div>
    <div><img src="images/3-james.jfif"height="100" width="100"/>James</div><br/>

    <!--span标签-->
    <span><img src="images/1-kobe.jfif" height="100" width="100"/>Kobe</span>
    <span><img src="images/2-curry.jfif"height="100" width="100"/>Curry</span>
    <span><img src="images/3-james.jfif"height="100" width="100"/>James</span>

    <!--标签嵌套规则-->
    <!--块级元素可包含行内元素和某些块级元素-->
    <div><h2></h2><a href="https://www.baidu.com/"></a></div>

    <!--行内元素不能包含块元素，只能包含其他行内元素-->
    <!--<a href=""><h1></h1><div></div></a>-->

    <span><em></em></span><!--正确-->

    <!--块级元素不能放在<p>标签内-->
    <!--<p><div>1111</div><h1>2222</h1></p>--> <!--错误-->

    <!--特殊块级元素只能包含行内元素，不能再包含块级元素
    如：h1、h2、h3、h4、h5、h6、p、dt-->
    <!--块级元素与块元素并列，行内元素和行内元素并列-->
    <div><h1></h1><p></p></div><!--正确-->
    <div><span></span><a href=""></a></div><!--正确-->
    <div><h1>666</h1><span>888</span></div><!--错误-->

</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/16-html.png" style="zoom: 67%;" />

## 8- html5标签

### 8.1 datalist标签

**基本格式**

```css
<datalist>
    <option>待选项内容</option>
</datalist>
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>datalist标签</title>
</head>
<body>
    <!--
      1.datalist标签
        作用: 给输入框绑定待选项
    -->
  请输入NBA球星:<input type="text" list="stars">
  <datalist id="stars">
    <option>kobe</option>
    <option>curry</option>
    <option>james</option>
    <option>Paul</option>
  </datalist>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/11-html.png" style="zoom:80%;" />

### 8.2 label标签

基本作用：让输入框和文字绑定在一起

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>label标签</title>
</head>
  <body>
      <form action="">
          <label for="username">用户姓名:</label><input type="text" id="username"><br/>
          <label for="pwd">用户密码:</label><input type="text" id="pwd"><br/>
      </form>
  </body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/12-html.png)

### 8.3 基本表单标签

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>H5表单标签</title>
</head>
<body>
  <form>
    <!-- 1.自动校验输入的内容是否符合邮箱的格式 -->
    邮箱:<input type="email"><br/>

    <!--2.可以自动校验输入的内容是否是URL地址-->
    域名:<input type="url"><br/>

    <!--3.输入框只能输入数字-->
    电话:<input type="number"><br/>

    <!--4.通过日历来选择时间-->
    时间:<input type="date"><br/>

    <!--5.通过取色板来选择颜色-->
    颜色:<input type="color"><br/>

    <input type="submit">
  </form>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/12-html.png)

### 8.4 video标签

作用: 播放视频。

| 属性     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| src      | 用于告诉video标签需要播放的视频地址                          |
| autoplay | 用于告诉video标签是否需要自动播放视频                        |
| controls | 用于告诉video标签是否需要显示控制条                          |
| poster   | 用于告诉video标签视频没有播放之前显示的占位图片              |
| loop     | 一般用于做广告视频, 用于告诉video标签视频播放完毕之后是否需要循环播放 |
| muted    | 静音                                                         |

#### 基本格式1

```css
<video src="">
</video>
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>video标签</title>
</head>
<body>
    <video src="video/1-这阶段如何学习.mp4" autoplay="autoplay" loop="loop" muted="muted" width="800px"></video>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/html/14-html.png" style="zoom:80%;" />

#### 基本格式2

```css
<video>
  <source src="" type="">
</video>
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>36-video标签的第二种格式</title>
</head>
<body>
<!--video标签的第二种格式存在的意义就是为了解决浏览器适配问题-->
<video autoplay="autoplay" controls="controls">
    <source src="images/2.springboot.webm" type="video/webm"></source>
    <source src="images/1-spring.mp4" type="video/mp4"></source>
</video>
</body>
</html>
```

### 8.5 audio标签

作用:播放音频文件

**基本格式**

```css
<audio src="">
</audio>

<audio>
    <source src="" type="">
</audio>
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>37-audio标签</title>
</head>
<body>
<!--
注意点:
audio标签的使用和video标签的使用基本一样, 只不过有3个属性不能用, height/width/poster
-->

<!--<audio src="images/美语从头学1.mp3" autoplay="autoplay" controls="controls"></audio>-->

<audio autoplay="autoplay" controls="controls">
    <source src="images/美语从头学2.mp3" type="audio/mp3">
</audio>
</body>
</html>
```

