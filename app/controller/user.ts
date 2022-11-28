const Controller = require('../core/base_controller');

/**
  *@Controller
  */
export default class UserController extends Controller {
  /**
   * @Router post /api/user/login
   * @Request body userLogin
   */
  async login() {
    const { ctx } = this;
    ctx.validate(ctx.rule.userLogin, ctx.request.body);
    const body = JSON.parse(JSON.stringify(ctx.request.body, Object.keys(ctx.rule.userLogin)));
    const data = await ctx.service.user.login(body);
    this.success(data);
  }
  /**
   * @Router post /api/user/register
   * @Request body userRegister
   */
  async register() {
    const { ctx } = this;
    // 重新定义需要校验格式的字段
    const rule = Object.assign(ctx.rule.userRegister, {
      phone: 'phone',
      password: 'password',
      email: 'email?',
    });
    ctx.validate(rule, ctx.request.body);
    const body = JSON.parse(JSON.stringify(ctx.request.body, Object.keys(ctx.rule.userRegister)));
    const data = await ctx.service.user.register(body);
    this.success(data);
  }
  /**
   * @Router get /api/user
   * @Bearer
   */
  async find() {
    const { ctx } = this;
    const data = await ctx.service.user.find();
    this.success(data);
  }
}
