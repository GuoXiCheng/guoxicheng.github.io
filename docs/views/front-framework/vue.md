## vue
## 搭建一个vue项目
### 1.安装node环境
[下载node.js](https://nodejs.org/zh-cn/download/)
```bash
#查看当前node版本
node -v

#查看当前npm版本
npm -v
```
### 2.安装cnpm
```bash
#安装cnpm，-g代表全局
npm install cnpm -g
```
```bash
#查看当前cnpm版本
cnpm -v
```
### 3.安装webpack
```bash
#全局安装webpack
npm install webpack -g
```
```bash
webpack -v
```
### 3.安装vue-cli
```bash
#全局安装vue-cli
npm install vue-cli -g
```
### 4.进入vue项目目录
```bash
vue init webpack my-project-name
```
### 5.建立vue项目信息
```bash
#项目的名称，直接默认回车
Project name my-project

#项目描述，直接默认回车
Project description A Vue.js project

#作者姓名，输入名字（syf）回车
Author syf

#是否安装路由，输入y回车
Install vue-router? Yes

#是否用ESLint规范代码，输入n回车
Use ESLint to lint your code? No

#是否需要单元测试，输入n回车
Set up unit tests No

#是否需要单元测试，输入n回车
Setup e2e tests with Nightwatch? No
```
### 6.安装依赖
进入vue项目目录
```bash
npm install
```
### 7.启动项目
```bash
npm run dev
```

## 解决跨域问题
### 1.在接口上添加注解
```java
@CrossOrigin(origins = "*")
```
### 2.设置反向代理
```javascript
//在 main.js 中
import axios from 'axios'
// 设置反向代理，前端请求默认发送到 http://localhost:8088
axios.defaults.baseURL = 'http://localhost:8088' //真实的地址
```
### 3.跨域支持
```javascript
//在 config\index.js 中，找到 proxyTable 位置，修改为以下内容
proxyTable: {
        '/api': {
          target: 'http://localhost:8088',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
      }
}
```

## 解决跨域造成的sessionId不一致
### springboot增加mvc配置
```java
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {
 
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //设置允许跨域的路径
        registry.addMapping("/**")
                //设置允许跨域请求的域名
                .allowedOrigins("*")
                //是否允许证书 不再默认开启
                .allowCredentials(true)
                //设置允许的方法
                .allowedMethods("*")
                //跨域允许时间
                .maxAge(3600);
    }
}
```
### vue中配置方式
vue需要在main.js的import下增加以下代码
```javascript
axios.defaults.withCredentials = true
```
### ajax中配置方式
jQuery需要每次使用ajax时增加
```javascript
xhrFields:{
    withCredentials:true
}
```

## vue点击切换class样式
### 1. 存储当前点击元素index
在data中添加变量存储当前点击元素的index
```javascript
data() {
    return {
      activeClass: -1, // 0为默认选择第一个，-1为不选择
    };
  },
```

### 2. 传递点击元素的index
在Template的@click方法里传入index
```html
<li :class="activeClass == index ? 'active':'unactive'" 
    v-for="(item,index) in itemList" 
    :key="index" 
    @click="getItem(index)">{{itme.text}}
</li>
```

### 3. 切换class样式
在点击事件中改变data内的activeClass值
```javascript
getItme(index) {
    this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
},
```
### 4. 定义样式
```css
.active {
  color: #1e82d2;
  font-weight: bolder;
}
.unactive{
  color: #eeeeee;
  font-weight: bolder;
}
```
## vue-awesome-swiper插件
### 1. 安装插件
```bash
npm install swiper vue-awesome-swiper --save
```
### 2. 引入插件
```javascript
//全局注册
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
```
```javascript
//单页面注册
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
```
### 3. 在模板内引入
```html
<swiper v-bind:options="swiperOption">
    <swiper-slide v-for="(item,index) in banners" v-bind:key="index">
    <img :src="item" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
</swiper>
```
### 4. data内引入
```
data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    }
}
```
### 5. 设置swiper的样式
```css
.swiper-container{
    margin-top: 100px;
    width: 900px;
    height: 450px;
    img{
      width: 900px;
      height: 450px;
    }
}
```
## Vue实现遮罩层
```html
<div class="popContainer" @click="closeMask()" v-show="maskVisible"></div>
```
```css
.popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 11;
}
```
```javascript
  data() {
    return {
      maskVisible: false
    };
  },
  methods: {
    showMask() {
      this.maskVisible = true;
    },
    closeMask(){
      this.maskVisible = false;
    }
  }
```
## 状态管理vuex
### 安装vuex
```bash
npm i vuex -s
```
### 初始化store
```javascript
//在src根目录下创建store文件夹，并创建index.js，初始化index.js
import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        name:'helloVueX'
    }
})

export default store
```
### 将store挂载到vue实例中
```javascript
//在main.js中
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//引入store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App)
})

```
### 在组件标签中使用vuex
```html
<template>
    <div id='app'>
        name:
        <h1>{{ $store.state.name }}</h1>
    </div>
</template>
```
### 在组件方法中使用vuex
```javascript
...,
methods:{
    add(){
      console.log(this.$store.state.name)
    }
},
...
```
### mutation传值
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        name:'helloVueX'
    },
    mutations: {
        //es6语法，等同edit:funcion(){...}
        edit(state){
            state.name = 'jack'
        }
    }
})

export default store
```
```javascript
//单个值提交
this.$store.commit('edit',15)

//多个值提交
this.$store.commit('edit',{age:15,sex:'男'})

mutations: {
    edit(state,payload){
    state.name = 'jack'
    console.log(payload) // 15或{age:15,sex:'男'}
    }
}
```
### 增删state中的成员
```javascript
Vue.set(state,"age",15)
```
```javascript
Vue.delete(state,'age')
```
## 解决页面刷新后vuex数据丢失
### 使用sessionStorage
```javascript
//在App.vue中
export default {
  name: 'App',
  created(){
    //页面加载时读取sessionStorage中的状态信息
    if(sessionStorage.getItem("store")){
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
    }

    //页面刷新前将vuex中的信息保存到sessionStorage中
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state));
    })
  }
}
```

## vue页面间跳转
### 方式一：标签跳转
```html
<router-link to="/login"><a href="javascript:;">登录</a></router-link>
```
### 方式二：点击事件跳转
```html
<button @click="login()" class="test-one">点我到登录页面</button>
```
```javascript
methods:{ 
    login(){
    this.$router.push({ path:'/login'})
    }
}
```
## vue页面间传值
### 方式一：使用query传值
参数地址栏可见
```javascript
this.$router.push({
          path: "/result",
          query: { name: 'jack' }
        });
```
```
var name = this.$route.query.name;
```
### 方式二：使用params传值
参数地址栏不可见
```javascript
 this.$router.push({
          name: "Result",
          params: { usersitelist: 'userlist' }
        });
```
```javascript
var usersitelist = this.$route.params.usersitelist;
```
## 将时间戳转为时间字符串
```javascript
//timestamp为number类型
    formartDate(timestamp) {
      var time = new Date(timestamp);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var second = time.getSeconds();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      time = year +"-"+month +"-" +day +" " +hour +":" +minute +":" +second;
      return time;
    }
```
## element-ui中表格显示图片
```html
<el-table-column prop="" label="图片" width="180">
	<!--加入下面的内容,scope.row代表这一行,img是显示这一行的哪个字段-->
	 <template slot-scope="scope">
              <img :src="scope.row.img" alt="">
     </template>
</el-table-column>
```
## vue中使用定时器
### 循环执行 setInterval()
```javascript
  export default {
    data() {
      return {
        timer: '',
        value: 0
      };
    },
    methods: {
      get() {
        this.value ++;
        console.log(this.value);
      }
    },
    mounted() {
      this.timer = setInterval(this.get, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);//定时器要在页面销毁前清除
    }
  };
```
### 定时执行 setTimeout
```javascript
  export default {
    data() {
      return {
        timer: '',
        value: 0
      };
    },
    methods: {
      get() {
        this.value ++;
        console.log(this.value);
      }
    },
    mounted() {
      this.timer = setTimeout(this.get, 1000);
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    }
  };
```

## vue中绑定input回车事件
```html
<input @keyup.enter="submit">
```

## slide动画实现
```html
<el-tabs v-bind:class="showSlide">
    <el-tab-pane label="登录">
        <el-input placeholder="请输入用户名" v-model="loginUsername" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="loginPassword" show-password></el-input>
        <el-button plain @click="cancel()">取消</el-button>
        <el-button type="primary" plain @click="userLogin()">登录</el-button>
    </el-tab-pane>
</el-tabs>
<div>
    <a href="javascript:;" @click="login()">登录</a>
</div>
```
```javascript
login() {
  this.showSlide = "slideDown";
}
```
```css
.tabs-card {
    top: -100%;
    @keyframes slideDown {
      from {
        top: -100%;
      }
      to {
        top: 25%;
      }
    }
    @keyframes slideUp {
      from {
        top: 25%;
      }
      to {
        top: -100%;
      }
    }
    &.slideDown {
      animation: slideDown 0.4s linear;
      top: 25%;
    }
    &.slideUp {
      animation: slideUp 0.4s linear;
    }
  }
```