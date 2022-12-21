
const Subscription = require('egg').Subscription;

class commemorateDayCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // interval: '2h', // 间隔
      cron: '0 0 10 * * ?', // 每日10点执行
      type: 'all', // 指定所有的 worker 都需要执行
      // immediate: true, // 任务会在应用启动并 ready 后立刻执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const { ctx } = this;
    try {
      await ctx.service.bond.index();
    } catch (error) {
      this.logger.error(error);
    }
  }
}

module.exports = commemorateDayCache;
