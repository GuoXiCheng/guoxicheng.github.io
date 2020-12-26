## 微信小程序
## 微信小程序页面跳转方法
### 方式一：navigateTo
保留当前页面，跳转到应用内的某个页面
```javascript
wx.navigateTo({
    url: 'page/home?userid=1'
})
```
关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前页面栈，决定需要返回几层
```javascript
wx.navigateBack({
    delta: 2
})
```
### 方式二：redirectTo
关闭当前页面，跳转到应用内的某个页面
```javascript
wx.redirectTo({
    url: '/page/home?userId=1'
})
```
### 方式三：switchTab
跳转到tabBar页面，同时关闭其他非tabBar页面
```javascript
wx.switchTab({
    url: 'page/index/index'
})
```
### 方式四：reLanch
关闭所有页面，打开应用内的某个页面
```javascript
wx.reLanch({
    url: 'page/home?userId=1'
})
```
## 微信小程序父子组件传值
### 一. 父组件传值给子组件
1.在父组件中引入子组件
```json
"usingComponents": {
    "customerSelector": "/components/customerSelector/index"
}
```
2.在子组件的json中，把自己定义为子组件
```json
{
    "component": true
}
```
3.在父组件中，在子组件引用处，绑定一个属性(text)，并传递想要给子组件的值(parentParam)
```html
<customerSelector text="{{parentParam}}"></customerSelector>
```
4.在子组件的js中使用properties获取值，在子组件中可以使用this.data.text获取值
```javascript
Component({
    properties: {
        text: {
            type: String,
            value: ""
        }
    }
})
```
### 二. 子组件传值给父组件
1.在子组件需要传值时，使用triggerEvent传给父组件一个事件(myevent)，并传递想要给父组件的值(sonParam)
```javascript
this.triggerEvent("myevent", {sonParam: false})
```
2.在父组件中，子组件的引用处，通过myevent事件绑定一个方法(onMyEvent)
```html
<customerSelector bind:myevent="onMyEvent"></customerSelector>
```
3.在父组件的js中，定义方法onMyEvent，在这个方法内可以获取子组件传递的值
```javascript
onMyEvent: function(e){
    let sonParam = e.detail.sonParam
}
```