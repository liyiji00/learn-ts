type TypeFunAdd = (...arg: number[]) => TypeFunAdd;

function add(...arg: number[]) {
  const f: TypeFunAdd = add.bind(null, ...arg);

  f.toString = () => arg.reduce((sum, i) => sum + i, 0).toString();

  return f;
}
