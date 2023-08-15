## `any` & `unknown`

`any` 类型除了关闭类型检查，还会污染其他具有正确类型的变量

```ts
let x: any = "hello";
let y: number;

y = x; // 不报错
y * 123; // 不报错，实际为 `"hello" * 123`
```

为解决污染问题，TypeScript 3.0 引入了 `unknown`类型，可以视为严格版的`any`。

`unknown`与`any`基本一致，可赋值任意类型，但不能直接赋值给其他类型的变量（除`any`和`unknown`类型）。
