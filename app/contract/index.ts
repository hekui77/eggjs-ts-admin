module.exports = {
  test: {
    userName: { type: 'string', required: true, describe: '姓名', example: '张三' },
    age: { type: 'number', required: true, describe: '年龄', example: '22' },
  },
};
