const ci = require('miniprogram-ci')
let { version, desc } = require('../package.json').wx

if (!version) {
  version = 'v1.0.0'
}
if (!desc) {
  desc = new Date() + '上传'
}

const project = new ci.Project({
  appid: 'wx426d84234007ff7b',
  type: 'miniProgram',
  projectPath: process.cwd() + '/app/dist/build/mp-weixin',
  privateKeyPath: process.cwd() + '/keys/private.wx426d84234007ff7b.key',
  ignores: ['node_modules/**/*'],
})

ci.upload({
  project,
  version,
  desc,
  setting: {
    minify: true
  },
  onProgressUpdate: console.log,
}).then(res => {
  console.log(res)
  console.log('上传成功')
}).catch(err => {
  console.log(err)
  console.log('上传失败')
  process.exit(-1)
})