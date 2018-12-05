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
  let instance = null;
  return function(html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  };
})();

export { Singleton, ProxySingletonCreateDiv };
