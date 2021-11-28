# template学习
模糊查询实现

事件处理器

获取原生事件对象 @click='handleClick' 会自动传入事件对象参数 或者handleClick($event,...arg)

事件修饰符(once,self,prevent)

表单控件(v-model后 checkbox,radio可设value值）

表单修饰符(lazy(懒加载） number（内容必须为数字） trim(去首尾空格））

综合小项目：购物车

methods:事件绑定 逻辑计算

computed:解决模版过重的问题，必须有返回值，只求结果，同步，有缓存

watch： 重视过程  监听一个值的改变，不用返回值，可异步可同步。

## fetch&&axios
为什么用fetch
- XMLHttpRequest 是一个设计粗糙的 API，配置和调用方式非常混乱，
- 而且基于事件的异步模型写起来不友好。
- 兼容性不好

# 组件

## 全局与局部

起名字：js驼峰，html连接符

dom片段 无代码提示，无高亮 vue单文件组件解决

css只能写成行内，vue单文件组件解决

## slot插槽 (内容分发)
混合父组件的内容与子组件自己的模板-->内容分发

父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。

a. 单个slot

b. 具名slot



组件是孤岛，需要间接的通信才能交流

自定义的组件，data必须为函数

## 组件通信

父传子，子props 父传参

子传父 this.$emit()
其余见思维导图（vue05.xmind）
