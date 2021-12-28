## 1- Vue.js 介绍

### 1.1 Vue.js是什么?

- Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计 为可以自底向上逐层应用。
- Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一 方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。自底向上逐层应用：作为渐进式框架要实现的目标就是方便项目增量开发(即插即用)。

> **官方网站: [https://cn.vuejs.org/](https://cn.vuejs.org/)**

### 1.2 为什么使用Vue.js

Vue是一个渐进式的框架，将Vue作为你应用的一部分嵌入其中，带来更丰富的交互体验。

解耦视图和数据，可复用的组件。

## 2- Vue.js 初体验

### 2.1 安装Vue的方式

> 方式一：直接CDN引入

1、在html页面使用script引入vue.js的库即可使用。

```javascript
远程CDN
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
本地
<script src="vue.min.js"></script>
```

> 方式二：NPM安装

```vue
Vue-CLI脚手架:使用vue.js官方提供的CLI脚本架创建vue.js工程.
```

### 2.2 入门程序

创建一个01-Vuejs初始化目录, 并且在目录下创建 01_vue入门程序.html 文件.

**流程步骤**

1、定义html，引入vue.js
2、定义app div，此区域作为vue的接管区域
3、定义Vue实例，接管app区域。
4、定义model（数据对象）
5、在app中展示数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello Vue.js</title>
</head>
<body>
    <!--2.定义一个div元素-->
    <div id="app">
        <h1>{{message}}</h1>
        <h3>{{name}}</h3>
    </div>

    <script src="js/vue.js"></script>
    <script type="text/javascript">
        // 1.创建test实例
        const test = new Vue({
            // 3.挂载要管理的元素
            el: '#app',
            // 4定义数据
            data: {
                message: 'Hello Vue.js',
                name: 'guardWhy'
            }
        })
    </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423101605.png)

> **入门程序分析**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505220112.png" style="zoom:80%;" />

### 2.3 数据列表展示

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数据列表展示</title>
</head>
<body>
    <div id="test">
        <ul>
            <!--遍历操作-->
            <li v-for="item in starts">{{item}}</li>
        </ul>
    </div>
    <!--引入vue.js文件-->
    <script src="js/vue.js"></script>
    <script type="text/javascript">
        // 创建对象
        const test = new Vue({
            el: '#test',
            data : {
                message: '你好啊',
                starts: ['kobe', 'LeBron James', 'Stephen Curry']
            }
        })
    </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423104833.png)

### 2.4 什么是MVVM？

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423104203.png)

==MVVM（Model–View–Viewmodel）是一种软件架构模式。MVVM有助于将图形用户界面的开发与业务逻辑或后端逻辑（数据模型）的开发分离开来，这是通过置标语言或GUI代码实现的。==MVVM的视图模型是一个值转换器， 这意味着视图模型负责从模型中暴露（转换）数据对象，以便轻松管理和呈现对象。在这方面，视图模型比视图做得更多，并且处理大部分视图的显示逻辑。 视图模型可以实现中介者模式，组织对视图所支持的用例集的后端逻辑的访问。

> **View层(视图层)**

在我们前端开发中，通常就是DOM层。主要的作用是给用户展示各种信息。

> **Model层(数据层)**

数据可能是我们固定的死数据，更多的是来自我们服务器，从网络上请求下来的数据。
在我们计数器的案例中，就是后面抽取出来的obj，当然，里面的数据可能没有这么简单。

> **VueModel层(视图模型层)**

视图模型层是View和Model沟通的桥梁。一方面它实现了Data Binding，也就是数据绑定，将Model的改变实时的反应到View中。
另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些事件(点击、滚动、touch等)时，可以监听到，并在需要的情况下改变对应的Data。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>模拟计数器</title>
    <style>
        /*
         MVM:前端的架构模式
         M: Model 负责存储数据
         V: View 负责页面展示
         VM: ViewModel 负责业务处理(MVM模式的核心)
        */
    </style>
</head>
<body>
    <div id="app">
        <!-- View视图部分!!-->
        <h3>当前计数:{{counter}}</h3>

        <!--监听元素的点击事件-->
        <button v-on:click="add">+</button>
        <button v-on:click="sub">-</button>
    </div>
    <script src="js/vue.js"></script>
    <script type="text/javascript">
        // 创建的Vue实例,就是VM ViewModel
        const app = new Vue({
            el: '#app',
            // data就是MVM模式中的 model
            data: {
                // 定义当前计数为0
                counter: 0
            },
            // 定义方法
            methods: {
                add: function () {
                    console.log('add被指行');
                    this.counter++
                },
                sub: function () {
                    console.log('sub被执行了..');
                    this.counter--
                }
            }

        })
    </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423105140.png)

### 2.5 计数器的MVVM

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423110530.png)

计数器中就有严格的MVVM思想，View依然是的DOM，Model就是抽离出来的obj，ViewModel就是创建的Vue对象实例。

> **它们之间如何工作呢？**

- 首先ViewModel通过Data Binding让obj中的数据实时的在DOM中显示。
- 其次ViewModel通过DOM Listener来监听DOM事件，并且通过methods中的操作，来改变obj中的数据。

## 3-Vue常用的指令

### 3.1 Mustache语法

>  **{{}}: 插值表达式**

通常用来获取Vue实例中定义的数据(data)，属性节点中 不能够使用插值表达式。

> **el: 挂载点**

类型: String | HTMLElement
定义 Vue实例挂载的元素节点,表示vue接管该区域。

1、Vue的作用范围是什么 ?
      Vue会管理el选项命中的元素,及其内部元素。

2、el选择挂载点时,是否可以使用其他选择器 ?
		可以,但是建议使用 ID选择器。

3、是否可以设置其他的DOM元素进行关联 ?
	  可以但是建议选择DIV, 不能使用HTML和Body标签。

> **data: 数据对象**

1. Vue中用到的数据定义在data中。
2. data中可以写复杂类型。
3. 渲染复杂类型数据的时候,遵守js语法。

> **methods: 方法**

类型: {[key: string] : Function}

具体作用: 定义属于Vue的一些方法，可以在其他调用，也可以在指令中使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mustache语法</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h3>{{message}}</h3>
      <!--mustache语法中,不仅仅可以直接写变量,也可以写简单的表达式-->
      <h3>{{firstName + ' ' + lastName}}</h3>
      <h3>{{counter * 2}}</h3>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!',
          firstName: 'kobe',
          lastName: 'bryant',
          counter: '22'
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423123544.png)

### 3.2 v-once指令

> **基本特点**

该指令后面不需要跟任何表达式(比如之前的v-for后面是由跟表达式的)。

该指令表示元素和组件只渲染一次，不会随着数据的改变而改变。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-once</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h3>{{message}}</h3>

      <!--表示元素和组件只渲染一次，不会随着数据的改变而改变。-->
      <h3 v-once>{{message}}</h3>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!'
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423145014.png)

### 3.3 v-html指令

> **基本特点**

该指令后面往往会跟上一个string类型，会将string的html解析出来并且进行渲染。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-html指令</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h3>{{message}}</h3>
      <h3>{{url}}</h3>

      <!--该指令后面往往会跟上一个string类型，会将string的html解析出来并且进行渲染-->
      <h3 v-html="url"></h3>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!',
          url: '<a href="https://www.bing.com">bing</a>'
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423150157.png)

### 3.4 v-text指令

> **基本特点**

都是用于将数据显示在界面中，v-text通常情况下，接受一个string类型。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-text指令</title>
</head>
<body>
  <div id="app">
	<h3 v-text="message"></h3>
	<h3>{{message}}</h3>
  </div>

  <script src="js/vue.js"></script>
  <script>
	const app = new Vue({
	  el: '#app',
	  data: {
		message: "你好啊，Vue.js!!"
	  }
	})
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423151131.png)

### 3.5 v-pre指令

> **基本特点**

v-pre用于跳过这个元素和它子元素的编译过程。

第一个元素中的内容会被编译解析出来对应的内容，第二个元素中会直接显示{{message}}。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-pre指令</title>
</head>
<body>
<div id="app">
  <p>{{message}}</p>
  <p v-pre>{{message}}</p>
</div>

<script src="js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: "你好啊，Vue.js!!"
    }
  })
</script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423151734.png)

### 3.6 v-bind 指令

> **基本特点**

作用：动态绑定属性
缩写：:
预期：any (with argument) | Object (without argument)
参数：attrOrProp (optional)

#### 3.6.1 v-bind的基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind的基本使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">

      <!--使用v-bind指令-->
      <img v-bind:src="imageURL" alt="">
      <a v-bind:href="aHref">百度一下</a>

      <!--使用语法糖的用法-->
     <img :src="imageURL" alt="">
      <a :href="aHref">百度一下</a>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          imageURL: 'https://img11.360buyimg.com/mobilecms/' +
           's350x250_jfs/t1/20559/1/1424/73138/5c125595E3cbaa3c8/' +
           '74fc2f84e53a9c23.jpg!q90!cc_350x250.webp',
          aHref: 'http://www.baidu.com'
        }
      })
  </script>
</body>
</html>
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423155519.png)

#### 3.6.2 v-bind绑定class

> **对象语法**

用法一：直接通过{}绑定一个类

```java
<h2 :class="{'active': isActive}">Hello World</h2>
```

用法二：也可以通过判断，传入多个值

```java
<h2 :class="{'active': isActive, 'line': isLine}">Hello World</h2>
```

用法三：和普通的类同时存在，并不冲突
==注：如果isActive和isLine都为true，那么会有title/active/line三个类==

```java
<h2 class="title" :class="{'active': isActive, 'line': isLine}">Hello World</h2>
```

用法四：如果过于复杂，可以放在一个methods或者computed中 注：classes是一个计算属性

```java
<h2 class="title" :class="classes">Hello World</h2>
```

**代码示例**

当数据为某个状态时，字体显示红色，当数据另一个状态时，字体显示黑色。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind动态绑定class(对象语法)</title>
  <style>
    .active{
      color: red;
    }
  </style>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--<h2 v-bind:class="{类名1: true, 类名2: boolean}">{{message}}</h2>-->
      <h3 class="title" :class="{active: isActive, line: isLine}">{{message}}</h3>
	  <!--定义一个getClasses()方法-->
      <h3 class="title" :class="getClasses()">{{message}}</h3>

      <!--绑定事件-->
      <button @click="btnClick">按钮</button>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello Vue.js',
          isActive: true,
          isLine: true
        },
        methods: {
          btnClick: function () {
            this.isActive = !this.isActive
          },
		  /*执行getClasses()方法*/
          getClasses: function () {
            return {active: this.isActive, line: this.isLine}
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423162033.png)

> **数组语法**

==数组语法的含义是:class后面跟的是一个数组==。

用法一：直接通过{}绑定一个类

```java
<h2 :class="['active']">Hello World</h2>
```

用法二：也可以传入多个值

```java
<h2 :class=“[‘active’, 'line']">Hello World</h2>
```

用法三：和普通的类同时存在，并不冲突，注：会有title/active/line三个类。

```java
<h2 class="title" :class=“[‘active’, 'line']">Hello World</h2>
```

用法四：如果过于复杂，可以放在一个methods或者computed中，注：classes是一个计算属性。

```java
<h2 class="title" :class="classes">Hello World</h2>
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind动态绑定class(数组语法)</title>

</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
	  <h3 class="title" :class="[active, line]">{{message}}</h3>
      <h3 class="title" :class="getClasses()">{{message}}</h3>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello Vue.js',
          active: 'kobe',
          line: 'jmaes'
        },
        methods: {
          getClasses: function () {
            return [this.active, this.line]
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423164419.png)

#### 3.6.3 v-bind绑定style

> **对象语法**

```xml
:style="{color: currentColor, fontSize: fontSize + 'px'}"
```

style后面跟的是一个对象类型，对象的key是CSS属性名称，对象的value是具体赋的值，值可以来自于data中的属性。

> **代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind动态绑定style(对象用法)</title>
  <style>
    .title {
      font-size: 50px;
      color: red;
    }
  </style>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--<h3 :style="{key(属性名): value(属性值)}">{{message}}</h3>-->
	  <h5 :style="{fontSize: finalSize + 'px', backgroundColor: finalColor}">{{message}}</h5>
      <h5 :style="getStyles()">{{message}}</h5>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
        // 定义数据
        data: {
          message: 'hello Vue.js!!!',
          finalSize: 30,
          finalColor: 'red',
        },

        // 方法调用
        methods: {
          getStyles: function () {
              return {fontSize: this.finalSize + 'px', background: this.finalColor}
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423174524.png)

> **数组语法**

style后面跟的是一个数组类型，多个值以，分割即可。

```xml
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

> 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind动态绑定style(数组用法)</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h5 :style="[baseStyle1,baseStyle2]">{{message}}</h5>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
        // 定义数据
        data: {
          message: 'hello Vue.js!!!',
		  baseStyle1:{backgroundColor: 'red'},
		  baseStyle2:{fontSize:'40px'},
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423175618.png)

## 4- 计算属性

### 4.1 computed作用

但是在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示。

减少运算次数, 缓存运算结果. 运用于重复相同的计算。

### 4.2 计算属性基本使用

计算属性是写在实例的computed选项中的。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>计算属性的基本使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h3>{{fullName}}</h3>

      <h3>{{getFullName()}}</h3>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          firstName: 'Lebron',
          lastName: 'James'
        },

        // 计算属性
        computed: {
          fullName: function () {
            return this.firstName + ' ' + this.lastName
          }
        },

        // 方法版
        methods: {
          getFullName(){
            return this.firstName + ' ' + this.lastName
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423210419.png)

### 4.3 计算属性复杂使用

计算属性中也可以进行一些更加复杂的操作

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>计算属性的复杂使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h3>总价格:{{totalPrice}}</h3>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          books: [
            {id: 100, name:'Unix编程艺术', price: 119},
            {id: 111, name: '代码大全', price: 105},
            {id: 112, name: '深入理解计算机原理', price: 98},
            {id: 113, name: '现代操作系统', price: 87},
          ]
        },

        computed: {
          totalPrice: function () {
            // 定义result值
            let result = 0;
            /*for(let i=0; i < this.books.length; i++){
              result += this.books[i].price
            }*/

            // es6写法
            for (let i in this.books) {
                 result += this.books[i].price;
               }

            // 返回结果值
            return result;
          }
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423210821.png)

### 4.4 计算属性setter和getter

==注意: 每个计算属性都包含一个getter和一个setter，计算属性一般是没有set方法的，只读属性==。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>计算属性的setter和getter</title>
</head>
<body>
  <!--2.定义一个div元素-->
      <div id="app">
       <h3>{{fullName}}</h3>
      </div>

      <script src="js/vue.js"></script>
      <script>
        // 创建对象
        const app = new Vue({
          // 挂载要管理的元素
          el: '#app',

          // 定义数据
          data: {
            firstName: 'kobe',
            lastName: 'Bryant'
          },

          // 计算属性
          computed: {
            // get和set方法
            fullName: {
             /* set: function (newValue) {
                 const names = newValue.split(' ');
                 this.firstName = names[0];
                 this.lastName = names[1];
              },*/

              get: function () {
                return this.firstName +' ' +  this.lastName
              }
            },
          }
        })
    </script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423213903.png)

### 4.5 计算属性和methods的比较

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>计算属性和methods的比较</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
     <!--直接拼接-->
      <h2>{{firstName}} {{lastName}}</h2>
      <!--2.通过定义methods-->
      <h2>{{getFullName()}}</h2>

      <!--3.通过computed-->
      <h2>{{fullName}}</h2>
    </div>

    <script src="js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          firstName: 'kobe',
          lastName: 'Bryant'
        },

        // 函数
        methods: {
          getFullName: function () {
            console.log('fullName');
            // 返回值
            return this.firstName + ' ' + this.lastName;
          }
        },

        // 计算属性
        computed: {
          fullName: function () {
            console.log('fullName');
            return this.firstName + ' ' + this.lastName
          }
        }

      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210423214326.png)

>  **computed小结**

定义函数也可以实现与 计算属性相同的效果,都可以简化运算。

不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。

## 5- 过滤器和侦听器

### 5.1 filter过滤器

#### 5.1.1 什么是过滤器

过滤器是对即将显示的数据做进一步的筛选处理，然后进行显示，值得注意的是过滤器并没有改变原来的数据，只是在原数据的基础上产生新的数据。

数据加工车间,对值进行筛选加工。

#### 5.1.2 过滤器使用位置

**双括号插值内**

```css
{{ msg | filterA }} msg是需要处理的数据, filterA是过滤器, | 这个竖线是管道,通过这个管道将数据传输给过滤器进行过滤。
加工操作
```

**v-bind绑定的值的地方**

```css
<h1 v-bind:id=" msg | filterA"> {{ msg }} </h1>
```

#### 5.1.3 过滤器

> **局部过滤器**

j基本需求: 通过过滤器给电脑价格前面 添加一个符号$

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 使用插值表达式,调用过滤器 -->
      <p>电脑价格: {{price | addPrice}}</p>
    </div>
  </body>
  <script src="js/vue.js"></script>
  <script>
    //局部过滤器 在vue实例的内部创建filter
    const app = new Vue({
      el: "#app", //挂载点
      data: {
        //model
        price: 200,
      },
      //局部过滤器
      filters: {
        //定义处理函数 value = price
        addPrice(value) {
          return "$" + value;
        },
      },
    });
  </script>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505224426.png)

> **全局过滤器**

基本需求: 将用户名开头字母大写。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /*
        需求: 将用户名开头字母大写
        总结:
          1.过滤器经常被用来处理文本格式化操作
          2.过滤器使用的两个位置: {{}} 插值表达式中, v-bind表达式中
          3.过滤器是通过管道传输数据的 |
      */
    </style>
  </head>
  <body>
    <div id="app">
      <p>{{user.name | changeName}}</p>
    </div>
  </body>
  <script src="js/vue.js"></script>
  <script>

    //在创建vue实例之前,创建全局过滤器
    Vue.filter("changeName", function (value) {
      //将姓名的开头字母大写
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    const app = new Vue({
      el: "#app",
      data: {
        user: { name: "guardwhy" },
      },
    }); 
  </script>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505225130.png)

#### 5.1.4 总结

1. 过滤器常用来处理文本格式化的操作。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式。
2. 过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示

### 5.2 watch侦听器

#### 5.2.1 什么是侦听器

Vue.js 提供了一个方法 watch，它用于观察Vue实例上的数据变动。
==作用: 当你有一些数据需要随着其它数据变动而变动时，可以使用侦听属性。==

#### 5.2.2  代码示例

需求: 监听数字变化，实时显示！！！

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h2>计数器:{{count}}</h2>
      <input type="button" @click="count++" value="按钮" />
    </div>
  </body>
  <script src="js/vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        count: 1,
      },
      watch: {
        //监测属性的值的变化
        count: (num2, num1) =>
        //参数1:原来的值 参数2:新的值
        alert("计数器发生变化: " + num1 + "变化为 " + num2)
      },
    });
  </script>
</html>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505232227.png" style="zoom:80%;" />

## 6- 基础语法

### 6.1 v-on指令

> **基本特点**

作用：绑定事件监听器
缩写：@
预期：Function | Inline Statement | Object
参数：event

#### 6.1.1 v-on的基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-on的基本使用(监听事件)</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h3>{{counter}}</h3>

      <!--事件绑定语法糖-->
      <button @click="increment">+</button>
      <button @click="decrement">-</button>

	  <!--普通写法-->
	  <!--
	  <button v-on:click="increment">+</button>
	  <button v-on:click="decrement">-</button>
	  -->
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          counter: 0
        },
        methods: {
          increment(){
            this.counter++
          },
          decrement(){
            this.counter--
          }
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424112118.png)

#### 6.1.2 v-on参数个数

> **注意事项**

- 当通过methods中定义方法，以供@click调用时，需要注意参数问题。
- 如果该方法不需要额外参数，那么方法后的()可以不添加，如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去。
- 如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-on参数个数</title>
</head>
<body>
    <!--2.定义一个div元素-->
    <div id="app">
     <!--事件调用的方法没有参数-->
      <button @click="btn1Click()">按钮1</button>
      <button @click="btn1Click">按钮1</button>


	  <!--如果函数需要参数，但是没有传入，那么函数的形参为undefined-->
	 <!-- <button @click="btn2Click()">按钮2</button>-->

      <!--在事件定义时, 写方法时省略了小括号, 但是方法本身是需要一个参数的。
      这个时候, Vue会默认将浏览器生产的event事件对象作为参数传入到方法
      -->
      <button @click="btn2Click">按钮2</button>

      <!--3.方法定义时, 我们需要event对象, 同时又需要其他参数-->
      <!-- 在调用方式, 如何手动的获取到浏览器参数的event对象: $event-->
      <button @click="btn3Click(abc, $event)">按钮3</button>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!',
          abc: 123
        },
        methods: {
         btn1Click(){
           // 输出结果
           console.log("btn1Click");
         },
         btn2Click(event){
           // 输出结果
           console.log('-----', event);
         },

          btn3Click(abc,event){
            // 输出结果
            console.log('+++++', abc, event);
          }

        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424113204.png)

#### 6.1.3 v-on的修饰符

> **常用的修饰符**

.stop - 调用 event.stopPropagation()。

```css
<!--停止冒泡-->
<button @click.stop="doThis"></button>
```

.prevent - 调用 event.preventDefault()。

```html
<!--阻止默认行为-->
<button @click.prevent="doThis"></button>
<!--阻止默认行为，没有表达式-->
<form @submit.prevent></form>
<!--串联修饰符-->
<button @click.stop.prevent="doThis"></button>
```

.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。

```html
<!--键修饰符，键别名-->
<input @keyup.enter = "onEnter">
<!--键修饰符，键代码-->
<input @keyup.13="onEnter">
```

.once - 只触发一次回调。

```html
<!--点击回调只会触发一次-->
<button @click.once="doThis"></button>
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-on的修饰符</title>
</head>
<body>
    <div id="app">
      <!-- 1.阻止冒泡事件.stop -->
      <div @click="divClick">
          guardwhy!!!
        <button @click.stop="btnClick">按钮</button>
      </div>

      <!-- 2. 阻止默认事件 -->
      <br/>
      <form action="taobao">
        <input type="submit" value="提交" @click.prevent="submitClick">
      </form>

      <!--3. 监听某个事件的键帽-->
      <input type="text" @keyup.enter="keyUp">

      <!--4. .once修饰符的使用-->
      <button @click.once="btn2Click">按钮2</button>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!'
        },

        // 方法
        methods: {
          btnClick() {
            console.log("btnClick");
          },
          divClick() {
            console.log('divClick');
          },

          submitClick(){
            console.log('submitClick');
          },

          keyUp() {
            console.log('keyUp');
          },

          btn2Click() {
            console.log('btn2Click')
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424131323.png)

### 6.2 条件判断

#### 6.2.1 v-if 指令

==作用: 根据表达值的真假,切换元素的显示和隐藏(操纵dom元素)==

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-if的使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--条件判断-->
      <h3 v-if="isShow">
        <div>abc</div>
        <div>abc</div>
        {{message}}
      </h3>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!',
          isShow: true
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424135117.png)

#### 6.2.2 v-if和v-else指令

> **基本特点**

- 可以根据表达式的值在DOM中渲染或销毁元素或组件。

- v-if后面的条件为false时，对应的元素以及其子元素不会渲染。

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>v-if和v-else的使用</title>
  </head>
  <body>
  <!--2.定义一个div元素-->
      <div id="app">
        <h3 v-if="isShow">
          <div>James is MVP！！！</div>
          <div>James is MVP！！！</div>
          {{message}}
        </h3>
  
        <h3 v-else>isShow为false时候,显示guardwhy!!!</h3>
  
      </div>
  
      <script src="../js/vue.js"></script>
      <script>
        // 创建对象
        const app = new Vue({
          // 挂载要管理的元素
          el: '#app',
          // 定义数据
          data: {
            message: 'hello, Vue.js!!!',
            isShow: false
          }
        })
    </script>
  </body>
  </html>
  ```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424135837.png)

> **复杂条件判断**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>复杂条件判断</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <h3>{{result}}</h3>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          score: 50
        },

        // 计算属性
        computed: {
          result(){
            // 定义成绩变量
            let showMessage = '';
            // 条件判断
            if(this.score >= 90){
              showMessage = '优秀'
            }else if(this.score >= 80){
              showMessage = '良好'
            }else if(this.score >= 70){
              showMessage = '一般'
            }else if(this.score >= 60){
              showMessage = '及格'
            }else{
              showMessage = '不及格'
            }
            return showMessage
          }
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424142330.png)

#### 6.2.3 用户登录案例

> **存在问题**

在有输入内容的情况下，切换了类型，会发现文字依然显示之前的输入的内容。

> **解决方案**

这是因为Vue在进行DOM渲染时，出于性能考虑，会尽可能的复用已经存在的元素，而不是重新创建新的元素。

Vue内部会发现原来的input元素不再使用，直接作为else中的input来使用了。如果不希望Vue出现类似重复利用的问题，==可以给**对应的input添加key**==
==并且我们需要保证key的不同==。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>用户登录</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--条件判断-->
      <span v-if="isUser">
        <label for="username">用户账户</label>
        <input type="text" id="username" placeholder="用户账户" key="username">
      </span>
      <span v-else>
        <label for="email">用户邮箱</label>
        <input type="text" id="email" placeholder="用户邮箱" key="email">
      </span>

      <!--切换按钮-->
      <button @click="isUser=!isUser">切换类型</button>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          isUser: true
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424143255.png)

#### 6.2.4 v-show指令

> **基本特点**

v-show的用法和v-if非常相似，也用于决定一个元素是否渲染。

==v-if当条件为false时，压根不会有对应的元素在DOM中，v-show当条件为false时，仅仅是将元素的display属性设置为none而已==。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-show使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--v-if: 当条件为false时, 包含v-if指令的元素, 根本就不会存在dom中-->
      <h2 v-if="isShow" id="aaa">{{message}}</h2>

      <!--v-show: 当条件为false时, v-show只是给我们的元素添加一个行内样式: display: none-->
      <h2 v-show="isShow" id="bbb">{{message}}</h2>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello Vue.js!!!',
          isShow: true
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424144102.png)

### 6.3 循环遍历

#### 6.3.1 v-for 遍历数组

**基本特点**

==v-for的语法类似于JavaScript中的for循环，格式如下：item in items的形式==。

> 遍历的过程中不需要使用索引值

```java
v-for="movie in movies"
依次从movies中取出movie，并且在元素的内容中，可以使用Mustache语法，来使用movie
```

> 遍历的过程中，需要拿到元素在数组中的索引值

```java
语法格式：v-for=(item, index) in items
其中的index就代表了取出的item在原数组的索引值
```

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-for遍历数组</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--在遍历的过程中,没有使用索引值(下标值)-->
      <ul>
        <li v-for="item in names" :key="item">{{item}}</li>
      </ul>

      <!--在遍历的过程中, 获取索引值-->
      <ul>
        <li v-for="(item, index) in names">{{index+1}}.{{item}}</li>
      </ul>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
         names: ['guardWhy', 'kobe', 'james', 'curry']
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424154831.png)

#### 6.3.2 v-for遍历对象

> 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-for遍历对象</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--在遍历对象的过程中, 如果只是获取一个值, 那么获取到的是value-->
      <ul>
        <li v-for="item in info">{{item}}</li>
      </ul>

      <!--获取key和value 格式: (value, key) -->
      <ul>
        <li v-for="(value, key) in info">{{value}}-{{key}}</li>
      </ul>

      <!--获取key和value和index 格式: (value, key, index) -->
      <ul>
        <li v-for="(value, key, index) in info">{{value}}-{{key}}-{{index}}</li>
      </ul>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          // 创建对象
          info: {
            name: 'guardwhy',
            age: 27,
            height: 1.71
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424155158.png)

#### 6.3.3 组件的key属性

官方推荐我们在使用v-for时，给对应的元素或组件添加上一个:key属性，key的作用主要是为了高效的更新虚拟DOM。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-for遍历对象</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
     <!--ey的作用主要是为了高效的更新虚拟DOM-->
      <ul>
        <li v-for="item in letters" :key="item">{{item}}</li>
      </ul>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          letters: ['A', 'B', 'C', 'D', 'E']
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424155840.png)

#### 6.3.4 数组方法响应式

Vue是响应式的，所以当数据发生变化时，Vue会自动检测数据变化，视图会发生对应的更新。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>数组方法响应式</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
     <!--遍历-->
      <ul>
        <li v-for="item in letters">{{item}}</li>
      </ul>

      <button @click="btnClick">按钮</button>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          letters: ['a', 'b', 'c', 'd']
        },

        // 方法
        methods: {
          btnClick(){
            // 1.push方法
			// this.letters.push('aaa')
			// this.letters.push("kobe","james","rondo");

            // 2.pop(): 删除数组中的最后一个元素
            // this.letters.pop();

            // 3.shift(): 删除数组中的第一个元素
            // this.letters.shift();

            // 4.unshift(): 在数组最前面添加元素
            // this.letters.unshift('aaa', 'bbb', 'ccc')

             /*
             5.splice作用: 删除元素/插入元素/替换元素
               删除元素: 第二个参数传入你要删除几个元素(如果没有传,就删除后面所有的元素)
               替换元素: 第二个参数, 表示我们要替换几个元素, 后面是用于替换前面的元素
               插入元素: 第二个参数, 传入0, 并且后面跟上要插入的元素
             */

            // this.letters.splice(1, 3, 'm', 'n', 'l', 'x')
            this.letters.splice(1, 0, 'x', 'y', 'z')

            // 6.sort()
            // this.letters.sort()

            // 7.reverse()
            // this.letters.reverse()

            // 注意: 通过索引值修改数组中的元素
            // this.letters[0] = 'bbbbbb';
            // this.letters.splice(0, 1, 'bbbbbb')

            // set(要修改的对象, 索引值, 修改后的值)
            // Vue.set(this.letters, 0, 'bbbbbb')

			// 9.通过索引值修改数组中的元素
			// this.letters[0] = "guardwhy";
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424162201.png)

#### 6.3.5 点击换背景

代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>点击换背景</title>
  <style>
    .active{
      color: red;
    }
  </style>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--遍历数组-->
      <ul>
        <li v-for="(item, index) in starts"
            :class="{active: currentIndex == index}"
            @click="liClick(index)">
          {{index}}.{{item}}
        </li>
      </ul>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          starts: ['kobe', 'Jmaes', 'curry', 'Rando'],
          // 设置点击索引值为0
          currentIndex: 0
        },

        // 方法
        methods: {
          liClick(index){
            this.currentIndex = index
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424162642.png)

### 6.4 高阶函数

> **基本特点**

高阶函数是至少满足下面一个条件的函数：
1、接收一个或多个函数作为参数。
2、返回一个函数。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>高阶函数</title>
</head>
<body>
  <script type="text/javascript">
    // 创建数组nums
    const nums = [10, 20, 111, 222, 444, 40, 50];

    /*
    1.filter函数的使用
      filter中的回调函数有一个要求: 必须返回一个boolean值。
      true: 当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
      false: 当返回false时, 函数内部会过滤掉这次的n。
     */
    let newNums = nums.filter(function (n) {
      return n < 100
    });
     console.log(newNums);

    // 2. map函数的使用
    let new2Nums = newNums.map(function (n) {
      return n * 2;
    });
    // 输出结果
    console.log(new2Nums);

    // 3. reduce函数的使用:reduce作用对数组中所有的内容进行汇总。
   let total1 =  new2Nums.reduce(function (preValue, n) {
      return preValue + n;
    }, 0)

    // 输出结果值
    console.log("total1：" + total1);

   // 函数式编程
    let total2 = nums.filter(function (n) {
      return n < 100;
    }).map(function (n) {
      return n * 2;
    }).reduce(function (prevValue, n) {
      return prevValue + n;
    }, 0);

    // 输出total2
    console.log("total2：" + total2);

    // 5.ES6方式实现
	let total3 = nums.filter(n=>n <100).map(n => n * 2).reduce((pre, n) => pre + n);
	console.log("total3：" + total3);
  </script>
</body>
</html>
```

> **代码示例**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424185124.png)

## 6- 购物车案例

### 6.1 项目目录

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424191305.png)

### 6.2 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>购物车案列</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <div v-if="books.length">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(item, index) in books">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.date}}</td>
          <td>{{item.price | showPrice}}</td>
          <td>
            <button @click="decrement(index)" :disabled="item.count <= 0">-</button>
            {{item.count}}
            <button @click="increment(index)">+</button>
          </td>
          <td>
            <button @click="removeHandle(index)">移除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <h3>总价格:{{totalPrice | showPrice}}</h3>
    </div>
    <h3 v-else>购物车为空</h3>
  </div>
</body>
  <!--引入vue-->
  <script src="../js/vue.js"></script>
  <!--引入main.js文件-->
  <script src="main.js"></script>
</html>
```

### 6.3 style.css

```css
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th, td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
```

### 6.4 main.js

```javascript
const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
       {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },

  // 方法
  methods: {
    // 加操作
    increment(index) {
      this.books[index].count++
    },

    // 减操作
    decrement(index) {
      this.books[index].count--
    },

    // 移除操作
    removeHandle(index){
      this.books.splice(index,1)
    }
  },

  // 计算属性
  computed: {
    // 定义总价格函数
    totalPrice(){
      // 设置总价格为空
      let totalPrice = 0;
      // 方式 1遍历循环
      /*
      for(let i=0; i<this.books.length; i++){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      */

      // 方式2 遍历循环
      /*
      for(let i in this.books){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      */
      // 方式3 遍历循环
      /*
      for (let item of this.books){
        totalPrice += item.price * item.count;
      }*/

      // 返回总价格
      // return totalPrice;
      
      // 方式四 通过高阶函数实现
      return this.books.reduce(function (preValue,book){
        return preValue + book.price * book.count
      },0)

      
    }
  },

  // 过滤器
  filters: {
    showPrice(price){
      return '¥' + price.toFixed(2);
    }
  }
})
```

> **执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424192940.png)

## 7- v-model指令

### 7.1 v-model基本使用

==Vue中使用v-model指令来实现表单元素和数据的双向绑定==。

> **案例的解析**

- 当输入框输入内容时，因为input中的v-model绑定了message。所以会实时将输入的内容传递给message，message发生改变。
- 当message发生改变时，因为上面我们使用Mustache语法，将message的值插入到DOM中，所以DOM会发生响应的改变。
- 所以，通过v-model实现了双向的绑定。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model的基本使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <input type="text" v-model="message">
      <h2>{{message}}</h2>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello Vue.js!!!'
        }
      })
  </script>
</body>
</html>
```

> **执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424214132.png)

### 7.2 v-mode的原理

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424214956.png)

> **v-model其实是一个语法糖，它的背后本质上是包含两个操作**

- v-bind绑定一个value属性。
- v-on指令给当前元素绑定input事件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model使用原理</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--输入和监听-->
      <input type="text" :value="message" @input="message = $event.target.value">

      <h2>{{message}}</h2>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!'
        },
        // 方法
        methods: {
          valueChange(event){
            this.message = event.target.value;
          }
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424215219.png)

### 7.3 v-model结合radio类型

当存在多个单选框时。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model结合radio</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
     <label for="male">
       <input type="radio" id="male" value="男" v-model="sex">男
     </label>
      <label for="female">
        <input type="radio" id="female" value="女" v-model="sex">女
      </label>

      <h3>您选择的性别是:{{sex}}</h3>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          sex: '男'
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424220653.png)

### 7.4 v-mode结合单选框

> 单个勾选框

v-model即为布尔值，此时input的value并不影响v-model的值。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-mode结合单选框</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
     <label for="agree">
       <input type="checkbox" id="agree" v-model="isAgree">同意协议
     </label>
      <h2>你的选择是:{{isAgree}}</h2>

      <!--取反操作-->
      <button :disabled="!isAgree">下一页</button>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!',
          isAgree: false
        }
      })
  	</script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424222426.png)

### 7.5 v-mode结合复选框

> **多个复选框**

当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组。

当选中某一个时，就会将input的value添加到数组中。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-mode结合复选框</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <input type="checkbox" value="篮球" v-model="hobbies">篮球
      <input type="checkbox" value="足球" v-model="hobbies">足球
      <input type="checkbox" value="乒乓球" v-model="hobbies">乒乓球
      <input type="checkbox" value="羽毛球" v-model="hobbies">羽毛球
      <h2>您的爱好是: {{hobbies}}</h2>

    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
        // 定义数据
        data: {
          message: 'hello world!',
          isAgree: false,
          hobbies:[]
        }
      })
  </script>
</body>
</html>
```

> 执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424222823.png)

### 7.6 v-model结合select类型

> **基本特点**

**单选：只能选中一个值。**

- v-model绑定的是一个值。
- 当我们选中option中的一个时，会将它对应的value赋值到mySelect中

**多选：可以选中多个值。**

- v-model绑定的是一个数组。
- 当选中多个值时，就会将选中的option对应的value添加到数组mySelects中。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model结合select类型</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--选择一个-->
      <select name="abc" v-model="fruit">
        <option value="苹果">苹果</option>
        <option value="香蕉">香蕉</option>
        <option value="榴莲">榴莲</option>
        <option value="葡萄">葡萄</option>
      </select>

      <h3>您选择的水果是:{{fruit}}</h3>

      <!--多选择-->
      <select name="abc" v-model="fruits" multiple>
        <option value="苹果">苹果</option>
        <option value="香蕉">香蕉</option>
        <option value="榴莲">榴莲</option>
        <option value="葡萄">葡萄</option>
      </select>
      <h3>你选择的水果是:{{fruits}}</h3>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          fruit: '香蕉',
          fruits: []
        }
      })
  </script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424223737.png)

### 7.7 值绑定

==值绑定就是动态的给value赋值而已==。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>值绑定</title>
</head>
<body>
      <div id="app">
        <label v-for="item in originHobbies" :for="item">
          <input type="checkbox" :value="item"  v-model="hobbies">{{item}}
        </label>
        <h3>您的爱好是: {{hobbies}}</h3>
      </div>

      <script src="../js/vue.js"></script>
      <script>
        // 创建对象
        const app = new Vue({
          // 挂载要管理的元素
          el: '#app',

          // 定义数据
          data: {
            hobbies: [],
            originHobbies: ['篮球', '足球', '乒乓球', '羽毛球', '台球', '高尔夫球']
          }
        })
    </script>
</body>
</html>
```

> 执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424224418.png)

### 7.8 v-model修饰符

> **lazy修饰符**

- 默认情况下，v-model默认是在input事件中同步输入框的数据的。
- 也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变。
- lazy修饰符可以让数据在失去焦点或者回车时才会更新。

> **number修饰符**

- 默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理。
- 但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字处理。
- number修饰符可以让在输入框中输入的内容自动转成数字类型。

> **trim修饰符**

如果输入的内容首尾有很多空格，通常我们希望将其去除，trim修饰符可以过滤内容左右两边的空格。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-model修饰符作用</title>
</head>
<body>
    <div id="app">
      <!--1.修饰符:lazy可以让数据在失去焦点或者回车时才会更新-->
      <input type="text" v-model.lazy="message">
      <h2>{{message}}</h2>

      <!--2.修饰符:number可以让在输入框中输入的内容自动转成数字类型-->
      <input type="number" v-model.number="age">
      <h2>{{age}}-{{typeof age}}</h2>

      <!--3.trim修饰符可以过滤内容左右两边的空格-->
      <input type="text" v-model.trim="name">
      <h2>你输入的名字:{{name}}</h2>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
        // 定义数据
        data: {
          message: 'hello Vue.js!!!',
          age: 0,
          name: ''
        }
      })
  </script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210424225220.png)

## 8- 组件化开发

### 8.1 基本概念

> **组件化是Vue.js中的重要思想**。

它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。
任何的应用都会被抽象成一颗组件树。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425085245.png)

> **组件化思想的应用**

- 有了组件化的思想，我们在之后的开发中就要充分的利用它。
- 尽可能的将页面拆分成一个个小的、可复用的组件。
- 这样让我们的代码更加方便组织和管理，并且扩展性也更强。

### 8.2 组件化的基本使用

> **组件的使用分成三个步骤**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425092057.png)

- 创建组件构造器。
- 注册组件
- 使用组件。

> **代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件化的基本使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <!--3.使用组件-->
      <cpn></cpn>
      <cpn></cpn>
    </div>

    <script src="../js/vue.js"></script>
    <script>

      // 1.创建组件化构造器对象
      const cpnC = Vue.extend({
        // 模板
        template: `
          <div>
              <h2>NBA球星名单</h2>
              <p>我是kobe,我是总冠军!!!</p>
              <p>我是Curry,我是三分雨!!!</p>
          </div>`
      });

      // 2.注册组件
      Vue.component('cpn', cpnC)


      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app'
      })
  </script>
</body>
</html>
```

> **执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425085913.png)

### 8.3 注册组件步骤解析

> **Vue.extend( )**

- 调用Vue.extend()创建的是一个组件构造器。 
- 通常在创建组件构造器时，传入template代表我们自定义组件的模板。
- 该模板就是在使用到组件的地方，要显示的HTML代码。

> **Vue.component( )**

- 调用Vue.component()是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称。
- 所以需要传递两个参数：1、注册组件的标签名 2、组件构造器

> **在Vue实例的作用范围内使用组件**

组件必须挂载在某个Vue实例下，否则它不会生效。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425094432.png)

### 8.4 全局组件和局部组件

调用Vue.component()注册组件时，组件的注册是全局的，这意味着该组件可以在任意Vue示例下使用。

如果注册的组件是挂载在某个实例中, 那么就是一个局部组件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>全局组件和局部组件</title>
</head>
<body>
    <div id="app">
	  <!--3.使用组件-->
      <cpn></cpn>
    </div>
    <script src="../js/vue.js"></script>
    <script>
      // 1.创建组件构造器
      const cpnC = Vue.extend({
        template: `
          <div>
            <h3>keep moving</h3>
            <p>我的Harden,我是mvp</p>
          </div>
        `
      });

       // 注册组件(全局组件，意味着可以在多个Vue的实例下面使用)
	   // Vue.component('cpn', cpnC);

      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
		data:{
          message: 'hello Vue.js!!!'
		},
        // 注册局部组件
        components: {
          // 使用组件时候的标签名(cpn),组件构造器(cpnC)
          cpn: cpnC
        }
      })
  </script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425100236.png)

### 8.5 父组件和子组件

组件和组件之间存在层级关系，而其中一种非常重要的关系就是父子组件的关系。

> **代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>父组件和子组件</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <cpn2></cpn2>
    </div>

    <script src="../js/vue.js"></script>
    <script>

      // 1.创建第一个组件构造器(子组件)
      const cpnC1 = Vue.extend({
        template: `
          <div>
            <h2>我是NBA球星</h2>
            <p>我是curry,我是三分王!!!</p>
          </div>
        `
      });

      // 2.创建第二个组件构造器(父组件)
      const cpnC2 = Vue.extend({
        template: `
          <div>
            <h2>我是NBA球星</h2>
            <p>我是kobe,我是MVP!!!</p>
            <cpn1></cpn1>
          </div>
        `,
        components: {
          cpn1: cpnC1
        }
      });

      // root组件
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
        // 定义数据
        data: {
          message: 'hello world!'
        },
        components: {
          cpn2: cpnC2
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425100914.png)

### 8.6 注册组件语法糖

Vue为了简化这个过程，提供了注册的语法糖，==主要是省去了调用Vue.extend()的步骤，而是可以直接使用一个对象来代替==。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件语法糖注册</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <cpn1></cpn1>
      <cpn2></cpn2>
    </div>

    <script src="../js/vue.js"></script>
    <script>

      // 注册全局主键语法糖
      // 1.创建组件构造器
      // const cpn1 = Vue.extend()

      // 2.注册组件(全局组件注册语法糖)
      Vue.component('cpn1', {
        template: `
          <div>
            <h2>NBA球星世界</h2>
            <p>我是kobe，我是mvp!!!!</p>
          </div>
        `
      });

      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!'
        },
		// 注册局部组件(局部组件注册语法糖)
        components: {
          'cpn2': {
            template: `
               <div>
                <h2>NBA球星世界</h2>
                <p>我是Curry，我是三分王!!!!</p>
              </div>
            `
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425101301.png)

> **双方对比**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425102418.png" style="zoom:67%;" />

### 8.7 组件模板分离

> **存在问题**

- 通过语法糖简化了Vue组件的注册过程，另外还有一个地方的写法比较麻烦，就是template模块写法。
- 如果能将其中的HTML分离出来写，然后挂载到对应的组件上，必然结构会变得非常清晰。

> **Vue提供了两种方案来定义HTML模块内容**

```css
使用<script>标签
使用<template>标签
```

代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件模板分离</title>
</head>
<body>
    <div id="app">
      <!--使用组件-->
      <cpn1></cpn1>
      <cpn1></cpn1>
    </div>
	<!--方式1. script标签，注意: 类型必须是text/x-template-->
	<script type="text/x-template" id="cpn">
	  <div>
		<h3>PHP</h3>
		<p>是世界上最好的语言！！！</p>
	  </div>
	</script>

    <!--方式二：template标签-->
    <!--<template id="cpn">
      <div>
        <h3>PHP</h3>
		<p>是世界上最好的语言！！！</p>
      </div>
    </template>-->

    <script src="../js/vue.js"></script>
    <script>

      // 1.注册全局组件
      Vue.component('cpn1', {
        template: '#cpn'
      })
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425112908.png)

### 8.8 组件中的数据存放

#### 8.8.1 组件中的数据存放问题

> 组件可以访问Vue实例数据吗？

不能！！！！

这个模块有属于自己的HTML模板，也应该有属性自己的数据data。

发现不能访问，而且即使可以访问，如果将所有的数据都放在Vue实例中，Vue实例就会变的非常臃肿。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425115434.png)

==结论：Vue组件应该有自己保存数据的地方。==

> **组件数据的存放**

- 组件对象也有一个data属性(也可以有methods等属性)，只是这个data属性必须是一个函数。
- 而且这个函数返回一个对象，对象内部保存着数据。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件中的数据存放</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <cpn1></cpn1>
    </div>

    <!--template标签-->
    <template id="cpn">
      <div>
        <h2>{{title}}</h2>
        <p>hello Vue.js!!!</p>
      </div>
    </template>
    <script src="../js/vue.js"></script>
    <script>

      // 注册全局组件
      Vue.component('cpn1', {
        // 定义模板
        template: '#cpn',
        // 组件对象有一个data属性，它是个函数
        data(){
          // 返回一个实例的值
          return {
            title: 'guardwhy'
          }
        }
      })
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425120342.png)

#### 8.8.2 组件中的data为啥是函数

> 具体原因

首先，如果不是一个函数，Vue直接就会报错。

其次，原因是==在于Vue让每个组件对象都返回一个新的对象，因为如果是同一个对象的，组件在多次使用后会相互影响==。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件中的data为啥是函数</title>
</head>
<body>
    <div id="app">
      <cpn1></cpn1>
      <cpn1></cpn1>
    </div>
    <!--创建模板-->
    <template id="cpn">
      <div>
        <h2>当前计数:{{counter}}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </div>
    </template>
    <script src="../js/vue.js"></script>
    <script>
      // 1.注册组件
      Vue.component('cpn1', {
        // 2.定义模板
        template: '#cpn',
        data(){
          return {
            // 定义计数器的值
            counter: 0
          }
        },
        // 定义方法
        methods: {
          increment(){
            this.counter++
          },
          decrement(){
            this.counter--
          }
        }
      })
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app'
      })
  </script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425124912.png)

## 9- 组件的通信

真实的开发中，Vue实例和子组件的通信和父组件和子组件的通信过程是一样的。

### 9.1 父组件向子组件传递

子组件是不能引用父组件或者Vue实例的数据的。这个时候，==并不会让子组件再次发送一个网络请求，而是直接让大组件(父组件)将数据传递给小组件(子组件)==。

> **props基本用法**

- 在组件中，==使用选项props来声明需要从父级接收到的数据==。
- props的值有两种方式
  - 方式一：字符串数组，数组中的字符串就是传递时的名称。
  - 方式二：对象，对象可以设置传递时的类型，也可以设置默认值等。
- props传递案例

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425155217.png)

> **代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>父组件向子组件传递参数</title>
</head>
<body>
    <div id="app">
	  <!--3.使用组件-->
	  <!--绑定属性-->
      <cpn1 :cmessage="message" :cstarts="starts"></cpn1>
    </div>

    <!--创建模板-->
    <template id="cpn">
      <div>
        <ul>
          <li v-for="item in cstarts">{{item}}</li>
        </ul>
        <h3>{{cmessage}}</h3>
      </div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      const cpn1 = {
        // 定义模板
        template: '#cpn',
        // 父组件向子组件传递内容(父传子: props)
        props: {
          // 类型限制,提供默认值，和及其必传值
          cmessage: {
            type: String,
            dafault: 'Curry',
            required: true
          },

          // 类型是数组或者对象类型时候，默认值必须是一个函数
          cstarts: {
            type: Array,
            default(){
              return []
            }
          }
        }
      }
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!',
          starts: ['kobe', 'Jmaes', 'Curry', 'Duncan']
        },

        // 注册组件
        components: {
          cpn1
        }
      })
  </script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425155611.png)

### 9.2  props驼峰标识问题

==注意: props传递中的不支持驼峰标识！！！==

```html
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>props中的驼峰标识</title>
</head>
<body>
    <div id="app">
	  <!--这里不支持驼峰标识-->
      <cpn1 :c-info="info" :child-my-message="message"></cpn1>
    </div>

    <!--定义模板-->
    <template id="cpn">
	  <!--定义子组件模板的时候，要用外层的div将其包裹起来-->
      <div>
        <h2>{{cInfo}}</h2>
        <h2>{{childMyMessage}}</h2>
      </div>
    </template>
    <script src="../js/vue.js"></script>
    <script>
      const cpn1 = {
        template: '#cpn',
        props: {
          cInfo: {
            type: Object,
            default() {
              return {}
            }
          },
          childMyMessage: {
            type: String,
            default: ''
          }
        }
      }

      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          info: {
            name: 'guardWhy',
            age: 26,
            height: 1.71
          },
          message: 'curry'
        },
        // 注册组件
        components:{
          cpn1
        }
      })
  </script>
</body>
</html>
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425161446.png)

### 9.3 子级向父级传递(自定义事件)

> 什么时候需要自定义事件呢？

当子组件需要向父组件传递数据时，就要用到自定义事件了。
之前学习的==v-on不仅仅可以用于监听DOM事件，也可以用于组件间的自定义事件==。

> 自定义事件的流程

在子组件中，通过$emit()来触发事件。
在父组件中，通过v-on来监听子组件事件。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425170916.png)

> **代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>子传父自定义事件</title>
</head>
<body>
<!--父组件模板-->
    <div id="app">
      <!--父组件监听(v-on)事件-->
      <cpn1 @item-click="cpnClick"></cpn1>
    </div>


    <!--子组件模板-->
    <template id="cpn">
      <div>
        <button v-for="item in categories"
                @click="btnClick(item)">
          {{item.name}}
        </button>
      </div>
    </template>

    <script src="../js/vue.js"></script>
    <script>

      // 子组件
      const cpn1 = {
        // 定义模板
        template: '#cpn',
        data(){
          return{
            categories: [
              {id: 'aaa', name: '热门推荐'},
              {id: 'bbb', name: '手机数码'},
              {id: 'ccc', name: '家用家电'},
              {id: 'ddd', name: '电脑办公'},
            ]
          }
        },

        methods: {
          btnClick(item){
            // console.log(item);
            // 发射事件:自定义事件
            this.$emit('item-click', item)
          }
        }
      }

      // 父组件
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
        components : {
          cpn1
        },

        methods: {
          cpnClick(item){
            // 输出item
            console.log('cpnClick', item);
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425171339.png)

### 9.4 组件通信集合双向绑定

**代码示例**

> 方式一

```html
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件通信(双向绑定)</title>
</head>
<body>
<!--父组件模板-->
    <div id="app">
      <cpn1 :number1="num1" :number2="num2"
      @num1change="num1change"
      @num2change="num2change"></cpn1>

    </div>
    <!--子组件模板-->
    <template id="cpn">
      <div>
        <h2>props: {{number1}}</h2>
        <h2>data:{{dnumber1}}</h2>
        <!--    <input type="text" v-model="dnumber1"> -->
        <input type="text" :value="dnumber1" @input="num1Input">
        <h2>props:{{number2}}</h2>
        <h2>data:{{dnumber2}}</h2>
        <!-- <input type="text" v-model="dnumber2">-->

        <input type="text" :value="dnumber2" @input="num2Input">
      </div>
    </template>
    <script src="../js/vue.js"></script>

    <script>
      // 父组件
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',
        data: {
          // 定义属性
          num1: 1,
          num2: 0
        },
        // 实现方法
        methods: {
          num1change(value){
            this.num1 = parseFloat(value)
          },
          num2change(value){
            this.num2 = parseFloat(value)
          }
        },
        // 注册组件
        components: {
          // 子组件
          cpn1:{
            // 定义模板
            template: '#cpn',
            // 父子之间的通信
            props:{
              number1: Number,
              number2: Number
            },
            // 添加一个data属性,从而实现双向绑定
            data(){
              return{
                dnumber1: this.number1,
                dnumber2: this.number1
              }
            },
            methods: {
              num1Input(event){
                // 将input中的value赋值到dnumber中
                this.dnumber1 = event.target.value;
                // 让父组件可以修改值,发出一个事件
                this.$emit('num1change', this.dnumber1);

                // 修改dnumber2的值
                this.dnumber2 = this.dnumber1 * 100;
                this.$emit('num2change', this.dnumber2)
              },
              num2Input(event){
                // 将input中的value赋值到dnumber中
                this.dnumber2 = event.target.value;
                this.$emit('num2change', this.dnumber2);

                // 修改dnumber1的值
                this.dnumber1 = this.dnumber2 / 100;
                this.$emit('num1change', this.dnumber1)
              }
            }
          }
        }
      })
  </script>
</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425211423.png)

> 方式二

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件通信(双向绑定)</title>
</head>
<body>

<div id="app">
  <cpn :number1="num1"
       :number2="num2"
       @num1change="num1change"
       @num2change="num2change"/>
</div>

<template id="cpn">
  <div>
    <h2>props:{{number1}}</h2>
    <h2>data:{{dnumber1}}</h2>
    <input type="text" v-model="dnumber1">
    <h2>props:{{number2}}</h2>
    <h2>data:{{dnumber2}}</h2>
    <input type="text" v-model="dnumber2">
  </div>
</template>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      num1: 1,
      num2: 0
    },
    methods: {
      num1change(value) {
        this.num1 = parseFloat(value)
      },
      num2change(value) {
        this.num2 = parseFloat(value)
      }
    },
    components: {
      cpn: {
        template: '#cpn',
        props: {
          number1: Number,
          number2: Number,
          name: ''
        },
        data() {
          return {
            dnumber1: this.number1,
            dnumber2: this.number2
          }
        },
        watch: {
          dnumber1(newValue) {
            this.dnumber2 = newValue * 100;
            this.$emit('num1change', newValue);
          },
          dnumber2(newValue) {
            this.number1 = newValue / 100;
            this.$emit('num2change', newValue);
          }
        }
      }
    }
  })
</script>

</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210425211423.png)

### 9.5 父组件直接访问子组件

#### 9.5.1 $children的访问

- this.$children是一个数组类型，它包含所有子组件对象。
- 能通过一个遍历，取出所有子组件的message状态。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426090208.png)

#### 9.5.2 $children的缺陷

- 通过$children访问子组件时，是一个数组类型，访问其中的子组件必须通过索引值。
- 但是当子组件过多，我们需要拿到其中一个时，往往不能确定它的索引值，甚至还可能会发生变化。
- 有时候，想明确获取其中一个特定的组件，这个时候就可以使用$refs。

#### 9.5.3 $refs的使用

- $refs和ref指令通常是一起使用的。
- 首先，通过ref给某一个子组件绑定一个特定的ID。
- 其次，通过this.$refs.ID就可以访问到该组件了。

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件访问(父访问子)</title>
</head>
<body>
<!--2.定义一个div元素-->
<div id="app">
  <cpn1></cpn1>
  <cpn1></cpn1>
  <cpn1 ref="aaa"></cpn1>
  <button @click="btnClick">按钮</button>
</div>

<!--子组件模板-->
<template id="cpn">
  <div>
	<h2>我是子组件</h2>
  </div>
</template>

<script src="../js/vue.js"></script>
<script>
  // 创建对象
  const app = new Vue({
    // 挂载要管理的元素
    el: '#app',
    // 定义数据
    data: {
      message: 'hello world!'
    },
    methods: {
      btnClick(){
        // 1.$children
		/*
		console.log(this.$children);
		for(let c of this.$children){
		  console.log(c.name);
		  c.showMessage();
		}
		console.log(this.$children[1].name);
		*/

		// 2.$refs ==> 对象类型，默认这是一个空对象
		console.log(this.$refs.aaa.name);
      }
    },
    // 创建子组件
    components: {
      cpn1: {
        template: '#cpn',
        data(){
          return{
            name:'我是子组件的name'
          }
        },
        methods:{
          showMessage(){
            console.log("showMessage!!!");
		  }
        }
      }
    }
  })
</script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426090833.png)

### 9.6 子组件直接访问父组件

==如果想在子组件中直接访问父组件，可以通过$parent==。

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426100024.png" style="zoom: 67%;" />

> **注意事项**

- 尽管在Vue开发中，允许通过$parent来访问父组件，但是在真实开发中尽量不要这样做。
- 子组件应该尽量避免直接访问父组件的数据，因为这样耦合度太高了。
- 如果将子组件放在另外一个组件之内，很可能该父组件没有对应的属性，往往会引起问题。
- 另外，更不好做的是通过$parent直接修改父组件的状态，那么父组件中的状态将变得飘忽不定，很不利于调试和维护。

> **代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>组件访问(子访问父)</title>
</head>
<body>

<div id="app">
  <cpn></cpn>
</div>

<template id="cpn">
  <div>
	<h2>我是cpn组件</h2>
	<ccpn></ccpn>
  </div>
</template>

<template id="ccpn">
  <div>
	<h2>我是子组件</h2>
	<button @click="btnClick">按钮</button>
  </div>
</template>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'hello Vue.js!!!'
    },
    components: {
      cpn: {
        template: '#cpn',
        data() {
          return {
            name: '我是cpn组件的name'
          }
        },
        components: {
          ccpn: {
            template: '#ccpn',
            methods: {
              btnClick() {
                // 1.访问父组件$parent
                // console.log(this.$parent);
                // console.log(this.$parent.name);

                // 2.访问根组件$root
                console.log(this.$root);
                console.log(this.$root.message);
              }
            }
          }
        }
      }
    }
  })
</script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426100349.png)

## 10- slot

### 10.1 为什么使用slot

> 组件的插槽

组件的插槽也是为了让封装的组件更加具有扩展性，让使用者可以决定组件内部的一些内容到底展示什么。

> slot基本使用

在子组件中，使用特殊的元素<slot>就可以为子组件开启一个插槽。

该插槽插入什么内容取决于父组件如何使用。

<slot>中的内容表示，如果没有在该组件中插入任何其他内容，就默认显示该内容。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>slot-插槽的基本使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
      <cpn></cpn>
      <cpn><span>php是最好的语言!!!</span></cpn>
      <cpn><i>python一出，谁与争锋!!</i></cpn>
    </div>

    <template id="cpn">
      <div>
        <h2>我是组件</h2>
        <p>我是子组件模板</p>
		<!--设定默认值-->
        <slot><button>按钮</button></slot>
      </div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!'
        },
        components: {
          cpn:{
            template:'#cpn'
          }
        }
      })
  </script>
</body>
</html>
```

> 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426113418.png)

### 10.2 具名插槽slot

> 当子组件的功能复杂时，子组件的插槽可能并非是一个。

- 比如封装一个导航栏的子组件，可能就需要三个插槽，分别代表左边、中间、右边。
- 外面在给插槽插入内容时，如何区分插入的是哪一个呢？==这个时候，就需要给插槽起一个名字==。

**代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>具名插槽的使用</title>
</head>
<body>
<!--2.定义一个div元素-->
    <div id="app">
     <cpn><span slot="center">标题</span></cpn>
      <cpn><button slot="left">返回</button></cpn>
    </div>

    <!--子组件模板-->
    <template id="cpn">
      <div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
      </div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!'
        },
        components: {
          cpn: {
            template: '#cpn'
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426115729.png)

### 10.3 编译作用域

父组件模板的所有东西都会在父级作用域内编译，子组件模板的所有东西都会在子级作用域内编译。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>编译的作用域</title>
</head>
<body>

<div id="app">
  <!--使用变量时，先看在哪个模板里面-->
  <cpn v-show="isShow"></cpn>
  <!-- <cpn v-for="item in names"></cpn> -->
</div>

<template id="cpn">
  <div>
	<h2>我是子组件</h2>
	<p>我是内容, 哈哈哈</p>
	<!-- <button v-show="isShow">按钮</button> -->
  </div>
</template>

<script src="../js/vue.js"></script>
<script>
  /*实例*/
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊',
      isShow: true
    },
	/*组件*/
    components: {
      cpn: {
        template: '#cpn',
        data() {
          return {
            isShow: false
          }
        }
      },
    }
  })
</script>

</body>
</html>
```

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426120057.png)

### 10.4 作用域插槽

父组件替换插槽的标签，但是内容由子组件来提供。

> **代码示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>作用域插槽</title>
</head>
<body>
    <!--作用域插槽: 父组件替换插槽的标签，但是内容由子组件来提供-->
    <div id="app">
      <cpn></cpn>
      <!--&lt;!&ndash;目的是获取子组件中的starts&ndash;&gt;
      <cpn>
        &lt;!&ndash;方式1&ndash;&gt;
        <template slot-scope="slot">
          <span v-for="item in slot.data">-{{item}}</span>
        </template>
      </cpn>-->

      <!--目的是获取子组件中的starts-->
      <cpn>
        <!--方式2-->
        <template slot-scope="slot"><!--引用插槽对象-->
          <span>{{slot.data.join(' - ')}}</span>
        </template>
      </cpn>
    </div>

    <!--子组件模板-->
    <template id="cpn">
      <div>
		<!--子组件传递给父组件-->
        <slot :data="starts">
          <ul>
            <li v-for="item in starts">{{item}}</li>
          </ul>
        </slot>
      </div>
    </template>
    <script src="../js/vue.js"></script>
    <script>
      // 创建对象
      const app = new Vue({
        // 挂载要管理的元素
        el: '#app',

        // 定义数据
        data: {
          message: 'hello world!'
        },
        components: {
          cpn: {
            template: '#cpn',
            data(){
              return {
                starts: ['kobe', 'Jmaes', 'Curry', 'Duncan']
              }
            }
          }
        }
      })
  </script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426120831.png)

## 11- 前端模块化

### 11.1 export基本使用

> **export指令用于导出变量**

```javascript
export let name = 'kobe';
export let age = 18;
export let flag = true;
```

上面的代码还有另外一种写法

```javascript
let name = 'kobe';
let age = 18;
let flag = true;
export {name, age, flag}
```

> **导出函数或类**

```java
function test(num){
    console.log(num);
}
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    run(){
        console.log(this.name + '在学习');
    }
}

export{test, Person}
```

> **export default**

一个模块中包含某个的功能，并不希望给这个功能命名，而且让导入者可以自己来命名。

```javascript
// info1.js
export default function(){
    console.log('default function');
}
```

来到main.js中，这样使用就可以了

```javascript
import function from './info1.js'
```

> 需要注意

export default在同一个模块中，不允许同时存在多个。

### 11.2 import基本使用

使用export指令导出了模块对外提供的接口，下面我们就可以通过import命令来加载对应的这个模块了

首先，我们需要在HTML代码中引入两个js文件，并且类型需要设置为module。

```javascript
<script src="info2.js" type="module"></script>
<script src="main.js" type="module"></script>
```

import指令用于导入模块中的内容，比如main.js的代码。

```javascript
import {name, age, flag} from "./info1.js"
console.log(name, age, flag);
```

### 11.3 代码示例

**info1.js**

```javascript
// 定义变量
let name = 'kobe';
let age = 18;
let flag = true;

// 定义函数
function sum(num1, num2) {
  return num1 + num2
}

// 条件判断
if (flag){
  console.log(sum(20, 30));
}

// 1.导出模块方式
export {
  flag, sum,
}

// 2.导出方式2
export let num1 = 100;
export let height = 1.71

// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run(){
    console.log('python是最优雅的语言!!!');
  }
}

// 5.export default
const address = '广东省广州市'
export default address
```

**info2.js**

```javascript
// 导入模块
import {sum} from './info1.js'
// 定义变量
let name = 'Curry';
let flag = false;

console.log(sum(100, 200));

// 3.导入 export的function/class
import {mul, Person} from "./info1.js";
console.log(mul(30, 50));
```

**main.js**

```javascript
// 1.导入的{}中定义变量
import {flag, sum} from "./info1.js";

// 条件判断
if(flag){
  console.log('kobe是mvp');
  console.log(sum(20, 30));
}

// 2.直接导入export定义的变量
import {num1, height} from "./info1.js";

// 3.导入函数和类对象
import {mul, Person} from "./info1.js";
console.log(mul(30,50));

const p = new Person();
p.run();

// 4.导入export default中的内容
import address from "./info1.js";
console.log(address);

// 5.统一全部导入
import * as A from './info1.js'
// 打印结果
console.log(A.flag);
console.log(A.height);
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>前端模块化</title>
</head>
<body>
  <!--引入js文件-->
  <script src="info1.js" type="module"></script>
  <script src="info2.js" type="module"></script>
  <script src="main.js" type="module"></script>
</body>

</html>
```

> **执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426155720.png)

## 12 - webpack 详解

### 12.1 什么是Webpack？

从本质上来讲，webpack是一个现代的JavaScript应用的静态模块打包工具。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426184816.png)

> **前端模块化**

- 在ES6之前，我们要想进行模块化开发，就必须借助于其他的工具，让我们可以进行模块化开发。
- 并且在通过模块化开发完成了项目后，还需要处理模块间的各种依赖，并且将其进行整合打包。
- 而webpack其中一个核心就是让我们可能进行模块化开发，并且会帮助我们处理模块间的依赖关系。
- 而且不仅仅是JavaScript文件，CSS、图片、json文件等等在webpack中都可以被当做模块来使用。

> **打包**

就是将webpack中的各种资源模块进行打包合并成一个或多个包(Bundle)。
并且在打包的过程中，还可以对资源进行处理，比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。

> **webpack安装**

安装webpack首先需要安装Node.js，Node.js自带了软件包管理工具npm。NPM官方的管理的包都是从 [http://npmjs.com](http://npmjs.com)下载的，但是这个网站在国内速度很慢。这里推荐使用淘宝 NPM 镜像 [http://npm.taobao.org/ ](http://npm.taobao.org/ )，淘宝 NPM 镜像是一个完整npmjs.com 镜像，同步频率目前为 10分钟一次，以保证尽量与官方服务同步。

设置镜像和存储地址：

```javascript
# 由于npm代码仓库的服务器在国外，由于Great Firewall的缘故,这时可以使用淘宝的npm代码仓库，通过npm安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 安装成功后，可以通过以下命令查看cnpm版本：
cnpm -v
#设置npm下载包时保存在本地的地址(建议英文目录),通过cnpm来操作下载速度会得到很大提升，但包的版本不一定是最新的。
cnpm config set prefix "E:\\Develop\\repo_npm"
#查看cnpm配置信息
cnpm config list
```

查看自己的node版本

```css
node -v
```

全局安装webpack(这里我先指定版本号3.6.0，因为vue cli2依赖该版本)

```css
cnpm install webpack@3.6.0 -g
```

查看webpack版本

```css
webpack --version
```

### 12.2 Webpack 初体验

> **项目目录**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426190631.png)

> **文件和文件夹解析：**

- dist文件夹：用于存放之后打包的文件。
- src文件夹：用于存放我们写的源文件
  - main.js：项目的入口文件。具体内容查看下面详情。
  - mathUtils.js：定义了一些数学工具函数，可以在其他地方引用，并且使用。
- index.html：浏览器打开展示的首页html，package.json：通过npm init生成的，npm包管理的文件。

**mathUtils.js**

```java
function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

// 模块导出
module.exports = {
  add,
  mul
}
```

**info.js**

```javascript
// 导出模块
export const name = 'GuardWhy';
export const age = 18;
export const height = 1.71
```

**main.js**

```javascript
// 1. 使用commonjs的模块化导入
const {add, mul} = require('./mathUtils')

// 输出结果
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用es6的模块化规范
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>webpack基本使用</title>
</head>
<body>
<!--引入js文件-->
<script src="dist/bundle.js"></script>
</body>
</html>
```

> **webpack的指令打包**

```css
webpack src/main.js dist/bundle.js
```

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426191935.png)

> **使用打包后的文件**

打包后会在dist文件下，生成一个bundle.js文件
bundle.js文件，是webpack处理了项目直接文件依赖后生成的一个js文件，只需要将这个js文件在index.html中引入即可。

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>webpack基本使用</title>
</head>
<body>
<!--引入js文件-->
<script src="dist/bundle.js"></script>
</body>
</html>
```

执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426192521.png)

### 12.3 webpack的配置

> **项目目录**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426193735.png)

> **配置文件**

**webpack.config.js**

```javascript
// 1.获得路径
const path = require('path');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
}
```

**局部安装webpack**

因为一个项目往往依赖特定的webpack版本，全局的版本可能很这个项目的webpack版本不一致，导出打包出现问题。
所以通常一个项目，都有自己局部的webpack。

```css
cnpm install webpack@3.6.0 --save-dev
```

**配置package.json**

打开项目的命令所在位置，执行`npm init`命令，可得到package.json文件，==可以在package.json的scripts中定义自己的执行脚本==。

```json
{
  "name": "guardwhy",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "guardwhy",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.6.0"
  },
  "dependencies": {},
  "description": ""
}
```

==当执行`npm run build`命令时候会直接生成bundle.js==。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426204712.png)

### 12.4 什么是loader？

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426225923.png)

> **webpack用来做什么呢？**

在之前的实例中，主要是用webpack来处理写的js代码，并且webpack会自动处理js之间相关的依赖。
在开发中不仅仅有基本的js代码处理，也需要加载css、图片，也包括一些高级的将ES6转成ES5代码，将TypeScript转成ES5代码，将scss、less转成css，将.jsx、.vue文件转成js文件。对于webpack本身的能力来说，对于这些转化是不支持的。那怎么办呢？给webpack扩展对应的loader就可以啦。

> **loader使用过程**

步骤一：通过npm安装需要使用的loader。
步骤二：在webpack.config.js中的modules关键字下进行配置。

#### 12.4.1 css文件处理

项目开发过程中，必然需要添加很多的样式，而样式往往写到一个单独的文件中。
在src目录中，创建一个css文件，其中创建一个normal.css文件，也可以重新组织文件的目录结构，将零散的js文件放在一个js文件夹中。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427083523.png)

==normal.css中的代码非常简单，就是将body设置为red。==

```css
body {
    background-color: red;
}
```

但是，这个时候normal.css中的样式会生效吗？当然不会，因为压根就没有引用它。
webpack也不可能找到它，因为只有一个入口，webpack会从入口开始查找其他依赖的文件。

> **在入口文件中引用**

main.js

```javascript
// 1. 使用commonjs的模块化导入
const {add, mul} = require('./js/mathUtils')

// 输出结果
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用es6的模块化规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css')
```

执行 ==npm run build== 命令后出现错误！！！

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427084049.png)

> **加载*.css文件和格式必须有对应的loader**

文档目录: [https://webpack.docschina.org/loaders/#styling](https://webpack.docschina.org/loaders/#styling)

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210426231750.png)

**安装CSS-loader**

```css
cnpm install --save-dev css-loader@3.6.0
```

**安装style-loader**

```css
cnpm install --save-dev style-loader@1.3.0
```

安装以后可以在==package.json==文件中查看到版本号。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427092459.png)

**配置webpack.config.js**

```javascript
// 1.获得路径
const path = require('path');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      { test: /\.css$/,
        /*
        css-loader只负责将css文件进行加载
        style-loader负责将样式添加到DOM中
        使用多个loader时, 是从右向左
        */
        use: ['style-loader','css-loader']
      }
    ]
  }
}
```

执行==npm run build==命令，可能会出现以下的问题。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427092714.png)

==通过查看错误提示，发现会不会有可能是css-loader的版本太高了，所以把css-loader的版本由4.2.0改为了3.6.0！！！==

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427092926.png)

**执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427102550.png)

#### 12.4.2 less文件处理

**项目目录**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427104146.png)

> **在入口文件中引用**

main.js

```java
// 1. 使用commonjs的模块化导入
const {add, mul} = require('./js/mathUtils')

// 输出结果
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用es6的模块化规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')
document.write('<h3>kobe是mvp!!!</h3>')
```

> **加载*.less文件和格式必须有对应的loader**

文档目录: [https://webpack.docschina.org/loaders/#styling](https://webpack.docschina.org/loaders/#styling)

**安装less-loader**

```css
cnpm install less-loader@5.0.0 --save-dev
```

**安装less**

```css
cnpm install less@3.13.1--save-dev
```

安装以后可以在==package.json==文件中查看到版本号。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427110651.png)

**配置webpack.config.js**

```javascript
// 1.获得路径
const path = require('path');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        /*
        css-loader只负责将css文件进行加载
        style-loader负责将样式添加到DOM中
        使用多个loader时, 是从右向左
        */
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
}
```

执行==npm run build==命令。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427110855.png)

> 执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427110947.png)

#### 12.4.3 图片文件处理

**项目目录**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427153730.png)

**normal.css中的样式**

```css
body {
    background: url("../img/timg.jpg");
}
```

> 加载图片文件和格式必须有对应的loader

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427112952.png)

文档目录: [https://webpack.docschina.org/loaders/#files](https://webpack.docschina.org/loaders/#files)

**安装url-loader**

```css
cnpm install url-loader@2.0.0 --save-dev
```

**安装file-loader**

```css
cnpm install file-loader@2.0.0 --save-dev
```

安装以后可以在==package.json==文件中查看到版本号。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427153559.png)	

**配置webpack.config.js**

```javascript
// 1.获得路径
const path = require('path');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      { test: /\.css$/,
        /*
        css-loader只负责将css文件进行加载
        style-loader负责将样式添加到DOM中
        使用多个loader时, 是从右向左
        */
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时会将图片编译成base64字符串形式
              //当加载的图片，大于limit时需要使用file-loader模块进行加载
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
```

执行==npm run build==命令。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427110855.png)	

> 执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427153955.png)	

#### 12.4.4 ES6语法处理

果希望将ES6的语法转成ES5，那么就需要使用babel，而在webpack中，直接使用babel对应的loader就可以了。

**安装babel-loader**

```css
cnpm install --save-dev babel-loader@7 babel-core babel-preset-es2015
```

安装以后可以在==package.json==文件中查看到版本号。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210427161332.png)

**配置webpack.config.js**

```javascript
// 1.获得路径
const path = require('path');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      { test: /\.css$/,
        /*
        css-loader只负责将css文件进行加载
        style-loader负责将样式添加到DOM中
        使用多个loader时, 是从右向左
        */
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
```

==重新打包，查看bundle.js文件，发现其中的内容变成了ES5的语法==。

### 12.5 webpack配置Vue

#### 12.5.1 引入vue.js

安装Vue，在实际项目中也会使用vue的，所以并不是开发时依赖。

```css
cnpm install vue@2.5.11 --save
```

main.js

```javascript
import Vue from 'vue'

new Vue({
    el:'#app',
    data:{
        message:'hello Vue.js!!!'
    }
})
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>webpack配置Vue</title>
</head>
<body>

<div id = "app">
  {{message}}
</div>
<!--引入js文件-->
<script src="dist/bundle.js"></script>
</body>
</html>
```

==执行npm run build 命令结果，报错！！！==

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428000649.png)

> **解决方案修改webpack的配置**

**webpack.config.js**

```javascript
// 以下内容
resolve: {
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
```

执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428001556.png)

#### 12.5.2 el和template区别

> **正常运行之后，来考虑另外一个问题**

如果希望将data中的数据显示在界面中，就必须是修改index.html
但是html模板在之后的开发中，并不希望手动的来频繁修改。

> **定义template属性**

在前面的Vue实例中，我们定义了el属性，用于和index.html中的#app进行绑定，让Vue实例之后可以管理它其中的内容。
这里，可以将div元素中的{{message}}内容删掉，只保留一个基本的id为div的元素。

> **el和template模板的关系是什么呢？**

知道el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等。

而如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。

这样做之后就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可。

**代码示例**

main.js

```javascript
import Vue from 'vue'

new Vue({
    el:'#app',
    template:`
    <div>
        <h3>{{message}}</h3>
        <button @click= "btnClick">按钮</button>
        <h3>{{name}}</h3>
    </div>
    `,
    data:{
        message:'hello Vue.js!!!',
        name: 'guardwhy'
    },
    methods:{
        btnClick(){
            
        }
    }
})
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>webpack配置Vue</title>
</head>
<body>

<div id = "app">
</div>
<!--引入js文件-->
<script src="dist/bundle.js"></script>
</body>
</html>
```

执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428014413.png)

#### 12.5.3 Vue组件化开发

**项目目录**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428124126.png)

> **安装vue-loader和vue-template-compiler**

```css
cnpm install vue-loader vue-template-compiler --save-dev
```

安装以后可以在==package.json==文件中查看到版本号。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428124610.png)	

修改webpack.config.js的配置文件

```javascript
// 1.获得路径
const path = require('path');
// 引入webpack
const webpack = require('webpack');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }

    ]
  },
  resolve: {
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

```

> **代码示例**

main.js

```javascript
import Vue from 'vue'
import App from "./vue/App.vue"

new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})
```

App.vue

```vue
<template>
  <div>
    <h3 class="title">{{message}}</h3>
    <button @click="btnClick">按钮</button>
    <h3>{{name}}</h3>
    <Cpn></Cpn>
  </div>
</template>

<script>
  // 引入组件
  import Cpn from './Cpn'
  export default {
    name: "App",
    // 注册Cpn组件
    components: {
      Cpn
    },
    data(){
      return {
        message: 'hello webpack!!!!',
        name: 'guardwhy'
      }
    },
    methods: {
      btnClick(){

      }
    }
  }
</script>

<style scoped>
  .title {
    color: green;
  }
</style>
```

Cpn.vue

```vue
<template>
  <div>
    <h3>我是NBA球星</h3>
    <p>我是三分王，我是Curry</p>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return{
      name: 'hello Vue.js!!!'
    }
  }
}
</script>

<style scoped>

</style>
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>webpack配置Vue</title>
</head>
<body>

<div id = "app">
</div>
<!--引入js文件-->
<script src="dist/bundle.js"></script>
</body>
</html>
```

执行命令`npm run build`，执行成功！！！

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428125315.png)

### 12.6 认识plugin

**plugin是什么？**

- plugin是插件的意思，通常是用于对某个现有的架构进行扩展。
- webpack中的插件，就是对webpack现有功能的各种扩展，比如打包优化，文件压缩等等。

**loader和plugin区别**

- loader主要用于转换某些类型的模块，它是一个转换器。
- plugin是插件，它是对webpack本身的扩展，是一个扩展器。

**plugin的使用过程：**

- 步骤一：通过npm安装需要使用的plugins(某些webpack已经内置的插件不需要安装)。
- 步骤二：在webpack.config.js中的plugins中配置插件。

#### 12.6.1 打包html的plugin

> **HtmlWebpackPlugin插件具体作用**

自动生成一个index.html文件(可以指定模板来生成)。
将打包的js文件，自动通过script标签插入到body中。

> 安装HtmlWebpackPlugin插件

```css
cnpm install html-webpack-plugin --save-dev
```

安装以后可以在==package.json==文件中查看到版本号。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428141329.png)

**修改webpack.config.js文件**

```javascript
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    // publicPath: 'dist/'
  }，
  plugins: [
    // 添加插件
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
}
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>webpack配置Vue</title>
</head>
<body>

<div id = "app">
</div>
</body>
</html>
```

==使用命令 npm run build 执行操作，发现报错！！！==

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428141905.png)

> **解决方案！！！**

HtmlWebpackPlugin插件版本太高了，将HtmlWebpackPlugin版本设置为2.0.0

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428142505.png)

终端执行命令

```css
cnpm install
```

**操作结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428142731.png)	

#### 12.6.2 js压缩的Plugin

> 安装uglifyjs-webpack-plugin插件

```javascript
cnpm install uglifyjs-webpack-plugin@1.1.1 --save-dev
```

**修改webpack.config.js文件**

```javascript
// 添加压缩js插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    // publicPath: 'dist/'
  },
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
}
```

## 13- Vue CLI详解

### 13.1 什么是Vue CLI

CLI是Command-Line Interface, 翻译为命令行界面, 但是俗称脚手架。
Vue CLI是一个官方发布 vue.js 项目脚手架，使用 vue-cli 可以快速搭建Vue开发环境以及对应的webpack配置。

### 13.2 Vue CLI使用前提条件

#### 13.2.1 安装NodeJS

可以直接在官方网站中下载安装，网址: [ http://nodejs.cn/download/]( http://nodejs.cn/download/)

默认情况下自动安装Node和NPM，Node环境要求8.9以上或者更高版本。

检测安装的版本

```css
node -V
```

#### 13.2.2 什么是NPM呢？

NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。

> **注意事件**

NPM官方的管理的包都是从 [http://npmjs.com](http://npmjs.com)下载的，但是这个网站在国内速度很慢。这里推荐使用淘宝 NPM 镜像 [http://npm.taobao.org/ ](http://npm.taobao.org/ )，淘宝 NPM 镜像是一个完整npmjs.com 镜像，同步频率目前为 10分钟一次，以保证尽量与官方服务同步。

设置镜像和存储地址：

```javascript
# 由于npm代码仓库的服务器在国外，由于Great Firewall的缘故,这时可以使用淘宝的npm代码仓库，通过npm安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 安装成功后，可以通过以下命令查看cnpm版本：
cnpm -v
#设置npm下载包时保存在本地的地址(建议英文目录),通过cnpm来操作下载速度会得到很大提升，但包的版本不一定是最新的。
cnpm config set prefix "E:\\Develop\\repo_npm"
#查看cnpm配置信息
cnpm config list
```

==查看自己的npm版本！！！==

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428175025.png)

#### 13.2.3 安装Webpack

Vue.js官方脚手架工具就使用了webpack模板，对所有的资源会压缩等优化操作。
它在开发过程中提供了一套完整的功能，能够使得我们开发过程中变得高效。

> Webpack的全局安装

```css
cnpm install webpack@3.6.0 -g
```

### 13.3 Vue CLI2的使用

#### 13.3.1 Vue CLl安装

目前主流版本是 2.x 和 3.x 版本(4.0 由于版本过高 很多插件不支持),安装3.x 以上的版本是因为该版本既可以创建2.x项目与3.x 项目。

安装Vue脚手架

```css
npm install -g @vue/cli@3.12.1
```

输入 vue -V 查看版本

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428181127.png)

> **拉取 2.x 模板 (旧版本)**

Vue CLI >= 3 和旧版使用了相同的 `vue` 命令，所以 Vue CLI 2 (`vue-cli`) 被覆盖了。如果仍然需要使用旧版本的 `vue init` 功能，可以全局安装一个桥接工具。

```css
cnpm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project
```

#### 13.3.2 Vue CLI2详解

> **使用Vue CLI2创建工程**

```css
vue init webpack vuecli2_test01
```

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428202728.png)

> **目录结构详解**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210428203729.png" style="zoom:67%;" />

> **Runtime-Compiler和Runtime-only的区别**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429132115.png)

**简单总结**

如果在之后的开发中，你依然使用template，就需要选择Runtime-Compiler。如果之后的开发中，使用的是.vue文件夹开发，那么可以选择Runtime-only。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429133103.png)

> **Vue程序运行过程**

**Runtime-Compiler执行过程**，==template -> ast ->render ->virtual dom ->UI==

**Runtime-only执行过程**，==render -> virtual dom ->UI==，Runtime-only代码量更少，性能更加高效！！！

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429133332.png" style="zoom:80%;" />

> **render函数的使用**

Runtime-Compiler中的入口

```javascript
import Vue from 'vue'
import App from './App'

// 注册组件
const cpn = {
  template:'<div>{{message}}</div>',
  data(){
    return {
      message:'hello VueCLI！！！'
    }
  }
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(createElement){
    //方式 1.createElement('标签'，{标签的属性}，['数组'])
    // return createElement('h3',{class:'st1'},['hello Vue.js!!!'])

     // 方式2.传入组件对象
  // return createElement(cpn)

  return createElement(App)
  }
 
})
```

执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429145143.png)



Runtime-only

```javascript
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
```

执行结果

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429145343.png)

> Vue文件中的template是怎么处理的?

是由vue-template-compiler处理的(render -> virtual dom -> UI)，可以在==package.json==文件中查看到版本号。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429154705.png)

### 13.4 Vue CLI3 的使用

#### 13.4.1 创建项目

> **使用Vue CLI3创建工程**

```css
vue create vuecli3test
```

**配置说明**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429164125.png)

**目录结构详解**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429164800.png)	

终端执行`npm run serve`，执行成功！！！

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429165528.png)	

#### 13.4.2 修改配置

> 方式1：终端执行`vue ui`命令，可直接在浏览器中就行修改。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429174056.png)	

> 方式二：可以在Service.js修改！！

<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210429174428.png" style="zoom:80%;" />	

> 方式三: 自定义配置，起别名建立一个vue.config.js文件

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210430114727.png)	

## 14-Vue-router详解

### 14.1 什么是路由

路由（routing）就是通过互联的网络把信息从源地址传输到目的地址的活动。路由中有一个非常重要的概念叫路由表，路由表本质上就是一个映射表, 决定了数据包的指向。

> **后端路由渲染(JSP)**

早期的网站开发整个HTML页面是由服务器来渲染的，服务器直接生产渲染好对应的HTML页面, 返回给客户端进行展示。==后端处理URL和页面之间的映射关系！！==

**具体流程**

- 一个页面有自己对应的网址, 也就是URL。

- URL会发送到服务器, 服务器会通过正则对该URL进行匹配, 并且最后交给一个控制器进行处理。

- 控制器进行各种处理, 最终生成HTML或者数据, 返回给前端(Java代码作用是从数据库中读取数据，并将它动态的放在页面中)。

  ![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210430133025.png)	

**后端渲染优点**

当页面中需要请求不同的路径内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户顿。
这种情况下渲染好的页面, 不需要单独加载任何的js和css, 可以直接交给浏览器展示, 这样也有利于SEO的优化。

**后端渲染缺点**

- 是整个页面的模块由后端人员来编写和维护的。
- 另一种情况是前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码。
- 而且通常情况下HTML代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情。

> **前后端分离阶段**

**前后端分离优点**

- 随着Ajax的出现, 有了前后端分离的开发模式，后端只提供API来返回数据, 前端通过Ajax获取数据, 并且可以通过JavaScript将数据渲染到页面中。
- 这样做最大的优点就是前后端责任的清晰, 后端专注于数据上, 前端专注于交互和可视化上。
- 并且当移动端(iOS/Android)出现后, 后端不需要进行任何处理, 依然使用之前的一套API即可，目前很多的网站依然采用这种模式开发。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210430152513.png)

> **SPA页面阶段**

SPA页面是单页富应用，整个网页只有一个html页面！！！==其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由==。

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210430161044.png)

### 14.2 认识vue-router

**创建项目**

```css
vue init webpack 05-vueroutertest
```

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210430180446.png)

vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。

> **vue-router是基于路由和组件的**

路由用于设定访问路径, 将路径和组件映射起来，在vue-router的单页面应用中, 页面的路径的改变就是组件的切换。

#### 14.2.1 安装vue-router

> **步骤一: 安装vue-router**

```css
cnpm install vue-router --save
```

> **步骤二: 在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)**

- 第一步：导入路由对象，并且调用 Vue.use(VueRouter)。
- 第二步：创建路由实例，并且传入路由映射配置。

<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210430185052.png" style="zoom:80%;" />	

- 第三步：在Vue实例中挂载创建的路由实例

  <img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210430185400.png" style="zoom:80%;" />	

#### 14.2.2 使用vue-router的步骤	

第一步: 创建路由组件。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501101750.png)

第二步: 配置路由映射: 组件和路径映射关系。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501105749.png)	

第三步: 使用路由: 通过`<router-link>和<router-view>`。

- `<router-link>`: 该标签是一个vue-router中已经内置的组件, 它会被渲染成一个`<a>`标签。
- `<router-view>`: 该标签会根据当前的路径, 动态渲染出不同的组件。
- 网页的其他内容, 比如顶部的标题/导航, 或者底部的一些版权信息等会和`<router-view>`处于同一个等级。
- 在路由切换时, 切换的是`<router-view>`挂载的组件, 其他内容不会发生改变。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501113137.png)

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501114039.png)

> **路由的默认路径**

让路径默认跳到到首页, 并且`<router-view>`渲染首页组件。

**index.js**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501143148.png)

**配置解析**:

- 在routes中又配置了一个映射，path配置的是根路径: /
- redirect是重定向, 也就是我们将根路径重定向到/home的路径下。

> **HTML5的History模式**

- 改变路径的方式有两种: ==URL的hash，HTML5的history==。
- 默认情况下, 路径的改变使用的URL的hash。

如果希望使用HTML5的history模式, 非常简单, 进行如下配置即可。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501144628.png)	

> **router-link其他属性**

- tag可以指定`<router-link>`之后渲染成什么组件。
- replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中。
- 当`<router-link>`对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class，设置active-class可以修改默认的名称。==但是通常不会修改类的属性, 会直接使用默认的router-link-active即可==。

  ![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501151102.png)	

> **修改linkActiveClass**

class具体的名称也可以通过router实例的属性进行修改。exact-active-class类似于active-class, 只是在精准匹配下才会出现的class。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501151743.png)

#### 14.2.3 路由代码跳转

有时候, 页面的跳转可能需要执行对应的JavaScript代码, 这个时候, 就可以使用第二种跳转方式了。

·![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501153950.png)

### 14.3 路由的懒加载

#### 14.3.1 动态路由

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501171332.png)

在某些情况下，一个页面的path路径可能是不确定的，当进入用户界面时，希望是如下的路径。

/user/userid或/user/username，这种path和Component的匹配关系，称之为动态路由。

> **代码示例**

**User.vue**

```html
<template>
  <div>
    <h3>用户界面</h3>
    <p>学习Vue.js!!!</p>
    <h3>{{userId}}</h3>
    <!--直接拿-->
    <!-- <h2>{{$route.params.userid}}</h2> -->
  </div>
</template>

<script>
    export default {
        name: "User",
        computed:{
            userId(){
                // 拿到的是哪个路由处于活跃状态，就是拿到哪个路由！！
                return this.$route.params.userid
            }
        }
    }
</script>

<style scoped>

</style>
```

**index.js**

```javascript
// 配置路由相关的信息
import Vue from 'vue'

// 导入组件
import User from "../components/User";
import VueRouter from 'vue-router';

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.定义路由
const routes = [
  {
    path:'/user/:userid',
    component: User
  }
]

// 3.创建router实例
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass: 'active'
})

// 4.导出router实例
export default router
```

**APP.vue**

```html
<template>
  <div id="app">
    <h2>中国大学mooc</h2>
    <router-link :to="'/user/'+ userId" tag="button" replace>用户</router-link>
    <router-view></router-view>
    <h3>没有围墙的大学！！</h3>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'guardwhy'
      }
    }
  }
</script>

<style>
  .active{
    color: red;
  }
</style>
```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210501171201.png" style="zoom:80%;" />

#### 14.3.2 路由的懒加载

当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
如果能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

> **路由懒加载做了什么?**

路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块。
只有在这个路由被访问到的时候, 才加载对应的组件。

> **懒加载的方式**

方式一: 结合Vue的异步组件和Webpack的代码分析。

```css
const Home = resolve => { require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.vue')) })};
```

方式二: AMD写法

```css
const About = resolve => require(['../components/About.vue'], resolve);
```

方式三: 在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割。

```css
const Home = () => import('../components/Home.vue')
```

> **路由懒加载的效果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502004731.png)

### 14.4 嵌套路由

嵌套路由是一个很常见的功能。比如在home页面中, 希望通过/home/news和/home/message访问一些内容，一个路径映射一个组件, 访问这两个路径也会分别渲染两个组件。

> **路径和组件的关系如下**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502100731.png)

> **实现嵌套路由有两个步骤**

创建对应的子组件, 并且在路由映射中配置对应的子路由。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502101143.png)

index.js

<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502101430.png" style="zoom:80%;" />	

在组件内部使用`<router-view>`标签。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502101717.png)

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502102014.png)

### 14.5 传递参数的方式

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502112008.png)	

传递参数主要有两种类型: params和query。

> **params的类型**

- 配置路由格式: /router/:id
- 传递的方式: 在path后面跟上对应的值
- 传递后形成的路径: /router/123, /router/abc。

> **query的类型**

- 配置路由格式: /router, 也就是普通配置。
- 传递的方式: 对象中使用query的key作为传递方式。
- 传递后形成的路径: /router?id=123, /router?id=abc。

> **传递参数方式一: <router-link>**

**Profile.vue**

```html
<template>
  <div>
    <p>用户基本档案</p>
  </div>
</template>

<script>
    export default {
        name:"Profile"
    }
</script>

<style scoped>
</style>
```

**index.js**

```javascript
// 配置路由相关的信息
import Vue from 'vue'

// 导入组件
import VueRouter from 'vue-router';

// 路由懒加载
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.定义路由
const routes = [
  {
    path:'/profile',
    component:Profile
  }
]

// 3.创建router实例
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass: 'active'
})

// 4.导出router实例
export default router
```

**App.vue**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502112637.png)

> **传递参数方式二: JavaScript代码**

**App.vue**

```html
<template>
  <div id="app">
    <h2>中国大学mooc</h2>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view></router-view>
    <h3>没有围墙的大学！！</h3>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'guardwhy'
      }
    },
    methods: {
      userClick(){
        this.$router.push('/user/'+ this.userId)
      },
      profileClick(){
        this.$router.push({
          path: '/profile',
          query:{
            name: 'guardwhy',
            age : 28,
            height: 1.72
          }
        })
      }
    },
  }
</script>

<style>
  .active{
    color: red;
  }
</style>
```

> **获取参数**

获取参数通过$route对象获取的，在使用了 vue-router 的应用中，路由对象会被注入每个组件中，赋值为 this.$route ，并且当路由切换时，路由对象会被更新。

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502120343.png)

### 14.6 导航守卫

#### 14.6.1 为什么使用导航守卫?

> **普通的修改方式**

- 能比较容易想到的修改标题的位置是每一个路由对应的组件.vue文件中。
- 通过mounted声明周期函数, 执行对应的代码进行修改即可。
- 但是当页面比较多时, 这种方式不容易维护(因为需要在多个页面执行类似的代码)。

> **什么是导航守卫?**

vue-router提供的导航守卫主要用来监听监听路由的进入和离开的。

vue-router提供了beforeEach和afterEach的钩子函数, 它们会在路由即将改变前和改变后触发.

#### 14.6.2 导航守卫使用

> **可以利用beforeEach来完成标题的修改**

首先, 我们可以在钩子当中定义一些标题, 可以利用meta来定义。

<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502150018.png" style="zoom: 67%;" />	

其次, 利用==导航守卫(前置钩子hook)==,修改我们的标题。

<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502150405.png" style="zoom:67%;" />	

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502150629.png" style="zoom: 80%;" />

#### 14.6.3 导航守卫补充

如果是后置钩子, 也就是afterEach, 不需要主动调用next()函数。

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502154321.png" style="zoom:80%;" />

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210502154418.png" style="zoom:80%;" />

钩子函数参考文档： [https://router.vuejs.org/zh/guide/advanced/navigation-guards.html](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

## 15- TabBar实现

### 15.1 项目目录

创建项目: `vue init webpack tabbardemo`

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210503134153.png)

### 15.2 项目实现代码

项目所需的图片：[https://pan.baidu.com/s/1T0LxSsT4yGamy3giIKcNFw ](https://pan.baidu.com/s/1T0LxSsT4yGamy3giIKcNFw ) 提取码：bo79 

> **App.vue**

```html
<template>
  <div id="app">
    <!--使用组件-->
    <router-view></router-view>
   <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// 导入主键
import MainTabBar from "components/maintabbar/MainTabBar";

export default {
  name: 'App',
  // 注册组件
  components:{
    MainTabBar
  }
  
}
</script>

<style>
  @import "./assets/css/base"
</style>
```

> **MainTabBar.vue**

```html
<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="pink">
      <img slot="item-icon" src="~assets/img/tabbr/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbr/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="pink">
      <img slot="item-icon" src="~assets/img/tabbr/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbr/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="pink">
      <img slot="item-icon" src="~assets/img/tabbr/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbr/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="deepPink">
      <img slot="item-icon" src="~assets/img/tabbr/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbr/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 导入组件
import TabBarItem from 'components/tabber/TabBarItem'
import TabBar from 'components/tabber/TabBar'
    export default {
        name: "MainTabBar",
        components: {
            TabBarItem,
            TabBar
        }
    }
</script>

<style scoped>
</style>
```

> **TabBar.vue**

```html
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #ff6666;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100,.2);
  }
</style>
```

> **TabBarItem.vue**

```html
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        // 传递参数
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !==-1
            },
            activeStyle(){
                return this.isActive ? {color : this.activeColor} : {}
            }
        },
        methods: {
           itemClick(){
               this.$router.replace(this.path)
           }
        }
    }
</script>

<style scoped>
 .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
```

> **Cart.vue**

```html
<template>
  <h3>购物车</h3>
</template>

<script>
  export default {
    name: "Cart"
  }
</script>

<style scoped>
</style>
```

> **Category.vue**

```html
<template>
  <h3>分类</h3>
</template>

<script>
  export default {
    name: "Category"
  }
</script>

<style scoped>

</style>
```

> **Home.vue**

```html
<template>
  <h3>首页</h3>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
```

> **Profile.vue**

```html
<template>
  <h3>个人</h3>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
```

> **index.js**

```javascript
import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
// 1.安装插件
Vue.use(VueRouter)
// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router =  new VueRouter({
  routes,
  // 使用history
  mode: 'history'
})

// 3.导出router
export default router
```

### 15.3 执行结果

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210503144942.png)

## 16-Vuex 详解

### 16.1 Vuex是做什么的?

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。

它采用 集中式存储管理 应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

> **状态管理到底是什么？**

可以简单的将其看成把需要多个组件共享的变量全部存储在一个对象里面。然后，将这个对象放在顶层的Vue实例中，让其他组件可以使用。

Vuex就是为了提供这样一个在多个组件间共享状态的插件。

> **管理什么状态呢?**

如果你做过大型开放，一定遇到过多个状态，在多个界面间的共享问题。比如用户的登录状态、用户名称、头像、地理位置信息等等。比如商品的收藏、购物车中的物品等等。
这些状态信息，我们都可以放在统一的地方，对它进行保存和管理，而且它们还是响应式的。

### 16.2 单界面的状态管理

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504122131.png)

State：不用多说，就是我们的状态。（可以当做就是data中的属性）
View：视图层，可以针对State的变化，显示不同的信息。
Actions：这里的Actions主要是用户的各种操作：点击、输入等等，会导致状态的改变。

> **代码示例**

counter需要某种方式被记录下来，也就是我们的State。

counter目前的值需要被显示在界面中，也就是View部分。

界面发生某些操作时（这里是用户的点击，也可以是用户的input），需要去更新状态，也就是我们的Actions

```html
<template>
  <div class="test">
    <div>当前计数:{{counter}}</div>
    <button @click="counter+=1">+1</button>
    <button @click="counter-=1">-1</button>
  </div>
</template>

<script>
export default {
  name: "hello",
  data(){
    return {
      counter:0
    }
  }
}
</script>

<style scoped>

</style>
```

### 16.3 多界面状态管理

创建项目`vue init webpack vuetest`

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504133341.png)

进入项目终端执行`cnpm install vuex --save` 命令。

> **全局单例模式（大管家）**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504132423.png)

现在要做的就是将共享的状态抽取出来，交给我们的大管家，统一进行管理。
之后，每个试图，按照规定好的规定，进行访问和修改等操作。这就是Vuex背后的基本思想。

> **代码示例**

先创建一个文件夹store，并且在其中创建一个index.js文件

**index.js**

```javascript
// 导入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state:{
    counter: 1000
  },
  // 方法
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  }
})

// 导出store
export default store
```

挂载到Vue实例中,导入store对象，并且放在new Vue中。

这样，在其他Vue组件中，就可以通过`this.$store`的方式，获取到这个store对象了。

**main.js** 

```javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```

**HelloVuex.vue**

```html
<template>
  <div>
    <h3>{{$store.state.counter}}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloVuex"
}
</script>

<style scoped>
</style>
```

**APP.vue**

通过提交mutation的方式，而非直接改变store.state.count。

Vuex可以更明确的追踪状态的变化，所以不要直接改变store.state.count的值。

```html
<template>
  <div id="app">
    <h3>====APP组件====</h3>
    <h3>{{$store.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h3>++++HelloVuex组件++++</h3>
    <HelloVuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  // 注册组件
  components:{
    HelloVuex
  },
  data(){
    return{
      message: 'hello Vue.js!!!'
    }
  },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
</style>

```

**执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504135355.png" style="zoom:80%;" />

### 16.4 Vuex核心概念

#### 16.4.1 Getters基本使用

有时候，我们需要从store中获取一些state变异后的状态。

获取学生年龄大于20的个数

```css
// 创建对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state:{
    students:[
      {id:1, name: 'guardwhy', age:18},
      {id:2, name: 'kobe', age:41},
      {id:3, name: 'James', age:35},
      {id:4, name: 'Rondo', age:32}
    ]
  }
})
```

可以在Store中定义getters

```css
getters:{
   arrayStu(state){
    // 返回结果
    return state.students.filter(s =>s.age > 20)
  }
}
```

> **代码示例**

**index.js**

```javascript
// 导入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state:{
    students:[
      {id:1, name: 'guardwhy', age:18},
      {id:2, name: 'kobe', age:41},
      {id:3, name: 'James', age:35},
      {id:4, name: 'Rondo', age:32}
    ]
  },
  getters:{
    arrayStu(state){
      // 返回结果,获取学生年龄大于20的个数
      return state.students.filter(s =>s.age > 20)
    },
    arrayStuLength(state, getters){
      return getters.arrayStu.length
    },
    // 判断年龄
    arrayStuAge(state){
      // return function (age){
      //   return state.students.filter(s => s.age > age)
      // }
      return age =>{
        return state.students.filter(s => s.age > age)
      }
    }
  }
})

// 导出store
export default store
```

**HelloVuex.vue**

```html
<template>
  <div>
    <h3>{{$store.state.counter}}</h3>
    <h3>{{$store.getters.arrayStu}}</h3>

  </div>
</template>

<script>
export default {
  name: "HelloVuex"
}
</script>

<style scoped>

</style>
```

**APP.vue**

```html
<template>
  <div id="app">
    <h3>++++App组件内容:getters相关信息++++</h3>
    <h3>{{$store.getters.arrayStu}}</h3>
    <h3>{{$store.getters.arrayStuLength}}</h3>
    <h3>{{$store.getters.arrayStuAge(33)}}</h3>

    <h3>++++HelloVuex组件内容:getters相关信息++++++++</h3>
    <HelloVuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  // 注册组件
  components:{
    HelloVuex
  }
}
</script>

<style>
</style>
```

> **执行结果**

​	<img src="https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504183508.png" style="zoom: 67%;" />

#### 16.4.2 Mutation基本使用

Vuex的store状态的更新唯一方式：提交Mutation。

> **Mutation主要包括两部分**

一个是字符串的事件类型（type）。
一个是回调函数（handler）,该回调函数的第一个参数就是state。

**mutation的定义**

```css
mutations:{
    increment(state){
        state.counter++
    },
    decrement(state){
        state.counter--
    }
}
```

**通过mutation更新**

```css
increment: function(){
  this.$store.commit('increment')
}
```

> **Mutation传递参数**

在通过mutation更新数据的时候, 有可能希望携带一些额外的参数，==参数被称为是mutation的载荷(Payload)==。

如果参数不是一个，==比如有很多参数需要传递，通常会以对象的形式传递, 也就是payload是一个对象==。这个时候可以再从对象中取出相关的信息。

**index.js**

```javascript
// 导入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state:{
    counter:10,
    students:[
      {id:1, name: 'guardwhy', age:18},
      {id:2, name: 'kobe', age:41},
      {id:3, name: 'James', age:35},
      {id:4, name: 'Rondo', age:32}
    ]
  },
  // 方法
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // 普通提交方式: payload(负载)
    incrementCount(state, count){
     state.counter += count
    },
    addStudent(state, stu){
      state.students.push(stu)
    }
  },
  getters:{
    arrayStu(state){
      // 返回结果
      return state.students.filter(s =>s.age > 20)
    }
  }
})

// 导出store
export default store
```

**App.vue**

```html
<template>
  <div id="app">
    <h3>====APP组件内容====</h3>
    <h3>{{$store.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>


    <h3>++++App组件内容:getters相关信息++++</h3>
    <h3>{{$store.getters.arrayStu}}</h3>
    <h3>++++HelloVuex组件内容:getters相关信息++++++++</h3>
    <HelloVuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  // 注册组件
  components:{
    HelloVuex
  },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // 1.普通的提交封装
      this.$store.commit('incrementCount', count)
    },
    addStudent(){
      // 创建学生对象
      const stu = {id: 5, name: 'curry', age:34}
      this.$store.commit('addStudent', stu)
    },
  }
}
</script>
<style>
</style>
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504204405.png)

#### 16.4.3 Mutation提交风格

Vue还提供了另外一种风格, 它是一个包含type属性的对象。

**index.js**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504205701.png)

**App.vue**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504205752.png)

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504205854.png)

> **Mutation响应规则**

Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新。

这就要求必须遵守一些Vuex对应的规则，==提前在store中初始化好所需的属性==。

**index.js**

这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化，当属性发生变化时，会通知所有界面中的用到该属性的地方，让界面发生刷新。

```javascript
// 导入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state:{
    info:{
      name: 'harden',
      age: 31,
      height: 1.93
    }
  },
  // 方法
  mutations:{
    updateInfo(state){
      // state.info.name = 'guardwhy'
      /*
      * 这方式是无法做到响应式的
      * state.info['address'] = '广州'
      * delete state.info.age
      */
      Vue.set(state.info, 'address', '广州')
      // 删除age
      Vue.delete(state.info, 'age')
    }
  }
})

// 导出store
export default store
```

**App.vue**

```html
<template>
  <div id="app">
    <h3>------App内容:Info对象是否是响应式----</h3>
    <h3>{{$store.state.info}}</h3>
    <button @click="updateInfo">修改信息</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
    export default {
      name: 'App',
      // 注册组件
      components:{
        HelloVuex
      },
      methods:{
        updateInfo(){
          this.$store.commit('updateInfo')
        }
      }
    }
</script>
<style>
</style>
```

**修改信息前**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504231059.png)

**修改信息响应后**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210504231321.png)

#### 16.4.4 Action的基本使用

==不要再Mutation中进行异步操作==，Action类似于Mutation, 但是是用来代替Mutation进行异步操作的。

> **context是什么?**

context是和store对象具有相同方法和属性的对象。
也就是说, 可以通过context去进行commit相关的操作, 也可以获取context.state等。

**index.js**

```javascript
// 导入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state:{
    info:{
      name: 'harden',
      age: 31,
      height: 1.93
    }
  },
  // 方法
  mutations:{
    updateInfo(state){
      Vue.set(state.info, 'address', '广州')
      // 删除age
      Vue.delete(state.info, 'age')
    }
  },
  getters:{
    arrayStu(state){
      // 返回结果
      return state.students.filter(s =>s.age > 20)
    }
  },
  actions:{
    // 方式1
    /*
    aUpdateInfo(context, payload){
      setTimeout(()=>{
        context.commit('updateInfo')
        console.log(payload.message);
        payload.success()
      },1000)
    }
    */

    // 方式二
    aUpdateInfo(context, payload){
      return new Promise((resolve, reject) =>{
        setTimeout(()=>{
          context.commit('updateInfo');
          // 打印结果
          console.log(payload)
          resolve('测试成功！！！')
        },1000)
      })
    }
  }
})

// 导出store
export default store
```

**App.vue**

```html
<template>
  <div id="app">
    <h3>------App内容:Info对象是否是响应式----</h3>
    <h3>{{$store.state.info}}</h3>
    <button @click="updateInfo">修改信息</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  // 注册组件
  components:{
    HelloVuex
  },
  methods:{
    updateInfo(){
      // this.$store.commit('updateInfo')

      // 方式1：异步操作
      /*
      this.$store.commit('updateInfo')
      this.$store.dispatch('aUpdateInfo',{
        message: '携带的信息!!',
        success:() =>{
          console.log('里面已经完成了');
        }
      })
      */
      // 方式二: 异步操作
      this.$store
          .dispatch('aUpdateInfo', '携带的信息')
          .then(res =>{
            console.log('里面完成了提交操作')
            console.log(res)
          })
    }
  }
}
</script>

<style>
</style>
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505011457.png)

#### 16.4.5 认识Module

> **为什么在Vuex中我们要使用模块呢？**

- Vue使用单一状态树,那么也意味着很多状态都会交给Vuex来管理。
- 当应用变得非常复杂时，store对象就有可能变得相当臃肿。
- 为了解决这个问题, Vuex允许我们将store分割成模块(Module), 而每个模块拥有自己的states、mutations、actions、getters等。

**代码示例**

**index.js**

```javascript
// 导入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建module对象
const moduleA = {
  state: {
    name: 'Duncan'
  },
  mutations: {
    updateName(state, payload){
      state.name = payload
    }
  },
  getters: {
    onename(state) {
      return state.name + 'good'
    },
    secondname(state, getters) {
      return getters.onename + ', study'
    },
    threename(state, getters, rootState) {
      return getters.secondname + rootState.counter
    }
  },
  actions: {
    aUpdateName(context){
      // 打印上下文
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', 'Durant')
      }, 1000)
    }
  }
}

// 创建对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state:{
    counter:10
  },
  modules: {
    a: moduleA
  }
})

// 导出store
export default store
```

**App.vue**

```html
<template>
  <div id="app">
    <h3>----------App内容: modules中的内容----------</h3>
    <h3>{{$store.state.a.name}}</h3>
    <button @click="updateName">修改名字</button>
    <h3>{{$store.getters.onename}}</h3>
    <h3>{{$store.getters.secondname}}</h3>
    <h3>{{$store.getters.threename}}</h3>
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  // 注册组件
  components:{
    HelloVuex
  },
  methods:{
    updateName(){
      this.$store.commit('updateName', 'jordan')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>
<style>
</style>
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505020849.png)

## 17 - 网络模块封装

### 17.1 为什么选择axios?

axios 是一个基于 promise 的 HTTP库网络请求插件.

> **基本特点**

- 可以用在浏览器==(测试网站：httpbin.org/)==和 node.js中
- 支持 Promise API。
- 自动转换 JSON 数据。
- 客户端支持防御 XSRF。

创建项目：`vue init webpack axiostest`，终端安装插件:`cnpm install axios --save`

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505134541.png)

### 17.2  axios基本使用

**App.vue**

```html
<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
```

**main.js**

```javascript
import Vue from 'vue'
import App from './App'
// 导入axios
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// 1.基本使用
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 专门用来对get请求参数的拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505134902.png)

### 17.3 axios发送并发请求

使用axios.all可以放入多个请求的数组，axios.all([]) 返回的结果是一个数组。

**main.js**

```javascript
import Vue from 'vue'
import App from './App'
// 导入axios
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// 1.axios发送并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(results => {
  console.log(results);
})
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505140207.png)

使用 axios.spread 可将数组 [res1,res2] 展开为 res1, res2。

**main.js**

```javascript
import Vue from 'vue'
import App from './App'
// 导入axios
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 2.axios发送并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) =>{
  console.log(res1);
  console.log(res2);
}))
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505142451.png)

### 17.4 axios的实例

> **为什么要创建axios的实例呢?**

- 当从axios模块中导入对象时, 使用的实例是默认的实例。
- 当给该实例设置一些默认配置时, 这些配置就被固定下来了。
- 但是后续开发中, 某些配置可能会不太一样，比如某些请求需要使用特定的baseURL或者timeout或者content-Type等。
- 这个时候, 我们就可以创建新的实例, 并且传入属于该实例的配置信息。

```javascript
import Vue from 'vue'
import App from './App'
// 导入axios
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 4.创建对应的axios实例
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance1({
    url: '/home/multidata'
  }).then(res => {
    console.log(res);
  })
  instance1({
    url: '/home/data',
    params:{
      type: 'pop',
      page: 1
    }
  }).then(res => {
    console.log(res);
  })

  const instance2 = axios.create({
    baseURL: 'http://222.111.33.33:8000',
    timeout: 10000,
    headers: {}
})
```

### 17.5 axios封装

> **方式一(回调函数)**

**request.js**

```javascript
// 导入axios
import axios from 'axios'

export function request(config, success, failure){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config)
      .then(res =>{
        success(res)
      })
      .catch(err =>{
        failure(err)
    })
}
```

**main.js**

```javascript
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
//1.封装request模块
import {request} from "./network/request";

request({
  url: '/home/multidata'
}, res =>{
  console.log(res);
}, err =>{
  console.log(err);
})
```

**执行结果**

![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505153629.png)

> **方式二(Promise函数)**

**request.js**

```javascript
// 导入axios
import axios from 'axios'

export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    // 发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
```

**main.js**

```javascript
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 5.封装request模块
import {request} from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
```

> **最终方案**

**request.js**

```javascript
// 导入axios
import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2.发送真正的网络请求
  return instance(config)
}
```

### 17.6 如何使用拦截器？

axios提供了拦截器，用于我们在发送每次请求或者得到相应后，进行对应的处理。

响应的成功拦截中，主要是对数据进行过滤。

> **代码示例**

**request.js**

```javascript
// 导入axios
import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios拦截器(请求拦截)
  instance.interceptors.request.use(config => {
    /*
    1.比如config中的一些信息不符合服务器的要求
    2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标
    3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    */
    return config
  }, err => {
    console.log(err);
  })

  // 2.1 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
```

**main.js**

```javascript
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 封装request模块
import {request} from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
```

> **执行结果**

​	![](https://guardwhy.oss-cn-beijing.aliyuncs.com/img/javaEE/SpringMVC/Test4/20210505171638.png)

## 18 - Vue生命周期

![image-20210506002422087](C:\Users\linux\AppData\Roaming\Typora\typora-user-images\image-20210506002422087.png)

