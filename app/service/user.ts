import { Service } from 'egg';


export default class user extends Service {
  async login(data) {
    const { app, ctx } = this;
    const result = await app.mysql.select('user', {
      where: { ...data },
    });
    if (!result.length) ctx.throw(201, '手机号码或密码错误');
    const userInfo = { ...result[0] };
    const token = app.jwt.sign(userInfo, '123456', { expiresIn: '24h' });
    return Object.assign(userInfo, { token });
  }

  async register(data) {
    const { app, ctx } = this;
    const findUser = await app.mysql.select('user', {
      where: { phone: data.phone },
    });
    if (findUser.length) ctx.throw(201, '已存在当前手机号码');
    const result: any = await app.mysql.insert('user', { ...data });
    if (result.affectedRows === 1) return '注册成功';
  }

  async find() {
    const { app } = this;
    const result = await app.mysql.select('user');
    return result;
  }
}
