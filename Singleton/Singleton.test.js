const assert = require("assert");
import { Singleton, ProxySingletonCreateDiv } from "./Singleton";

describe("单例模式：Singleton Pattern", function() {
  describe("instance equal", function() {
    it("should be equal totally when new class twice", function() {
      const singleton = new Singleton();
      const instance1 = singleton.getInstance("daguo");
      const instance2 = singleton.getInstance("linxiuda");
      assert.equal(instance1, instance2);
    });
    it("should be equal at window", function() {
      const instance1 = new ProxySingletonCreateDiv("test");
      const instance2 = new ProxySingletonCreateDiv("demo");
      assert.equal(instance1, instance2);
    });
  });
});
