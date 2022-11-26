
const Controller = require('../core/base_controller');

/**
  *@Controller
  */
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
    const data = await ctx.service.test.testPost(ctx.request.body);
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
    const data = await ctx.service.test.updata(ctx.request.body);
    this.success(data);
  }
}
