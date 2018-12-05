## Singleton Pattern 单例模式

#### 定义

保证一个类仅有一个实例，并提供一个访问它的全局访问点。

对于 JavaScript 而言，创建对象的方法非常简单，既然我们只需要一个“唯一”的对象，那么其实并不需要像 JAVA 这类面向对象的语言一样，先定义一个类再去创建对象，传统的单例模式实现在 JavaScript 中并不适用。单例模式的核心是确保只有一个实例，并提供全局访问。

#### 常用场景

同一状态/时序下只允许存在同一个对象的场景：登录浮窗，浏览器 window 对象。

#### 基础实现

```js
class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }
  getName() {
    console.log(this.name);
  }
  getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
}
```

#### 透明单例

基础实现的单例类，忽略变量名我们并不知道这是一个单例，提取一个实现单例化类的方法

```js
class CreateDiv {
  constructor(html) {
    this.html = html;
    this.init();
  }
  init() {
    const div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.append(div);
  }
}

const ProxySingletonCreateDiv = (function() {
  const instance;
  return function(html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  };
})();

const div = new ProxySingletonCreateDiv('test');
```
