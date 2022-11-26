import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    const { app } = this;
    if (!name) return await app.mysql.select('test');
    return await app.mysql.select('test', {
      where: { userName: name },
    });
  }

  async testPost(data) {
    const { app } = this;
    const result: any = await app.mysql.insert('test', { ...data });
    return result;
  }

  async updata() {
    const { app } = this;
    const row = {
      id: 4,
      userName: '修改1',
      age: 56,
    };
    const result: any = await app.mysql.update('test', row);
    return result;
  }
}
