type Constructor<T = {}> = new (...args: any[]) => T;

function toCustomString<Class extends Constructor>(
  Value: Class,
  context: ClassDecoratorContext<Class>
) {
  return class extends Value {
    constructor(...args: any[]) {
      super(...args);
      console.log(JSON.stringify(this));
      console.log(JSON.stringify(context));
    }
  };
}

@toCustomString
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return "Hello, " + this.name;
  }
}
const person = new Person("longxiang");

function upperCase<T>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, string>
) {
  return function (this: T, value: string) {
    return value.toUpperCase();
  };
}

class MyClass {
  @upperCase
  prop1 = "hello!";
}

console.log(new MyClass().prop1); // Logs: HELLO!
