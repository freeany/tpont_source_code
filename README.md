#### 使用yarn安装

> yarn install

#### 开发者运行

> yarn run server

#### 搭建脚手架用到的配置

- 使用sass(dist-sass)。
- 使用babel与eslint。

### 封装组件需要的前置知识

- button组件
  1. 组件之间的通讯
  2. 组件插槽的灵活使用
  3. props校验
- dialog组件
  1. vue过渡与动画
  2. sync修饰符
  3. 具名插槽与v-slot指令
- input组件
  1. v-model在自定义组件上的使用
- switch组件
  1.  关于对一些组件结构的思考
  2. 基于vue中radio与element-ui设计组合成一道数学题
- radio组件
  1. v-model与计算属性之间的亲密关系
- radio-group组件
  1. provide 与 inject

> 本开源项目中组件注册的方式使用了全局注册的方式， 在main.js 中进行全局注册。这样方便组件之间的相互使用。

## 1. button组件

#### 1.1 支持的参数一览

| **参数名**  |                 **参数描述**                 | 参数类型 |   默认值   |       控制方式       |
| :------: | :--------------------------------------: | :--: | :-----: | :--------------: |
|   type   | 按钮类型(primary / success / warning / danger / info) | 字符串  | default |     class样式      |
|  plain   |                 是否是朴素按钮                  | 布尔类型 |  false  |     class样式      |
|  round   |                 是否是圆角按钮                  | 布尔类型 |  false  |     class样式      |
|  circle  |                 是否是圆形按钮                  | 布尔类型 |  false  |     class样式      |
| disabled |                  是否禁用按钮                  | 布尔类型 |  false  | disabled与class样式 |
|   icon   |                   图标类名                   | 字符串  |   ''    |     class样式      |



本组件的按钮的字体图标是在element-ui上扒的。可以在icon-font上下载。字体图标如何在ui库上使用？

​	在main.js中引入 该scss文件即可。

- 一个比较难的点，
  -  正常情况下的字体图标是class="iconfont iconfont-xxx"   但是element-ui组件库 只要写后面的就可以了，这是为什么呢？
    - 做了友好的处理，使用了一个属性选择器
      - [class*=xxx] {  }  表示类名中只要包含xxx直接就匹配到了该样式。因为这个两个类名的前置都是相同的。匹配到了第二个，自然第一个就存在了。
- 关于如何判断一个插槽中是否传入了内容   ( 被占位了 )
  - created里面就可以拿到this.$slots ， 获取到的值一定是一个对象
    - 在this.$slots 中
      - 如果没有插槽，或者插槽没有被占位，则是一个空对象。
      - 如果如果是默认插槽，则对象中有一个键的名字是default。
      - 如果是具名插槽，则对象中会把该插槽的名字作为对象的一个键。


#### 1.2 事件的支持

|  事件名称   |                  事件处理方式                  |
| :-----: | :--------------------------------------: |
| click事件 | 在button组件中定义click事件，在click事件中分发click事件给使用其的父组件。 `this.emit('click', e)` |



> 关于在样式上获得  紧邻标签的写法

```css
// 找到.tp-button 后有一个类名包含 tp-icon-的 标签紧邻后有一个span标签
.tp-button [class*=tp-icon-]+span {
  margin-left: 5px;
}

// 禁止元素的文字被选中
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
```



## 2. dialog组件

### 2.1 基本的结构 

- 基本结构由插槽的形式确定

  |  插槽名称   |                   插槽说明                   |
  | :-----: | :--------------------------------------: |
  | default |                dialog的内容                 |
  |  title  | dialog的标题( dialog的标题也可以使用template的形式传入一个标签或者只传入title参数 ) |
  | footer  |               dialog的底部操作区               |

- 支持的参数一览

  |   参数名   |         参数描述          |       参数类型       |  默认值  |
  | :-----: | :-------------------: | :--------------: | :---: |
  |  title  |         对话框标题         |       字符串        |  标题   |
  |  width  |        对话框的宽度         | 字符串(符合width的值即可) |  30%  |
  |   top   |       对话框与顶部的距离       |  字符串(符合top的值即可)  | 15vh  |
  | visible | 是否显示dialog(支持sync修饰符) |       布尔值        | false |

- 支持的钩子事件

  |    事件名称    |        说明         |
  | :--------: | :---------------: |
  | afterEnter | Dialog 打开动画结束时的回调 |
  | afterLeave | Dialog 关闭动画结束时的回调 |



### 2.2 dialog组件的难点

title与footer使用插槽的形式来确定其结构，传入的width、top、visible都很简单。 那么是如何控制visible变化的呢？

- 点击dialog内容区以外以及叉号来对dialog进行隐藏。  给对应的区域添加点击事件时.self即可。

  - visible是从使用其 的父组件传入进来的，那么子组件要改变父组件中的值，只有向父组件中分发(emit) 一个事件。将 需要变化的visible的值作为分发的函数的参数中，在父组件中改变。这样的话对使用此组件的人来说很不友好。
    - 在 props 接收来的数据，要想改变其值时， vue提供了一个语法糖为 .sync。 在子组件中分发 update:xxx,  父组件与子组件进行props的数据的名字为xxx,  则vue自动约定由一个函数update:xxx函数来响应 子组件分发的函数， 其函数体就是改变xxx的值。

- 关于vue 的动画

  - vue的动画通过transition标签将元素包裹起来，通过六个类(class) 来控制一个元素的样式。

    - v-enter   -->    v-enter-active    -->   v-enter-to
    - 进入之前(准备刚开始进入--未开始)， 进入过程中， 进入后(元素已经成型)
    - v-leave   -->   v-leave-active  -->   v-leave-to
    - 离开之前(准备刚开始离开--未离开)，  离开过程中， 已经离开(元素已经消失

  - 如果使用了动画，则 通过两个类名即可控制一个元素的样式

    - v-enter-active ( 进入中的动画 )

      - `````
        .dialog-fade-enter-active {
            animation: dialog-run .3s;
          }
        `````

    - v-leave-active ( 离开中的动画 ) 

      - ```
          .dialog-fade-leave-active {
            animation: dialog-run .3s reverse;
          }
          ```
        ```

        ```

  - 使用transition包裹之后， 给tp-button设置的样式失效了，需要深度选择器去进行处理，如果不能transition包裹则可以样式穿透。

    - 应该是过渡导致了样式失效。
    - 使用深度选择器即可解决
      - css	 --> 	 >>>
      - less  -->    /deep/
      - scss -->  ::v-deep  

- 给dialog组件添加两个钩子函数， 进入后(元素已经形成了)    离开后(元素已经离开消失了)

  - (通过transition的after-enter和after-leave两个钩子触发的函数来 做 dialog组件的钩子函数)

  ```html
  <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave"></transition>
  ```

## 3. input组件

####  3.1 对于input组件的说明

- input组件的基本结构

  ```html
  <template>
    <div class="tp-input">
      <input class="tp-input__inner">
    </div>
  </template>
  ```

  >  input组件的样式覆盖原有样式，添加了原本input组件的一些属性。并且在组件标签上提供v-model进行双向数据绑定。

- input 组件的参数支持

  |     参数名称      |     参数描述     |  参数类型   |  默认值  |
  | :-----------: | :----------: | :-----: | :---: |
  |  placeholder  |     占位符      | string  |  ''   |
  |     type      |    输入框类型     | string  | text  |
  |   disabled    |      禁用      | Boolean | false |
  |   clearable   |   是否显示清空按钮   | Boolean | false |
  | show-password | 是否显示切换密码显示按钮 | Boolean | false |
  |     name      | 表单元素的name属性  | string  |  ‘’   |

- input组件的事件支持

  |  事件名称  |  事件描述  |
  | :----: | :----: |
  |  blur  | 失去焦点事件 |
  | change | 内容改变事件 |
  | focus  | 获取焦点事件 |

#### 3.2 在自定义组件上v-model的使用

- v-model用于表单的双向数据绑定， 其实它是一个语法糖。其实它背后就做了两件事情

  1. v-bind绑定一个value属性
  2. v-on给当前元素绑定了一个input事件

  ```html
  <input v-model="inputValue">
    相当于
  <input v-bind:value="inputValue" v-on:input="inputValue = $event.target.value">
  ```

  ​

- 自定义组件上使用v-model， 应该有以下操作

  1.  使用props接收一个value
  2.  分发input事件， 并传入新值

  ```html
  <my-component v-model="inputValue"></my-component>
  相当于
  <my-component v-bind:value="inputValue" v-on:input="inputValue = argument[0]"></my-component>
  	// 所以在其组件内部，使用props接收数据， 如果数据改动则需要分发input事件
  ```


#### 3.3  子组件数据控制的思想

- 父组件传进来的属性是不能改的，如果不能用分发事件的形式或者.sync的形式，则可以自定义一个布尔变量，根据条件控制此变量 && 父组件传进来的数据来 控制子组件中对应数据视图的显示。



## 4. switch组件

#### 4.1 基本结构

- switch的基本结构是label中 --> span 中 --> span 

  ```html
  <label class="hm-switch">
    <span class="hm-switch__core">
      <span class="hm-switch__button"></span>
    </span>
  </label>
  ```

- 支持的参数一览

  |     参数名称      |    参数描述    |  参数类型   |  默认值   |
  | :-----------: | :--------: | :-----: | :----: |
  |    v-model    |    双向绑定    | Boolean | false  |
  |     name      |   name属性   | string  | 'text' |
  |  activeColor  | 自定义的激活的颜色  | string  | dcdfe6 |
  | inactiveColor | 自定义的不激活的颜色 | string  | 409eff |

- switch组件 通常在表单中使用，所以需要一个name属性。

  - 将switch的value值与checkbox的checked   一一对应

  - 修改checkbox的checked值

    - this.$refs.checkbox.checked = xxx    (this.value)

  - checkbox隐藏

    ```css
    .tp-switch__input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }
    ```

## 5. radio组件

### 5.1 radio组件的难点

- 难点在于  我们设计的库要根据 vue官网的表单数据绑定的形式作为规则进行设计。 而我们采用element-ui的设计规范。 所以传入了一个label值和 v-model数据。

- type="radio"  被隐藏，使用label中的span标签作为样式。

  - 何时选中？

    - 当input 框的v-model的值与value的值相等就选中了。

  - input框中的value和v-model的值分别是什么

    - value的值是label ， v-model的值是父组件的v-mode的值。

  - 点击的时候是什么改变了？

    - 点击时 vue表单数据绑定 radio中的value 赋值给了v-model的值。(尤大大就这么设计的)

  - 所以我们要做什么？

    - 点击时将v-model 改变后的值 给 父组件中的v-model的数据。通过数据响应会改变子组件input框的v-model。从而改变样式。

      至于互斥的问题vue已经帮我们解决了。

    - 解决方案： 使用计算属性。get ()   和   set()   方法。

### 5.2 如果要对v-model进行操作, 则计算属性是最好的选择

- 支持的参数一览

  |  参数名字   |       参数描述       |       参数类型       | 默认值  |
  | :-----: | :--------------: | :--------------: | :--: |
  |  label  | 用于指定该radio的value | [String, Number] |  ''  |
  | v-model |      用于双向绑定      | [String, Number] |  ''  |

## 6. radio-group组件

### 6.1 介绍provide 与 inject

- parent元素提供provide 属性 释放  ($\color{blue}{提供}$)数据， 其子孙级元素 使用inject  接收($\color{blue}{注入}$)数据

  - 成立的充分必要条件是 组件之间存在  祖先--子孙  这样的关系

  - provide --->  Object |  () => Object

  - inject --> Array<string>  |  { key: { default: '' } }

    $parent 其实也可以拿到父组件中的数据，但是安全性不高，provide与inject一定可以拿到

- 提供的数据

  ```js
  provide () {
    return {
    'group': this
    }
  }
  ```

- 注入数据

  ```javascript
  inject: {
    group: {
      default: ''
    }
  }
  ```

- 然后 在radio中判断 是否被 radio-group包裹即可。

### 6.2 支持的参数

|  参数名称   |      参数描述       |       参数类型       | 默认值  |
| :-----: | :-------------: | :--------------: | :--: |
| v-model | 用于与radio的双向数据绑定 | [String, Number] |  ‘’  |

- 即： 将tp-radio 的v-model 放到tp-radio-group上。

## 7. checkbox组件

### 7.1 支持的参数

- |  参数名称   |      参数描述      |  参数类型   |  默认值  |
  | :-----: | :------------: | :-----: | :---: |
  |  label  | 用于指定该复选框的value | String  |  ''   |
  | v-model |     用于双向绑定     | Boolean | false |

- 单独的checkbox组件的label是其说明文字，也充当label的作用。v-model绑定的值是一个Boolean值

- 其他的与radio一致。

## 8.checkbox-group组件

### 8.1 与radio-group一致

- 支持的参数

|  参数名称   |        参数描述        | 参数类型  | 默认值  |
| :-----: | :----------------: | :---: | :--: |
| v-model | 用于与checkbox的双向数据绑定 | Array |  []  |

- 即： 将tp-checkbox的v-model 放到tp-checkbox-group上。
- 本checkbox 与 radio 根据vue的设计原则 与 element-ui的设计规范。通过一些小技巧与高级语法像数学题一样组合而成。

## 9. form组件

### 9.1 基本结构

```html
<template>
  <div class="hm-form">
    <slot></slot>
  </div>
</template>
```

## 10. form-item组件

### 10.1 基本结构

```html
<template>
  <div class="hm-form-item">
    <label class="hm-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="hm-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
```

