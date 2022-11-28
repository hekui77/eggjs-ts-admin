module.exports = {
  test: {
    id: { type: 'number', required: false, describe: '修改必传' },
    userName: { type: 'string', required: true, describe: '姓名', example: '张三' },
    age: { type: 'number', required: true, describe: '年龄', example: 22 },
  },
  userLogin: {
    phone: { type: 'string', required: true, describe: '手机号码', example: '18284053714' },
    password: { type: 'string', required: true, describe: '密码', example: 'adminadmin' },
  },
  userRegister: {
    phone: { type: 'string', required: true, describe: '手机号码' },
    password: { type: 'string', required: true, describe: '密码' },
    email: { type: 'string', required: false, describe: '邮箱' },
    nickname: { type: 'string', required: false, describe: '昵称' },
    img: { type: 'string', required: false, describe: '头像地址' },
  },
};


// 'int' => {type: 'int', required: true}
// 'int?' => {type: 'int', required: false }
// 'integer' => {type: 'integer', required: true}
// 'number' => {type: 'number', required: true}
// 'date' => {type: 'date', required: true}
// 'dateTime' => {type: 'dateTime', required: true}
// 'id' => {type: 'id', required: true}
// 'boolean' => {type: 'boolean', required: true}
// 'bool' => {type: 'bool', required: true}
// 'string' => {type: 'string', required: true, allowEmpty: false}
// 'string?' => {type: 'string', required: false, allowEmpty: true}
// 'email' => {type: 'email', required: true, allowEmpty: false, format: EMAIL_RE}
// 'password' => {type: 'password', required: true, allowEmpty: false, format: PASSWORD_RE, min: 6}
// 'object' => {type: 'object', required: true}
// 'array' => {type: 'array', required: true}
// [1, 2] => {type: 'enum', values: [1, 2]}
// /\d+/ => {type: 'string', required: true, allowEmpty: false, format: /\d+/}
