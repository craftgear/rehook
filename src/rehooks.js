export default hooks => sfc => props => {
  const hookedProps = hooks.reduce((accum, current) => {
    const { hook, name, init } = current;
    const hooked = hook(init);
    const setterName = `set${name[0].toUpperCase()}${name.slice(1)}`;
    return {
      ...accum,
      [name]: hooked[0],
      [setterName]: hooked[1],
    };
  }, {});
  return sfc({ ...props, ...hookedProps });
};
