const Controller = require('../core/base_controller');

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    const data = await ctx.service.test.sayHi('egg');
    this.success(data);
  }
}
