# this对象
this对象是在函数运行时在函数内部自动生成的对象，且永远指向最后调用它的对象。在函数执行过程中，this对象一旦确定了，就不能再更改。

默认情况下，在非严格模式中，this对象指向全局对象；在严格模式中，this对象指向undefined。

如果函数作为对象的方法被调用，this对象指向调用它的对象。

如果函数作为构造函数被调用，this对象指向正在创建的对象。

可以使用[[apply、call、bind]]方法，显式的修改函数中this对象的指向。

[[箭头函数]]中没有自己的this对象，它会继承外部函数的this对象。