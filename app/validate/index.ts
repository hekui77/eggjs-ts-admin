
// 自定义校验规则
module.exports = app => {
  const { validator } = app;
  validator.addRule('userName', (_rule, value) => {
    if (value.length < 8 || value.length > 20) {
      return '用户名的长度应该在8-20之间';
    }
  });

  validator.addRule('note', (_rule, value) => {
    if (value.length > 100) {
      return '备注不超过100字';
    }
  });

  validator.addRule('phone', (_rule, value) => {
    const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
    if (!reg.test(value)) {
      return '手机号格式不正确';
    }
  });
};
