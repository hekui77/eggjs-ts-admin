import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1669351236717_5307';

  // add your egg config in here
  config.middleware = [ 'errorHandler' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    securityDefinitions: {},
  };

  config.validate = {};

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
