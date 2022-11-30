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
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'authorization',
        in: 'header',
      },
    },
    enableSecurity: true,
  };

  config.validate = {
    convert: true,
    widelyUndefined: true,
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      host: '116.62.64.16',
      port: '3306',
      user: 'admin_project',
      password: 'CAspd2BwxwnKPNAW',
      database: 'admin_project',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.cors = {
    origin: '*', // 域名+端口 或者  *(全匹配)
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
