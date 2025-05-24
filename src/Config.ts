const meta = {
  appTag: 'portfolio',
  defaultLang: 'en',
  appName: 'portfolio',
};

const globalAnimationDelay = 200;

const NODE_ENV = import.meta.env.VITE_NODE_ENV;

console.log(NODE_ENV);

const Config = {
  meta,
  globalAnimationDelay,
  NODE_ENV,
};

export default Config;
