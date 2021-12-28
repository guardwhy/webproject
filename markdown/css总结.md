## 1- CSS样式组成

### 1.1 CSS规则构成

- 选择器
- 声明

**图片说明**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/01-CSS.jpg)

### 1.2 CSS引用

写在`head`标签内

```html
<head>
	<meta charset="UTF-8">
	<title>css样式</title>
	<style type="text/css">
		CSS样式…
	</style>
</head>
```

### 1.3 CSS注释

1、基本语法

```css
CSS注释：/*注释语句*/
```

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>css初体验</title>
  <style type="text/css">
    h3{
        text-align: center;
        color: red;
        font-family: "微软雅黑";
    }

    p{
        text-align: center;
        color: blue;
        font-size: 20px;
    }
  </style>
</head>
<body>
  <h3>望江南·超然台上作</h3>
  <p>姑且点上新火来烹煮一杯刚采的新茶</p>
  <p>作诗醉酒都要趁年华尚在啊</p>
  <p>水中的月影虽会因风而破碎</p>
  <p>但也终究会随风停而自圆</p>
</body>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/02-CSS.png" style="zoom:67%;" />

## 2-CSS属性

### 2.1 文字属性

1、基本语法

| 属性           | 格式(红色字体快捷键)                                         | 取值                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 文字样式的属性 | **<font color="red">fs</font>**  font-style: italic;<br/>**<font color="red">fsn</font>** ` font-style: normal;` | `normal`:正常的,默认就是正常的<br/>`italic` : 倾斜的         |
| 文字粗细的属性 | **<font color="red">fw</font>**  `font-weight:;`<br/>**<font color="red">fwb</font>**  `font-weight: bold;`<br/>**<font color="red">fwbr</font>**  `font-weight: bolder;` | `bold` 加粗<br/>`bolder `比加粗还要粗<br/>`lighter `细线， 默认就是细线 |
| 文字大小的属性 | **<font color="red">fz</font>**  `font-size`: ;<br/>**<font color="red">fz30 </font>**  `font-size`: `30px`; | 通过`font-size`设置大小一定要带单位， 也就是一定要写`px`     |
| 文字字体的属性 | **<font color="red">ff </font>** `font-family`:"楷体";       | 1.如果取值是中文， 需要用双引号或者单引号括起来。<br/>2.设置的字体必须是用户电脑里面已经安装的字体。 |

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>2-css文字属性</title>
  <style type="text/css">
    p{
        /*font-size: initial;
        font-weight: bold;
        font-size: 20px;
        font-family: "微软雅黑";*/

        /*文字属性缩写*/
        font: bold italic 20px "微软雅黑";
    }
  </style>
</head>
<body>
  <h1>CSS 实例!</h1>
  <p>这是一个段落。</p>
</body>
</html>
```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/03-CSS.png)

### 2.2 文本属性

1、基本语法

| 属性               | 格式(红色字体快捷键)                                         | 取值                                                         |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 文本装饰的属性     | **<font color="red">td</font> **  `text-decoration: none;`<br/>**<font color="red">tdu</font> **`text-decoration: underline;`<br/>**<font color="red">tdl</font> **  `text-decoration: line-through;`<br/>**<font color="red">tdo</font> ** `text-decoration: overline;` | `underline` 下划线<br/>`line-through` 删除线<br/>`overline` 上划线<br/>`none `什么都没有, 最常见的用途就是用于去掉超链接的下划线 |
| 文本水平对齐的属性 | ***<font color="red">ta</font>  `text-align: left;`***<br/>***<font color="red">tar</font> `text-align: right;`***<br/><font color="red">**tac**</font>  `text-align: center;` | `left` 左<br/>`right` 右<br/>`center` 中                     |
| 文本缩进的属性     | **<font color=red>ti</font>**  `text-indent:;`<br/>**<font color=red>ti2e</font>** ` text-indent: 2em;` | `2em`, 其中`em`是单位, 一个`em`代表缩进一个文字的宽度        |

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3-文本属性</title>
  <style type="text/css">
    p{
        text-decoration: none;
        text-align: left;
        text-indent: 2em;
    }

    a{
        text-decoration: none;
    }
  </style>
</head>
<body>
  <p>kobe是MVP,kobe是MVP,kobe是MVP,kobe是MVP,kobe是MVP,kobe是MVP,kobe是MVP</p>
  <a href="#">我是超链接</a>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/04-css.png"  />

## 3- CSS样式

### 3.1 行内样式（内联样式）

1、在开始标签内添加`style`样式属性

```html
<h1 style="color:red;font-size:20px;">css使用方法</h1>
```

### 3.2 内部样式表（嵌入样式）

1、内部样式（嵌入样式），把css样式代码写在:

```html
<style type="text/css">
	样式…
</style>

说明：<style>要放在<head>标签之间
```

2、代码实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>css使用方法</title>
	<style type="text/css">
        p{color:blue;}
        h2{color:red;}
	</style>
</head>
<body>
    
    <!-- 行内样式 -->
    <h1 style="color:red;font-size:20px;">css使用方法</h1>

    <!--嵌入样式-->
    <h2>css使用方法</h2>
    <p>行内样式</p>
    <p>嵌入样式</p>
    <p>外部样式</p>
    <p>导入样式</p>
	
</body>
</html>
```

### 3.3 外部样式表（Link链入）

1、基本介绍

- 外部样式表，把`CSS`样式代码写在独立的一个文件中
- 扩展名：` CSS`文件名`.CSS`
- 引入外部文件：`<link href=“XX.css" rel="stylesheet" type="text/css" />`
- 说明：`link`要放在`head`标签之间

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>css使用方法</title>
	<link href="css.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <!-- 行内样式 -->
    <h1 style="color:red;font-size:20px;">css使用方法</h1>

    <h2>css使用方法</h2>
    <p>行内样式</p>
    <p>嵌入样式</p>
    <p>外部样式</p>
    <p>导入样式</p>
</body>
</html>
```

3、外部文件

```css
p{color:blue; font-size: 30px;}
h2{color:red;}
```

### 3.4 导入式

1、基本语法

- `@import `“外部`CSS`样式”

  > 说明：`@import`写在`style`标签内最开始

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>css使用方法</title>
	<style type="text/css">
        <!-- 导入式 -->
	   @import url(css.css);
	</style>
</head>
<body>
    <!-- 行内样式 -->
    <h1 style="color:red;font-size:20px;">css使用方法</h1>

    <h2>css使用方法</h2>
    <p>行内样式</p>
    <p>嵌入样式</p>
    <p>外部样式</p>
    <p>导入样式</p>
	
</body>
</html>
```

3、外部文件

```css
p{color:blue; font-size: 30px;}
h2{color:red;}
```

### 3.5 方法区别

1、基本介绍

| 类别            | 引入方法           | 位置                          | 加载                            |
| --------------- | ------------------ | ----------------------------- | ------------------------------- |
| 行内样式        | 开始标签内`style`  | `html`文件内                  | 同时加载                        |
| 内部样式        | `head`中`style`内  | `html`文件内                  | 同时加载                        |
| 外部样式        | `head`中`link`内   | `CSS`样式文件与`html`文件分离 | 页面加载时，同时加载`CSS`样式。 |
| 导入式(@import) | 在样式代码最开始处 | `CSS`样式文件与`html`文件分离 | 在读取完`html`文件之后加载。    |

2、使用外部样式的好处

- `CSS`与`Html`分离
- 多个文件可以使用同一个样式文件
- 多文件引用同一个`css`文件，`CSS`只是需要下载一次。

## 4- CSS选择器

### 4.1 标签选择器

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>css选择器</title>
    <style type="text/css">
        /*标签选择器*/
        p{
            color: red;
        }
    </style>
</head>
<body>
    <p><em>CSS</em>层叠样式</p>
    <p><em>CSS</em>样式由选择器和声明组成</p>
</body>
</html>

```

2、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/05-CSS.png)

### 4.2 类选择器

1、基本介绍

为HTML标签添加class属性

```css
h1 class="red">内容1</h1>
<p>内容2</p>
<p class="red">内容3</p>
```

通过类选择器来为具有此class属性的元素设置CSS样式

```css
.red{color:red;}
```

通过对不同元素的同一名称的类选择器设置不同的样式规则

```css
p.red{font-size:50px;}
h1.red{font-size:20px;}
```

同一个元素可以设置多个类，之间有空格隔开

```css
<h1 class="red">内容1</h1>
<p class="red fsize">内容2</p>
<p class="red">内容3</p>
```

2、代码实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>类选择器</title>
  <style type="text/css">
    .p1{
        color: red;
    }
    .p2{
        color: green;
    }
    .p3{
        color: blue;
    }
    .st1{
        font-size: 20px;
        color: blueviolet;
    }

    .st2{
        font-style: italic;
        color: darkgoldenrod;
    }
  </style>
</head>
<body>
  <p class="p1">愿我如星君如月，夜夜流光相皎洁。</p>
  <p class="p2">妾弄青梅凭短墙，君骑白马傍垂杨。</p>
  <p class="p3">墙头马上遥相顾，一见知君即断肠。</p>

  <p class="pst st1">蝶恋花·春景</p>
  <p class="pst st2">井底引银瓶·止淫奔也</p>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/07-CSS.png"  />

### 4.3 ID选择器

1、基本介绍

为HTML标签添加ID属性

```css
<h1>内容1</h1>
<p id="p1">内容2</p>
<p id="p2">内容3</p>
```

通过`ID`选择器来为具有此`ID`的元素设置`CSS`规则

```css
#p1{color:red;}
#p2{color:blue;}
```

2、代码实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ID选择器</title>
    <style type="text/css">
        /*ID选择器*/
		#two{
            color: green;
        }
    </style>
</head>
<body>
<div>
    <h1 id="two">css</em>使用方法</h1>
</div>
</body>
</html>

```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/06-CSS.png)

### 4.4 全局选择器

1、代码实现

所有标签设置样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>全局选择器</title>
  <style type="text/css">
      *{font-size:20px;
          color:blue;}
  </style>

</head>
<body>
  <h1 class="special"><em>CSS</em>是什么</h1>
  <p><em>CSS</em>层叠样式</p>
  <p class="special one">用于定义HTML内容在浏览器中的显示样式</p>
  <p><em>CSS</em>样式由选择器和声明组成</p>
</body>
</html>
```

2、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/11-CCS.png"  />

### 4.5 群组选择器

1、代码示例

集体统一设置样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>群组选择器</title>
  <style type="text/css">
      /*群组选择器*/
      p.special,#three,h3{font-size:20px;}
      p{color:red;}
      .special{color:blue;}
      .one{text-decoration: underline;}
      #two{color:green;}
  </style>

</head>
<body>

<h3 class="special">CSS是什么</h3>
<p><em>CSS</em>层叠样式</p>
<p class="special one">用于定义HTML内容在浏览器中的显示样式</p>
<p>CSS样式由选择器和声明组成</p>
<div>
  <h3 id="two">css使用方法</h3>
  <ul id="three">
    <li>行内样式</li>
    <li>内部样式</li>
    <li>外部样式</li>
    <li>导入式</li>
  </ul>
  <h3>css选择器</h3>
  <ul>
    <li>标签选择器</li>
    <li>ID选择器</li>
    <li>类选择器</li>
    <li>后代选择器</li>
  </ul>
</div>
</body>
</html>
```

2、执行结果

<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/09-CSS.png" style="zoom:80%;" />	

### 4.6 后代选择器

1、基本语法

```css
标签名称1 标签名称2{
    属性:值;
}
先找到所有名称叫做"标签名称1"的标签, 然后再在这个标签下面去查找所有名称叫做"标签名称2"的标签, 然后在设置属性。
```

注意点:

- 后代选择器必须用空格隔开，只要最终是放到指定标签中的都是后代。
- 后代选择器不仅仅可以使用标签名称, 还可以使用其它选择器。
- 后代选择器可以通过空格一直延续下去。

2、代码实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>后代选择器</title>
  <style type="text/css">
    div ul li p{
        color: red;
    }
  </style>
</head>
<body>
  <h3>鹧鸪天</h3>
  <div id="p1" class="st1">
    <p>彩袖殷勤捧玉钟，当年拚却醉颜红</p>
    <p>舞低杨柳楼心月，歌尽桃花扇底风</p>
    <ul>
      <li>
        <p>从别后，忆相逢，几回魂梦与君同</p>
      </li>
      <li>
        <p>今宵剩把银釭照，犹恐相逢是梦中</p>
      </li>
    </ul>
  </div>
  <h3>晏几道</h3>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/08-CSS.png" style="zoom:80%;" />

### 4.7 子元素选择器

1、基本语法

指定标签中所有特定的直接子元素, 然后设置属性

```css
标签名称1>标签名称2{
    属性:值;
}
```

注意点

- 子元素选择器只会查找儿子, 不会查找其他被嵌套的标签。

- 子元素选择器之间需要用>符号连接, 并且不能有空格。
- 子元素选择器不仅仅可以使用标签名称, 还可以使用其它选择器。

- 子元素选择器可以通过`>`符号一直延续下去。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>子元素选择器</title>
  <style type="text/css">
    div>ul>li>p{
        color: green;
    }
  </style>
</head>
<body>
  <h3>kobe是总决赛MVP</h3>
  <div id="st1">
    <p>Curry是三分王</p>
    <p>James最佳防守球员</p>
    <ul>
      <li>
        <p>Rondo助攻王</p>
      </li>
    </ul>
  </div>
  <h3>Kobe是常规赛MVP</h3>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/10-css.png"  />	

### 4.8 并集选择器

1、基本语法

给所有选择器选中的标签设置属性

```css
选择器1,选择器2{
    属性:值;
}
```

注意点

- 并集选择器必须使用，来连接。
- 选择器可以使用标签名称`/id`名称`/class`名称。

2、代码实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>并集选择器</title>
  <style type="text/css">
    .st1, .p1{
        color: red;
    }
  </style>
</head>
<body>
  <h3 class="st1">java是最好的程序语言</h3>
  <p class="p1">PHP才是最牛B的</p>
  <p>python真的很香</p>
  <p>JavaScript貌似也还可以</p>
</body>
</html>
```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/12-CSS.png)



## 5- CSS3选择器

### 5.1 兄弟选择器

#### 5.1.1 相邻兄弟选择器

1、基本语法

给指定选择器后面紧跟的那个选择器选中的标签设置属性

```css
选择器1+选择器2{
    属性:值;
}
```

注意点

- 相邻兄弟选择器必须通过+连接。
- 相邻兄弟选择器只能选中紧跟其后的那个标签, 不能选中被隔开的标签。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>相邻兄弟选择器</title>
  <style type="text/css">
    h3 + p{
        color: green;
    }
  </style>
</head>
  <body>
    <h3>java高并发</h3>
    <a href="#">python人工智能</a>
    <p>html网页架构</p>
    <h3>java最牛B</h3>
    <p>javaSE基础</p>
    <p>javaWEB搭建网站</p>
  </body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/13-CSS.png" style="zoom:80%;" />

#### 5.1.2 通用兄弟选择器

1、基本介绍

给指定选择器后面的所有选择器选中的所有标签设置属性

```css
选择器1~选择器2{
    属性:值;
}
```

注意点

- 通用兄弟选择器必须用~连接。
- 通用兄弟选择器选中的是指定选择器后面某个选择器选中的所有标签, 无论有没有被隔开都可以选中

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>通用兄弟选择器</title>
  <style type="text/css">
    h3~p{
        color: red;
    }
  </style>
</head>
<body>
  <h3>NBA巨星</h3>
  <a href="#">kobe是总决赛MVP</a>
  <p>James最佳防守运动员</p>
  <a href="#">Curry总决赛MVP</a>
  <p>Rondo最佳5号位</p>

  <h3>NBA巨星</h3>
  <p>McGrady投篮最销魂</p>
</body>
</html>
```

3、执行结果

<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/14-CSS.png"  />	

### 5.2 伪类选择器

1、链接的`4`中状态

==激活状态，已访问状态，未访问状态，和鼠标悬停状态。==

| 伪类      | 说明         |
| --------- | ------------ |
| `link`    | 未访问的链接 |
| `visited` | 已访问的链接 |
| `hover`   | 鼠标悬停状态 |
| `active`  | 激活的链接   |

2、伪类`:hover`和`:active`

- `:hover`用于访问的鼠标经过某个元素时。
- `:active`用于一个元素被激活时【即按下鼠标之后放开鼠标之前的时间】。

3、链接伪类的顺序

`: Link > :Visited > :Hover > :Active`

4、注意点

- `a:hover` 必须置于 `a:link` 和 `a:visited` 之后，才有效。
- `a:active` 必须置于` a:hover` 之后，才有效。
- 伪类名称对大小写不敏感。

5、代码实现

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>伪类选择器</title>
  <style type="text/css">
      p a:link{color:blue;}
      p a:visited{color:green;}
      p a:hover{color:red;}
      p a:active{color:gray;}
      div a:link{color:green;}
      div a:visited{color:blue;}
      div a:hover{color:gray;}
      div a:active{color:red;}
  </style>

</head>
<body>
  <p><a href="http://www.baidu.com" target="_blank">伪类选择器</a></p>
  <br/>
  <div><a href="http://www.zhihu.com" target="_blank">伪类选择器</a></div><br/>
  <p>度娘</p>
</body>
</html>
```

### 5.3 序选择器

1、基本介绍

选中指定的任意标签然后设置属性。

**同一级别属性**【不区分类型】

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaSE/se4/20211227191943.png)

**同一类型的属性**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaSE/se4/20211227192305.png)

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>序选择器</title>
  <style type="text/css">
    /*1.1 first-child 选中同级别中的第一个标签*/
    /*p:first-child{
        color: red;
    }*/

    /*1.2 first-of-type 选中同级别中同类型的第一个标签*/
    /*p:first-of-type{
        color: blue;
    }*/

    /*2.1 选中同级别中的第n个标签*/
    /*p:nth-child(3){
        color: red;
    }*/

    /*2.2 选中同级别中同类型的第n个标签*/
   /* p:nth-of-type(3){
        color: blue;
    }*/

    /*3.1 only-child 选中父元素中唯一的标签*/
   /* p:only-of-type {
        color: red;
    }*/

    /*:only-of-type 选中父元素中唯一类型的某个标签*/
    .st1:only-of-type {
        color: red;
    }
  </style>
</head>
  <body>
    <!--<h3>程序设计语言</h3>
    <p>java最牛B</p>
    <p>Python人工智能</p>
    <p>C语言最底层</p>
    <h5>C++最掉头发</h5>
    <div>
      <p>Vue好香</p>
      <p>javaScript神经病一样</p>
      <p>CSS好看。</p>
      <p class="st1">php,无需解释</p>
    </div>-->

    <p class="st1">kobe是MVP</p>
    <div>
      <p class="st2">我是curry</p>
      <p>James牛逼！！！</p>
      <h3>~~~~~</h3>
    </div>
  </body>
</html>
```

3、执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaSE/se4/20211227193212.png)

### 5.4 属性选择器

1、基本介绍

根据指定的属性名称找到对应的标签, 然后设置属性

```css
[attribute]
作用:根据指定的属性名称找到对应的标签, 然后设置属性

[attribute=value]
作用: 找到有指定属性, 并且属性的取值等于value的标签, 然后设置属性最常见的应用场景, 就是用于区分input属性
```

2、代码实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>属性选择器</title>
  <style type="text/css">
	  p[id]{
		  color: green;
	  }
	  p[class=st3]{
		  color: red;
	  }
  </style>
</head>
  <body>
	  <p id="st1">java最牛逼的语言!!!</p>
	  <p id="st2" class="p1">php,还需要别的引论么</p>
	  <p class="st3">html网站基本架构</p>
      <p id="st4" class="p2">javaScript最自由</p>
      <p>c++最废头发</p>
  </body>
</html>
```

3、执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaSE/se4/20211227193408.png)

### 5.5 伪元素选择器

1、基本介绍

给指定标签的内容前面添加一个子元素或者给指定标签的内容后面添加一个子元素。

```css
标签名称::before{
    属性名称:值;
}
给指定标签的内容前面添加一个子元素

标签名称::after{
    属性名称:值;
}
给指定标签的内容后面添加一个子元素
```

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>伪元素选择器</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      div{
          width: 200px;
		  height: 200px;
		  background-color: darkorange;
      }
	  div::before{
		  content: "hello world";
		  width: 50px;
		  height: 50px;
		  background-color: greenyellow;
		  display: block;
	  }

	  div::after{
          /*指定添加的子元素中存储的内容*/
          content: "java网站搭建";
          /*指定添加的子元素的宽度和高度*/
          width: 50px;
          /*height: 50px;*/
          /*内容是可以超出标签的范围的, 所以高度为0依然可以看见内容*/
          height:0;
          background-color: crimson;
          /*指定添加的子元素的显示模式*/
          display: block;
          /*隐藏添加的子元素*/
          visibility: hidden;
	  }

  </style>
</head>
<body>
	<div>
	  javaSE是学习java的基础
	</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/17-CSS.png" style="zoom:80%;" />

## 6- CSS三大属性

### 6.1 CSS继承性

从父元素那继承部分CSS属性。

1、继承的好处

- 父元素设置样式，子元素可以继承部分属性。
- 减少CSS代码

2、注意点

- 并不是所有的属性都可以继承, 只有以**<font color="red">color/font-/text-/line-</font>**开头的属性才可以继承。

- 在`CSS`的继承中只要是后代都可以继承。

- `a`标签的文字颜色和下划线是不能继承的。
- `h`标签的文字大小是不能继承的。

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS继承性</title>
  <style type="text/css">
	div{
		color: red;
		text-decoration: none;
        font-size: 20px;
	}
  </style>
</head>
  <body>
	<div>
	  <p>java是最牛的语言！！！</p>
	</div>

	<div>
	  <ul>
		<li>
		  <p>python人工智能！！！</p>
		</li>
	  </ul>
	</div>

	<div><a href="#">https://www.youtube.com</a></div>

	<div>
	  <h3>我是标签</h3>
	</div>
  </body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/17-CSS.png" style="zoom:80%;" />

### 6.2 CSS层叠

1、基本介绍

层叠性就是CSS处理冲突的一种能力

相关特点

- 可以定义多个样式。
- 不冲突时，多个样式可层叠为一个。
- 冲突时，按不同样式规则优先级来应用样式

2、代码实现

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>CSS层叠性</title>
  <style type="text/css">

      h3{color:red;}
      h3{color: blue}
  </style>
</head>
<body>
	<h3>CSS继承和层叠</h3>
</body>
</html>
```

3、执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaSE/se4/20211227194004.png)

### 6.3 CSS优先级

当多个选择器选中同一个标签, 并且给同一个标签设置相同的属性时, 如何层叠就由优先级来确定。

#### 6.3.1 优先级判断

1、间接选中

如果是间接选中, 那么就是谁离目标标签比较近就听谁的

2、直接选中

如果都是直接选中, 并且都是同类型的选择器, 那么就是谁写在后面就听谁的

3、不同选择器【直接选中】

- 如果都是直接选中, 并且不是相同类型的选择器, 那么就会按照选择器的优先级来层叠。
- `id`>类>标签>通配符>继承>浏览器默认

4、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>优先级</title>
  <style type="text/css">
	/*li{
		color: blue;
	}
	ul{
		color: red;
	}*/

	/*p{
		color: blue;
	}
	p{
		color: red;
	}*/

	#st1{
		color: blueviolet;
	}
	.p1{
		color: green;
	}
	p{
		color: darkgoldenrod;
	}
	*{
		color: blue;
	}
	li{
		color: aqua;
	}
  </style>
</head>
<body>
<ul>
  <li>
	<p id="st1" class="p1">php,还需要解释么？</p>
  </li>
</ul>
</body>
</html>
```

5、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/19-CSS.png)

#### 6.3.2 !important声明

1、基本介绍

用于提升某个直接选中标签的选择器中的某个属性的优先级的, 可以将被指定的属性的优先级提升为最高。

**注意点**

- `.!important`只能用于直接选中, 不能用于间接选中，通配符选择器选中的标签也是直接选中的。
- `.!important`只能提升被指定的属性的优先级, 其它的属性的优先级不会被提升。
- `.!important`必须写在属性值得分号前面，`!important`前面的感叹号不能省略。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>优先级之important</title>
  <style type="text/css">

      #st1{
          color: blueviolet;
          font-size: 20px;
      }
      .p1{
          color: green;
      }
      p{
          color: darkgoldenrod;
          font-size: 20px;
      }
      *{
          color: crimson !important;
          font-size: 20px;
      }
      li{
          color: aqua;
      }
  </style>
</head>
<body>
<ul>
  <li>
	<p id="st1" class="p1">php,还需要解释么？</p>
  </li>
</ul>
</body>
</html>
```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/20-CSS.png)

### 6.4 方法的优先级

1、基本介绍

行内样式 `>` 内部样式 `>` 外部样式

**注意点:**

链入外部样式表与内部样式表之间的优先级取决于所处位置的先后，最后定义的优先级最高【就近原则】。

### 6.5 优先级权重

1、基本介绍

当多个选择器混合在一起使用时, 可以通过计算权重来判断谁的优先级最高。

2、权重的计算规则

- 首先先计算选择器中有多少个`id`, `id`多的选择器优先级最高。
- `id`的个数一样, 那么再看类名的个数, 类名个数多的优先级最高。
- 类名的个数一样, 那么再看标签名称的个数, 标签名称个数多的优先级最高
- `id`个数一样, 类名个数也一样, 标签名称个数也一样, 也就是说优先级如果一样, 那么谁写在后面谁的优先级高。

3、权重值大小

- 标签选择器：权值为1
- 类选择器和伪类：权值为10
- ID选择器：权值为100
- 通配符选择器：权值为0
- 行内样式：权值为1000

**同一样式表中**

- 权值相同：就近原则【离被设置元素越近优先级越高】。

- 权值不同：根据权值来判断`CSS`样式，哪种`CSS`样式权值高，就使用哪种样式。

4、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>优先级权重</title>
  <style type="text/css">
	/*.p1 .p2{
		color: green;
	}
	#st1 .p2{
		color: blue;
	}*/

	/*.p1 .p2{
		color: aqua;
	}

	div .p2{
		color: green;
	}*/

	/*#st1 ul li p{
		color: red;
	}

	#st1 ul p{
		color: green;
	}*/

	.p1 li #st2{
		color: blue;
	}
	#st1 ul .p2{
		color: red;
	}
  </style>
</head>
<body>
<div id="st1" class="p1">
  <ul>
	<li>
	  <p id="st2" class="p2">php,还需要解释么？</p>
	</li>
  </ul>
</div>
</body>
</html>
```

5、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/21-CSS.png)

## 7- 显示模式

### 7.1 div和span标签

1、块级元素

块级元素会独占一行。

```css
p div h ul ol dl li dt dd
```

2、行内元素

行内元素不会独占一行。

```css
span buis strong em ins del
```

3、块级元素和行内元素区别

块级元素

- 独占一行。
- 如果没有设置宽度, 那么默认和父元素一样宽。
- 如果设置了宽高, 那么就按照设置的来显示。

行内元素

- 不会独占一行。
- 如果没有设置宽度, 那么默认和内容一样宽
- 行内元素是不可以设置宽度和高度的。

行内块级元素

- 为了能够让元素既能够不独占一行, 又可以设置宽度和高度, 那么就出现了行内块级元素

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS元素的显示模式</title>
  <style type="text/css">
	div{
		background: red;
		width: 100px;
		height: 100px;
	}
	span{
		background: green;
		width: 100px;
		height: 100px;
	}

	img{
		width: 100px;
		height: 100px;
	}
  </style>
</head>
<body>
	<div>kobe是MVP</div>
	<p>james总决赛亚军</p>
	<h3>NBA总决赛</h3>
	
	<hr/>
	<span>Curry三分王</span>
	<b>朱芳雨是拳王</b>
	<strong>哈哈哈哈</strong>
	<hr/>

	<img src="images/test.jpg" alt="">
	<img src="images/test.jpg" alt="">
</body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/22-CSS.png" style="zoom:80%;" />

### 7.2 CSS元素的显示模式

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS元素显示模式转换</title>
  <style type="text/css">
	div{
		display: inline;
		background: red;
		width: 100px;
		height: 100px;
	}

	span{
        display: block;
        background: green;
        width: 100px;
        height: 100px;
	}
	.p1{
        background: blue;
        width: 100px;
        height: 100px;
        display: inline-block;
	}
	.p2{
        background: rebeccapurple;
        width: 100px;
        height: 100px;
        display: inline-block;
	}
  </style>
</head>
<body>
  <!--
  设置元素的display属性

  display取值
	  block 块级
	  inline 行内
	  inline-block 行内块级

快捷键
	di display: inline;
	db display: block;
	dib display: inline-block;
  -->
  <div>我是div1</div>
  <div>我是div2</div>

  <span>我是span标签1</span>
  <span>我是span标签2</span>

  <p class="p1">段落1</p>
  <p class="p2">段落2</p>
</body>
</html>
```

2、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/23-CSS.png"  />

## 8-CSS背景

### 8.1 背景颜色

1、基本介绍

设置标签的背景颜色

```css
background-color: 用来设置标签的背景颜色
```

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>01-背景颜色</title>
  <style type="text/css">
	div{
		width: 100px;
		height: 100px;
	}
    .st1{
        background-color: red;
    }
    .st2{
        background-color: rgb(0,255,0);
    }
    .st3{
        background-color: rgba(0,0,255,0.7);
    }
    .st4{
        background-color: #0ff;
    }
  </style>
</head>
<body>
	<!--div.st$*2-->
  <div class="st1"></div>
  <div class="st2"></div>
  <div class="st3"></div>
  <div class="st4"></div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/25-CSS.png" style="zoom:80%;" />

### 8.2 背景图片

1、基本介绍

设置背景图片

```css
background-image: url():用于设置背景图片。
```

**注意点**

- 图片的地址必须放在`url()`中, 图片的地址可以是本地的地址, 也可以是网络的地址。

- 如果图片的大小没有标签的大小大, 那么会自动在水平和垂直方向平铺来填充。

- 如果网页上出现了图片, 那么浏览器会再次发送请求获取图片。


2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>02-背景图片</title>
  <style type="text/css">
	div{
		width: 300px;
		height: 300px;
	}
	.st1{
		background-image: url(images/test.jpg);
	}
  </style>
</head>
<body>
	<div class="st1"></div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/26-CSS.png" style="zoom:80%;" />

### 8.3 平铺属性

1、基本语法

可以通过背景图片的平铺来降低图片的大小, 提升网页的访问速度。

**背景图片的平铺方式**

```css
background-repeat: 用于控制背景图片的平铺方式
```

**取值方式**

- `repeat` 默认, 在水平和垂直都需要平铺
- `no-repeat` 在水平和垂直都不需要平铺
- `repeat-x` 只在水平方向平铺
- `repeat-y`只在垂直方向平铺

```css
快捷键
bgr background-repeat:
```

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>背景平铺属性</title>
  <style type="text/css">
	div{
		width: 500px;
		height: 500px;
	}
	.st1{
		background-image: url(images/test.jpg);
		background-repeat: repeat-x;
	}
  </style>
</head>
<body>
	<div class="st1"></div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/27-CSS.png" style="zoom:80%;" />

### 8.4 定位属性

1、背景图片的位置

```css
background-position: 用于控制背景图片的位置
```

2、基本格式

```css
background-position: 水平方向 垂直方向;
```

3、取值

```css
具体的方位名词
    水平方向: left center right
    垂直方向: top center bottom
具体的像素
    例如: background-position: 100px 200px;
    记住一定要写单位, 也就是一定要写px，记住具体的像素是可以接收负数的。
快捷键:
	bp background-position: 0 0;
```

4、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>背景定位属性</title>
  <style type="text/css">
      div{
          /*width: 300px;*/
          height: 300px;
      }
      .st1{
          /*background-color: red;*/
          /*background-image: url(images/test.jpg);*/
          /*background-repeat: no-repeat;*/
          /*background-position: left top;*/
          /*background-position: right top;*/
          /*background-position: right bottom;*/
          /*background-position: left bottom;*/
          /*background-position: center center;*/
          /*background-position: left center;*/
          /*background-position: center top;*/
          /*background-position: 100px 0;*/
          /*background-position: 100px 200px;*/
          /*background-position: -100px -100px;*/
          background-image: url(images/test2.jpg);
          background-position: center top;
      }
  </style>
</head>
<body>
<div class="st1"></div>
</body>
</html>
```

5、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/28-CSS.png" style="zoom:67%;" />

### 8.5 背景缩写

1、**属性缩写的格式**

```css
background: 背景颜色 背景图片 平铺方式 关联方式 定位方式;

快捷键:
	bg+ background: #fff url() 0 0 no-repeat;

注意点：
	background属性中， 任何一个属性都可以被省略
```

**2、背景关联方式**

默认情况下背景图片会随着滚动条的滚动而滚动， 如果不想让背景图片随着滚动条的滚动而滚动，可以修改背景图片和滚动条的关联方式

```css
background-attachment：scroll;

取值：
    scroll 默认值， 会随着滚动条的滚动而滚动
    fixed 不会随着滚动条的滚动而滚动

快捷键:
	ba background-attachment:;
```

### 8.6 CSS3背景属性

1、基本介绍

背景尺寸属性是CSS3中新增的一个属性, 专门用于设置背景图片大小。

背景尺寸属性：`background-size`

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>背景尺寸属性</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		width: 800px;
		height: 500px;
		margin: 0 auto;
	}
	ul li{
		list-style: none;
		float: left;
		width: 200px;
		height: 200px;
		margin: 30px 30px;
        border: 1px solid #000;
		text-align: center;
		line-height: 200px;
	}

	ul li:nth-child(1){
		background: url("images/test.jpg") no-repeat;
	}

    ul li:nth-child(2){
        background: url("images/test.jpg") no-repeat;
        /*
		第一个参数:宽度
		第二个参数:高度
		*/
		background-size: 200px 100px;
    }
    ul li:nth-child(2){
        background: url("images/test.jpg") no-repeat;
        background-size: 200px 100px;
    }
    ul li:nth-child(3){
        background: url("images/test.jpg") no-repeat;
        background-size: 100% 80%;
    }
    ul li:nth-child(4){
        background: url("images/test.jpg") no-repeat;
        background-size: auto 100px;
    }
    ul li:nth-child(5){
        background: url("images/test.jpg") no-repeat;
        background-size: 100px auto;
    }
    ul li:nth-child(6){
        background: url("images/test.jpg") no-repeat;
        /*
		  cover含义:
		  1.告诉系统图片需要等比拉伸
		  2.告诉系统图片需要拉伸到宽度和高度都填满元素
		  */
        background-size: cover;
    }
	
    ul li:nth-child(7){
        background: url("images/test.jpg") no-repeat;
        background-size: contain;
    }
  </style>
</head>
<body>
<ul>
  <li>默认背景</li>
  <li>具体像素</li>
  <li>百分比</li>
  <li>宽度等比拉伸</li>
  <li>高度等比拉伸</li>
  <li>cover</li>
  <li>contain</li>
</ul>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/36-CSS.png" style="zoom: 40%;" />

4、多重背景

注意要点 ：多张背景图片之间用逗号隔开即可,先添加的背景图片会盖住后添加的背景图片，编写多重背景时拆开编写。

5、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>多张背景图片</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 300px;
		height: 300px;
        border: 1px solid #000;
		margin: 0 auto;
		background-image: url("images/animal1.png"), url("images/animal2.png") , url("images/animal5.png"), url("images/animal3.png");
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
		background-position:left top, right top, left bottom, right bottom;
	}
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

6、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/37-CSS.png" style="zoom: 80%;" />

## 9-盒子模型

### 9.1 边框属性

1、基本介绍

边框就是环绕在标签宽度和高度周围的线条

2、设置边框属性

```css
同时设置四条边的边框
	border: 边框的宽度 边框的样式 边框的颜色;
快捷键:
	bd+Tab 	border: 1px solid #000;

注意点:
    连写格式中颜色属性可以省略, 省略之后默认就是黑色。
    连写格式中样式不能省略, 省略之后就看不到边框了。
    连写格式中宽度可以省略, 省略之后还是可以看到边框。

分别设置四条边的边框
border-top: 边框的宽度 边框的样式 边框的颜色;
border-right: 边框的宽度 边框的样式 边框的颜色;
border-bottom: 边框的宽度 边框的样式 边框的颜色;
border-left: 边框的宽度 边框的样式 边框的颜色;

快捷键:
    bt+Tab
    br+
    bb+
    bl+

分别设置四条边的边框属性
    border-width: 上 右 下 左;
    border-style: 上 右 下 左;
    border-color: 上 右 下 左;

注意点:
这三个属性的取值是按照顺时针来赋值, 按照上右下左来赋值。
这三个属性的取值省略时的规律
    上 右 下 左 > 上 右 下 > 左边的取值和右边的一样
    上 右 下 左 > 上 右 > 左边的取值和右边的一样 下边的取值和上边一样
    上 右 下 左 > 上 > 右下左边取值和上边一样


3.非连写(方向+要素)
border-left-width: 20px;
border-left-style: double;
border-left-color: pink;
```

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>边框属性</title>
  <style type="text/css">
	.box1{
		width: 150px;
		height: 150px;
		background-color: green;

        /*border: 5px solid blue;*/
        /*border: 5px solid;*/
     	 /* border: 5px blue;*/

		border-top: 15px solid blue;
		border-right: 15px dashed red;
        border-bottom: 15px dotted purple;
		border-left: 15px double pink;
	}

	.box2{
        width: 150px;
        height: 150px;
        background-color: red;

		/*连写*/
		/*
		  border-width: 15px 15px 15px 15px;
		  border-style: solid dashed dotted double;
		  border-color: blue green purple pink;
		*/

        border-top-width: 5px;
        border-top-style: solid;
        border-top-color: blue;

        border-right-width: 10px;
        border-right-style: dashed;
        border-right-color: green;

        border-bottom-width: 15px;
        border-bottom-style: dotted;
        border-bottom-color: purple;

        border-left-width: 20px;
        border-left-style: double;
        border-left-color: pink;
	}
  </style>
</head>
<body>
	<div class="box1"></div><br/>
	<div class="box2"></div>
</body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/01-CSS.png" style="zoom:67%;" />

### 9.2 内边距

1、基本介绍

边框和内容之间的距离就是内边距。

```css
非连写基本格式
	padding-top: ;
    padding-right: ;
    padding-bottom: ;
    padding-left: ;

连写基本格式
    padding: 上 右 下 左;

    这三个属性的取值省略时的规律
        上 右 下 左 > 上 右 下 > 左边的取值和右边的一样。
        上 右 下 左 > 上 右 > 左边的取值和右边的一样 下边的取值和上边一样。
        上 右 下 左 > 上 > 右下左边取值和上边一样。

    注意点:
        给标签设置内边距之后, 标签占有的宽度和高度会发生变化。
        给标签设置内边距之后, 内边距也会有背景颜色。
```

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>内边距属性</title>
  <style type="text/css">
	div{
		width: 200px;
		height: 100px;
        border: 1px solid #000;
		background-color: aquamarine;
	}

	.box1{
		padding-top: 20px;
	}
	/*右边*/
	.box2{
		padding-right: 40px;
	}
	.box3{
		padding-bottom: 80px;
	}
    /*左边*/
	.box4{
		padding-left: 100px;
	}

	.box5{
        /*padding:20px 40px 80px 60px;*/
        /*padding:30px 40px 80px;*/
        /*padding:20px 40px;*/
		padding: 30px;
	}
  </style>
</head>
<body>
	<div class="box1">人言落日是天涯，望极天涯不见家。已恨碧山相阻隔，碧山还被暮云遮。——李觏《乡思》</div><br/>
	<div class="box2">桃李春风一杯酒，江湖夜雨十年灯。——黄庭坚《寄黄几复》</div><br/>
	<div class="box3">雨中黄叶树，灯下白头人。——司空曙《喜外弟卢纶见宿》</div><br/>
	<div class="box4">绿蚁新醅酒，红泥小火炉。晚来天欲雪，能饮一杯无？——白居易《问刘十九》</div><br/>
	<div class="box5">而今听雨僧庐下，鬓已星星也。悲欢离合总无情。一任阶前、点滴到天明。——蒋捷《虞美人 听雨》</div><br>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/02-CSS.png" style="zoom: 50%;" />

### 9.3 外边距

1、基本语法

标签和标签之间的距离就是外边距

```css
非连写基本格式
    margin-top: ;
    margin-right: ;
    margin-bottom: ;
    margin-left: ;

连写基本格式
	margin: 上 右 下 左;

这三个属性的取值省略时的规律
    上 右 下 左 > 上 右 下 > 左边的取值和右边的一样
    上 右 下 左 > 上 右 > 左边的取值和右边的一样 下边的取值和上边一样
    上 右 下 左 > 上 > 右下左边取值和上边一样

注意点:外边距的那一部分是没有背景颜色的
```

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>外边距属性</title>
  <style type="text/css">
	*{
		padding: 0;
		margin: 0;
	}
	span{
		display: inline-block;
		width: 100px;
		height: 100px;
        border: 1px solid #000;
		background-color: greenyellow;
	}
	
	div{
		height: 100px;
        border: 1px solid #000;
	}

	.box1{
        /*
		margin-top:20px;
		margin-right:40px;
		margin-bottom:80px;
		margin-left:160px;
		*/
        /*margin:20px 40px 80px 160px;*/
        /*margin:20px 40px 80px;*/
        /*margin:20px 40px;*/
        margin:20px;
	}
  </style>
</head>
<body>
  <span class="box1">以色事他人，能得几时好。</span>
  <span class="box2">从此无心爱良夜，任他明月下西楼。</span>
  <span class="box3">雨中黄叶树，灯下白头人。</span>
  <div class="box4">111</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/03-CSS.png" style="zoom:80%;" />

### 9.4 外边距合并现象

1、基本介绍

在默认布局的垂直方向上, 默认情况下外边距是不会叠加的, 会出现合并现象, 谁的外边距比较大就听谁的。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>外边距合并</title>
  <style type="text/css">
	span{
		display: inline-block;
		width: 100px;
		height: 100px;
        border: 1px solid #000;
	}
	
	div{
		height: 100px;
        border: 1px solid #000;
	}
	.span1{
		margin-right: 50px;
		background-color: aquamarine;
	}
	.span2{
		margin-left: 100px;
		background-color: purple;
	}

	.box1{
		margin-bottom: 50px;
		background-color: greenyellow;
	}
	.box2{
		margin-top: 100px;
		background-color: yellow;
	}
  </style>
</head>
<body>
	<span class="span1">醉后不知天在水，满船清梦压星河</span>
	<span class="span2">过沙溪急，霜溪冷，月溪明。</span>
	<div class="box1">雨中黄叶树，灯下白头人。</div>
	<div class="box2">从此无心爱良夜，任他明月下西楼。</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/04-CSS.png" style="zoom: 67%;" />

### 9.5 CSS盒子模型

#### 9.5.1 盒子内容

1、`CSS`盒子模型仅仅是一个形象的比喻, `HTML`中所有的标签都是盒子

- 在`HTML`中所有的标签都可以设置。
- 宽度/高度  `==` 指定可以存放内容的区域。
- 内边距  `==` 填充物。
- 边框  `==` 手机盒子自己。
- 外边距  `== `盒子和盒子之间的间隙。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS盒子模型</title>
  <style type="text/css">
	span,a,b,strong{
		display: inline-block;
		width: 100px;
		height: 100px;
        border: 6px solid #000;
		padding: 20px;
		margin: 20px;
	}
  </style>
</head>
<body>
	<span>java最牛逼!!</span>
	<a href="#">python人工智能</a><br/>
	<b>html网页基本布局</b>
	<strong>javaScript</strong>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/05-CSS.png" style="zoom: 67%;" />

#### 9.5.2 宽度和高度

1、内容的宽度和高度

- 通过`width/height`属性设置的宽度和高度。

2、元素的宽度和高度

- 宽度 = 左边框 + 左内边距 + `width` + 右内边距 + 右边框
- 高度 同理

3、元素空间的宽度和高度

- 宽度 = 左外边距 + 左边框 + 左内边距 + `width` + 右内边距 + 右边框 + 右外边距
- 高度 同理可证

4、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>盒子模型宽度和高度</title>
  <style type="text/css">
	.box1{
		width: 100px;
		height: 100px;
		padding: 25px;
		background-color: purple;
	}

    /*元素宽高= 边框+内边距+内容宽度/内容高度等于200*/
	.box2{
		width: 150px;
		height: 150px;
        border: 25px solid #000;
		background-color: blue;
	}
	.box3{
		width: 150px;
		height: 150px;
		padding: 20px;
        border: 5px solid #000;
		background-color: greenyellow;
	}

    /*元素空间宽高=外边距+边框+内边距+内容宽度/内容高度 */
	.box4{
		width: 100px;
		height: 100px;
		padding:25px;
        border: 25px solid #000;
		margin: 50px;
	}
  </style>
</head>
<body>
	<!--<div class="box1">box1</div><br/>
	<div class="box2">box2</div><br/>
	<div class="box3">box3</div>-->
	<div class="box4">box4</div>
</body>
</html>
```

5、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/06-CSS.png" style="zoom:80%;" />

#### 9.5.3 box-sizing属性

1、相关属性介绍

- `box-sizing`属性保证增加`padding`和`border`之后,盒子元素的宽度和高度不变。增加`padding`和`border`之后要想保证盒子元素的宽高不变, 那么就必须减去一部分内容的宽度和高度
- `content-box`： 元素的宽高 = 边框 + 内边距 + 内容宽高
- ` border-box`：元素的宽高 = `width/height`的宽高

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>盒子box-sizing属性</title>
  <style type="text/css">
	.st{
		width: 300px;
		height: 300px;
		background-color: greenyellow;
	}
	.st1{
		width: 100px;
		height: 200px;
		background-color: indigo;
		float: left;
	}
	.st2{
		width: 200px;
		height: 200px;
		background-color: green;
		float: right;
        border: 20px solid #000;
		padding: 20px;
		box-sizing: border-box;
	}
  </style>
</head>
<body>
	<div class="st">
	  <div class="st1"></div>
	  <div class="st2"></div>
	</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/07-CSS.png" style="zoom:80%;" />

#### 9.5.4 盒子居中

1、基本介绍

`text-align: center; `

- 设置盒子中存储的文字/图片水平居中

`margin:0 auto; `

- 盒子自己水平居中

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>盒子居中</title>
  <style type="text/css">
	.st1{
		width: 600px;
		height: 500px;
		background-color: yellow;
		margin: 0 auto;
	}
  </style>
</head>
<body>
	<div class="st1">
	  java处理高并发<br/>
	  <img src="images/test.jpg" alt="">
	</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/08-CSS.png" style="zoom:50%;" />

## 10- 浮动

### 10.1 浮动流

1、浮动流排版方式

- 浮动流是一种=="半脱离标准流"==的排版方式。
- 浮动流只有一种排版方式, 就是水平排版. 它只能设置某个元素左对齐或者右对齐。

2、注意点

- 浮动流中没有居中对齐, 也就是没有`center`这个取值。
- 在浮动流中是不可以使用`margin: 0 auto;`。

3、浮动流特点

- 在浮动流中是不区分块级元素/行内元素/行内块级元素的,无论是级元素/行内元素/行内块级元素都可以水平排版。
- 在浮动流中无论是块级元素/行内元素/行内块级元素都可以设置宽高。
- 综上所述, 浮动流中的元素和标准流中的行内块级元素很像。

4、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>网页的布局方式</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	.box1{
		width: 150px;
		height: 150px;
		background-color: yellow;
		float: left;
	}

	.box2{
        width: 150px;
        height: 150px;
        background-color: rebeccapurple;
        float: right;
	}

    .st1{
        width: 150px;
        height: 150px;
        background-color: red;
        float: left;
    }

    .st2{
        width: 150px;
        height: 150px;
        background-color: green;
        float: right;
    }
  </style>
</head>
<body>
	<div class="box1">java是最稳定的语言</div>
	<div class="box2">html搭建网页结构</div><br/>

	<span class="st1">python人工智能</span>
	<span class="st2">C++最废头发</span>
</body>
</html>
```

5、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/55-CSS.png" style="zoom:67%;" />

### 10.2 脱标

1、脱离标准流

- 当某一个元素浮动之后, 那么这个元素看上去就像被从标准流中删除了一样, 这个就是浮动元素的脱标。

2、浮动元素脱标影响

- 如果前面一个元素浮动了, 而后面一个元素没有浮动 , 那么这个时候前面一个元就会盖住后面一个元素。

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>浮动元素的脱标</title>
  <style type="text/css">
	.box1{
		float: left;
		width: 100px;
		height: 100px;
		background-color: red;
	}

    .box2{
        width: 150px;
        height: 150px;
        background-color: blue;
    }
  </style>
</head>
<body>
	<div class="box1"></div>
	<div class="box2"></div>
</body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/10-CSS.png" style="zoom: 80%;" />

### 10.3 排序规则

1、浮动元素排序规则

- 相同方向上的浮动元素, 先浮动的元素会显示在前面, 后浮动的元素会显示在后面。
- 不同方向上的浮动元素, 左浮动会找左浮动, 右浮动会找右浮动。
- 浮动元素浮动之后的位置, 由浮动元素浮动之前在标准流中的位置来确定。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>浮动元素排序规则</title>
  <style type="text/css">
	.box1{
		float: left;
		width: 50px;
		height: 50px;
		background-color: red;
	}
    .box2{
        width: 100px;
        height: 100px;
        background-color: rebeccapurple;
    }
    .box3{
        float: left;
        width: 150px;
        height: 150px;
        background-color: yellow;
    }
    .box4{
        float: left;
        width: 200px;
        height: 200px;
        background-color: green;
    }
  </style>
</head>
<body>
	<div class="box1">1</div>
	<div class="box2">2</div>
	<div class="box3">3</div>
	<div class="box4">4</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/11-CSS.png" style="zoom:80%;" />

### 10.4 贴靠现象

1、浮动元素贴靠现象

- 如果父元素的宽度能够显示所有浮动元素, 那么浮动的元素会并排显示。
- 如果父元素的宽度不能显示所有浮动元素, 那么会从最后一个元开始往前贴靠。
- 如果贴靠了前面所有浮动元素之后都不能显示, 最终会贴靠到父元素的左边或者右边。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>浮动元素贴靠现象</title>
  <style type="text/css">
	.box{
		width: 400px;
		height: 400px;
        border: 1px solid #000;
	}
	.box1{
		float: left;
		width: 50px;
		height: 300px;
		background-color: red;
	}
	.box2{
		float: left;
		width: 50px;
		height: 100px;
		background-color: green;
	}
	.box3{
		float: left;
		width: 250px;
		height: 100px;
		background-color: greenyellow;
	}
  </style>
</head>
<body>
	<div class="box">
	  <div class="box1"></div>
	  <div class="box2"></div>
	  <div class="box3"></div>
	</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/13-CSS.png" style="zoom:67%;" />

### 10.5 元素高度

1、基本介绍

- 在标准流中内容的高度可以撑起父元素的高度。
- 在浮动流中浮动的元素是不可以撑起父元素的高度的。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>浮动元素高度</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
        border: 1px solid #000;
	}
	p{
		float: left;
		width: 50px;
		height: 50px;
		background-color: red;
	}
  </style>
</head>
<body>
	<p></p>
</body>
</html>
```

### 10.6 清除浮动

#### 10.6.1 清除浮动方式1

基本语法 ：给前面一个父元素设置高度

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>清除浮动1</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	p{
        float: left;
	}
	.box1{
		height: 20px;
		background-color: green;
	}
	.box2{
		background-color: rebeccapurple;
	}
	.box1 p{
		width: 100px;
		background-color: darkorange;
	}
	.box2 p{
		width: 100px;
		background-color: cyan;
	}
  </style>
</head>
<body>
	<div class="box1">
	  <p>javaSE1</p>
	  <p>javaWEB2</p>
	  <p>javaEE3</p>
	</div>

	<div class="box2">
	  <p>javaSE4</p>
	  <p>javaWEB5</p>
	  <p>javaEE6</p>
	</div>
</body>
</html>
```

2、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/14-CSS.png)

#### 10.6.2 清除浮动方式2

1、基本语法：给后面的盒子添加clear属性

`clear`属性取值

- `one:` 默认取值, 按照浮动元素的排序规则来排序【左浮动找左浮动, 右浮动找右浮动】。
- `left: `不要找前面的左浮动元素。
- `right:` 不要找前面的右浮动元素。
- `both:` 不要找前面的左浮动元素和右浮动元素。

注意点：给某个元素添加clear属性之后, 那么这个属性的`margin`属性就会失效。

2、代码示例

```css
.box2{
          background-color: rebeccapurple;
		  clear: both;
      }
```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/15-CSS.png)

#### 10.6.3 清除浮动方式3

1、外墙法

- 在两个盒子中间添加一个额外的块级元素

- 给这个额外添加的块级元素设置`clear: both;`属性


**注意点**

- 外墙法它可以让第二个盒子使用`margin-top`属性。
- 外墙法不可以让第一个盒子使用`margin-bottom`属性。

2、内墙法

- 在第一个盒子中所有子元素最后添加一个额外的块级元素。

- 给这个额外添加的块级元素设置`clear: both;`属性。


**注意点**

- 内墙法它可以让第二个盒子使用`margin-top`属性。
- 内墙法它可以让第一个盒子使用`margin-bottom`属性。

2、外墙法和内墙法区别

- 外墙法不能撑起第一个盒子的高度, 而内墙法可以撑起第一个盒子的高度

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>清除浮动3</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      p{
          float: left;
      }
      .box1{
          background-color: green;
      }
      .box2{
          background-color: rebeccapurple;
      }
      .box1 p{
          width: 100px;
          background-color: darkorange;
      }
      .box2 p{
          width: 100px;
          background-color: cyan;
      }

	  .st1{
		  clear: both;
	  }
	  .st2{
		  clear: both;
		  height: 20px;
		  background-color: yellow;
	  }
  </style>
</head>
<body>
  <div class="box1">
	<p>javaSE1</p>
	<p>javaWEB2</p>
	<p>javaEE3</p>
	<!--内墙法-->
	<div class="st2"></div>
  </div>
  <!--外墙法-->
  <!--<div class="st1"></div>-->
  <div class="box2">
	<p>javaSE4</p>
	<p>javaWEB5</p>
	<p>javaEE6</p>
  </div>
</body>
</html>
```

4、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/16-CSS.png)

#### 10.6.4 清除浮动方式4

1、基本语法

- 利用伪元素选择器清除浮动
- 本质上就是内墙法, 只不过是直接通过CSS代码添加了内墙, 其它特性和内墙法都一样

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>清除浮动4</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      p{
          float: left;
      }
      .box1{
          background-color: green;
      }
      .box2{
          background-color: rebeccapurple;
      }
      .box1 p{
          width: 100px;
          background-color: darkorange;
      }
      .box2 p{
          width: 100px;
          background-color: cyan;
      }

      .box1::after{
          /*设置添加的子元素的内容为空*/
          content: "";
          /*设置添加的子元素为块级元素*/
          display: block;
          /*设置添加的子元素的高度为0*/
          height: 0;
          /*设置添加的子元素看不见*/
          visibility: hidden;
          /*给添加的子元素设置clear: both;*/
          clear: both;
	  }
  </style>
</head>
<body>
<div class="box1">
  <p>javaSE1</p>
  <p>javaWEB2</p>
  <p>javaEE3</p>
</div>
<div class="box2">
  <p>javaSE4</p>
  <p>javaWEB5</p>
  <p>javaEE6</p>
</div>
</body>
</html>
```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/18-CSS.png)

## 11-定位

### 11.1 相对定位

1、什么是相对定位

- 相对定位就是相对于自己以前在标准流中的位置来移动。


2、相对定位特点

- 相对定位是不脱离标准流的, 会继续在标准流中占用一份空间。
- 在相对定位中同一个方向上的定位属性只能使用一个。
- 由于相对定位是不脱离标准流的, 所以在相对定位中是区分块级元素/行内元素/行内块级元素。
- 由于相对定位是不脱离标准流的, 并且相对定位的元素会占用标准流中的位置, 所以当给相对定位的元素设置`margin/padding`等属性的时会影响到标准流的布局。

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>相对定位</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}

	div{
		width: 100px;
		height: 100px;
	}

	.box1{
		background-color: red;
	}

	.box2{
		background-color: green;
		position: relative;
		top: 20px;
        left: 20px;
		/*right: 20px;*/

		/*margin-bottom: 20px;*/
		margin-top: 20px;
	}
	.box3{
		background-color: cyan;
	}

	span{
		position: relative;
		width: 100px;
		height: 100px;
		background-color: red;
	}
  </style>
</head>
<body>
	<div class="box1"></div>
	<div class="box2"></div>
	<div class="box3"></div>

	<span>java搭建网站</span>
</body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/19-CSS.png" style="zoom:67%;" />

### 11.2 绝对定位

#### 11.2.1 基本概念

1、 什么是绝对定位

绝对定位就是相对于`body`来定位。

2、绝对定位特点

- 绝对定位的元素是脱离标准流的。
- 绝对定位的元素是不区分块级元素/行内元素/行内块级元素

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>绝对定位</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 150px;
		height: 100px;
	}
	.box1{
		background-color: greenyellow;
	}
	.box2{
		background-color: darkorange;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.box3{
		background-color: indigo;
	}
  </style>
</head>
<body>
	<div class="box1"></div>
	<div class="box2"></div>
	<div class="box3"></div>
</body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/20-CSS.png" style="zoom: 67%;" />

#### 11.2.2 参考点

1、绝对定位规律

- 默认情况下所有的绝对定位的元素, 无论有没有祖先元素, 都会以body作为参考点。

- 如果一个绝对定位的元素有祖先元素, 并且祖先元素也是定位流, 那么这个绝对定位的元素就会以定位流的那个祖先元素作为参考点。

- 如果一个绝对定位的元素有祖先元素, 并且祖先元素也是定位流, 而且祖先元素中有多个元素都是定位流, 那么这个绝对定位的元素会以离它最近的那个定位流的祖先元素为参考点。


2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>参考点</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      .box1{
		  width: 300px;
		  height: 300px;
          background-color: greenyellow;
		  position: relative;
      }
      .box2{
		  width: 200px;
		  height: 200px;
          background-color: darkorange;
          position: relative;
      }
      .box3{
		  width: 100px;
		  height: 100px;
          background-color: indigo;
		  position: absolute;
		  left: 0;
		  bottom: 0;
      }
  </style>
</head>
<body>
  <div class="box1">
	<div class="box2">
	  <div class="box3"></div>
	</div>
  </div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/21-CSS.png" style="zoom: 67%;" />

#### 11.2.3 子绝父相

子元素用绝对定位, 父元素用相对定位。

1、相对定位弊端

- 相对定位不会脱离标准流, 会继续在标准流中占用一份空间, 所以不利于布局界面。

2、绝对定位弊端

- 默认情况下绝对定位的元素会以body作为参考点, 所以会随着浏览器的宽度高度的变化而变化。

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>子绝父相</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
		width: 800px;
		height: 50px;
		margin: 0 auto;
		margin-top: 100px;
		background-color: red;
	}
	ul li{
		float: left;
		width: 150px;
		line-height: 50px;
		text-align: center;
		background-color: #ccc;
	}
	ul li:nth-of-type(4){
		background-color: yellow;
		position: relative;
	}
	ul li img{
		/*子绝父相:子元素用绝对定位,父元素用相对定位*/
		position: absolute;
		left: 50%;
		margin-left: -12px;
		top: -10px;
	}
  </style>
</head>
<body>
  <ul>
	<li>html</li>
	<li>CSS</li>
	<li>javaScript</li>
	<li>Java
	  <img src="images/hot.png" alt="">
	</li>
	<li>python</li>
	<li>cpp</li>
	<li>Vue</li>
	<li>Go</li>
  </ul>
</body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/22-CSS.png" style="zoom:67%;" />

#### 11.2.4 水平居中

绝对定位的元素水平居中。

1、基本语法

- 设置绝对定位元素的`left:50%;`
- 然后再设置绝对定位元素的 `margin-left:` -元素宽度的一半`px;`

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>水平居中</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}

	div{
		width: 300px;
		height: 50px;
		background-color: red;
		position: absolute;
		left: 50%;
		margin-left: -150px;
	}
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/23-CSS.png" style="zoom:80%;" />

### 11.3 固定定位

1、什么是固定定位

- 景定位可以让背景图片不随着滚动条的滚动而滚动, 而固定定位可以让某个盒子不随着滚动条的滚动而滚动。

注意点

- 固定定位的元素是脱离标准流的, 不会占用标准流中的空间。
- 固定定位和绝对定位一样不区分行内/块级/行内块级，IE6不支持固定定位。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>固定定位</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 100px;
		height: 100px;
	}
	.box1{
		background-color: red;
	}
	.box2{
		background-color: green;
		position: fixed;
	}
	.box3{
		background-color: blue;
	}
	.box4{
		height: 1000px;
		background-color: yellow;
	}
  </style>
</head>
<body>
	<div class="box1"></div>
	<div class="box2"></div>
	<div class="box3"></div>
	<div class="box4"></div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/24-CSS.png" style="zoom: 80%;" />

### 11.4 z-index属性

1、什么是`z-index`属性

- 默认情况下所有的元素都有一个默认的`z-index`属性, 取值是`0`。
- `z-index`属性的作用是专门用于控制定位流元素的覆盖关系的。

 2、`z-index`属性特点

- 默认情况下定位流的元素会盖住标准流的元素。
- 默认情况下定位流的元素后面编写的会盖住前面编写的。
- 如果定位流的元素设置了`z-index`属性, 那么谁的`z-index`属性比较大, 谁就会显示在上面。

3、注意点【从父现象】

- 如果两个元素的父元素都没有设置`z-index`属性, 那么谁的`z-index`属性比较大谁就显示在上面。
  如果两个元素的父元素设置了`z-index`属性, 那么子元素的`z-index`属性就会失效, 也就是说谁的父元素的`z-index`属性比较大谁就会显示在上面。

4、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>z-index属性</title>
  <style type="text/css">
	.box1{
		width: 200px;
		height: 200px;
		background-color: red;
		position: relative;
		z-index: 2;
	}
    .box2{
        width: 200px;
        height: 200px;
        background-color: green;
        position: relative;
        z-index: 3;
    }
    .st1{
        width: 100px;
        height: 100px;
        background-color: darkorange;
        position: absolute;
		left: 200px;
		top: 200px;
        z-index: 1;
    }
    .st2{
        width: 100px;
        height: 100px;
        background-color: yellow;
        position: absolute;
        left: 250px;
        top: 50px;
        z-index: 2;
    }
  </style>
</head>
<body>
	<div class="box1">
	  <div class="st1"></div>
	</div>
	<div class="box2">
	  <div class="st2"></div>
	</div>
</body>
</html>
```

5、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/25-CSS.png" style="zoom:67%;" />

## 12-过渡模块

### 12.1 基本特点

1、过渡三要素

- 必须要有属性发生变化。必须告诉系统哪个属性需要执行过渡效果。
- 必须告诉系统过渡效果持续时长。

2、注意点：当多个属性需要同时执行过渡效果时用逗号隔开即可。

```css
transition-property: width, background-color;*
transition-duration: 5s, 5s;
```

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>过渡模块基本属性</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 100px;
		height: 50px;
		background-color: darkorange;
        /*告诉系统哪个属性需要执行过渡效果*/
		transition-property: width, background-color;
		/* 过渡效果持续的时长 */
		transition-duration: 5s, 5s;
	}

	div:hover{
		width: 300px;
		background-color: indigo;
	}
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

4、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/26-CSS.png)

### 12.2 其他属性

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>02-其他属性</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 100px;
		height: 50px;
		background-color: red;
		transition-property:width;
		transition-duration: 5s;
	}
	div:hover{
		width: 300px;
	}
	ul{
		width:350px;
		height: 500px;
		margin: 0 auto;
		background-color: darkorange;
        border: 1px solid #000;
	}
	ul li{
		list-style: none;
		width: 100px;
		height: 50px;
		margin-top: 50px;
		background-color: greenyellow;
		transition-property: margin-left;
		transition-duration: 8s;
	}
	ul:hover li{
		margin-left: 700px;
	}
	ul li:nth-child(1){
        /*告诉系统过渡动画的运动的速度*/
        transition-timing-function: linear;
	}
    ul li:nth-child(2){
        transition-timing-function: ease;
    }
    ul li:nth-child(3){
        transition-timing-function: ease-in;
    }
    ul li:nth-child(4){
        transition-timing-function: ease-out;
    }
    ul li:nth-child(5){
        transition-timing-function: ease-in-out;
    }
  </style>
</head>
<body>
    <ul>
      <li>liner</li>
      <li>ease</li>
      <li>ease-in</li>
      <li>ease-out</li>
      <li>ease-in-out</li>
    </ul>
</body>
</html>
```

2、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/27-CSS.png" style="zoom:50%;" />

### 12.3 连写属性

1、过渡连写格式

```css
transition: 过渡属性 过渡时长 运动速度 延迟时间;
```

2、过渡连写注意点

- 连写和分开写一样, 想给多个属性添加过渡效果也是用逗号隔开即可。
- 连写的时可以省略后面的两个参数, 只要编写了前面的两个参数就已经满足了过渡的三要素
- 如果多个属性运动的速度/延迟的时间/持续时间都一样, 那么可以简写为`transition:all 0s;`

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>连写属性</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 100px;
		height: 50px;
		background-color: red;
        /*transition-property: width;*/
        /*transition-duration: 5s;*/
        /*transition: width 5s linear 0s,background-color 5s linear 0s;*/
        /*transition: background-color 5s linear 0s;*/
        /*transition: width 5s,background-color 5s,height 5s;*/
		transition: all 8s;
	}
	div:hover{
		width: 300px;
		height: 300px;
		background-color: green;
	}
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

4、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/28-CSS.png)

## 13-2D转换

### 13.1 2D转换模块

1、基本介绍

CSS3转换可以移动，比例化，反过来，旋转，和拉伸元素。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>2D转换模块</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		width: 800px;
		height: 500px;
        border: 1px solid #000;
		margin: 0 auto;
	}
	ul li{
		list-style: none;
		width: 100px;
		height: 50px;
		background-color: greenyellow;
        margin: 50px auto 0;
        text-align: center;
		line-height: 50px;
	}

	ul li:nth-child(2){
        /*deg是单位, 代表多少度*/
		transform: rotate(45deg);
	}

	ul li:nth-child(3){
        /*
		 第一个参数:水平方向
		 第二个参数:垂直方向
		 */
		transform: translate(100px, 0px);
	}

	ul li:nth-child(4){
        /*
		第一个参数:水平方向
		第二个参数:垂直方向
        注意点:
            如果取值是1, 代表不变,如果取值大于1, 代表需要放大
            如果取值小于1, 代表需要缩小。如果水平和垂直缩放都一样, 那么可以简写为一个参数。
		*/
        /*transform: scale(0.8, 0.8);*/
		transform: scale(1.3);
	}

	ul li:nth-child(5){
        /*
		如果需要进行多个转换, 那么用空格隔开
		2D的转换模块会修改元素的坐标系, 所以旋转之后再平移就不是水平平移的
		*/
		transform: rotate(45deg) translate(100px, 0px) scale(1.3, 1.3);
	}
  </style>
</head>
<body>
<ul>
  <li>正常现象</li>
  <li>旋转现象</li>
  <li>平移现象</li>
  <li>缩放现象</li>
  <li>综合操作现象</li>
</ul>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/29-CSS.png" style="zoom: 50%;" />

### 13.2 形变中心点

1、基本语法

```css
transform-origin: 水平方向 垂直方向
```

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>02-形成中心点</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      ul{
          width: 200px;
          height: 200px;
          border: 1px solid #000;
          margin: 100px auto;
          position: relative;
      }
	  ul li{
		  list-style: none;
		  width: 200px;
		  height: 200px;
		  position: absolute;
		  left: 0;
		  top: 0;
          /*
			第一个参数:水平方向
			第二个参数:垂直方向
			注意点
				取值有三种形式: 具体像素 百分比 特殊关键字
			*/
          /*transform-origin: 200px 0px;*/
          /*transform-origin: 50% 50%;*/
          /*transform-origin: 0% 0%;*/
          /*transform-origin: center center;*/
		  transform-origin: left top;
	  }
      ul li:nth-child(1){
          /*
		  默认情况下所有的元素都是以自己的中心点作为参考来旋转的, 可以通过形变中心点属性来修改它的参考点.
		  */
          background-color: red;
          transform: rotate(30deg);
      }
      ul li:nth-child(2){
          background-color: green;
          transform: rotate(50deg);
      }
      ul li:nth-child(3){
          background-color: blue;
          transform: rotate(70deg);
      }
  </style>
</head>
<body>
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
</body>
</html>
```

2、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/30-CSS.png" style="zoom:80%;" />

### 13.3 旋转轴向

1、什么是透视

- 近大远小，透视属性必须添加到需要呈现近大远小效果的元素的父元素上面。
- 想围绕哪个轴旋转, 那么只需要在`rotate`后面加上哪个轴即可。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>旋转轴向</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      ul{
          width: 800px;
          height: 500px;
          margin: 0 auto;

      }
      ul li{
          list-style: none;
          width: 200px;
          height: 200px;
          margin: 50px auto 0;
          border: 1px solid #000;
          perspective: 500px;
      }
      ul li img{
          width: 200px;
          height: 200px;
      }
      ul li:nth-child(1){
          /*默认情况下所有元素都是围绕Z轴进行旋转*/
          transform: rotateZ(45deg);
      }
      ul li:nth-child(2) img{
          transform: rotateX(45deg);
      }
      ul li:nth-child(3) img{
          transform: rotateY(45deg);
      }
  </style>
</head>
<body>
<ul>
  <li><img src="images/test.jpg" alt=""></li>
  <li><img src="images/test.jpg" alt=""></li>
  <li><img src="images/test.jpg" alt=""></li>
</ul>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/31-CSS.png" style="zoom: 33%;" />



## 14- 3D转换模块

1、`2D`和`3D`的区别

- `2D`就是一个平面, 只有宽度和高度, 没有厚度。
- `3D`就是一个立体, 有宽度和高度, 还有厚度。默认情况下所有的元素都是呈`2D`展现的。

2、某个元素呈`3D`展现

- 和透视一样, 想看到某个元素的3d效果, 只需要给他的父元素添加一个transform-style属性, 然后设置为preserve-3d即可。


3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3d转换模块</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	.st{
		width: 200px;
		height: 200px;
		background-color: greenyellow;
        border: 1px solid #000;
		margin: 100px auto;
		perspective: 500px;
		transform-style: preserve-3d;
		transform: rotateY(0deg);
	}
	.st1{
        width: 100px;
        height: 100px;
        background-color: rebeccapurple;
        border: 1px solid #000;
        margin: 50px auto 0;
        transform: rotateY(45deg);
	}
  </style>
</head>
<body>
	<div class="st">
	  <div class="st1"></div>
	</div>
</body>
</html>
```

4、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/35-CSS.png" style="zoom:50%;" />

## 15- 动画模块

### 15.1 基本属性

1、过渡和动画之间的不同点

- 过渡必须人为的触发才会执行动画。
- 动画不需要人为的触发就可以执行动画。

2、过渡和动画之间的相同点

- 过渡和动画都是用来给元素添加动画的。
- 过渡和动画都是系统新增的一些属性。
- 过渡和动画都需要满足三要素才会有动画效果。

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>动画模块</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 200px;
		height: 50px;
		background-color: red;
		/*告诉系统需要执行的动画*/
		animation-name: guardwhy;
		/*动画持续的时长*/
		animation-duration: 3s;
	}

	/*告诉系统自己创建的动画*/
	@keyframes guardwhy {
		from{
			margin-left: 0;
		}
		to{
			margin-left: 500px;
		}
    }
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

4、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/32-CSS.png)

### 15.2 其他属性

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>其他模块</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      div{
          width: 200px;
          height: 50px;
          background-color: red;
          /*告诉系统需要执行的动画*/
          animation-name: guardwhy;
          /*动画持续的时长*/
          animation-duration: 3s;
          /*系统动画执行的速度*/
		  animation-timing-function: linear;
		  /*系统动画需要执行几次*/
		  animation-iteration-count: 3;
          /*
			 告诉系统是否需要执行往返动画
			 normal, 默认的取值, 执行完一次之后回到起点继续执行下一次
			 alternate, 往返动画, 执行完一次之后往回执行下一次
		   */
		  animation-direction: alternate;
      }

      /*告诉系统自己创建的动画*/
      @keyframes guardwhy {
          from{
              margin-left: 0;
          }
          to{
              margin-left: 500px;
          }
      }
	  div:hover{
          /*
			告诉系统当前动画是否需要暂停
			running: 执行动画
			paused: 暂停动画
			*/
		  animation-play-state: paused;
	  }
  </style>
</head>
<body>
<div class="box1"></div>
</body>
</html>
```

2、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/33-CSS.png)

### 15.3 连写实现

1、动画模块连写格式

- `animation`:动画名称 动画时长 动画运动速度 延迟时间 执行次数 往返动画;

2、动画模块连写格式的简写

- `animation`:动画名称 动画时长;

3、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>03-连写属性</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 100px;
		height: 50px;
		background-color: red;
        /*animation: guardwhy 5s linear 3s 1 normal;*/
		animation: guardwhy 3s;
	}
	@keyframes guardwhy {
		from{
			margin-left: 0;
		}
		to{
			margin-left: 500px;
		}
    }
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

4、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/34-CSS.png)

## 16- CSS3边框属性

### 16.1基本属性

1、边框圆角

将直角的边框变为圆角的边框。

2、边框圆角的格式

```css
border-radius: 左上 右上 右下 左下;
```

3、将正方形变为圆形的技巧

```css
border-radius: 50%;
```

4、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>边框圆角</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	.box{
		width: 200px;
		height: 200px;
        border: 1px solid #000;
		box-sizing: border-box;
		/*margin: 100px auto;*/
        /*border-radius: 100px 100px 100px 100px;*/
        /*border-radius: 100px 100px 0px 0px;*/
        border-radius: 50%;
	}

	.box1{
		width: 100px;
		height: 100px;
		background:rebeccapurple ;
	}
  </style>
</head>
<body>
	<div class="box">
	  <div class="box1"></div>
	</div>
</body>
</html>
```

5、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/38-CSS.png" style="zoom:80%;" />

### 16.2 边框圆角注意点

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>边框圆角注意点</title>
  <style type="text/css">
	*{
		margin: 1px;
		padding: 0;
	}
	.box1{
		width: 200px;
		height: 200px;
        border: 1px solid #000;
		box-sizing: border-box;
        				/*左上  右上  右下  左下*/
        /*border-radius: 100px 100px 100px 100px;*/

        /*当省略了某一个角的值之后, 系统会自动参考对角的值*/
        /*border-radius: 100px 50px 100px;*/
        border-radius: 100px 50px;
	}
	.box2{
		width: 200px;
		height: 200px;
        border: 60px solid #000;
		box-sizing: border-box;
        /*设置了一个值, 其它三个角都会参考这个值*/
        /*border-radius: 100px;*/
        /*
        当边框圆角的值 > 边框宽度的时候, 外边框和内边框都会变成圆角。
		当边框圆角的值 <= 边框宽度的时候, 外边框是圆角, 内边框是直角。
		 */
		border-radius: 70px;
	}
  </style>
</head>
<body>
	<div class="box1"></div><br/>
	<div class="box2"></div>
</body>
</html>
```

2、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/39-CSS.png" style="zoom: 80%;" />

### 16.3 边框图片

1、基本属性

- ***border-image-source***：告知浏览器让哪一张图片成为边框。
- ***border-image-slice***：告知浏览器如何对指定的边框图片进行切割。
- ***border-image-width***：告知浏览器边框图片显示的宽度, 并不是指定边框的宽度。
- ***border-image-repeat***：告诉浏览器除了边框图片四个角以外的图片如何填充, 默认是拉伸。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>边框图片</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 300px;
		height: 300px;
        border: 70px solid #000;
		box-sizing: border-box;
		background: greenyellow;
		/*
		  默认情况下会将图片放到边框的四个顶点 如果设置了边框图片,
		  那么就不会显示边框颜色, 边框图片的优先级高于边框颜色。
		*/
		border-image-source: url("images/border.jpg");

		/*切割不带任何单位*/
		border-image-slice: 70 70 70 70;

        /*告诉浏览器除了边框图片四个角以外的图片如何填充, 默认是拉伸*/
        /*border-image-repeat: stretch;*/
        /*border-image-repeat: repeat;*/
		border-image-repeat: round;
	}
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/40-CSS.png" style="zoom:67%;" />

## 17- 伸缩布局

### 17.1 原理基本实现

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>伸缩布局</title>
  <style type="text/css">
	  *{
		  margin: 0;
		  padding: 0;
	  }
	  ul{
		  list-style: none;
		  width: 600px;
          border: 1px solid #000;
		  margin: 100px auto;
		  display: flex;
	  }
	  ul>li{
          width: 100px;
          height: 100px;
          line-height: 100px;
          text-align: center;
          font-size: 30px;
          background: red;
	  }
	  ul>li:nth-child(2){
		  background: cyan;
	  }
      ul>li:nth-child(3){
          background: rebeccapurple;
      }
  </style>
</head>
<body>
<ul>
  <li>java</li>
  <li>python</li>
  <li>html</li>
</ul>
</body>
</html>
```

2、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/44-CSS.png" style="zoom: 67%;" />

### 17.2 主轴的方向

1、基本定义

- 在伸缩布局中, 默认情况下水平方向是主轴, 默认情况下主轴的起点在伸缩容器的最左边。
- 默认情况下所有的伸缩项都是从主轴的起点开始排版的*，*但是也可以通过属性来修改主轴的起点的位置。

2、flex-direction属性

- 用于修改主轴起点的位置。

3、参数使用

- `row:` 起点在伸缩容器的最左边, 终点在伸缩容器的最右边,从左至右的排版, 默认的取值。
- `row-reverse:` 起点在伸缩容器的最右边, 终点在伸缩容器的最左边, 从右至左的排版。
- `column: `起点在伸缩容器的最顶部, 终点在伸缩容器的最底部, 从上至下的排版，在伸缩布局中主轴和侧轴永远都是十字交叉的, 只要主轴的方向发生了变化, 侧轴也会发生变化
- `column-reverse:` 起点在伸缩容器的最底部, 终点在伸缩容器的最顶部, 从下至上的排版。

4、代码示例

```html
<title>主轴方向</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        border: 1px solid #000;
        display: flex;
        /*flex-direction: row;*/
        /*flex-direction: row-reverse;*/
        /*flex-direction: column;*/
        flex-direction: column-reverse;
    }
</style>
```

5、执行结果
	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/45-CSS.png" style="zoom:80%;" />

### 17.3 主轴的对齐方式

1、justify-content属性

- `justify-content: flex-start; `主轴上伸缩项对齐的默认值

注意点

- 按照主轴起点对伸缩项进行排版。
- 按照指定的对齐方式对齐排版好的伸缩项。

2、代码示例

```html
<title>主轴对齐方式</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        border: 1px solid #000;
        display: flex;
        /*
        flex-direction: row; 主轴起点的默认值
        */
        flex-direction: row;
        /*
        justify-content: flex-start; 主轴上伸缩项对齐的默认值
        */
       
        /*justify-content: flex-end;*/
        /*justify-content: center;*/
        /*justify-content: space-between;*/
        justify-content: space-around;
    }
</style>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/46-CSS.png" style="zoom:80%;" />

### 17.4 侧轴的对齐方式

1、align-items属性

```css
 align-items: stretch;	让所有的伸缩项的高度变为侧轴的高度。
```

注意点

- 如果需要设置为拉伸对齐, 那么伸缩项不能设置高度。
- 如果伸缩项设置了高度, 那么拉伸对齐就会失效。

2、代码示例

```html
<title>侧轴对齐方式</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        height: 300px;
        border: 1px solid #000;
        display: flex;
        /*告诉浏览器主轴的起点在伸缩容器的最左边,告诉浏览器伸缩项从左至右的排版*/
        flex-direction: row;
        /*告诉浏览器排版好的伸缩项需要和主轴的起点对齐*/
        justify-content: flex-start;

        /*告诉浏览器排版好的伸缩项需要和侧轴的起点对齐*/
        /*align-items: flex-start;*/
        /*align-items: flex-end;*/
        /*align-items: center;*/

        /*
        注意点: 侧轴对比主轴来说没有两端对齐(space-between)和环绕对齐(space-around)
        */
        /*baseline: 让所有伸缩项中的基线在一条直线上对齐*/
        /*align-items: baseline;*/

        align-items: stretch;
    }
    ul>li{
        width: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        background: red;
    }
    ul>li:nth-child(2){
        background: cyan;
    }
    ul>li:nth-child(3){
        background: rebeccapurple;
    }
</style>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/47-CSS.png" style="zoom: 67%;" />

### 17.5 布局换行和换行对齐

1、基本介绍

- 默认情况下如果伸缩容器的一行放不下所有的伸缩项, 那么系统会自动等比压缩所有的伸缩项。

- 在伸缩容器中有一个叫做`flex-wrap`属性, 专门用于控制放不下是否需要换行的。


***flex-wrap属性***

- 默认的取值: `flex-wrap` 不换行
- `wrap`: 放不下就换行 而不是等比压缩
- `wrap-reverse`: 放不下就换行 , 以行为单位进行反转

***align-content的属性***

专门用于设置换行之后的对齐方式，只有伸缩项发生了换行这个属性才有效。

**参数列表**

- `flex-start:` 换行之后和侧轴的起点对齐, 一行接一行。
- `flex-end: `换行之后和侧轴的终点对齐, 将所有换行之后的内容当做一个整体来操作。
- `center:` 换行之后和侧轴的中点对齐。
- `space-between: `换行之后在侧轴上两端对齐。
- `space-around: `换行之后在侧轴上环绕对齐。
- `stretch: `以行为单位进行拉伸, 拉伸的部分以空白填充, 保证拉伸之后所有的行加起来能够填满侧轴。

2、代码示例

```html
<title>布局换行和换行对齐</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        height: 600px;
        border: 1px solid #000;
        display: flex;

        /*flex-wrap: nowrap;*/
        /*flex-wrap: wrap;*/
        /*flex-wrap: wrap-reverse;*/

        flex-wrap: wrap;

        /*align-content: flex-start;*/
        /*align-content: flex-end;*/
        /*align-content: center;*/
        /*align-content: space-between;*/
        /*align-content: space-around;*/
        align-content: stretch;
    }
</style>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/48-CSS.png" style="zoom:67%;" />

### 17.6 伸缩项排序

1、order属性

- 用于决定排序的先后顺序,默认情况下所有伸缩项的`order`属性的取值都是`0`。

**注意点**

- 可以通过修改`order`属性的取值来实现伸缩项的排序。
- `order`排序的规则: 从小到大的排序, 越小的显示在越前面, 越大的显示在越后面。

2、代码示例

```html

<title>伸缩项排序</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        height: 600px;
        border: 1px solid #000;
        display: flex;
    }
    ul>li{
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        background: red;
    }
    ul>li:nth-child(1){
        order: 66;
    }
    ul>li:nth-child(2){
        background: cyan;
        order: 0;
    }
    ul>li:nth-child(3){
        background: rebeccapurple;
        order: -2;
    }
</style>
```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/49-CSS.png)

### 17.7 伸缩项扩充

1、基本介绍

***flex-grow属性***

- 用于控制当所有伸缩项的宽度总和小于伸缩容器宽度的时候如何扩充自己, 以便于所有伸缩项宽度的总和能够填满整个伸缩容器。

**注意点**

- 默认情况下`flex-grow`的取值是`0`, 表示我们设置的宽度是多少就按照多少来显示, 不进行任何的扩充。

- 只有当所有伸缩项的宽度总和小于伸缩容器宽度的时候`flex-grow`这个属性才有效。


2、代码示例

```html
<title>伸缩项扩充</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        height: 600px;
        border: 1px solid #000;
        display: flex;
        flex-direction: column;
    }
    ul>li{
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        background: red;
    }
    ul>li:nth-child(1){
        /* flex-grow缩小的公式
        1.利用伸缩容器宽度 - 所有伸缩项的宽度 = 剩余空间
        600 - 300 = 300
        2.利用剩余空间 / 所有需要扩充份数的总和 = 每一份的大小
        300 / (1 + 4 + 8) = 23.07
        3.利用当前伸缩项的宽度 + 需要的份数的宽度
        第一个伸缩项 = 100 + (1 * 23.07) = 123.07
        第二个伸缩项 = 100 + (4 * 23.07) = 192.28
        第三个伸缩项 = 100 + (8 * 23.07) = 284.56
        */
        flex-grow: 1;
    }
    ul>li:nth-child(2){
        background: cyan;
        flex-grow: 4;
    }
    ul>li:nth-child(3){
        background: rebeccapurple;
        flex-grow: 8;
    }
</style>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/50-CSS.png" style="zoom: 50%;" />

### 17.8 伸缩项缩小

1、基本介绍

***flex-shrink属性***

- 用于控制当所有伸缩项的宽度总和大于伸缩容器宽度的时候如何缩小自己, 以便于所有伸缩项宽度的总和能够填满整个伸缩容器。

**注意点**

- 默认情况下`flex-shrink`的取值是`1`, 表示当所有伸缩项宽度的总和大于伸缩容器宽度的时候等比缩小自己。
- 只有当所有伸缩项的宽度总和大于伸缩容器宽度的时候`flex-shrink`这个属性才有效。

2、代码示例

```html
<title>伸缩项缩小</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        height: 600px;
        border: 1px solid #000;
        display: flex;
    }
    ul>li{
        width: 300px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        background: red;
    }
    ul>li:nth-child(1){
        /*
        flex-shrink扩充的公式
        1.利用所有伸缩项的宽度总和 - 伸缩容器宽度 = 溢出的宽度
        900 - 600 = 300
        2.计算权重值
        利用每一个伸缩项需要的份数 * 当前伸缩项的宽度 然后再相加
        1 * 300 + 4 * 300 + 8 * 300 = 3900
        3.计算每个伸缩项需要缩小的范围
        溢出的宽度 * 当前伸缩项的宽度 * 当前伸缩项需要的份数 / 权重值
        300 * 300 * 1 / 3900 = 23.07
        第一个伸缩项宽度 = 300 - 23.07 = 276.9
        300 * 300 * 4 / 3900 = 92.3
        第二个伸缩项宽度 = 300 - 92.3 = 207.6
        */
        flex-shrink: 1;
    }
    ul>li:nth-child(2){
        background: cyan;
        flex-shrink: 4;
    }
    ul>li:nth-child(3){
        background: rebeccapurple;
        flex-shrink: 8;
    }
</style>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/51-CSS.png" style="zoom:80%;" />

### 17.9 伸缩项宽度设置

1、基本介绍

***flex-basis属性***

- 在伸缩布局中可以通过`flex-basis`属性设置伸缩项的宽度。

***注意点***

- `flex-basis`只有在伸缩布局中才有效。
- 在伸缩布局中如果通过`flex-basis`设置了宽度, 那么再通过`width`设置宽度就会无效，也就是说`flex-basis`的优先级要高于`width`的优先级。
- 在伸缩布局中如果同时通过`flex-basis`和`width`设置了宽度, 而且一个设置的是`auto`,一个设置的是具体的值, 那么会按照具体的值来显示。

2、代码示例

```html
<title>伸缩项宽度设置</title>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
        width: 600px;
        height: 600px;
        border: 1px solid #000;
        display: flex;
    }
    ul>li{
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        background: red;
    }
    ul>li:nth-child(1){
        /*flex-basis: 100px;*/
        /*width: 200px;*/
        /*width: auto;*/

        /*width: 100px;*/
        /*flex-basis: auto;*/
        flex-basis: 300px;
        width: auto;
    }
    ul>li:nth-child(2){
        background: cyan;
    }
    ul>li:nth-child(3){
        background: rebeccapurple;
    }
</style>
```

3、执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/52-CSS.png)

## 18- 其他属性

### 18.1 vertical-align

1、基本概念

***什么是vertical-align***

- 设置元素的垂直对齐方式。

***vertical-align注意点***

- `text-align`是设置给需要对齐元素的父元素。
- `vertical-align`是设置给需要对齐的那个元素本身，`vertical-align`只对行内元素有效。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>vertical-align</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}

	div{
		width: 400px;
		background: greenyellow;
		font-size: 40px;
		line-height: 100px;
	}

	img{
        /*
          默认情况下图片和一行文字的基线对齐
		  基线就是一行文字中最短那个文字的底部
		 */
        /*vertical-align: top;*/
        /*vertical-align: text-bottom;*/
		vertical-align: middle;
	}
  </style>
</head>
<body>
	<div>慕课网<img src="images/test1.png" alt=""></div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/41-CSS.png" style="zoom:80%;" />

### 18.2 线性渐变

1、基本介绍

CSS3 渐变`(gradients)`可以让你在两个或多个指定的颜色之间显示平稳的过渡。

***基本特点***

- 默认从上至下，可以通过`to`关键字的方式修改渐变的方向。
- 可以通过`to deg`的方式修改渐变的方向。

***注意点***

- 默认情况下自动回自动计算纯色和渐变色的范围, 但是也可以手动指定手动指定的格式: 颜色 范围。
- 只有第一个颜色后面的范围是指定纯色的范围, 后面的都是指定渐变的范围。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>线性渐变</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	.main{
        width: 400px;
        height: 200px;
        border: 1px solid #000;
        box-sizing: border-box;
        /*
			注意点:
			至少需要传递2个颜色, 至多没有上限
			*/
        /*background: linear-gradient(to right, red, green, blue, yellow);*/
		background: linear-gradient(to right, rebeccapurple 100px, greenyellow 200px, cadetblue 300px);
	}
	.st1, .st2. st3{
        width: 100px;
        height: 100%;
        border: 1px solid #000;
        box-sizing: border-box;
        float: left;
	}
  </style>
</head>
<body>
	<div class="main">
	  <div class="st1"></div>
	  <div class="st2"></div>
	  <div class="st3"></div>
	</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/42-CSS.png" style="zoom:67%;" />

### 18.3 径向渐变

***基本特点***：默认从中心点向四周扩散。

1、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>径向渐变</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	div{
		width: 300px;
		height: 300px;
        border: 1px solid #000;

        /*background: radial-gradient(red, green);*/

        /*
		径向渐变: 可以通过at 关键字的方式修改开始渐变的位置
		*/

        /*background: radial-gradient(at top left ,red, green);*/

        /*
		径向渐变: 可以通过at 位置 位置的方式修改开始渐变的位置
		*/
        /*background: radial-gradient(at 200px 100px ,red, green);*/

        /*
		径向渐变也可以指定扩散的范围
		*/

        /*background: radial-gradient(100px, red, green);*/

        /*
		注意点:如果需要同时指定扩散的位置和扩散的范围, 那么范围必须写到at前面
		*/
		background: radial-gradient(100px at 200px 100px, green, rebeccapurple);
	}
  </style>
</head>
<body>
	<div></div>
</body>
</html>
```

2、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/43-CSS.png" style="zoom: 67%;" />

## 19-圣杯和双飞翼布局

两者实现的功能都一样, 都是用于实现两侧的宽度不变, 中间的宽度自适应的三栏布局的。

### 19.1 圣杯布局

1、实现步骤

- 搞一个容器, 里面放三个盒子*，*设置两侧盒子的宽度(固定)。

- 设置中间盒子的宽度等于容器的宽度`(100%)`，设置容器的 `padding`等于两侧盒子的宽度。

- 让三个盒子都在同一个方向上浮动*，*设置左边盒子的`margin-left=-100%`。

- 通过定位调整左边的盒子, 让左边的盒子不要盖住中间的区域*，*设置右边盒子的`margin-left= `自身的宽度。

- 通过定位调整右边的盒子, 让右边的盒子不要盖住中间的区域*，*给容器设置一个最小的宽度, 防止缩小后变形。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>01-圣杯布局</title>
  <style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	.left, .right{
		width: 200px;
		height: 200px;
		background: darkorange;
		float: left;
	}

	.center{
		width: 100%;
		height: 200px;
		background: aquamarine;
		float: left;
	}
	.box{
		min-width: 400px;
		padding: 0 200px;
		background: rebeccapurple;
		overflow: hidden;
	}
	.left{
		margin-left: -100%;
		position: relative;
		left: -200px;
	}
	.right{
		margin-left: -200px;
		position: relative;
		left: 200px;
	}
  </style>
</head>
<body>
	<div class="box">
	  <div class="center">
		我亦飘零久，十年来，深恩负尽，死生师友。——顾贞观《金缕曲二首》
	  </div>
	  <div class="left"></div>
	  <div class="right"></div>
	</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/53-CSS.png" style="zoom:67%;" />

### 19.2 双飞翼布局

1、实现步骤

- 搞一个容器, 里面放三个盒子*，*设置两侧盒子的宽度(固定)。

- 设置中间盒子的宽度等于容器的宽度`(100%)`，让三个盒子都在同一个方向上浮动。
- 给中间的盒子添加一个子盒子*，*给子盒子设置`margin 0` 两侧盒子的宽度。

- 由于是给子盒子设置`margin`,所以不会对父盒子排版产生任何影响*，*设置左边盒子的`margin-left=100%`。

- 设置右边盒子的`margin-left=`自身的宽度。

2、代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>双飞翼布局</title>
  <style type="text/css">
      *{
          margin: 0;
          padding: 0;
      }
      .left, .right{
          width: 200px;
          height: 200px;
          background: darkorange;
          float: left;
      }

      .center{
          width: 100%;
          height: 200px;
          background: green;
          float: left;
      }

	  .center>.st1{
		  margin: 0 200px;
		  height: 200px;
		  background: yellow;
	  }

      .box{
          background: rebeccapurple;
          overflow: hidden;
      }
      .left{
          margin-left: -100%;
      }
      .right{
          margin-left: -200px;
      }
  </style>
</head>
<body>
<div class="box">
  <div class="center">
	<div class="st1">
	  少年听雨歌楼上，红烛昏罗帐。壮年听雨客舟中，江阔云低、断雁叫西风。
	  而今听雨僧庐下，鬓已星星也。悲欢离合总无情。一任阶前、点滴到天明。——蒋捷《虞美人 听雨》
	</div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</div>
</body>
</html>
```

3、执行结果

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/前端/CSS/Test2/54-CSS.png" style="zoom:67%;" />