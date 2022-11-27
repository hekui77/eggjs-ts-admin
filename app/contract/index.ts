module.exports = {
  test: {
    id: { type: 'number', required: false, describe: '修改必传' },
    userName: { type: 'string', required: true, describe: '姓名', example: '张三' },
    age: { type: 'number', required: true, describe: '年龄', example: 22 },
  },
};
