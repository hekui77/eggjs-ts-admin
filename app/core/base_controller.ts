
import { Controller } from 'egg';

class BaseController extends Controller {
  // get user() {
  //   return this.ctx.session.user;
  // }
  success(data) {
    this.ctx.body = {
      status: 200,
      data,
    };
  }
}
module.exports = BaseController;
