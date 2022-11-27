
const Controller = require('../core/base_controller');


export default class TestController extends Controller {
  /**
   * @Router get /api/test
   * @Request query string userName 姓名
   * @Description 测试get请求接口
   */
  public async index() {
    const { ctx } = this;
    const data = await ctx.service.test.sayHi(ctx.query.userName);
    this.success(data);
  }

  /**
   * @Router post /api/test
   * @Request body test
   * @Description 测试post请求接口
   */
  async testPost() {
    const { ctx } = this;
    ctx.validate(ctx.rule.test, ctx.request.body);
    const body = {
      userName: ctx.request.body.userName,
      age: ctx.request.body.age,
    };
    const data = await ctx.service.test.testPost(body);
    this.success(data);
  }

  /**
   * @Router post /api/test/updata
   * @Request body test
   * @Description 测试post请求接口
   */
  async updata() {
    const { ctx } = this;
    ctx.validate(ctx.rule.test, ctx.request.body);
    if (!ctx.request.body.id) ctx.throw(201, 'id不能为空');
    const body = {
      id: ctx.request.body.id,
      userName: ctx.request.body.userName,
      age: ctx.request.body.age,
    };
    const data = await ctx.service.test.updata(body);
    this.success(data);
  }
}
