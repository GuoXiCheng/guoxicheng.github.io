---
tags:
- javascript
categories:
- 编程开发
---

## javascript
## javascript语法糖
### 求幂运算
```javascript
console.log(2 ** 10); // 输出1024
```
### 截取数组
```javascript
const array = [0, 1, 2, 3, 4, 5];
array.length = 3;
 
Output: [0, 1, 2];
```
### 冻结对象
```javascript
Object.freeze()
```
### 美化JSON
JSON.stringify()方法的三个参数：
1. json：必须，可以是数组或Object
2. replacer：可选，可以是数组或过滤函数
    - 当为数组时，只有包含在这个数组中的属性名才会被序列化
    - 当为函数时，被序列化的每个属性都会经过该函数处理
3. space：控制结果字符串里的间距
```javascript
const info = {name: '森林', age: 25, address: '徐汇'}
JSON.stringify(info, null, 2);

Output:
"{
    "name": "森林",
    "age": 25,
    "address": "徐汇"
}"
```
### 数组深拷贝

```javascript
const arr = [1, 2, 3, 4, 5];
const copyArr = [...arr];
```
### 合并多个对象
注意：合并后对象中的键将唯一存在，后者合并的值将覆盖已存在的键的值
```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combinObj = { ...obj1, ...obj2 };

Output: { a: 1, b: 2 }
```
### 简化短路运算
```javascript
if (isOnline) {
  postMessage();
}
// 使用 && 简化
isOnline && postMessage();
```
```javascript
if (name == null){
    name = '森林';
}
// 使用 || 简化
let name = null || '森林';
```
### 创建纯净对象
- 使用```var simpleObj = {};```创建的对象会继承Object的方法
- 使用```var pureObj = Object.create(null); ```创建的对象原型链上没有任何属性

### 避免多条件并列
```javascript
if (status === 'process' || status === 'wait' || status === 'fail') {
  doSomething()
}

// 使用 includes 改造
const enum = ['process', 'wait', 'fail']
if (enum.includes(status)) {
  doSomething()
}
```
### 去除数组重复元素
```javascript
Array.from(new Set(arr));
```
### 将数组转化为对象
```javascript
const arr = [1,2,3];
const obj = {...arr};

Output: { '0': 1, '1': 2, '2': 3 }
```
### 字符型转为数字型
```javascript
const age = '69'; // type: string
const ageConvert = +age; // type: number
```
### 获取数组中的最后一项
```javascript
const arr = [0, 1, 2, 3, 4, 5];
const last = arr.slice(-1)[0];
```
## 异步处理方式
### 1. 回调函数
回调函数是将一个函数作为一个参数传递到另一个函数里。
```javascript
function getData(callback){
    console.log('hello');
    setTimeout(() => {
        let name = 'world';
        callback(name);
    },3000);
}
getData((data) => {
    console.log(data);
})
```
### 2. 事件监听
```javascript
function f1.on('done',f2);//当f1发生done事件，执行f2
function f1(){
    setTimeout(function(){
        //f1的任务代码
        f1.trigger('done')//触发done事件，开始执行f2
    },1000)
}
```
### 3. Promise模式
1. Promise的基本用法
```javascript
const promise = new Promise((resolve, reject) => {
       // 异步处理
       // 处理结束后、调用resolve 或 reject
});
```
2. Promise的then方法是异步执行的
    - resolve（成功），onFulfilled会被执行
    ```javascript
    const promise = new Promise((resolve, reject) => {
       resolve('fulfilled'); // 状态由 pending => fulfilled
    });
    promise.then(result => { // onFulfilled
        console.log(result); // 'fulfilled' 
    }, reason => { 
        // onRejected 不会被调用
    })
    ```
    - reject（失败），onRejected会被执行
    ```javascript
    const promise = new Promise((resolve, reject) => {
        reject('rejected'); // 状态由 pending => rejected
    });
    promise.then(result => { 
        // onFulfilled 不会被调用
    }, reason => { // onRejected 
        console.log(rejected); // 'rejected'
    })
    ```
    - promise.catch在链式写法中可以捕获then中发送的异常
    ```javascript
    promise.catch(onRejected)
    //相当于
    promise.then(null, onRrejected);

    // 注意
    // onRejected 不能捕获当前onFulfilled中的异常
    promise.then(onFulfilled, onRrejected); 

    // 可以写成：
    promise.then(onFulfilled).catch(onRrejected);   
    ```
3. Promise.all 接收一个promise对象数组为参数
> 只有全部为resolve才会执行onFulfilled，否则只会处理首个reject
```javascript
const p1 = new Promise((resolve, reject) => {
    resolve(1);
});

const p2 = new Promise((resolve, reject) => {
    resolve(2);
});

const p3 = new Promise((resolve, reject) => {
    reject(3);
});

Promise.all([p1, p2, p3]).then(data => { 
    console.log(data); // [1, 2, 3] 结果顺序和promise实例数组顺序是一致的
}, err => {
    console.log(err);
});
```
4. Promise.race 接收一个promise对象数组为参数
> Promise.race只要有一个promise对象进入fulfilled或rejected状态就会继续处理
```javascript
function timerPromisefy(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
var startDate = Date.now();

Promise.race([
    timerPromisefy(10),
    timerPromisefy(20),
    timerPromisefy(30)
]).then(function (values) {
    console.log(values); // 10
});
```
### 4. async/await
async声明function是异步的，await等待的是一个Promise对象。await会暂停当前async function的执行，等待Promise处理完成。
```javascript
function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTime();
    console.log(v);  // 一秒钟后输出long_time_value
}

test();
```
## ajax
## jQuery调用ajax请求
```javascript
$.ajax({
    type: "POST",//方法类型
    dataType: "json",//预期服务器返回的数据类型
    url: "/manage/product/save.do" ,//请求的url
    data: JSON.stringify(data.field),//或$('#loginForm').serialize()
    contentType: "application/json",
    success: function (result) {
        alert(result.data)
    },
    error : function() {
        alert("异常！");
    }
});
```
## axios
## vue中使用axios
### 1.安装axios插件
```bash
npm install --save axios vue-axios
```
### 2.引入axios
```javascript
//在 main.js 中
import axios from 'axios'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
```
### 3.执行GET请求
```javascript
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```
### 4.执行POST请求
```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  },{
      headers: {
          "token": token
      }
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```
## vue中使用axios拦截器
### 添加axios请求拦截器
```javascript
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.url != "/product/list.do"){
    if(store.state.userinfo.token == ""){
      window.location.href="/#/index"
      
    }
  }
  config.headers['Authorization'] = store.state.userinfo.token;
  // console.log("请求拦截")
  // console.log(config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
```

### 添加axios响应拦截器
```javascript
axios.interceptors.response.use(function (response) {

  if(response.headers["status"] == "10"){
    store.commit("userinfo",{username:"登录",token:""})
    store.commit("cartinfo",0)
    window.location.href="/#/index"
  }
  // console.log("响应拦截")
  // console.log(response.headers["status"]);
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
```