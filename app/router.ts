import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/test', controller.test.index);
  router.post('/api/test', controller.test.testPost);
};
