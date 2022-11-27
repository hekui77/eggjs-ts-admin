import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/test', controller.test.index);
  router.post('/api/test', controller.test.testPost);
  router.post('/api/test/updata', controller.test.updata);

  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/register', controller.user.register);
};
