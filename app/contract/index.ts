module.exports = {
  test: {
    id: { type: 'number', required: false, describe: '修改必传' },
    userName: { type: 'string', required: true, describe: '姓名', example: '张三' },
    age: { type: 'number', required: true, describe: '年龄', example: 22 },
  },
  userLogin: {
    phone: { type: 'string', required: true, describe: '手机号码', example: 'admin' },
    password: { type: 'string', required: true, describe: '密码', example: 'admin' },
  },
  userRegister: {
    phone: { type: 'string', required: true, describe: '手机号码' },
    password: { type: 'string', required: true, describe: '密码' },
    email: { type: 'string', required: false, describe: '邮箱' },
    nickname: { type: 'string', required: false, describe: '昵称' },
    img: { type: 'string', required: false, describe: '头像地址' },
  },
};
