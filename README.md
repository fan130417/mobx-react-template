##简介
1. 通过create-react-app初始化项目，配合webpack+mobx搭建完整react开发项目，拥有数据持久化功能
1. 基于axios封装请求方法request。
1. 引入antd 、 antd-mobile ，按需加载模块中的子模块，通过`./.babelrc`文件开启配置
1. 在最外层拥有一个主组件RootPage，其他子组件都当成子类去引入，实现一个root管理全局组件store的思路，并且所有页面都能拥有访问到该store
1. 如果不需要该RootPage组件，也可以单独去掉，在根目录下`router.js`文件去掉组件标签

##项目介绍

在`utils/store.js`中创建一个类，去管理mobx数据处理，并将每个store都挂载在Store.stores上面
如果不需要挂载在window当成全局，可在store文件中修改。之后需要运用到其他stores可通过import去调用

```
import Store from 'utils/store.js'

let stores = Store.stores;
stores下的所有组件运用到的单个store都可以获取

```

每个组件可以有单独的store去管理该组件需要用到的数据，每个store在new 一个对象的时候，需要传入一个name，代表该store在stores中的名字，切记不能重复。
this.store = new Store({name:'a'});
stores.a 就是 上面的this.store

store中有`fire`和`on`事件，组件之间的交互可以通过两个方法去处理。也可以直接掉另一个store定义的方法。
on事件相当于监听，需要在组件调用的时候就去调用该方法，
fire事件属于触发机制，可以在需要触发上面的on事件时候去调用。
详细可看store.js里面的方法

a的store
```
a: store.js
this.on('a:on',(data)=>{//data是从fire事件传过来的，可能为空
    console.log(data);
});

or 

aEvent(data){
    console.log(data);
}

两者可都存在
```

b的store
```
stores.a.fire('a:on',data);

or

stores.a.aEvent(data);
```


##webpack配置
[webpack参考文档:https://www.webpackjs.com/concepts/](https://www.webpackjs.com/concepts/)


##src目录介绍

###assets  
其他静态资源存放，如需要引用的js

###images
图片资源存放

###styles
样式文件存放

###templates
对应的components和containers的模板文件，可暂时手动复制修改，后期实现用命令行操作模板文件创建

###utils
公共类

###components
1. BaseComponents:基础组件
```
index.js 
index.less
```
1. BusinessComponents:业务组件
```
index.js:如果需要用到store的数据或方法， 可以用 this.store.xxx去获取 或者 this.store.xxx()
index.less
store.js  
```
可以运用stores.xxx访问到当前加载的所有store。具体看回标签`项目介绍`


###containers
页面模块，可以理解为router中对应路由加载的组件的文件夹目录。
文件格式与BusinessComponents基本相似。
如果具体页面需要再细致区分，可创建文件夹区分，类似components。



##本地开发
`npm install`,`npm start`
如果需要，可在package.json文件添加反向代理proxy。
eg: "proxy": {
    "/api": {
      "target": "http://fan0417.com",
      "changeOrigin": true,
      "ws": true
    }
  }

##项目打包
npm run build





