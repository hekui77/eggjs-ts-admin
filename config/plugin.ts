import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};

export default plugin;
