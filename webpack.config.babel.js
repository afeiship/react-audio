export default (inEnv) => {
  return require(`./build/${inEnv.TYPE}`).default;
};
