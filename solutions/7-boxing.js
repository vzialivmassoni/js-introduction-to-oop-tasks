const magic = (...args) => {
  const sum = args.reduce((acc, num) => acc + num, 0);

  const inner = (...nextArgs) => magic(sum, ...nextArgs);
  inner.valueOf = () => sum;

  return inner;
};

export default magic;
