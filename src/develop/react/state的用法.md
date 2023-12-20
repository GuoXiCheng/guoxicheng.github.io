# state 的用法

## 基本用法

```jsx
// 1. 创建组件
class Weather extends React.Component {
  constructor(props) {
    super(props)
    // 初始化状态
    this.state = {
      isHot: true
    }
  }
  render() {
    // 读取状态
    const {isHot} = this.state
    return <h1>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
  }
}
// 2. 渲染组件到页面
ReactDOM.render(<Weather/>, document.getElementById('test'))
```

## 简写形式

```jsx
// 1. 创建组件
class Weather extends React.Component {

  // 初始化状态
  state = {isHot: false, wind: '微风'}

  render() {
    const {isHot} = this.state
    return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}, {wind}</h1>
  }

  // 自定义方法——要用赋值语句形式+箭头函数
  changeWeather = () => {
    const isHot = this.state.isHot
    this.setState({isHot: !isHot})
  }
}

// 2. 渲染组件到页面
ReactDOM.render(<Weather/>, document.getElementById('test'))
```

## setState 用法

```jsx
// 1. 创建组件
class Weather extends React.Component {
  constructor(props) {
    // 构造器调用了1次
    super(props)
    // 初始化状态
    this.state = {
      isHot: true,
      wind: '微风'
    }
    // 解决changeWeather中this指向问题
    this.changeWeather = this.changeWeather.bind(this)
  }

  // render调用1+n次，1是初始化的那次，n是状态更新的次数
  render() {
    // 读取状态
    const {isHot} = this.state
    return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}, {wind}</h1>
  }

  // changeWeather点击了几次调用几次
  changeWeather() {
    // changeWeather位于Weather的原型对象上，供实例使用
    // 由于changeWeather是作为onClick的回调，所以不是通过实例调用，是直接调用
    // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this=undefined

    // 获取原来的isHot值
    const isHot = this.state.isHot
    // 状态（state）不可直接修改: this.state.isHot = !isHot
    // 状态（state）必须通过setState进行更新，且更新是一种合并，不是替换
    this.setState({isHot: !isHot})
  }
}

// 2. 渲染组件到页面
ReactDOM.render(<Weather/>, document.getElementById('test'))
```

## 使用 setState 更新状态

### 对象式写法

`setState(stateChange, [callback])`

stateChange 表示状态改变对象（该对象可以体现出状态的更改）

callback 是可选的回调函数，它在状态更新完毕、界面也更新后（render调用后）才被调用

```jsx
add = ()=>{
  const {count} = this.state;
  this.setState({count: count + 1}, ()=>{
    console.log(this.state.count);
  });
}
```

### 函数式写法

`setState(updater, [callback])`

updater 为返回 stateChange 对象的函数，该函数的第一个参数为原本的 state，第二个参数为 props

callback 是可选的回调函数，它在状态更新、界面也更新后（render调用后）才被调用

```jsx
add = ()=>{
  this.setState(state => ({count: state.count + 1}), ()=>{
    console.log(this.state.count);
  });
}
```

### 使用原则

1. 如果新状态不依赖于原状态——使用对象式
2. 如果新状态依赖于原状态——使用函数式
3. 如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取