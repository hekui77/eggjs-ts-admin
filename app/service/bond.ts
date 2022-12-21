const Service = require('egg').Service;
const dayjs = require('dayjs');

class BondService extends Service {
  async index() {
    const { ctx } = this;
    const res = await ctx.curl('https://datacenter-web.eastmoney.com/api/data/v1/get?sortColumns=PUBLIC_START_DATE&sortTypes=-1&pageSize=10&pageNumber=1&reportName=RPT_BOND_CB_LIST&columns=ALL',
      { dataType: 'json', method: 'GET' });
    if (res.status === 200 && res.data.success) {
      if (res.data.result.data && res.data.result.data.length) {
        for (let index = 0; index < res.data.result.data.length; index++) {
          const item = res.data.result.data[index];
          if (dayjs().isSame(item.PUBLIC_START_DATE, 'day')) {
            await ctx.curl('https://sctapi.ftqq.com/SCT67195TvTeZ2lyIn5DVGmp0mUDYdDYx.send?title=今日有可转债，注意查看', { method: 'GET' });
            // 温 可转债提醒
            await ctx.curl('https://sctapi.ftqq.com/SCT155005TA7rF0UDrPssCk3azNbFjAhri.send?title=今日有可转债，注意查看', { method: 'GET' });
            break;
          }
        }
      }
    }
  }
}

module.exports = BondService;
